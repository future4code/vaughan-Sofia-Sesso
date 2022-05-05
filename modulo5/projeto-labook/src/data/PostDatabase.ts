import { GetPostByIdOutput, InterfacePostDatabase, Post } from '../model/Post'
import { convertDate } from '../utils/convertDate'
import { BaseDatabase } from './BaseDatabase'

export class PostDatabase extends BaseDatabase implements InterfacePostDatabase {
    private POST_TABLE = "labook_posts"

    public insertPost = async (post: Post): Promise<void> => {
        try {
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

    public selectPostById = async (postId: string): Promise<GetPostByIdOutput> => {
        try {
            const post: GetPostByIdOutput[] = await this.connection(this.POST_TABLE)
                .select(
                    'id',
                    'photo',
                    'description',
                    'type',
                    'created_at as createdAt',
                    'author_id as authorId'
                )
                .where({ id: postId })

            return post[0]
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