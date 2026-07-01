import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}

export function useCounter() {
  function animateCounter(el, target, duration = 1800) {
    const start = performance.now()
    const from = 0
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(from + (target - from) * eased).toLocaleString('pt-BR')
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  function observeCounters() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.dataset.target)
          animateCounter(el, target)
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('[data-target]').forEach((el) => obs.observe(el))
  }

  onMounted(observeCounters)
}
