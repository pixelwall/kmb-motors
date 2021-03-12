import {request} from '@/lib/datocms';
import {Vehicle} from '@/lib/models/dealerInventory';
import { GetServerSideProps } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

type BuildSitemap = (items: any) => Promise<any>

const hostUrl = 'https://kmbmotors.com'

const pages = ['', '/dealers']

const buildSitemap: BuildSitemap = (items) => {
  const sitemap = new SitemapStream({
    hostname: hostUrl,
  })

  pages.forEach((page) => {
    sitemap.write({
      url: `${hostUrl}${page}`,
      lastmodISO: new Date().toISOString(),
      priority: page === '' ? 1 : 0.7,
    })
  })

  items.allDealerInventories.forEach((item: Vehicle) => {
    sitemap.write({
      url: `${hostUrl}/dealers/${item.slug}`,
      lastmodISO: new Date(item.updatedAt).toISOString(),
      priority: 0.8,
    });
  });

  sitemap.end();

  return streamToPromise(sitemap);
}

const DATA_QUERY = `
query SitemapQuery {
  allDealerInventories {
    slug
    updatedAt
  }
}
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context && context.res) {
    const { res } = context

    const data = await request({ query: DATA_QUERY });

    const sitemap = await buildSitemap(data);

    res.setHeader('content-type', 'text/xml');
    res.write(sitemap.toString());
    res.end();
  }

  return {
    props: {},
  };
};

const SitemapPage = () => null

export default SitemapPage
