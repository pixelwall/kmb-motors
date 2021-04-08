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
      titulo: 'Other services',
      childrens: [
        {
          titulo: 'Auto repairs',
          href: '/repairs',
        },
        {
          titulo: 'Paint jobs',
          href: '/paint-jobs',
        },
      ],
    },
    {
      titulo: 'Company',
      childrens: [
        {
          titulo: 'About us',
          href: '/about',
        },
        {
          titulo: 'Make an appointment',
          href: '/appointment',
        },
      ],
    },
  ]
}
