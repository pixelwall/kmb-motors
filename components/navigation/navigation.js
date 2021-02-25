export default [
  {
    titulo: 'Home',
    href: '/',
  },
  {
    titulo: 'Price guide',
    href: '/guide',
  },
  {
    titulo: 'Marketplace',
    childrens: [
      {
        titulo: 'Sell your car',
        href: '/sell',
      },
      {
        titulo: 'New cars',
        href: '/new-cars',
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
        titulo: 'About us',
        href: '/about',
      },
      {
        titulo: 'Blog',
        href: '/blog',
      },
    ],
  },
]
