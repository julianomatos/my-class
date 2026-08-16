# Lista de Tarefas (MVP)

## Fase 1: Setup e Configuração
- [X] Inicializar projeto Next.js com Tailwind CSS (`npx create-next-app@latest`).
- [ ] Configurar variáveis do Tailwind no `tailwind.config.ts` (adicionar cores do Design System).
- [ ] Configurar suporte a PWA (instalar `next-pwa` e gerar arquivos de ícone e `manifest.json`).
- [ ] Criar arquivo `src/data/classes.json` com os dados mockados da grade.

## Fase 2: Componentes Base (UI)
- [ ] Criar componente `Header` (Logo, Título e Avatar mockado).
- [ ] Criar componente `TabNavigation` (Pill com as opções "Hoje" e "Semana").
- [ ] Criar componente `HeroCard` (Card azul do dia atual recebendo props de dia e quantidade).
- [ ] Criar componente `AlertBanner` (Aviso fixo).
- [ ] Criar componente `ClassCard` (Card de disciplina com formatação da sala em destaque azul).

## Fase 3: Páginas e Lógica
- [ ] Criar função utilitária para descobrir o dia da semana atual (`new Date().getDay()`) e mapear para string (ex: "Segunda-feira").
- [ ] **Aba "Hoje":**
    - [ ] Filtrar dados do JSON correspondentes ao dia atual.
    - [ ] Renderizar lista de `ClassCard`s.
    - [ ] Adicionar input de busca (Client-side) para filtrar disciplinas/salas renderizadas.
- [ ] **Aba "Semana" (Desktop e Mobile):**
    - [ ] Baseado na `image_4fc19a.png`, criar layout com scroll horizontal (`overflow-x-auto`).
    - [ ] Agrupar dados por dia da semana e renderizar colunas.

## Fase 4: Refinamento
- [ ] Testar layout em viewports mobile (iPhone SE até Pro Max) e garantir que a barra de abas e o input não quebrem o layout.
- [ ] Validar comportamento do tema escuro puro (Dark Mode forçado na tag HTML/Body).
- [ ] Realizar build de produção e testar instalação do PWA via navegador.
- [ ] Deploy na Vercel.