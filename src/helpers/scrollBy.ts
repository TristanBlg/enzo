export function scrollBy(item: string, offsetTop: number = 0) {
  const select = document.querySelector(item)
  if (!select) return

  const count = select["offsetTop"] - window["scrollY"] - offsetTop
  window.scrollBy({ top: count, left: 0, behavior: "smooth" })
}
