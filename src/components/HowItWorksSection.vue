<script setup>
const steps = [
  {
    number: '01',
    title: 'Importe seus dados',
    desc: 'Conecte seu ERP, planilha ou API. Produtos, custos, impostos e estrutura comercial entram automaticamente no sistema.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    color: '#60A5FA',
  },
  {
    number: '02',
    title: 'Configure suas regras',
    desc: 'Defina margens mínimas, estratégias por canal, políticas de precificação e gatilhos de alerta para cada segmento.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    color: '#A855F7',
  },
  {
    number: '03',
    title: 'Simule e analise',
    desc: 'Crie cenários, simule impactos de custo, veja o posicionamento competitivo e analise margens antes de publicar qualquer preço.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    color: '#7C3AED',
  },
  {
    number: '04',
    title: 'Aprove e publique',
    desc: 'Workflow de aprovação em múltiplos níveis, com rastreabilidade completa. Preços publicados com vigência e controle por segmento.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    color: '#22C55E',
  },
]
</script>

<template>
  <section class="how" id="how">
    <div class="orb" style="width:500px;height:500px;background:radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%);top:50%;right:-100px;transform:translateY(-50%)" />
    <div class="container">
      <div class="how__header reveal">
        <p class="section-tag">Como funciona</p>
        <h2 class="section-title">Do custo ao preço publicado <br /><span class="gradient-text-purple">em minutos</span></h2>
        <p class="section-sub">Quatro etapas que transformam dados brutos em decisões de preço com rastreabilidade total.</p>
      </div>

      <div class="how__steps">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="step reveal"
          :class="`reveal-delay-${i + 1}`"
          :style="{ '--step-color': step.color }"
        >
          <div class="step__connector" v-if="i < steps.length - 1" />
          <div class="step__icon" v-html="step.icon" />
          <div class="step__number">{{ step.number }}</div>
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.how__header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 72px;
}
.how__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
}
.step {
  position: relative;
  text-align: center;
  padding: 32px 20px;
  border-radius: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
}
.step:hover {
  border-color: var(--step-color);
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.25), 0 0 32px rgba(from var(--step-color) r g b / 0.15);
}
.step__connector {
  display: none; /* visual only, handled differently */
}
.step__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px; height: 60px;
  background: rgba(from var(--step-color) r g b / 0.12);
  border: 1px solid rgba(from var(--step-color) r g b / 0.3);
  border-radius: 16px;
  margin: 0 auto 16px;
  color: var(--step-color);
  transition: background 0.3s, box-shadow 0.3s;
}
.step:hover .step__icon {
  background: rgba(from var(--step-color) r g b / 0.2);
  box-shadow: 0 0 24px rgba(from var(--step-color) r g b / 0.3);
}
.step__number {
  font-size: 11px;
  font-weight: 800;
  color: var(--step-color);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
  opacity: 0.8;
}
.step__title {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
.step__desc {
  font-size: 13px;
  color: var(--gray-3);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .how__steps { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .how__steps { grid-template-columns: 1fr; }
}
</style>
