### Exercício 1:
a) A resposta que recebemos quando usamos o raw é um array que tem como primeiro elemento as informações que estamos buscando na tabela. O segundo elemento desse array é outro array com informações sobre cada coluna da tabela.\

b)
```
const getActorByName = async (name: string): Promise<void> => {
    const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = "${name}"
        `)
    return result[0]
}
```

c)
```
const getActorCountByGenderGroup = async (): Promise<void> => {
    const result = await connection.raw(`
        SELECT COUNT(*), gender
        FROM Actor
        GROUP BY gender
    `)
    return result[0]
}
```

### Exercício 2:
a)
```
const updateActorSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary: salary })
        .where({ id: id })
}
```

b)
```
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id: id })
}
```

c)
```
const getSalaryAverageByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg('salary as salaryAverage')
        .where({ gender })

    return result[0]
}
```

### Exercício 3:
a)
```
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await getActorById(req.params.id))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const getActorById = async (id: string): Promise<void> => {
    const result = await connection("Actor")
        .where({ id })

    return result[0]
}
```

b)
```
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = String(req.query.gender)
        res.status(200).send(await getActorCountByGender(gender))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const getActorCountByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .count()
        .where({ gender })

    return result
}
```

### Exercício 4:
a)
```
app.put("/actors", async (req: Request, res: Response) => {
    try {
        const id: string = req.body.id
        const salary: number = req.body.salary
        await updateActorSalary(id, salary)
        res.status(200).send(`Salário do ator com id ${id} atualizado com sucesso!`)
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const updateActorSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary })
        .where({ id })
}
```

b)
```
app.delete("/actors/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await deleteActor(id)
        res.status(200).send(`Ator com id ${id} deletado com sucesso!`)
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id })
}
```

### Exercício 5:
```
app.post("/movies", async (req: Request, res: Response) => {
    try {
        const { id, title, synopsis, releaseDate, rating, playingLimitDate } = req.body

        await createMovie(id, title, synopsis, releaseDate, rating, playingLimitDate)
        res.status(201).send("Filme criado com sucesso!")
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: string,
    rating: number,
    playingLimitDate: string
): Promise<void> => {
    await connection("Movies")
        .insert({
            id,
            title,
            synopsis,
            release_date: releaseDate,
            rating,
            playing_limit_date: playingLimitDate
        })
}
```

### Exercício 6:
```
app.get("/movies/all", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await getAllMovies())
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const getAllMovies = async (): Promise<any> => {
    const result = await connection("Movies")
    return result
}
```

### Exercício 7:
```
app.get("/movies/search", async (req: Request, res: Response) => {
    try {
        const query = String(req.query.query)
        res.status(200).send(await getMovieBySearch(query))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

const getMovieBySearch = async (query: string): Promise<any> => {
    const result = await connection("Movies")
        .where('title', 'like', `%${query}%`)
        .orWhere('synopsis', 'like', `%${query}%`)
        .orderBy('release_date', 'asc')

    return result
}
```