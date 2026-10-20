export interface Banner {
  icon: string
  /** Linhas do banner — primeira recebe destaque, demais ficam mais discretas. */
  lines: string[]
}

// 20/10/2026: reforço do Simulado do ENEM da 3ª série (prazo da Jornada do Provão: cartões lidos até 23/10).

/**
 * Mensagem informativa exibida no topo do portal.
 * Trocar conteúdo aqui quando a mensagem da semana mudar.
 */
export const BANNER: Banner = {
  icon: '📝',
  lines: [
    'Simulado do ENEM: a 3ª série tem até sexta, 23/10, para fazer a prova!',
    'Garanta que todo estudante da 3ª série faça os dois dias: Dia 1 com Linguagens, Humanas e Redação, e Dia 2 ' +
      'com Natureza e Matemática. O cartão-resposta lido até 23/10 conta para a Jornada do Provão. Depois, use o ' +
      'resultado para revisar com a turma antes do ENEM, em 8 e 15/11.',
  ],
}
