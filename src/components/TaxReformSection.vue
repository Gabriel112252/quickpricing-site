<script setup>
const taxes = [
  {
    sigla: 'IBS',
    nome: 'Imposto sobre Bens e Serviços',
    substituiPor: 'ICMS + ISS',
    impact: 'Alto',
    color: '#EF4444',
    desc: 'Novo tributo de competência estadual e municipal. A alíquota varia por ente federativo e impacta toda a cadeia varejista.',
  },
  {
    sigla: 'CBS',
    nome: 'Contribuição sobre Bens e Serviços',
    substituiPor: 'PIS + COFINS',
    impact: 'Alto',
    color: '#F59E0B',
    desc: 'Federal, substitui PIS e COFINS. Incide sobre o valor adicionado — exige revisão completa das margens e preços de tabela.',
  },
  {
    sigla: 'IS',
    nome: 'Imposto Seletivo',
    substituiPor: 'IPI (parcialmente)',
    impact: 'Médio',
    color: '#A855F7',
    desc: 'Incide sobre produtos nocivos à saúde e ao meio ambiente. Bebidas alcoólicas, tabaco e veículos são os principais afetados.',
  },
]

const features = [
  'Simulação automática do impacto da reforma em todos os SKUs',
  'Alertas quando alíquota muda e afeta sua margem mínima',
  'Dashboard de sensibilidade: veja quais produtos são mais expostos',
  'Cenários comparativos: regime atual vs. reforma tributária',
  'Integração com ERP para atualização imediata das alíquotas',
  'Relatórios prontos para apresentar ao comitê financeiro',
]
</script>

<template>
  <section class="tax" id="tax">
    <div class="orb" style="width:600px;height:600px;background:radial-gradient(circle,rgba(239,68,68,0.08) 0%,rgba(124,58,237,0.12) 50%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%)" />
    <div class="container">
      <div class="tax__header reveal">
        <p class="section-tag">Reforma Tributária</p>
        <h2 class="section-title">
          A maior reforma tributária<br />
          <span class="gradient-text">em 35 anos</span> afeta direto a sua margem
        </h2>
        <p class="section-sub">
          IBS, CBS e IS substituem ICMS, ISS, PIS e COFINS. Empresas que não
          se prepararem para as novas alíquotas vão perder margem sem perceber.
        </p>
      </div>

      <!-- Tax cards -->
      <div class="tax__cards reveal reveal-delay-1">
        <div v-for="tax in taxes" :key="tax.sigla" class="tax-card" :style="{ '--tax-color': tax.color }">
          <div class="tax-card__header">
            <div class="tax-card__sigla">{{ tax.sigla }}</div>
            <span class="tax-card__impact" :style="{ background: tax.color + '22', color: tax.color }">
              Impacto {{ tax.impact }}
            </span>
          </div>
          <p class="tax-card__nome">{{ tax.nome }}</p>
          <p class="tax-card__substitui">Substitui: <strong>{{ tax.substituiPor }}</strong></p>
          <p class="tax-card__desc">{{ tax.desc }}</p>
        </div>
      </div>

      <!-- How PF helps -->
      <div class="tax__solution reveal reveal-delay-2">
        <div class="tax__solution-text">
          <p class="section-tag">Como o Pricing & Flow ajuda</p>
          <h3 class="tax__solution-title">Fique à frente da reforma. <span class="gradient-text-purple">Sem surpresas.</span></h3>
          <ul class="tax__features">
            <li v-for="feat in features" :key="feat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              {{ feat }}
            </li>
          </ul>
        </div>
        <div class="tax__solution-visual glass-card">
          <div class="reform-sim">
            <p class="reform-sim__label">Simulação de Impacto — Reforma Tributária</p>
            <div class="reform-sim__row" v-for="item in simItems" :key="item.label">
              <span class="reform-sim__product">{{ item.label }}</span>
              <div class="reform-sim__bar-wrap">
                <div class="reform-sim__bar reform-sim__bar--before" :style="{ width: item.before + '%' }" />
                <div class="reform-sim__bar reform-sim__bar--after" :style="{ width: item.after + '%' }" />
              </div>
              <span class="reform-sim__delta" :class="item.delta < 0 ? 'neg' : 'pos'">
                {{ item.delta > 0 ? '+' : '' }}{{ item.delta }}%
              </span>
            </div>
            <div class="reform-sim__legend">
              <span><i class="dot dot--before"/>Regime atual</span>
              <span><i class="dot dot--after"/>Pós-reforma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      simItems: [
        { label: 'Açúcar Cristal', before: 72, after: 68, delta: -4.2 },
        { label: 'Óleo de Soja', before: 65, after: 58, delta: -7.1 },
        { label: 'Bebida Alcoólica', before: 55, after: 41, delta: -12.8 },
        { label: 'Arroz Tipo 1', before: 78, after: 80, delta: +2.3 },
        { label: 'Higiene Pessoal', before: 61, after: 64, delta: +3.1 },
      ]
    }
  }
}
</script>

<style scoped>
.tax {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, transparent, rgba(124,58,237,0.04), transparent);
}
.tax__header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 56px;
}
.tax__warning-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(239,68,68,0.12);
  border: 1px solid rgba(239,68,68,0.3);
  color: #FCA5A5;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.tax__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 64px;
}
.tax-card {
  padding: 24px;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(from var(--tax-color) r g b / 0.25);
  transition: border-color 0.3s, transform 0.3s;
}
.tax-card:hover {
  border-color: var(--tax-color);
  transform: translateY(-3px);
}
.tax-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.tax-card__sigla {
  font-size: 28px;
  font-weight: 900;
  color: var(--tax-color);
  letter-spacing: -0.02em;
}
.tax-card__impact {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.tax-card__nome {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 6px;
}
.tax-card__substitui {
  font-size: 12px;
  color: var(--gray-4);
  margin-bottom: 12px;
}
.tax-card__substitui strong { color: var(--gray-2); }
.tax-card__desc {
  font-size: 13px;
  color: var(--gray-3);
  line-height: 1.6;
}

.tax__solution {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.tax__solution-title {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 28px;
}
.tax__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tax__features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: var(--gray-2);
  line-height: 1.5;
}
.tax__features svg { flex-shrink: 0; margin-top: 2px; }

.tax__solution-visual {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--border-purple);
}
.reform-sim__label {
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-4);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.reform-sim__row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.reform-sim__product {
  font-size: 12px;
  color: var(--gray-2);
  width: 120px;
  flex-shrink: 0;
}
.reform-sim__bar-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.reform-sim__bar {
  height: 8px;
  border-radius: 4px;
  transition: width 1s ease;
}
.reform-sim__bar--before { background: rgba(255,255,255,0.2); }
.reform-sim__bar--after { background: linear-gradient(90deg, #7C3AED, #A855F7); }
.reform-sim__delta {
  font-size: 12px;
  font-weight: 700;
  width: 48px;
  text-align: right;
  flex-shrink: 0;
}
.reform-sim__delta.neg { color: #EF4444; }
.reform-sim__delta.pos { color: #22C55E; }
.reform-sim__legend {
  display: flex;
  gap: 20px;
  margin-top: 16px;
  font-size: 11px;
  color: var(--gray-4);
}
.reform-sim__legend span { display: flex; align-items: center; gap: 6px; }
.dot { display: inline-block; width: 10px; height: 4px; border-radius: 2px; }
.dot--before { background: rgba(255,255,255,0.2); }
.dot--after { background: var(--purple-light); }

@media (max-width: 900px) {
  .tax__cards { grid-template-columns: 1fr; }
  .tax__solution { grid-template-columns: 1fr; }
}
</style>
