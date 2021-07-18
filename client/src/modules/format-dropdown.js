export function formatDropdown(h) {
  return Object.keys(h).map(key => ({
    value: key, label: h[key]
  }))
}