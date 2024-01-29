import express from "express"

interface ServerData {
    PORT: number,
    NAME_SERVER: string
}

const serverData: ServerData[] = [
    {
        PORT: 4408,
        NAME_SERVER: 'http://localhost:'
    }
]

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, world')
})

try {
    {serverData.map((serverData) => (
        app.listen(serverData.PORT, () => {
            console.log(`\nServer running by address: ${serverData.NAME_SERVER + serverData.PORT}`,  )
        })
    ))}
} catch (error) {
    console.error('Error in: ', error);
}