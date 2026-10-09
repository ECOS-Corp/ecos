# Manutenção

## Fluxo recomendado

1. Leia o skill `.agents/skills/ecos-design-system/SKILL.md`.
2. Identifique tokens e padrões existentes antes de criar novos.
3. Implemente a alteração de forma responsiva.
4. Verifique o resultado em larguras próximas de 375px, 768px e 1280px.
5. Execute `npm run build`.
6. Atualize esta wiki quando houver uma decisão visual ou editorial nova.

## Onde alterar

- `src/styles.scss`: tokens globais, normalização e regras de documento.
- `src/app/app.component.scss`: layout e componentes da landing page.
- `src/app/app.component.html`: conteúdo e estrutura semântica.
- `src/app/app.component.ts`: comportamento do cabeçalho e menu.

## Critérios de aceite

Uma alteração está pronta quando compila, funciona em desktop e mobile, mantém a hierarquia visual, não quebra a navegação por âncoras e respeita acessibilidade e movimento reduzido.
