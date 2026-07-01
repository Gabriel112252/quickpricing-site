<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Reforma Tributária', href: '#tax' },
  { label: 'Concorrentes', href: '#competitors' },
  { label: 'Como funciona', href: '#how' },
]
</script>

<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav__inner">
      <!-- Logo -->
      <a href="#" class="nav__logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="url(#navLogoGrad)"/>
          <path d="M8 22 L8 10 Q8 8 10 8 L16 8 Q22 8 22 14 Q22 18 17 19 L13 19 L13 22 Z M13 15 L16 15 Q17.5 15 17.5 13.5 Q17.5 12 16 12 L13 12 Z" fill="white"/>
          <path d="M19 22 L23 16" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
          <circle cx="23" cy="15" r="1.5" fill="#C084FC"/>
          <defs>
            <linearGradient id="navLogoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7C3AED"/>
              <stop offset="1" stop-color="#A855F7"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="nav__logo-text">Pricing <span>&</span> Flow</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav__links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav__link">{{ link.label }}</a>
        </li>
      </ul>

      <!-- CTA -->
      <div class="nav__cta">
        <a href="#contact" class="btn btn--ghost">Entrar</a>
        <a href="#contact" class="btn btn--primary">Agendar demo</a>
      </div>

      <!-- Hamburger -->
      <button class="nav__hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen">
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="nav__mobile">
        <a v-for="link in links" :key="link.href" :href="link.href" class="nav__mobile-link" @click="menuOpen = false">
          {{ link.label }}
        </a>
        <a href="#contact" class="btn btn--primary" @click="menuOpen = false">Agendar demo</a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(7,7,13,0.85);
  border-bottom-color: var(--border);
  backdrop-filter: blur(20px);
}
.nav__inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 72px;
}
.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.nav__logo-text {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
}
.nav__logo-text span {
  color: var(--purple-pale);
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin-left: auto;
}
.nav__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-3);
  padding: 6px 14px;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}
.nav__link:hover { color: #fff; background: rgba(255,255,255,0.06); }
.nav__cta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  border: none;
}
.btn--ghost {
  background: transparent;
  color: var(--gray-3);
  border: 1px solid var(--border);
}
.btn--ghost:hover { color: #fff; border-color: var(--border-purple); }
.btn--primary {
  background: var(--purple);
  color: #fff;
  box-shadow: 0 0 24px var(--purple-glow);
}
.btn--primary:hover { background: var(--purple-light); box-shadow: 0 0 32px var(--purple-glow); }

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  margin-left: auto;
}
.nav__hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.2s;
}
.nav__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__hamburger.open span:nth-child(2) { opacity: 0; }
.nav__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.nav__mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px 24px;
  border-top: 1px solid var(--border);
  background: rgba(7,7,13,0.98);
}
.nav__mobile-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--gray-3);
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
.nav__mobile-link:hover { color: #fff; }

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-12px); }

@media (max-width: 768px) {
  .nav__links, .nav__cta { display: none; }
  .nav__hamburger { display: flex; }
}
</style>
