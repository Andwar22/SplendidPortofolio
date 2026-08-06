export function useScrollTo() {
  function scrollTo(target) {
    const top = typeof target === 'number'
      ? target
      : target instanceof Element
        ? target.getBoundingClientRect().top + window.scrollY
        : window.scrollY

    window.scrollTo({ top, behavior: 'smooth' })
  }

  function scrollToSelector(selector) {
    const el = document.querySelector(selector)
    if (el) scrollTo(el)
  }

  return { scrollTo, scrollToSelector }
}
