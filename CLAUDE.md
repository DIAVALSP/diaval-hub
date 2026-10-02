# Portal DIAVAL (diaval-hub) — Contexto

> Página única (React 19 + Vite + TS) que reúne os acessos rápidos da DIAVAL. No ar em **https://diaval-hub.vercel.app** (projeto Vercel `diaval-hub`, scope `diaval-seduc-sp`). Fica em `C:\dev\home` (FORA do OneDrive de propósito — deploy da pasta inteira do OneDrive já travou o PC).

## Estrutura
- **Tudo que aparece vem de [`src/cards.ts`](src/cards.ts)** — um array `CARDS` (adicionar/remover = editar 1 arquivo). Cada card: `{id, icon, label, description, url, group, disabled?, badge?}`.
- Grupos (`GROUPS`): `seduc` ("SEDUC — Sistemas oficiais"), `dashboards` ("Dashboards DIAVAL"), `drive` ("Drive DIAVAL — Avaliações 2026").
- `src/App.tsx`: no topo o grupo **drive**; embaixo, uma `.c-home-top-row` com **dashboards** (esquerda) e **seduc** (direita) lado a lado.
- Layout em `src/styles.css`:
  - `.c-home-top-row` = grid `2fr 1fr` (02/10: voltou de meio a meio para 2/3 + 1/3, porque os dashboards viraram 4).
  - `.c-home-section-dashboards .c-home-grid` = 4 colunas · `.c-home-section-seduc` = 2 colunas → **dash=4 e sistemas=2 na mesma linha**, cards de tamanho parecido. Se os dashboards voltarem a 3, o layout de 28/09 era `1fr 1fr` com 3 + 3 colunas (2 cards + 1 vazio nos sistemas).
  - `.c-home-section-drive .c-home-grid` = 5 colunas (10 cards = 5 + 5).

## Estado atual dos cards (02/10/2026)
- **seduc (2):** Escola Total · Atendimento. *(Repositório SEDUC foi removido.)*
- **dashboards (4):** Inscrições ENEM 2026 · Painel da Jornada do Provão (https://jornada-provao.vercel.app) · **Simulado SARESP 2º ano EF** (https://simulado-saresp-2ef.vercel.app, entrou em 14/09) · **SARESP 2026** (https://saresp26-gzfncd52.manus.space, entrou em 02/10 a pedido do Jeff: painel de recursos, manuais e formações para supervisores, hospedado no Manus, fora da Vercel da DIAVAL).
- **Próximas avaliações** (`src/calendar.ts`, 28/09/2026): uma linha por ano/série, com as datas da tabela de
  avaliações do Painel da Jornada do Provão (`S:2026_jornada_provao\jornada-provao\index.html`, const `AVAL`).
  Recuperação (7-11/dez) vem do Calendário Pedagógico. Se a Jornada mudar data, mudar aqui também.
- **Faixa laranja** (`src/banner.ts`): frase FIXA do Jeff, "Faltam 30 dias para SARESP, Provão e ENEM!" (28/09). Não se atualiza sozinha:
  trocar à mão quando a mensagem mudar.
- **Avaliação Diagnóstica 2026.2 saiu do portal em 28/09/2026**, a pedido do Jeff. O app segue em aplicacao-avd2.vercel.app.
- **Copa da Escola saiu do portal em 14/09/2026**, a pedido do Jeff. O app continua no ar em copadaescola.vercel.app; só não é mais linkado daqui. A pasta "3. Copa da Escola" do Drive continua.
- **drive (10):** espelham a pasta-mãe do Drive **"Avaliações 2026"** (`17iWi6gCTiRm__L-GGTDaZA-CmLUPBy8I`): 1 Prova Paulista · 2 Tarefa SP · 3 Copa da Escola · 4 SARESP 2º ano EF · 5 SARESP 3ª Série EM · 6 SARESP 5º-9º ano EF · 7 Jornada Provão Paulista · 8 Lives DIAVAL · 9 SAEB · 10 Simulados SARESP, Provão e ENEM (`1N3PaTaAPLhwg-mphLdrm3zy_rQSYFx5w`, entrou em 28/09 a pedido do Jeff).
- ⚠️ **Commitar antes de deployar.** Em 14/09 havia 5 arquivos alterados, já publicados desde 20/08 e nunca commitados (commit `a14c505` registrou). Deploy sai da pasta local, não do git: o que está no ar pode divergir do GitHub sem aviso.

## Como resincronizar os cards do Drive
As pastas do Drive mudam de nome/número. Para atualizar:
1. Via MCP do Google Drive: `search_files` com `parentId = '17iWi6gCTiRm__L-GGTDaZA-CmLUPBy8I' and mimeType = 'application/vnd.google-apps.folder'`.
2. Casar título/URL de cada subpasta com os cards `group: 'drive'` em `src/cards.ts` (a URL é `https://drive.google.com/drive/folders/<id>`).
3. Rebuild + deploy (abaixo).

## Rodar / build / deploy
```bash
npm run dev      # local, http://localhost:5173
npm run build    # gera dist/ (tsc -b && vite build)
vercel deploy --prod --yes --scope diaval-seduc-sp   # projeto já linkado (.vercel/)
```
O deploy faz alias automático para https://diaval-hub.vercel.app. Como `C:\dev\home` já está fora do OneDrive, pode deployar a pasta direto (o Vercel builda).

## Notas
- Sem env vars no deploy; CSS do design-system inlinado em `src/design-system.css`.
- Ver também README.md (stack e origem).
