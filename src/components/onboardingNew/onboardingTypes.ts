export type LineOfText = {
  line: string
}

export type Image = {
  path: string
  alt: string
}
export type Path = {
  path: string
}

export type OnboardingTypes = {
  name: string
  header?: string
  heading1?: string
  heading2?: string
  text: LineOfText[]
  image?: Image
  imgs?: Path[]
}
