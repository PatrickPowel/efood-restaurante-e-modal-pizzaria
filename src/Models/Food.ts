class Food {
  title: string
  id: number
  nota: number
  description: string
  image: string
  infos: string[]
  system: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    nota: number // 👈 adicione aqui
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.nota = nota // 👈 inicializa aqui
  }
}

export default Food
