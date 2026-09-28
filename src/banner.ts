export interface Banner {
  icon: string
  /** Linhas do banner — primeira recebe destaque, demais ficam mais discretas. */
  lines: string[]
}

/** Dias corridos de hoje até a data (AAAA-MM-DD), pelo calendário local. */
function diasAte(iso: string, hoje: Date = new Date()): number {
  const [a, m, d] = iso.split('-').map(Number)
  const alvo = new Date(a, m - 1, d)
  const base = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
  return Math.round((alvo.getTime() - base.getTime()) / 86_400_000)
}

// 28/09/2026: reta final (pedido do Jeff). Primeiro dia de cada prova, conforme src/calendar.ts.
// Prova que já começou sai da contagem.
const PROVAS: [string, string][] = [
  ['o SARESP', '2026-10-29'],          // 9º ano EF abre o SARESP
  ['o Provão Paulista', '2026-11-04'], // 3ª série EM abre o Provão
  ['o ENEM', '2026-11-08'],
]
const partes = PROVAS.map(([nome, iso]) => [nome, diasAte(iso)] as const)
  .filter(([, n]) => n > 0)
  .map(([nome, n]) => `${n} ${n === 1 ? 'dia' : 'dias'} para ${nome}`)
const CONTAGEM = partes.length === 0 ? ''
  : ` ${partes.length === 1 && partes[0].startsWith('1 ') ? 'Falta' : 'Faltam'} ` +
    (partes.length === 1 ? partes[0] : partes.slice(0, -1).join(', ') + ' e ' + partes[partes.length - 1]) + '.'

/**
 * Mensagem informativa exibida no topo do portal.
 * Trocar conteúdo aqui quando a mensagem da semana mudar.
 */
export const BANNER: Banner = {
  icon: '🏁',
  lines: [
    `Reta final para o SARESP, o Provão Paulista e o ENEM!${CONTAGEM}`,
    'É hora das últimas ações de mobilização, com eventos com universidades e universitários. ' +
      'Confira onde cada estudante vai fazer o ENEM e organize a ida no dia da prova. Aplique o simulado, ' +
      'dê as últimas dicas de estratégia de prova e reforce a redação: ela pesa no Provão da 3ª série e no ENEM. ' +
      'Cada estudante presente faz diferença.',
  ],
}
