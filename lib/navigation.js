export default function Navigation(data) {
  return [
    {
      titulo: 'Home',
      href: '/',
    },
    {
      titulo: 'Dealer',
      childrens: [
        ...(data.dealerCategories?.map(v => ({
          titulo: v.name,
          href: `/dealer?type=${v.slug}`
        })) || []),
        {
          titulo: 'All vehicles',
          href: '/dealer',
        },
      ],
    },
    {
      titulo: 'Our services',
      childrens: [
        {
          titulo: 'Auto repairs',
          href: '/repairs',
        },
        {
          titulo: 'Dealers',
          href: '/dealers',
        },
      ],
    },
    {
      titulo: 'Community',
      childrens: [
        {
          titulo: 'Blog',
          href: '/blog',
        },
      ],
    },
  ]
}
