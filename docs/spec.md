# Especificação do Produto: App Salas de Aula (MVP)

## 1. Visão Geral
Aplicação Web Progressiva (PWA) desenvolvida em Next.js para facilitar a consulta diária e semanal de salas de aula por alunos e professores. Foco em acesso rápido, "zero clique" e interface mobile-first.

## 2. Escopo do MVP
*   **Público-alvo:** Alunos e Professores (Visão pública unificada).
*   **Autenticação:** Nenhuma na V1. Todos visualizam a mesma tela.
*   **Dados:** Hardcoded em um arquivo JSON local, estruturado para migração futura (Supabase).
*   **Telas Ativas:** 
    *   `Hoje`: Exibe as aulas do dia atual do sistema.
    *   `Semana`: Exibe a grade completa distribuída em colunas por dia.
*   **Telas Inativas (V2):** `Mudanças`.

## 3. Estrutura de Dados (Mock)
Criar um arquivo `data/classes.json` ou exportar um array de objetos `mockData.ts`:

```typescript
export const classesData = [
  {
    "id": "1",
    "dia_semana": "Segunda-feira",
    "disciplina": "Desenvolvimento Back-End",
    "sala": "326",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "2",
    "dia_semana": "Segunda-feira",
    "disciplina": "Processos De Engenharia De Software",
    "sala": "316",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "3",
    "dia_semana": "Segunda-feira",
    "disciplina": "Arquitetura De Software",
    "sala": "325",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "4",
    "dia_semana": "Segunda-feira",
    "disciplina": "Algoritmos E Estruturas De Dados",
    "sala": "317",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "5",
    "dia_semana": "Segunda-feira",
    "disciplina": "Computação Em Nuvem, Containers E Devops",
    "sala": "318",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "6",
    "dia_semana": "Segunda-feira",
    "disciplina": "Programação Para Dispositivos Móveis",
    "sala": "317",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "7",
    "dia_semana": "Segunda-feira",
    "disciplina": "Desenvolvimento Multiplataforma",
    "sala": "327",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "8",
    "dia_semana": "Terça-feira",
    "disciplina": "Fundamentos De Programação Orientada à Objetos",
    "sala": "327",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "9",
    "dia_semana": "Terça-feira",
    "disciplina": "Desenvolvimento Back-End",
    "sala": "326",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "10",
    "dia_semana": "Terça-feira",
    "disciplina": "Algoritmos E Estruturas De Dados",
    "sala": "316",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "11",
    "dia_semana": "Terça-feira",
    "disciplina": "Processos De Engenharia De Software",
    "sala": "325",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "12",
    "dia_semana": "Terça-feira",
    "disciplina": "Fundamentos De Inteligência Artificial",
    "sala": "317",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "13",
    "dia_semana": "Quarta-feira",
    "disciplina": "Ux/Ui Design",
    "sala": "327",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "14",
    "dia_semana": "Quarta-feira",
    "disciplina": "Banco De Dados E Sql",
    "sala": "316",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "15",
    "dia_semana": "Quarta-feira",
    "disciplina": "Fundamentos De Programação Orientada à Objetos",
    "sala": "326",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "16",
    "dia_semana": "Quarta-feira",
    "disciplina": "Aplicações Front-End",
    "sala": "318",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "17",
    "dia_semana": "Quarta-feira",
    "disciplina": "Introdução À Ciência De Dados E Big Data",
    "sala": "317",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "18",
    "dia_semana": "Quinta-feira",
    "disciplina": "Lógica De Programação",
    "sala": "317",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "19",
    "dia_semana": "Quinta-feira",
    "disciplina": "Processos De Engenharia De Software",
    "sala": "326",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "20",
    "dia_semana": "Quinta-feira",
    "disciplina": "Banco De Dados E Sql",
    "sala": "318",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "21",
    "dia_semana": "Quinta-feira",
    "disciplina": "Banco De Dados E Nosql",
    "sala": "323",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "22",
    "dia_semana": "Quinta-feira",
    "disciplina": "Projeto De Desenvolvimento De Negócios",
    "sala": "327",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "23",
    "dia_semana": "Sexta-feira",
    "disciplina": "Aplicações Front-End",
    "sala": "326",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "24",
    "dia_semana": "Sexta-feira",
    "disciplina": "Qualidade E Testes De Software",
    "sala": "316",
    "modalidade": "Presencial",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "25",
    "dia_semana": "Sábado",
    "disciplina": "Projeto Tecnológico Em Desenvolvimento De Sistemas",
    "sala": "327",
    "modalidade": "Remoto Síncrono",
    "horario": "Horário Noturno - 19h00"
  },
  {
    "id": "26",
    "dia_semana": "Sábado",
    "disciplina": "Fundamentos De Inteligência Artificial",
    "sala": "326",
    "modalidade": "Remoto Síncrono",
    "horario": "Horário Noturno - 19h00"
  }
];
```
;