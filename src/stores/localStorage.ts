import { writable as internal, get } from 'svelte/store'

// wraps a regular writable store
export function writable(key: string, initialValue: any) {
  // create an underlying store
  const store = internal(initialValue)
  const { subscribe, set } = store
  // get the last value from localStorage
  const json = localStorage.getItem(key)

  // use the value from localStorage if it exists
  if (json) {
    set(JSON.parse(json))
  }

  // return an object with the same interface as svelte's writable()
  return {
    // capture set and write to localStorage
    set(value: any) {
      localStorage.setItem(key, JSON.stringify(value))
      set(value)
    },
    // capture updates and write to localStore
    update(cb: CallableFunction) {
      const value = cb(get(store))
      this.set(value)
    },
    // punt subscriptions to underlying store
    subscribe
  }
}
