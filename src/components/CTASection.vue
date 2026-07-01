<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const company = ref('')
const segment = ref('')
const sent = ref(false)

function submit() {
  if (!email.value || !name.value) return
  // Demo: just show success
  sent.value = true
}
</script>

<template>
  <section class="cta" id="contact">
    <div class="orb" style="width:700px;height:700px;background:radial-gradient(circle,rgba(124,58,237,0.25) 0%,transparent 60%);top:50%;left:50%;transform:translate(-50%,-50%)" />
    <div class="container">
      <div class="cta__inner">
        <div class="cta__text reveal">
          <p class="section-tag">Comece agora</p>
          <h2 class="section-title">Pronto para precificar <span class="gradient-text">com inteligência?</span></h2>
          <p class="section-sub">
            Fale com um especialista e veja como o Pricing & Flow pode
            transformar a gestão de preços da sua operação — em dias, não meses.
          </p>
          <div class="cta__bullets">
            <div class="cta__bullet" v-for="b in bullets" :key="b">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              {{ b }}
            </div>
          </div>
        </div>
        <div class="cta__form-wrap glass-card reveal reveal-delay-2">
          <div v-if="!sent" class="cta__form">
            <h3 class="cta__form-title">Agende uma demonstração gratuita</h3>
            <p class="cta__form-sub">Sem compromisso. Mostraremos a plataforma funcionando com os dados do seu negócio.</p>
            <div class="cta__fields">
              <div class="cta__field">
                <label>Nome completo</label>
                <input v-model="name" type="text" placeholder="João Silva" />
              </div>
              <div class="cta__field">
                <label>E-mail corporativo</label>
                <input v-model="email" type="email" placeholder="joao@empresa.com.br" />
              </div>
              <div class="cta__field">
                <label>Empresa</label>
                <input v-model="company" type="text" placeholder="Nome da empresa" />
              </div>
              <div class="cta__field">
                <label>Segmento</label>
                <select v-model="segment">
                  <option value="">Selecione...</option>
                  <option>Indústria</option>
                  <option>Distribuidor</option>
                  <option>Varejo</option>
                  <option>Atacado</option>
                </select>
              </div>
            </div>
            <button class="cta__submit" @click="submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Quero agendar minha demo
            </button>
          </div>
          <div v-else class="cta__success">
            <div class="cta__success-icon">✓</div>
            <h3>Solicitação recebida!</h3>
            <p>Nossa equipe entrará em contato em até 2 horas úteis para agendar sua demonstração personalizada.</p>
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
      bullets: [
        'Demo personalizada com seus próprios dados',
        'Configuração assistida sem custo adicional',
        'Integração com ERP em até 5 dias',
        'Suporte humano — sem chatbot',
      ]
    }
  }
}
</script>

<style scoped>
.cta {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, transparent, rgba(124,58,237,0.06), transparent);
}
.cta__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.cta__bullets {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 28px;
}
.cta__bullet {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--gray-2);
}

.cta__form-wrap {
  padding: 36px;
  border-radius: 20px;
  border: 1px solid var(--border-purple);
  box-shadow: 0 0 80px rgba(124,58,237,0.2);
}
.cta__form-title {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
}
.cta__form-sub {
  font-size: 13px;
  color: var(--gray-3);
  margin-bottom: 24px;
  line-height: 1.6;
}
.cta__fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 20px;
}
.cta__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cta__field label {
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.cta__field input,
.cta__field select {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
}
.cta__field input::placeholder { color: var(--gray-5); }
.cta__field input:focus,
.cta__field select:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px var(--purple-dim);
}
.cta__field select option { background: var(--black-2); }
.cta__submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  background: var(--purple);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 32px rgba(124,58,237,0.4);
  transition: all 0.25s;
}
.cta__submit:hover {
  background: var(--purple-light);
  box-shadow: 0 0 48px rgba(124,58,237,0.5);
  transform: translateY(-2px);
}

.cta__success {
  text-align: center;
  padding: 24px;
}
.cta__success-icon {
  width: 64px; height: 64px;
  background: rgba(34,197,94,0.15);
  border: 2px solid #22C55E;
  color: #22C55E;
  font-size: 28px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.cta__success h3 { font-size: 22px; font-weight: 800; margin-bottom: 12px; }
.cta__success p { font-size: 14px; color: var(--gray-3); line-height: 1.7; }

@media (max-width: 900px) {
  .cta__inner { grid-template-columns: 1fr; }
  .cta__fields { grid-template-columns: 1fr; }
}
</style>
