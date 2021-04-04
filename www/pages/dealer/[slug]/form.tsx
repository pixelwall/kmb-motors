import V, { setAnim} from '@/components/viewport'
import { useState } from 'react'

export const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  return (
    <V className="mx-auto mt-16 mb-8 w-full lg:w-6/10" style={setAnim({ y: '-0.5rem' })} once>
      <h3
        className="font-bold font-title text-white mb-6 animate t-h2"
      >Interested in this vehicle?</h3>
      <p
        className="font-bold font-title text-white mb-4 animate"
        style={setAnim({ d: '100ms' })}
      >
        Complete name
      </p>
      <div
        className="mb-6 w-full animate"
        style={setAnim({ d: '200ms' })}
      >
        <input
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: Maria Gabriela"
          value={form.name}
          onChange={(e) => setForm(f => ({
            ...f,
            name: e.target.value,
          }))}
        />
      </div>
      
      <p
        className="font-bold font-title text-white mb-4 animate"
        style={setAnim({ d: '300ms' })}
      >
        Email
      </p>
      <div
        className="mb-6 w-full animate"
        style={setAnim({ d: '400ms' })}
      >
        <input
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: mariagabriela@gmail.com"
          value={form.email}
          onChange={(e) => setForm(f => ({
            ...f,
            email: e.target.value,
          }))}
        />
      </div>

      <p
        className="font-bold font-title text-white mb-4 animate"
        style={setAnim({ d: '500ms' })}
      >
        Message
      </p>
      <div
        className="mb-6 w-full animate"
        style={setAnim({ d: '600ms' })}
      >
        <textarea
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Write a message..."
          value={form.message}
          rows={6}
          onChange={(e) => setForm(f => ({
            ...f,
            message: e.target.value,
          }))}
        />
      </div>

      <button
        className="rounded-md flex font-title border-2 border-red-500 mt-4 w-full py-2 animate text-red-500 duration-200 items-center justify-center hover:bg-red-500 hover:text-white"
        style={setAnim({ d: '700ms' })}
      >
        Send message <span className="ml-2 i jam:chevron-right"></span>
      </button>
    </V>
  )
}
