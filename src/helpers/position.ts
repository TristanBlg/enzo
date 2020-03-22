export function getElementPosition(element: HTMLElement) {
  if (!element) return
  const pos = element.getBoundingClientRect()
  return pos
}
