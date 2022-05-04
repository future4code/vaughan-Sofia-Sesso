import { InterfacePostDatabase, Post } from '../model/Post'
import { BaseDatabase } from './BaseDatabase'

export class PostDatabase extends BaseDatabase implements InterfacePostDatabase {
    private POST_TABLE = "labook_posts"

    public insertPost = async (post: Post): Promise<void> => {
        try {
            console.log(post)
            await this.connection(this.POST_TABLE)
                .insert(post)
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }
}