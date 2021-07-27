export function validateEntries(values) {
  return Object.keys(values).map(function (key) {
    if (values[key] === '' || values[key] === 0 || values[key] === null) return false
    return key
  }).includes(false)
}