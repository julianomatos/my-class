# Design System: Salas de Aula

## 1. Paleta de Cores (Dark Mode Base)
Baseado nas referências visuais de `image_4fc57d.png` e `image_4fc4c1.png`.

*   **Background Principal:** `#121212` ou `zinc-950`
*   **Background Secundário (Cards):** `#1E1E1E` ou `zinc-900`
*   **Primary Accent (Azul Vivo):** `#2563EB` (Blue 600 do Tailwind)
*   **Primary Accent Hover/Light:** `#3B82F6` (Blue 500)
*   **Texto Principal:** `#F9FAFB` (Gray 50)
*   **Texto Secundário / Labels:** `#9CA3AF` (Gray 400)
*   **Bordas:** `#27272A` (Zinc 800)

## 2. Tipografia
*   **Fonte Padrão:** Inter ou Roboto (Sans-serif).
*   **Títulos Grandes (Hero):** 24px (Mobile) a 32px (Desktop), Bold.
*   **Títulos de Cards:** 16px, Bold.
*   **Texto Secundário:** 12px a 14px, Regular.

## 3. Componentes Principais

### 3.1. Hero Card (Dia de Hoje)
*   **Fundo:** Azul primário sólido com cantos arredondados (rounded-xl).
*   **Conteúdo Left:** Label "DIA DE HOJE" (uppercase, opacidade), Dia da semana (Bold, tamanho grande), Subtítulo "X disciplinas com aula hoje".
*   **Conteúdo Right:** Badge com fundo azul mais claro, texto "AULAS" e o número em destaque.

### 3.2. Alert Banner
*   **Fundo:** Cinza escuro (bg-zinc-900).
*   **Borda Esquerda:** Borda sólida azul (border-l-4 border-blue-600) para destaque.
*   **Ícone:** Megafone.
*   **Texto:** Tamanho pequeno/médio, com negrito na palavra "sala de hoje".

### 3.3. Class Card (Aula)
*   **Fundo:** Cinza escuro com borda sutil.
*   **Layout:** Flexbox com `justify-between`.
*   **Esquerda:** Nome da Disciplina (Branco, Bold), Horário (Cinza, Regular).
*   **Direita:** Badge de Sala. Fundo azul semi-transparente ou cinza muito escuro com borda azul. Texto "SALA" (pequeno, azul) e o número da sala (grande, azul).

### 3.4. Barra de Navegação (Tabs)
*   **Estilo Pill:** Fundo preto/cinza muito escuro, cantos totalmente arredondados (`rounded-full`).
*   **Estados:** 
    *   *Ativo:* Fundo cinza médio (`bg-zinc-700`), texto branco.
    *   *Inativo:* Fundo transparente, texto cinza claro.
*   **Itens:** Hoje, Semana. (Ocultar "Mudanças" por enquanto).