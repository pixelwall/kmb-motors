export function styles(node: HTMLElement, styles: Object) {
  setCustomProperties(node, styles)

  return {
    update(styles: Object) {
      setCustomProperties(node, styles)
    }
  };
}

function setCustomProperties(node: HTMLElement, styles: Object) {
  Object.entries(styles).forEach(([key, value]) => {
    node.style.setProperty(`--${key}`, value)
  })
}
