export default function Navigation(data) {
  return [
    {
      titulo: 'Home',
      href: '/',
    },
    {
      titulo: 'Concessionaire',
      childrens: [
        ...(data.dealerCategories?.map(v => ({
          titulo: v.name,
          href: `/dealer/${v.slug}`
        })) || []),
        {
          titulo: 'All',
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
