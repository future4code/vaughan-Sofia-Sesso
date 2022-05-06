import { GetPostOutput, InterfacePostDatabase, Post } from '../model/Post'
import { BaseDatabase } from './BaseDatabase'

export class PostDatabase extends BaseDatabase implements InterfacePostDatabase {
    private POST_TABLE = "labook_posts"
    private FRIENDSHIP_TABLE = "labook_friendships"

    public selectPostById = async (postId: string): Promise<GetPostOutput> => {
        try {
            const post: GetPostOutput[] = await this.connection(this.POST_TABLE)
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


    public getFriendsPosts = async (id: string): Promise<GetPostOutput[]> => {
        try {
            const posts: GetPostOutput[] = await this.connection(this.FRIENDSHIP_TABLE)
                .where({ user_id: id })
                .join(this.POST_TABLE, { 'friend_id': 'author_id' })
                .select(
                    `${this.POST_TABLE}.id as id`,
                    'photo',
                    'description',
                    'type',
                    'created_at as createdAt',
                    'author_id as authorId'
                )

            return posts
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

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
}