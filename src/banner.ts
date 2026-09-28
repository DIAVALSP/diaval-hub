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
    'É hora das últimas ações de mobilização, com eventos com universidades e universitários. ' +
      'Confira onde cada estudante vai fazer o ENEM e organize a ida no dia da prova. Aplique o simulado, ' +
      'dê as últimas dicas de estratégia de prova e reforce a redação: ela pesa no Provão da 3ª série e no ENEM. ' +
      'Cada estudante presente faz diferença.',
  ],
}
