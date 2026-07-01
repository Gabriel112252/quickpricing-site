<script setup>
const features = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    title: 'Cenários de Precificação',
    description: 'Simule múltiplos cenários antes de publicar: aumento de custo, variação cambial, mudança de alíquota. Veja o impacto em margens e faturamento em segundos.',
    tag: 'Simulação',
    color: '#A855F7',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
    title: 'Análise de Impacto',
    description: 'Cada alteração de preço é avaliada em toda a cadeia: custo, margem bruta, posicionamento no mercado e risco de perda de competitividade.',
    tag: 'Análise',
    color: '#7C3AED',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    title: 'Revisão de Margens',
    description: 'Monitore margem bruta e líquida por SKU, canal, segmento e região. Receba alertas automáticos quando a margem cair abaixo do mínimo configurado.',
    tag: 'Margens',
    color: '#22C55E',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h20M2 12 6 8m-4 4 4 4M22 12l-4-4m4 4-4 4"/></svg>`,
    title: 'Índice de Mercado',
    description: 'Calcule e acompanhe o índice de competitividade de cada produto frente ao mercado. Saiba quando você está acima, alinhado ou abaixo da concorrência.',
    tag: 'Mercado',
    color: '#F59E0B',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`,
    title: 'Fluxo de Aprovação',
    description: 'Precificações passam por workflow configurável: analista → gerente → diretor. Rastreabilidade completa com registro de quem aprovou e quando.',
    tag: 'Governança',
    color: '#60A5FA',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
    title: 'Publicação Controlada',
    description: 'Publique preços com vigência definida para canais, clientes, redes e regiões. Sem conflitos, sem surpresas — o sistema valida e bloqueia inconsistências.',
    tag: 'Publicação',
    color: '#EC4899',
  },
]
</script>

<template>
  <section class="features" id="features">
    <div class="orb" style="width:500px;height:500px;background:radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%);top:0;right:-100px;" />
    <div class="container">
      <div class="features__header reveal">
        <p class="section-tag">Funcionalidades</p>
        <h2 class="section-title">Tudo que você precisa para <span class="gradient-text-purple">precificar com precisão</span></h2>
        <p class="section-sub">Uma plataforma completa para gestão de preços em operações industriais, distribuidoras e varejistas.</p>
      </div>
      <div class="features__grid">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="feat-card glass-card reveal"
          :class="`reveal-delay-${(i % 3) + 1}`"
          :style="{ '--feat-color': feat.color }"
        >
          <div class="feat-card__icon" v-html="feat.icon" />
          <div class="feat-card__tag">{{ feat.tag }}</div>
          <h3 class="feat-card__title">{{ feat.title }}</h3>
          <p class="feat-card__desc">{{ feat.description }}</p>
          <div class="feat-card__glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.features__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
}
.section-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--purple-pale);
  margin-bottom: 12px;
}
.section-title {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 16px;
}
.section-sub {
  font-size: 16px;
  color: var(--gray-3);
  line-height: 1.7;
}
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.feat-card {
  padding: 28px;
  border-radius: 16px;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: default;
}
.feat-card:hover {
  border-color: var(--feat-color);
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.3), 0 0 30px rgba(from var(--feat-color) r g b / 0.1);
}
.feat-card:hover .feat-card__glow { opacity: 1; }
.feat-card__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, var(--feat-color) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  mix-blend-mode: overlay;
}
.feat-card__icon {
  width: 48px; height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(from var(--feat-color) r g b / 0.15);
  border-radius: 12px;
  margin-bottom: 16px;
  color: var(--feat-color);
  border: 1px solid rgba(from var(--feat-color) r g b / 0.25);
}
.feat-card__tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--feat-color);
  margin-bottom: 10px;
}
.feat-card__title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fff;
}
.feat-card__desc {
  font-size: 14px;
  color: var(--gray-3);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .features__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .features__grid { grid-template-columns: 1fr; }
}
</style>
