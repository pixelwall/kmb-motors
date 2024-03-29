import { VehiclesContainer } from '@/components/inventory'
import { Vehicle, DealerCategory } from '@/lib/models/dealerInventory'
import V, { setAnim } from '@/components/viewport'
import Link from 'next/link'
import { useGlobalDataContext } from '@/components/page'
import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from 'react'
import { search } from '@/lib/utils'

export interface InventoryProps {
  vehicles?: Vehicle[]
}

const Category = () => {
  const { dealerCategories }: {
    dealerCategories?: DealerCategory[]
  } = useGlobalDataContext()
  const { query } = useRouter()
  const resetType = () => {
    const types = { ...query }
    delete types.type
    return types
  }
  return (
    <div className="t-p">
      <p className="font-bold font-title text-white mb-4">Select Vehicle Type</p>
      <V className="flex flex-wrap -my-2 -mx-4" style={setAnim({ y: '0.5rem' })} once>
        <Link
          href={{ pathname: '/dealer',  query: resetType() }}
          scroll={false}
          shallow
					replace
        >
          <a
            className={`px-4 py-2 duration-200 hover:text-white animate ${
              !query.type && 'text-white'
            }`}
          >All</a>
        </Link>
        {dealerCategories.map((c, i) => (
          <Link
            href={{ pathname: '/dealer', query: { ...query, type: c.slug } }}
            scroll={false}
            shallow
						replace
						key={i}
          >
            <a
              className={`px-4 py-2 duration-200 hover:text-white animate ${
                query.type == c.slug && 'text-white'
              }`}
              style={{transitionDelay: `${(i + 1) * 100}ms`}}
            >{c.name}</a>
          </Link>
        ))}
      </V>
    </div>
  )
}

const Status = () => {
  const { query } = useRouter()
  const resetStatus = () => {
    const types = { ...query }
    delete types.status
    return types
  }
  return (
    <div className="t-p">
      <p className="font-bold font-title text-white mb-4">Select Vehicle Status</p>
      <V className="flex flex-wrap -my-2 -mx-4" style={setAnim({ y: '0.5rem' })} once>
        <Link
          href={{ pathname: '/dealer',  query: resetStatus() }}
          scroll={false}
          shallow
					replace
        >
          <a
            className={`px-4 py-2 duration-200 hover:text-white animate ${
              !query.status && 'text-white'
            }`}
          >All</a>
        </Link>
        <Link
          href={{ pathname: '/dealer',  query: { ...query, status: 'new' } }}
          scroll={false}
          shallow
					replace
        >
          <a
            className={`px-4 py-2 duration-200 hover:text-white animate ${
              query.status === 'new' && 'text-white'
            }`}
            style={{transitionDelay: '100ms'}}
          >New</a>
        </Link>
        <Link
          href={{ pathname: '/dealer',  query: { ...query, status: 'used' } }}
          scroll={false}
          shallow
					replace
        >
          <a
            className={`px-4 py-2 duration-200 hover:text-white animate ${
              query.status === 'used' && 'text-white'
            }`}
            style={{transitionDelay: '200ms'}}
          >Used</a>
        </Link>
      </V>
    </div>
  )
}

const Inventory = (data: InventoryProps) => {
  const { query } = useRouter()
  const [type, setType] = useState(query.type)
  const [status, setStatus] = useState(query.status)
  const [searchInput, setSearch] = useState('')

  // Set state based on URL queries
  useEffect(() => {
    setType(query.type)
    setStatus(query.status)
  }, [query])

  const filteredData = useMemo(() => {
    let newData = data.vehicles
    if (type) {
      newData = newData.filter((v) => v.category.slug == type)
    }

    if (status) {
      newData = newData.filter((v) => v.vehicleStatus.toLowerCase() == status)
    }

    if (searchInput) {
      newData = search(newData, searchInput, ['name'])
    }
    return newData
  }, [type, status, searchInput])

  return (
    <div className="pb-16 content">
      <p className="font-bold font-title text-white mb-4">Filter Options</p>
      <V className="mb-6 w-full animate">
        <input
          className="font-title w-full px-0 input"
          style={{paddingLeft: '0', paddingRight: '0'}}
          placeholder="Search a car by his name"
          value={searchInput}
          onChange={(event) => setSearch(event.target.value)}
        />
      </V>
      <div className="flex flex-wrap -m-6 -my-4 pb-12">
        <div className="p-6 py-4">
          <Category/>
        </div>
        <div className="p-6 py-4">
          <Status/>
        </div>
      </div>
      {filteredData.length ? <VehiclesContainer vehicles={filteredData}/> : (
        <div
          className="font-title text-center text-white w-full py-16 t-h2"
        >
          Oops, nothing here :(
        </div>
          )}
    </div>
      )
}

export default Inventory
