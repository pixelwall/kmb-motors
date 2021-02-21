import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { label: 'Story', href: '/story' },
  { label: 'Recipes', href: '/recipes' },
]

const Appbar = () => {
  const router = useRouter()

  return (
    <div className='fixed top-0 w-full bg-gray-900 pt-safe'>
      <header className='bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-800'>
        <div className='flex items-center justify-between h-20 px-6 mx-auto max-w-screen-md'>
          <Link href='/'>
            <a>
              <h1 className='font-medium'>Rice Bowl</h1>
            </a>
          </Link>

          <nav className='flex items-center space-x-6'>
            <div className='hidden sm:block'>
              <div className='flex items-center space-x-6'>
                {links.map(({ label, href }) => (
                  <Link key={label} href={href}>
                    <a
                      className={`text-sm ${
                        router.pathname === href
                          ? 'text-indigo-500 dark:text-indigo-400'
                          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                      }`}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div
              title='Gluten Free'
              className='w-10 h-10 bg-gray-200 bg-center bg-cover rounded-full shadow-inner dark:bg-gray-800'
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1612480797665-c96d261eae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)',
              }}
            />
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Appbar
