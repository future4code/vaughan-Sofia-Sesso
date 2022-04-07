import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import connection from './connection'

const app = express()

app.use(express.json())
app.use(cors())

// Requisições:

// Tabela Actor:
// PEGA QUANTIDADE DE ATORES DE UM GENDER
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = String(req.query.gender)
        res.status(200).send(await getActorCountByGender(gender))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// PEGA INFO DO ATOR POR ID
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await getActorById(req.params.id))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// PEGA QUANTIDADE DE ATORES DIVIDO POR GRUPOS DE GENDER
app.get("/actors/count", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await getActorCountByGenderGroup())
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// PEGA INFO DO ATOR PELO NOME
app.get("/actors/info/:name", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await getActorByName(req.params.name))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// PEGA MÉDIA DE SALÁRIOS DEPENDENDO DO GENDER
app.get("/actors/salaryAvg/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender
        res.status(200).send(await getSalaryAverageByGender(gender))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// ATUALIZA SALÁRIO DO ATOR PELO ID
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

// DELETA ATOR DA LISTA PELO ID
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

// Tabela Movies:
// PEGA TODOS OS FILMES, COM 15 ITENS NO MÁXIMO
app.get("/movies/all", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await getAllMovies())
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// PEGA FILME DE ACORDO COM UMA BUSCA NO TÍTULO OU SINOPSE
app.get("/movies/search", async (req: Request, res: Response) => {
    try {
        const query = String(req.query.query)
        res.status(200).send(await getMovieBySearch(query))
    }
    catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// CRIA FILME
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

// Funções:
const getActorByName = async (name: string): Promise<void> => {
    const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = "${name}"
        `)
    return result[0]
}

const getActorCountByGenderGroup = async (): Promise<void> => {
    const result = await connection.raw(`
        SELECT COUNT(*), gender
        FROM Actor
        GROUP BY gender
    `)
    return result[0]
}

const updateActorSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary })
        .where({ id })
}

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id })
}

const getSalaryAverageByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg('salary as salaryAverage')
        .where({ gender })

    return result[0]
}

const getActorById = async (id: string): Promise<void> => {
    const result = await connection("Actor")
        .where({ id })

    return result[0]
}

const getActorCountByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .count()
        .where({ gender })

    return result
}

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

const getAllMovies = async (): Promise<any> => {
    const result = await connection("Movies")
    return result
}

const getMovieBySearch = async (query: string): Promise<any> => {
    const result = await connection("Movies")
        .where('title', 'like', `%${query}%`)
        .orWhere('synopsis', 'like', `%${query}%`)
        .orderBy('release_date', 'asc')

    return result
}

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})