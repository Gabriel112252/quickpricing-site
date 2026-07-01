<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['close'])
const visible = ref(false)

const items = [
  { sigla: 'IBS', desc: 'substitui ICMS + ISS', color: '#EF4444' },
  { sigla: 'CBS', desc: 'substitui PIS + COFINS', color: '#F59E0B' },
  { sigla: 'IS', desc: 'incide sobre produtos seletivos', color: '#A855F7' },
]

onMounted(() => {
  setTimeout(() => { visible.value = true }, 700)
})

function goToTax() {
  visible.value = false
  setTimeout(() => {
    emit('close')
    document.getElementById('tax')?.scrollIntoView({ behavior: 'smooth' })
  }, 350)
}

function dismiss() {
  visible.value = false
  setTimeout(() => emit('close'), 350)
}
</script>

<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-overlay" @click.self="dismiss">
      <div class="modal-box">
        <!-- Top alert stripe -->
        <div class="modal-stripe">
          <div class="modal-stripe__inner">
            <span v-for="n in 6" :key="n">⚠ REFORMA TRIBUTÁRIA EM VIGOR &nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>

        <!-- Close -->
        <button class="modal-close" @click="dismiss">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        <!-- Icon -->
        <div class="modal-icon">
          <div class="modal-icon__ring" />
          <div class="modal-icon__ring modal-icon__ring--2" />
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>

        <!-- Content -->
        <div class="modal-content">
          <p class="modal-eyebrow">Alerta crítico para sua operação</p>
          <h2 class="modal-title">
            Sua empresa está<br />
            <span class="modal-title--highlight">preparada para a<br />Reforma Tributária?</span>
          </h2>
          <p class="modal-desc">
            A partir de 2026, o sistema tributário brasileiro muda completamente.
            Três novos tributos substituem quatro — e os preços precisam ser recalculados.
          </p>

          <!-- Tax pills -->
          <div class="modal-taxes">
            <div v-for="item in items" :key="item.sigla" class="modal-tax" :style="{ '--c': item.color }">
              <span class="modal-tax__sigla">{{ item.sigla }}</span>
              <span class="modal-tax__desc">{{ item.desc }}</span>
            </div>
          </div>

          <p class="modal-warning">
            Empresas que não recalcularem margens antes da transição
            podem <strong>perder entre 4% e 15% de rentabilidade</strong> sem perceber.
          </p>

          <!-- Actions -->
          <div class="modal-actions">
            <button class="modal-btn modal-btn--primary" @click="goToTax">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Quero entender o impacto
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
}

.modal-box {
  position: relative;
  max-width: 520px;
  width: 100%;
  background: #0D0D1A;
  border-radius: 20px;
  border: 1px solid rgba(239, 68, 68, 0.35);
  box-shadow:
    0 0 0 1px rgba(239, 68, 68, 0.1),
    0 0 80px rgba(239, 68, 68, 0.2),
    0 40px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

/* Animated top stripe */
.modal-stripe {
  overflow: hidden;
  background: linear-gradient(90deg, #EF4444, #F59E0B, #EF4444);
  height: 32px;
  display: flex;
  align-items: center;
}
.modal-stripe__inner {
  display: flex;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #fff;
  animation: marquee 12s linear infinite;
  will-change: transform;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Close button */
.modal-close {
  position: absolute;
  top: 44px;
  right: 20px;
  width: 32px; height: 32px;
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #9CA3AF;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.modal-close:hover { background: rgba(255,255,255,0.12); color: #fff; }

/* Icon */
.modal-icon {
  position: relative;
  width: 80px; height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px auto 0;
  color: #EF4444;
}
.modal-icon__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(239, 68, 68, 0.3);
  animation: ringPulse 2s ease-in-out infinite;
}
.modal-icon__ring--2 {
  inset: -12px;
  border-color: rgba(239, 68, 68, 0.15);
  animation-delay: 0.5s;
}
@keyframes ringPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.5; }
}

/* Content */
.modal-content {
  padding: 20px 32px 32px;
  text-align: center;
}
.modal-eyebrow {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #EF4444;
  margin-bottom: 12px;
}
.modal-title {
  font-size: clamp(22px, 4vw, 30px);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 14px;
}
.modal-title--highlight {
  background: linear-gradient(135deg, #EF4444 0%, #F59E0B 50%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.modal-desc {
  font-size: 14px;
  color: #9CA3AF;
  line-height: 1.7;
  margin-bottom: 20px;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
}

/* Tax pills */
.modal-taxes {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.modal-tax {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: rgba(from var(--c) r g b / 0.1);
  border: 1px solid rgba(from var(--c) r g b / 0.3);
  border-radius: 10px;
  padding: 10px 16px;
  min-width: 120px;
}
.modal-tax__sigla {
  font-size: 22px;
  font-weight: 900;
  color: var(--c);
}
.modal-tax__desc {
  font-size: 11px;
  color: #6B7280;
  text-align: center;
}

.modal-warning {
  font-size: 13px;
  color: #D1D5DB;
  line-height: 1.65;
  background: rgba(239,68,68,0.08);
  border: 1px solid rgba(239,68,68,0.2);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 24px;
}
.modal-warning strong { color: #FCA5A5; }

/* Buttons */
.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  transition: all 0.25s;
}
.modal-btn--primary {
  background: linear-gradient(135deg, #EF4444, #F59E0B);
  color: #fff;
  box-shadow: 0 0 32px rgba(239,68,68,0.35);
}
.modal-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 48px rgba(239,68,68,0.5);
}
.modal-btn--ghost {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #6B7280;
}
.modal-btn--ghost:hover {
  background: rgba(255,255,255,0.08);
  color: #9CA3AF;
}

/* Transition */
.modal-enter-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-leave-active { transition: all 0.3s ease; }
.modal-enter-from { opacity: 0; transform: scale(0.92) translateY(24px); }
.modal-leave-to { opacity: 0; transform: scale(0.96) translateY(12px); }
</style>
