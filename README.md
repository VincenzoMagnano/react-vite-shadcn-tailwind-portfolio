# 🚀 React + TypeScript + Vite + TailwindCSS + Shadcn + GSAP + Three.js Starter

Questo progetto fornisce una configurazione moderna e scalabile per sviluppare applicazioni React con animazioni fluide, UI componibile e grafica 3D interattiva.

## 📦 Stack Tecnologico

- **React 18** + **TypeScript** + **Vite** ➔ frontend ultrarapido
- **TailwindCSS 4** ➔ styling utility-first con supporto a dark mode
- **Shadcn/UI** ➔ component library accessibile e componibile
- **GSAP** ➔ animazioni complesse e performanti (scroll, testo, hover)
- **React Router DOM** ➔ gestione delle rotte client-side
- **Lucide React** ➔ icone vettoriali moderne
- **ESLint + Prettier** ➔ linting e formattazione del codice
- **Alias @/** ➔ importazioni intelligenti dal `src/`

---

## 📂 Struttura del progetto

```bash
/public
/src
  /assets          # Immagini, font, texture 3D
  /components
    /layout        # Sidebar, Topbar, Footer, layout globale
    /ui            # Componenti Shadcn personalizzati
    /common        # Componenti riutilizzabili generici
    /home          # Componenti della homepage (HeroSection, IntroSection, ecc.)
    /background    # SVG animati, background dinamici, effetti grafici
  /hooks           # Custom React hooks
  /lib             # Helper functions, utilities
  /pages
    /home
    /about
    /works
    /scene
  /scenes          # Three.js scene files o spline loader
  /styles          # File globali Tailwind
  App.tsx          # Componente root
  main.tsx         # Entry point principale
  router.tsx       # Definizione centralizzata delle rotte
tailwind.config.js # Configurazione TailwindCSS
vite.config.ts     # Configurazione Vite + alias
tsconfig.json      # Configurazione TypeScript

---

## 🚀 Funzionalità già incluse

- Sidebar responsive con apertura mobile (`Sheet`) e collapsible su desktop
- Routing dinamico Home / About / Works
- Layout persistente (Sidebar + Topbar)
- Sistema di font personalizzabile
- Dark mode Tailwind pronta per l'attivazione
- Import path semplificato tramite `@/`

---

## 🛠️ Espandere la configurazione ESLint

Se sviluppi un'applicazione per la produzione, consigliamo di aggiornare la configurazione per abilitare regole type-aware:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Puoi anche installare [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) e [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) per aggiungere regole specifiche per React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

# 🌟 In breve

Questo progetto ti offre una **base solida e moderna**,  
perfetta per costruire portfolio, dashboard, web app o prodotti 3D complessi.

> Ready to build the future. 🚀

