# 🏫 My Class — PWA de Consulta de Salas de Aula

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)

Uma Aplicação Web Progressiva (**PWA**) desenvolvida para simplificar a vida de alunos e professores na rotina acadêmica. O foco do projeto é a consulta ultra-rápida ("zero clique") das salas de aula do dia, eliminando a necessidade de navegação por portais complexos ou grupos de mensagens.

---

## ✨ Funcionalidades Principais

* ⚡ **Consulta Instantânea ("Zero Clique"):** Exibição imediata das disciplinas e salas de aula correspondentes ao dia atual assim que o app é aberto.
* ⭐ **Favoritar Disciplinas ("Minhas Aulas"):** Sistema intuitivo de marcação de aulas favoritas com persistência local em `localStorage`. Permite alternar rapidamente entre a visualização de "Minhas Aulas" e "Todas".
* 📅 **Visão Semanal Responsiva:** Navegação completa por todos os dias da semana (Segunda a Sábado) com visualização adaptativa (cards compactos e scroll horizontal otimizado para mobile).
* 🔍 **Busca em Tempo Real:** Filtro dinâmico e instantâneo por nome da matéria, código da disciplina, nome do professor ou número da sala.
* 📱 **PWA Maskable & Instalável:** Suporte a Progressive Web App instalável no iOS e Android, com ícones vetoriais adaptáveis (Maskable Icon com Safe Zone de 20%) que se ajustam nativamente à máscara de ícones do sistema operacional.
* 🌙 **Dark Mode Nativo (`#121212`):** Interface desenhada em modo escuro profundo para máximo conforto visual e economia de energia em telas OLED.
* ⚠️ **Avisos Relevantes:** Banner fixo para alertas importantes sobre alterações de salas ou comunicados acadêmicos.

---

## 🛠️ Tecnologias e Arquitetura

* **Framework:** [Next.js](https://nextjs.org/) (App Router & Server Components)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (v4 com Design System em tokens HSL/Hex)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **PWA:** `next-pwa`, Manifest V3, Web Workers e ícones Maskable SVG
* **Estado Local:** Custom Hook `useFavorites` com gerenciamento de hidratação para Next.js e persistência no `localStorage`.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18.x ou superior) instalado em sua máquina.

### Passos para Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/julianomatos/my-class.git
   cd my-class
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

### Build de Produção

Para gerar o bundle otimizado de produção e validar o Service Worker do PWA:
```bash
npm run build
npm run start
```

---

## 📲 Como Instalar o PWA no Celular

### **Android (Google Chrome)**
1. Acesse o aplicativo pelo navegador Chrome.
2. Toque no menu de três pontos no canto superior direito.
3. Selecione **"Adicionar à Tela inicial"** ou **"Instalar aplicativo"**.

### **iOS / iPhone (Safari)**
1. Acesse o aplicativo pelo navegador Safari.
2. Toque no botão de **Compartilhar** (ícone de quadrado com seta para cima na barra inferior).
3. Role e selecione **"Adicionar à Tela de Início"**.

---

## 🎯 Status do Roadmap

- [x] **Fase 1: Setup e Infraestrutura**
  - [x] Inicialização do projeto Next.js com App Router.
  - [x] Configuração do Design System em Dark Mode (`#121212`).
  - [x] Configuração de PWA (`manifest.json`, Service Worker, ícones Maskable).
- [x] **Fase 2: Componentes UI Base**
  - [x] Header compacto com branding da aplicação.
  - [x] Componentes de navegação por abas ("Hoje" e "Semana").
  - [x] HeroCard do dia e AlertBanner.
  - [x] ClassCard com variante normal e compacta.
- [x] **Fase 3: Páginas e Lógica de Negócio**
  - [x] Identificação dinâmica do dia da semana atual.
  - [x] Filtro de busca em tempo real (client-side).
  - [x] Sistema de Favoritos ("Minhas Aulas") com salvamento em `localStorage`.
  - [x] Grid semanal responsivo com scroll horizontal.
- [x] **Fase 4: PWA & Refinamento Visual**
  - [x] Ícone Maskable SVG com Safe Zone para o sistema operacional.
  - [x] Ajustes de responsividade mobile-first e animações de estado.
  - [x] Validação de build e deploy na Vercel.

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).