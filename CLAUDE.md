# Dashboard Mentoria Medicina — Contexto do Projeto

## Deploy
- URL: https://dashboard-mentoria-medicina.vercel.app
- Hospedagem: Vercel (deploy automático ao push na branch main)
- Repositório: https://github.com/SemeandoAMente/dashboard-mentoria-medicina

## Stack
- HTML5 + CSS3 + JavaScript Vanilla (sem framework)
- Firebase Realtime Database para salvar progresso na nuvem
- localStorage como fallback offline

## Firebase
- URL do banco: https://mentoria-medicina-default-rtdb.firebaseio.com
- Chave da aluna: aluna_principal
- Função de sync: syncFromFirebase() chamada no DOMContentLoaded

## O que já foi feito
- Física corrigida como Âncora/Prioridade Máxima (igual Bio e Quím)
- Bug do clique no checklist corrigido (função handleCheckClick duplicada removida)
- Toast verde "✓ Progresso salvo" aparece ao marcar tarefa
- Badge azul "☁️ Progresso sincronizado" aparece ao carregar dados do Firebase
- Aviso de localStorage no topo da tela
- Banner para definir data de início do cronograma
- Semana atual calculada automaticamente pela data de início
- Pasta atualização/ no .gitignore

## Regras importantes
- Sempre que fizer mudança: git add, commit e push origin main
- A Vercel atualiza automaticamente em 30 segundos após o push
- Não commitar a pasta atualização/
- O arquivo app.js é o principal — toda lógica está nele
