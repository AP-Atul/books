import { init } from './server'

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`)
})

process.on('unhandledRejection', (reason: string) => {
  console.error(`unhandledRejection ${reason}`)
})

const start = async () => {
  try {
    const server = await init()
    await server.start()
    console.log('Server running at: ', server.info.uri)
  } catch (err: unknown) {
    console.error('Error starting server: ', err)
    throw err
  }
}

start()
