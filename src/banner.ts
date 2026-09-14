export interface Banner {
  icon: string
  /** Linhas do banner — primeira recebe destaque, demais ficam mais discretas. */
  lines: string[]
}

/**
 * Mensagem informativa exibida abaixo de "Próximas avaliações".
 * Trocar conteúdo aqui quando a mensagem da semana mudar.
 */
export const BANNER: Banner = {
  icon: '💡',
  lines: [
    'Chegou a Jornada do Provão Paulista 2026! Mobilize as turmas do Ensino Médio rumo à universidade pública.',
    'Aprendizagem, mobilização e ingresso no ensino superior: acompanhe a evolução da sua escola em cada etapa da jornada.',
  ],
}
