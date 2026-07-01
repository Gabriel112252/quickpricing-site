<script setup>
import { useCounter } from '../composables/useScrollReveal'
useCounter()

const stats = [
  { value: 280, suffix: '+', label: 'Empresas atendidas', icon: '🏭' },
  { value: 42000, suffix: '+', label: 'SKUs precificados', icon: '📦' },
  { value: 98, suffix: '%', label: 'de acurácia nos cenários', icon: '🎯' },
  { value: 4200000, suffix: '', label: 'em margens recuperadas', prefix: 'R$', compact: true },
]

function formatCompact(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K'
  return n
}
</script>

<template>
  <section class="stats">
    <div class="orb" style="width:400px;height:400px;background:radial-gradient(circle,rgba(124,58,237,0.15) 0%,transparent 70%);top:-100px;left:50%;transform:translateX(-50%)" />
    <div class="container">
      <div class="stats__grid">
        <div v-for="(stat, i) in stats" :key="stat.label" class="stat-card glass-card reveal" :class="`reveal-delay-${i + 1}`">
          <div class="stat-card__icon">{{ stat.icon }}</div>
          <div class="stat-card__number">
            <span v-if="stat.prefix" class="stat-card__prefix">{{ stat.prefix }}</span>
            <span
              class="stat-card__value"
              :data-target="stat.value"
            >0</span>
            <span class="stat-card__suffix">{{ stat.suffix }}</span>
          </div>
          <p class="stat-card__label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}
.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.stat-card {
  padding: 32px 24px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid var(--border);
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}
.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--purple-light), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.stat-card:hover {
  border-color: var(--border-purple);
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(124,58,237,0.15);
}
.stat-card:hover::before { opacity: 1; }
.stat-card__icon {
  font-size: 32px;
  margin-bottom: 16px;
}
.stat-card__number {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  margin-bottom: 8px;
}
.stat-card__prefix { font-size: 22px; font-weight: 700; color: var(--purple-pale); }
.stat-card__value { font-size: 40px; font-weight: 900; color: #fff; font-variant-numeric: tabular-nums; }
.stat-card__suffix { font-size: 28px; font-weight: 700; color: var(--purple-light); }
.stat-card__label { font-size: 13px; color: var(--gray-3); font-weight: 500; }

@media (max-width: 768px) {
  .stats__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .stats__grid { grid-template-columns: 1fr; }
}
</style>
