// a)

type Post = {
    autor: string,
    texto: string
}

export const posts: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

// b) As entradas da função são a array posts, que é uma array com valores do tipo Post e o autorInformado que é to tipo string. A saída da
// da função é um array com valores do tipo Post também.

export function buscarPostsPorAutor(posts: Post[], autorInformado: string): Post[] {
    return posts.filter(
        (post: Post) => {
            return post.autor === autorInformado
        }
    )
}