# 04_FLUXO_DE_PERSISTENCIA

Atualizado em: **19/03/2026 14:32:37**

## Checklist de auditoria

1. Identificar função que altera estado.
2. Identificar função que salva localmente.
3. Identificar função que sincroniza remotamente.
4. Identificar função que reidrata no reload.
5. Verificar se `false` consegue prevalecer sobre `true`.
6. Verificar se a UI reposiciona a semana ativa indevidamente.
