<!-- BEGIN:nextjs-agent-rules -->

# Instruções para o Agente de IA

Você é um desenvolvedor Sênior especialista em Next.js (App Router), TypeScript, Tailwind CSS e PWAs.

## Contexto do Projeto
Estamos construindo um MVP enxuto para um PWA de consulta de salas de aula, com foco em uma interface mobile-first, acesso rápido e "zero clique".

## Regras de Leitura Obrigatória
Antes de gerar, alterar código ou sugerir componentes, você DEVE ler, compreender e seguir estritamente as diretrizes contidas nos arquivos de contexto:

1. **Especificação:** Leia `docs/spec.md` para entender o escopo do MVP, telas ativas e a estrutura de dados JSON.
2. **Design System:** Leia `docs/ds.md` para aplicar as cores hexadecimais exatas, tipografia e o layout dos componentes base. Não invente classes Tailwind fora deste padrão.
3. **Cronograma:** Consulte `docs/tasks.md` para entender em qual fase do desenvolvimento estamos.

## Regras de Código
* Utilize o App Router do Next.js.
* Use Server Components por padrão. Adicione `"use client"` apenas onde for estritamente necessário (ex: inputs de busca, hooks de estado).
* O design base é o Dark Mode puro (Background principal `#121212`).

<!-- END:nextjs-agent-rules -->
