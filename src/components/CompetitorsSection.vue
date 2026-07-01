<script setup>
const competitors = [
  { name: 'Concorrente A', price: 'R$ 27,50', index: 1.07, status: 'Acima', color: '#F59E0B', bar: 107 },
  { name: 'Você (P&F)', price: 'R$ 25,70', index: 1.00, status: 'Alinhado', color: '#A855F7', bar: 100, highlight: true },
  { name: 'Concorrente B', price: 'R$ 24,90', index: 0.97, status: 'Abaixo', color: '#22C55E', bar: 97 },
  { name: 'Concorrente C', price: 'R$ 22,40', index: 0.87, status: 'Agressivo', color: '#60A5FA', bar: 87 },
]

const capabilities = [
  { icon: '🔍', title: 'Coleta automática', desc: 'Integração com fontes de dados de mercado para capturar preços de concorrentes automaticamente.' },
  { icon: '📊', title: 'Índice de competitividade', desc: 'Calcule o índice de posicionamento por SKU, canal e região. Saiba exatamente onde você está.' },
  { icon: '⚡', title: 'Alertas em tempo real', desc: 'Seja notificado quando um concorrente mudar o preço e impactar sua posição competitiva.' },
  { icon: '🗺️', title: 'Mapa de mercado', desc: 'Visualize seu portfólio no mapa de mercado: agressivo, alinhado, acima ou premium por segmento.' },
]
</script>

<template>
  <section class="comp" id="competitors">
    <div class="orb" style="width:500px;height:500px;background:radial-gradient(circle,rgba(96,165,250,0.1) 0%,rgba(124,58,237,0.08) 50%,transparent 70%);bottom:0;left:0;" />
    <div class="container">
      <div class="comp__header reveal">
        <p class="section-tag">Inteligência Competitiva</p>
        <h2 class="section-title">Monitore seus <span class="gradient-text-purple">concorrentes</span><br />e precifique com estratégia</h2>
        <p class="section-sub">
          Não basta saber seu custo — você precisa saber onde está em relação ao mercado.
          O Pricing & Flow traz inteligência competitiva integrada ao processo de precificação.
        </p>
      </div>

      <div class="comp__main">
        <!-- Left: capabilities -->
        <div class="comp__caps">
          <div v-for="cap in capabilities" :key="cap.title" class="cap-card glass-card reveal reveal-delay-1">
            <span class="cap-card__icon">{{ cap.icon }}</span>
            <div>
              <h4 class="cap-card__title">{{ cap.title }}</h4>
              <p class="cap-card__desc">{{ cap.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Right: competitor table mockup -->
        <div class="comp__visual reveal reveal-delay-2">
          <div class="comp-table glass-card">
            <div class="comp-table__header">
              <p class="comp-table__product">Açúcar Cristal 5kg — MG Varejo</p>
              <span class="comp-table__date">Atualizado agora</span>
            </div>

            <!-- Chart bars -->
            <div class="comp-table__chart">
              <div
                v-for="c in competitors"
                :key="c.name"
                class="comp-bar-col"
                :class="{ highlight: c.highlight }"
              >
                <div class="comp-bar-wrap">
                  <div
                    class="comp-bar"
                    :style="{ height: (c.bar * 0.9) + 'px', background: c.highlight ? 'linear-gradient(to top, #7C3AED, #A855F7)' : `${c.color}44` }"
                  />
                </div>
                <span class="comp-bar__name">{{ c.name }}</span>
                <span class="comp-bar__price" :style="{ color: c.highlight ? '#A855F7' : c.color }">{{ c.price }}</span>
              </div>
            </div>

            <!-- Rows -->
            <div class="comp-rows">
              <div v-for="c in competitors" :key="c.name + '-row'" class="comp-row" :class="{ 'comp-row--highlight': c.highlight }">
                <span class="comp-row__name" :style="c.highlight ? { color: '#C084FC', fontWeight: 700 } : {}">{{ c.name }}</span>
                <span class="comp-row__price">{{ c.price }}</span>
                <span class="comp-row__index">{{ c.index.toFixed(2) }}</span>
                <span class="comp-row__badge" :style="{ background: c.color + '22', color: c.color }">{{ c.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comp {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.comp__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
}
.comp__main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.comp__caps {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cap-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: border-color 0.3s, transform 0.3s;
}
.cap-card:hover {
  border-color: var(--border-purple);
  transform: translateX(4px);
}
.cap-card__icon { font-size: 24px; flex-shrink: 0; }
.cap-card__title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.cap-card__desc { font-size: 13px; color: var(--gray-3); line-height: 1.55; }

/* Competitor table */
.comp-table {
  border-radius: 16px;
  border: 1px solid var(--border-purple);
  overflow: hidden;
  box-shadow: 0 0 48px rgba(124,58,237,0.15);
}
.comp-table__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
}
.comp-table__product { font-size: 13px; font-weight: 600; color: #fff; }
.comp-table__date { font-size: 11px; color: var(--gray-4); }

.comp-table__chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 20px 20px 12px;
  gap: 8px;
  height: 140px;
  border-bottom: 1px solid var(--border);
}
.comp-bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
}
.comp-bar-wrap {
  flex: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;
}
.comp-bar {
  width: 100%;
  border-radius: 4px 4px 0 0;
  animation: barGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
  min-height: 4px;
}
@keyframes barGrow {
  from { height: 0 !important; }
}
.comp-bar-col.highlight .comp-bar {
  box-shadow: 0 0 20px rgba(124,58,237,0.5);
}
.comp-bar__name { font-size: 10px; color: var(--gray-4); text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
.comp-bar__price { font-size: 11px; font-weight: 700; }

.comp-rows { padding: 12px 20px 20px; }
.comp-row {
  display: grid;
  grid-template-columns: 2fr 1fr 0.7fr 1fr;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 12px;
  align-items: center;
  transition: background 0.2s;
}
.comp-row:hover { background: rgba(255,255,255,0.04); }
.comp-row--highlight { background: rgba(124,58,237,0.08); }
.comp-row__name { color: var(--gray-2); font-weight: 500; }
.comp-row__price { font-weight: 600; color: #fff; }
.comp-row__index { color: var(--gray-3); font-variant-numeric: tabular-nums; }
.comp-row__badge {
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .comp__main { grid-template-columns: 1fr; }
}
</style>
