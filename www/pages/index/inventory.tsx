import { VehiclesContainer } from '@/components/inventory'
import { Vehicle } from '@/lib/models/dealerInventory'
import styles from './styles/inventory.module.css'
import V, { setAnim } from '@/components/viewport'
import Link from 'next/link'

export interface InventoryProps {
  vehicles?: Vehicle[]
}

const Inventory = (data: InventoryProps) => (
  <div className="pb-16 content">
    <V className="mb-12 animate" oneWay style={setAnim({y: '-0.5rem', time: '1s'})}>
      <h2 className={styles.title}>Our featured<br/><span>Vehicles</span></h2>
    </V>
    <VehiclesContainer {...data}/>
    <V className="flex w-full pt-6 text-center animate" oneWay>
      <Link href="/dealer">
        <a className={styles.goTo}>Go to gallery <span className="i jam:chevron-right"/></a>
      </Link>
    </V>
  </div>
)

export default Inventory
