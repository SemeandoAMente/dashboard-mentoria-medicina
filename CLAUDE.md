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
- **[2026-03-14] Análise de 980 questões STRIX feita (analisar_strix.py + strix_resultado.txt)**
- **[2026-03-14] 5 ajustes críticos aplicados no cronograma (WEEKS_DATA em app.js):**
  1. Semana 5 Bio: adicionado **Botânica/Zoologia** junto com Ecologia + Evolução (19% das questões de Bio)
  2. Semana 8 Física: adicionado **Física Moderna/Radioatividade** (meia-vida, fissão, fusão, efeito fotoelétrico)
  3. Semana 5 Mat: adicionado **Juros/Porcentagem** explicitamente junto com PA/PG
  4. Semana 5 Hist: adicionado **Antiguidade/Medievalidade** junto com Mundo Contemporâneo I
  5. Semana 6 Ling: substituído "Leitura IV" por **Gramática Inglesa + Vocabulário** (46% das questões de LE)
  - Também adicionadas entradas correspondentes em TOPICOS_POR_MATERIA para todos os novos tópicos
- **[2026-03-14] Botões C/Q/P/D no Progresso por Semana** unificados com Status de Execução (mesmo appState.checks)
- **[2026-03-14] Cronograma expandido de 12 para 13 semanas** (prova 14/06/2026, início 16/03/2026):
  - Quím Estrutura Atômica → 2 semanas (I: tabela/config.eletrônica; II: Ligações Químicas)
  - Mat Álgebra → 2 semanas (I: equações+sistemas; II: logaritmo+exponencial)
  - Bio semana 9 → dividida (sem.9: Botânica+Ecologia; sem.10: Evolução)
  - Fís Moderna → semana própria (sem.9), separada do Eletromagnetismo (sem.8)
  - Hist redistribuída: Revoluções Modernas (s5), Mundo Contemp. I/1ªGuerra (s7), 2ªGuerra+GF (s8), Antiguidade (s10)
  - Semana 13 = Revisão Final (nova)
  - getCurrentWeek() atualizado para Math.min(13)
  - TOPICOS_POR_MATERIA atualizado com todas as novas chaves

## Regras importantes
- Sempre que fizer mudança: git add, commit e push origin main
- A Vercel atualiza automaticamente em 30 segundos após o push
- Não commitar a pasta atualização/
- O arquivo app.js é o principal — toda lógica está nele
