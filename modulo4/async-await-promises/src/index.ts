import { Subscriber, getAllSubscribersTyped } from './Exercício-3'
import { postNews } from './Exercício-4'
import { notifySubscribersPromiseAll } from './Exercício-6'
import { printMessage } from './desafio'

const getSubscribersIds = (subscribers: Subscriber[]) => {
    return subscribers.map(subscriber => {
        return subscriber.id
    })
}

const main = async (): Promise<void> => {
    try {
        await postNews(
            "Título da notícia",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius laudantium illum soluta aliquid distinctio veritatis deserunt assumenda aspernatur facere sapiente blanditiis labore ab autem a, nisi, voluptate ea quos."
        )
        const result = await getAllSubscribersTyped()
        const subscriberIds = getSubscribersIds(result)
        await notifySubscribersPromiseAll(subscriberIds)

    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}

// main()

printMessage()