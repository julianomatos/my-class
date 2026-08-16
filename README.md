# 🏫 Salas de Aula (MVP)

Uma Aplicação Web Progressiva (PWA) desenvolvida para simplificar a vida de alunos e professores. O foco do projeto é a consulta ultra-rápida ("zero clique") das salas de aula do dia, eliminando a necessidade de mensagens em grupos ou buscas complexas em portais acadêmicos.

---

## ✨ Funcionalidades (MVP)

*   **Visão "Hoje":** Exibição imediata das disciplinas e salas correspondentes ao dia atual, com destaque visual.
*   **Visão "Semana":** Consulta rápida da grade completa, organizada de segunda a sábado.
*   **Avisos Fixos:** Banner de alerta orientando a verificação diária de mudanças.
*   **PWA Instalável:** Pode ser adicionado à tela inicial de smartphones (iOS e Android) para acesso nativo, rápido e sem barra de navegação do browser.
*   **Dark Mode Nativo:** Interface desenvolvida 100% em modo escuro para conforto visual e economia de bateria em telas OLED.

---

## 🛠️ Tecnologias Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Linguagem:** TypeScript / React
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **PWA:** `next-pwa`
*   **Dados:** Estrutura mockada em JSON (preparado para futura migração para Supabase/BaaS)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18.x ou superior) instalado em sua máquina.

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/juliano-sousa/my-class.git
   cd my-class
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O projeto estará acessível em [http://localhost:3000](http://localhost:3000).

---

## 🎯 Planejamento ( Roadmap )

### Fase 1: Setup e Configuração (Concluída ✅)
- [x] Inicialização do projeto Next.js.
- [x] Configuração do Design System via Tailwind CSS.
- [x] Configuração do Progressive Web App (PWA) com ícones e manifest.
- [x] Criação da estrutura de dados mockada.

### Fase 2: Componentes UI (Em Andamento ⏳)
- [ ] **Header:** Exibição do título "Salas de Aula" e avatar do usuário.
- [ ] **TabNavigation:** Componente de alternância entre "Hoje" e "Semana".
- [ ] **HeroCard:** Card de destaque para as aulas do dia.
- [ ] **AlertBanner:** Notificações fixas sobre atualizações.
- [ ] **ClassCard:** Cards individuais das disciplinas com detalhes de sala e horário.

### Fase 3: Páginas e Lógica (Próximos Passos 🚀)
- [ ] Implementação da lógica de filtragem de dados por dia da semana.
- [ ] Desenvolvimento da aba "Semana" com visualização em grade (layout responsivo).
- [ ] Integração da barra de busca para filtragem instantânea.

### Fase 4: Refinamento e Deploy
- [ ] Testes de responsividade (Mobile/Desktop).
- [ ] Validação final do PWA.
- [ ] Deploy na Vercel.

---

## 📝 Observações

*   O projeto foi estruturado seguindo as melhores práticas do Next.js 14+ (App Router).
*   A paleta de cores e tipografia foram adaptadas para uma experiência otimizada em dark mode.
*   A arquitetura é modular, facilitando a futura integração com APIs ou bancos de dados (ex: Supabase).