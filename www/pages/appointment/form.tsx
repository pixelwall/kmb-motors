import V from '@/components/viewport'
import { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  return (
    <div className="w-full lg:w-3/10 mx-auto mb-8 px-6">
      <p
        className="mb-4 font-bold text-white font-title"
      >
        Complete name
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <input
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: Maria Gabriela"
          value={form.name}
          onChange={(e) => setForm(f => ({
            ...f,
            name: e.target.value,
          }))}
        />
      </V>
      
      <p
        className="mb-4 font-bold text-white font-title"
      >
        Email
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <input
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: mariagabriela@gmail.com"
          value={form.email}
          onChange={(e) => setForm(f => ({
            ...f,
            email: e.target.value,
          }))}
        />
      </V>

      <p
        className="mb-4 font-bold text-white font-title"
      >
        Subject
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <input
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: Cost"
          value={form.subject}
          onChange={(e) => setForm(f => ({
            ...f,
            subject: e.target.value,
          }))}
        />
      </V>

      <p
        className="mb-4 font-bold text-white font-title"
      >
        Message
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <textarea
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Write a message..."
          value={form.message}
          rows={6}
          onChange={(e) => setForm(f => ({
            ...f,
            message: e.target.value,
          }))}
        />
      </V>

      <button
        className="flex items-center justify-center w-full py-2 mt-4 text-red-500 border-2 border-red-500 duration-200 hover:bg-red-500 hover:text-white rounded-md font-title"
      >
        Send message <span className="ml-2 i jam:chevron-right"></span>
      </button>
    </div>
  )
}

export default Form
