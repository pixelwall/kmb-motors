import V, { setAnim } from '@/components/viewport'
import { Vehicle } from '@/lib/models/dealerInventory'

const FieldDesc = ({ title, text }) => (
  <p><span className="font-bold font-title text-white">{title} </span> {text}</p>
)

export const Description = (vehicle: Vehicle) => (
  <V className="w-full" style={setAnim({ y: '-1rem' })} once>
    <p
      className="flex font-title text-white mb-4 animate text-5xl items-center"
    >
      <span className="font-bold">
        ${vehicle.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
      </span>
      <span className="ml-2 text-green-500 i mdi:cash" />
    </p>
    <div className="animate" style={setAnim({ d: '100ms' })}>
      <FieldDesc title="Vehicle status" text={vehicle.vehicleStatus} />
    </div>
    <div className="animate" style={setAnim({ d: '200ms' })}>
      <FieldDesc title="Type of vehicle" text={vehicle.category.name} />
    </div>
    <div className="animate" style={setAnim({ d: '300ms' })}>
      <FieldDesc title="Brand" text={vehicle.brand} />
    </div>
    <div className="animate" style={setAnim({ d: '400ms' })}>
      <h3
        className="font-bold font-title mt-6 text-white t-h2"
      >Description</h3>
      <div
        className="mt-6 w-full description"
        dangerouslySetInnerHTML={{ __html: vehicle.description }}
      />
      <style jsx>{`
        .description :global(a) {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  </V>
)
