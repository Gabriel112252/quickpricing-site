<script setup>
import { ref, onMounted } from 'vue'

const floatCards = [
  { icon: '📈', label: 'Margem ajustada', value: '+4.2%', color: '#22C55E', delay: '0s' },
  { icon: '⚡', label: 'Reforma tributária', value: 'IBS + CBS', color: '#A855F7', delay: '0.6s' },
  { icon: '🎯', label: 'Índice de mercado', value: '0.97', color: '#F59E0B', delay: '1.2s' },
]

const visible = ref(false)
onMounted(() => setTimeout(() => { visible.value = true }, 100))
</script>

<template>
  <section class="hero">
    <!-- Background orbs -->
    <div class="orb orb--1" />
    <div class="orb orb--2" />
    <div class="orb orb--3" />

    <!-- Grid overlay -->
    <div class="hero__grid" />

    <div class="container hero__inner">
      <div class="hero__content" :class="{ visible }">
        <!-- Badge -->
        <div class="hero__badge">
          <span class="hero__badge-dot" />
          Plataforma de Precificação Inteligente
        </div>

        <!-- Headline -->
        <h1 class="hero__title">
          Precifique com <br />
          <span class="gradient-text">inteligência.</span><br />
          Cresça com <span class="gradient-text">segurança.</span>
        </h1>

        <p class="hero__sub">
          Controle total sobre preços, margens e impostos — para indústrias,
          distribuidores e varejistas que não podem errar na precificação.
        </p>

        <!-- CTAs -->
        <div class="hero__actions">
          <a href="#contact" class="hero__btn hero__btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6l6 6-6 6"/></svg>
            Agendar demonstração
          </a>
          <a href="#how" class="hero__btn hero__btn--ghost">
            Ver como funciona
          </a>
        </div>

        <!-- Trust badges -->
        <div class="hero__trust">
          <span>✓ Sem contrato de fidelidade</span>
          <span>✓ Integração com ERP</span>
          <span>✓ Suporte dedicado</span>
        </div>
      </div>

      <!-- Right: animated dashboard mockup -->
      <div class="hero__visual" :class="{ visible }">
        <!-- Main card mockup -->
        <div class="hero__mockup glass-card">
          <div class="mockup__header">
            <div class="mockup__dots">
              <span /><span /><span />
            </div>
            <span class="mockup__title">Tabela de Preços — MG • Varejo</span>
          </div>
          <div class="mockup__table">
            <div class="mockup__row mockup__row--header">
              <span>Produto</span>
              <span>Custo</span>
              <span>Margem</span>
              <span>Preço</span>
              <span>Status</span>
            </div>
            <div class="mockup__row" v-for="row in mockRows" :key="row.name">
              <span class="row-name">{{ row.name }}</span>
              <span>{{ row.cost }}</span>
              <span :class="['row-margin', row.marginClass]">{{ row.margin }}</span>
              <span class="row-price">{{ row.price }}</span>
              <span :class="['row-badge', row.badgeClass]">{{ row.status }}</span>
            </div>
          </div>
          <!-- Chart sparklines -->
          <div class="mockup__charts">
            <div class="mockup__chart-bar" v-for="(h, i) in bars" :key="i" :style="{ height: h + 'px', animationDelay: i * 0.08 + 's' }" />
          </div>
        </div>

        <!-- Floating cards -->
        <div
          v-for="card in floatCards"
          :key="card.label"
          class="float-card glass-card"
          :style="{ '--card-color': card.color, '--delay': card.delay }"
        >
          <span class="float-card__icon">{{ card.icon }}</span>
          <div>
            <p class="float-card__label">{{ card.label }}</p>
            <p class="float-card__value" :style="{ color: card.color }">{{ card.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="hero__scroll">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mockRows: [
        { name: 'Açúcar Cristal 5kg', cost: 'R$ 17,08', margin: '16.5%', marginClass: 'ok', price: 'R$ 25,70', status: 'Vigente', badgeClass: 'green' },
        { name: 'Arroz Tipo 1 5kg', cost: 'R$ 22,40', margin: '18.2%', marginClass: 'ok', price: 'R$ 31,90', status: 'Em revisão', badgeClass: 'yellow' },
        { name: 'Óleo de Soja 900ml', cost: 'R$ 8,30', margin: '11.4%', marginClass: 'warn', price: 'R$ 10,90', status: 'Alerta', badgeClass: 'red' },
        { name: 'Feijão Carioca 1kg', cost: 'R$ 6,80', margin: '19.7%', marginClass: 'ok', price: 'R$ 9,90', status: 'Vigente', badgeClass: 'green' },
      ],
      bars: [38, 52, 45, 68, 55, 72, 60, 78, 65, 88, 70, 95, 82, 75, 90, 85, 72, 96],
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.orb--1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%);
  top: -100px; left: -200px;
}
.orb--2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
  top: 100px; right: -150px;
}
.orb--3 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%);
  bottom: -50px; left: 40%;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__content {
  opacity: 0;
  transform: translateX(-32px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero__content.visible { opacity: 1; transform: translateX(0); }

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(124,58,237,0.15);
  border: 1px solid rgba(124,58,237,0.35);
  color: var(--purple-pale);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 28px;
}
.hero__badge-dot {
  width: 7px; height: 7px;
  background: var(--purple-light);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--purple-light);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

.hero__title {
  font-size: clamp(38px, 5vw, 60px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.hero__sub {
  font-size: 17px;
  color: var(--gray-3);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  transition: all 0.25s;
}
.hero__btn--primary {
  background: var(--purple);
  color: #fff;
  box-shadow: 0 0 40px rgba(124,58,237,0.4);
}
.hero__btn--primary:hover {
  background: var(--purple-light);
  box-shadow: 0 0 60px rgba(124,58,237,0.5);
  transform: translateY(-2px);
}
.hero__btn--ghost {
  background: rgba(255,255,255,0.05);
  color: var(--gray-2);
  border: 1px solid var(--border);
}
.hero__btn--ghost:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
  border-color: var(--border-purple);
}

.hero__trust {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--gray-4);
  font-weight: 500;
}

/* Visual */
.hero__visual {
  opacity: 0;
  transform: translateX(32px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
  position: relative;
  /* Padding cria zonas livres para os float cards sem sobrepor o mockup */
  padding: 24px 180px 60px 8px;
}
.hero__visual.visible { opacity: 1; transform: translateX(0); }

.hero__mockup {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-purple);
  box-shadow: 0 0 60px rgba(124,58,237,0.2), 0 40px 80px rgba(0,0,0,0.5);
}

.mockup__header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
}
.mockup__dots {
  display: flex;
  gap: 5px;
}
.mockup__dots span {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--border);
}
.mockup__dots span:nth-child(1) { background: #FF5F57; }
.mockup__dots span:nth-child(2) { background: #FFBD2E; }
.mockup__dots span:nth-child(3) { background: #28CA41; }
.mockup__title {
  font-size: 11px;
  color: var(--gray-4);
  font-weight: 500;
}

.mockup__table { padding: 12px; }
.mockup__row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 8px;
  padding: 8px 10px;
  font-size: 11px;
  border-radius: 6px;
  align-items: center;
}
.mockup__row--header {
  font-size: 10px;
  font-weight: 600;
  color: var(--gray-4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.mockup__row:not(.mockup__row--header):hover {
  background: rgba(255,255,255,0.04);
}
.row-name { font-weight: 500; color: #fff; }
.row-margin.ok { color: #22C55E; }
.row-margin.warn { color: #F59E0B; }
.row-price { font-weight: 700; color: var(--purple-pale); }
.row-badge {
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 600;
}
.row-badge.green { background: rgba(34,197,94,0.15); color: #22C55E; }
.row-badge.yellow { background: rgba(245,158,11,0.15); color: #F59E0B; }
.row-badge.red { background: rgba(239,68,68,0.15); color: #EF4444; }

.mockup__charts {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  padding: 8px 12px 12px;
  height: 108px;
  border-top: 1px solid var(--border);
  overflow: hidden;
}
.mockup__chart-bar {
  flex: 1;
  background: linear-gradient(to top, var(--purple), var(--purple-light));
  border-radius: 2px 2px 0 0;
  opacity: 0.7;
  animation: barGrow 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes barGrow {
  from { height: 0 !important; }
}

/* Floating cards */
.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(13,13,24,0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 24px var(--purple-glow);
  animation: floatAnim 4s ease-in-out infinite;
  animation-delay: var(--delay);
  width: 168px;
}
/* Posicionadas no espaço de padding — fora do mockup */
.float-card:nth-child(2) { top: 0; right: 0; }
.float-card:nth-child(3) { bottom: 48px; right: 0; }
.float-card:nth-child(4) { bottom: 0; left: 0; }
@keyframes floatAnim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.float-card__icon { font-size: 22px; }
.float-card__label { font-size: 10px; color: var(--gray-3); font-weight: 500; }
.float-card__value { font-size: 16px; font-weight: 800; }

/* Scroll hint */
.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero__scroll-mouse {
  width: 22px; height: 36px;
  border: 2px solid rgba(255,255,255,0.25);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.hero__scroll-wheel {
  width: 3px; height: 8px;
  background: rgba(255,255,255,0.5);
  border-radius: 2px;
  animation: scrollWheel 2s infinite;
}
@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; gap: 48px; }
  .hero__visual { display: none; }
}
</style>
