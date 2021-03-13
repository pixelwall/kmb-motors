export const getAbsoluteURL = (path: string) => {
  const baseURL = process.env.HOST_URL ? `https://${process.env.HOST_URL}` : "http://localhost:3000"
  return baseURL + path
}

const matcher = (regexp: RegExp, fields?: string[]): (obj: Object) => boolean => {
  return (obj) => {
    const fields1 = fields || Object.keys(obj)
    let found = false
    fields1.forEach(key => {
      if (!found) {
        if ((typeof obj[key] == 'string') && regexp.exec(obj[key])) {
          found = true
        }
      }
    })
    return found
  }
}

export function search<T>(collection: T[], test: string | string[], fields?: string[]): T[] {
  let c = []
  if (test == undefined || test == null) {
    return c
  }
  if (typeof test == 'string') {
    const regex = new RegExp("\\b" + test, 'i')
    c = collection.filter(matcher(regex, fields))
  } else {
    let found = []
    test.forEach(t => {
      const regex = new RegExp("\\b" + t + "\\b", 'i')
      found = [...found, ...collection.filter(matcher(regex, fields))]
    })
  }
  return c
}
