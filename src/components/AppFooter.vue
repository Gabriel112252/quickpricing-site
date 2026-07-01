<template>
  <footer class="footer">
    <div class="footer__glow" />
    <div class="container">
      <div class="footer__main">
        <div class="footer__brand">
          <div class="footer__logo">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#footerGrad)"/>
              <path d="M8 22 L8 10 Q8 8 10 8 L16 8 Q22 8 22 14 Q22 18 17 19 L13 19 L13 22 Z M13 15 L16 15 Q17.5 15 17.5 13.5 Q17.5 12 16 12 L13 12 Z" fill="white"/>
              <path d="M19 22 L23 16" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
              <circle cx="23" cy="15" r="1.5" fill="#C084FC"/>
              <defs>
                <linearGradient id="footerGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#7C3AED"/><stop offset="1" stop-color="#A855F7"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <p class="footer__brand-name">Pricing & Flow</p>
              <p class="footer__brand-sub">Precificação inteligente</p>
            </div>
          </div>
          <p class="footer__desc">
            Plataforma de gestão de preços para indústrias, distribuidores e varejistas.
            Do custo ao preço publicado, com rastreabilidade total.
          </p>
        </div>

        <div v-for="col in columns" :key="col.title" class="footer__col">
          <p class="footer__col-title">{{ col.title }}</p>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="footer__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Pricing & Flow. Todos os direitos reservados.</p>
        <div class="footer__bottom-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">LGPD</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Produto',
          links: [
            { label: 'Funcionalidades', href: '#features' },
            { label: 'Cenários', href: '#features' },
            { label: 'Reforma Tributária', href: '#tax' },
            { label: 'Concorrentes', href: '#competitors' },
            { label: 'Como funciona', href: '#how' },
          ]
        },
        {
          title: 'Segmentos',
          links: [
            { label: 'Indústria', href: '#contact' },
            { label: 'Distribuição', href: '#contact' },
            { label: 'Varejo', href: '#contact' },
            { label: 'Atacado', href: '#contact' },
          ]
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Sobre nós', href: '#' },
            { label: 'Contato', href: '#contact' },
            { label: 'Blog', href: '#' },
            { label: 'Carreiras', href: '#' },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  border-top: 1px solid var(--border);
  padding: 72px 0 32px;
  overflow: hidden;
}
.footer__glow {
  position: absolute;
  top: 0; left: 50%; transform: translateX(-50%);
  width: 600px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--purple), transparent);
  filter: blur(2px);
}
.footer__main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 56px;
}
.footer__brand {}
.footer__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.footer__brand-name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
.footer__brand-sub {
  font-size: 11px;
  color: var(--gray-4);
  margin: 2px 0 0;
}
.footer__desc {
  font-size: 13px;
  color: var(--gray-4);
  line-height: 1.7;
  max-width: 280px;
}
.footer__col-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-3);
  margin: 0 0 16px;
}
.footer__col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer__link {
  font-size: 14px;
  color: var(--gray-4);
  transition: color 0.2s;
}
.footer__link:hover { color: var(--purple-pale); }
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--gray-5);
}
.footer__bottom-links {
  display: flex;
  gap: 20px;
}
.footer__bottom-links a {
  color: var(--gray-5);
  transition: color 0.2s;
}
.footer__bottom-links a:hover { color: var(--gray-3); }

@media (max-width: 768px) {
  .footer__main { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: 1 / -1; }
  .footer__bottom { flex-direction: column; gap: 12px; text-align: center; }
}
</style>
