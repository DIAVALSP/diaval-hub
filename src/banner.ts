export interface Banner {
  icon: string
  /** Linhas do banner — primeira recebe destaque, demais ficam mais discretas. */
  lines: string[]
}

// 28/09/2026: frase fixa, no texto do Jeff (ele preferiu uma contagem só, em vez de uma por prova).

/**
 * Mensagem informativa exibida no topo do portal.
 * Trocar conteúdo aqui quando a mensagem da semana mudar.
 */
export const BANNER: Banner = {
  icon: '🏁',
  lines: [
    'Faltam 30 dias para SARESP, Provão e ENEM!',
    'Agora é sprint final! 🚀 Traga universidades e universitários para inspirar a turma, confira com cada ' +
      'estudante onde ele faz o ENEM, aplique o simulado, passe as últimas dicas de prova e capriche no treino ' +
      'de redação. Meta da escola: ninguém fica de fora no dia da prova!',
  ],
}
