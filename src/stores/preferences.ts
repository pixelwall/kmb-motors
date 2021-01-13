import { writable } from './localStorage'

export const preferences = writable('preferences', {
  darkMode: false,
})
