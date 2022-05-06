import { GetPostLikeOutput, GetPostOutput, InterfacePostDatabase, LikePostInput, Post, PostCommentInput } from '../model/Post'
import { BaseDatabase } from './BaseDatabase'

export class PostDatabase extends BaseDatabase implements InterfacePostDatabase {
    private POST_TABLE = "labook_posts"
    private FRIENDSHIP_TABLE = "labook_friendships"
    private LIKE_TABLE = "labook_post_likes"
    private COMMENT_TABLE = "labook_post_comments"

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

    public getFriendsPosts = async (id: string, offset: number): Promise<GetPostOutput[]> => {
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
                .orderBy('created_at', 'DESC')
                .limit(5)
                .offset(offset)

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

    public getPostsByType = async (type: string): Promise<GetPostOutput[]> => {
        try {
            const posts: GetPostOutput[] = await this.connection(this.POST_TABLE)
                .where({ type })
                .select(
                    'id',
                    'photo',
                    'description',
                    'type',
                    'created_at as createdAt',
                    'author_id as authorId'
                )
                .orderBy('created_at', 'DESC')

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

    public getPostLike = async (userId: string, postId: string): Promise<GetPostLikeOutput> => {
        try {
            const postLike: GetPostLikeOutput[] = await this.connection(this.LIKE_TABLE)
                .where({ user_id: userId })
                .andWhere({ post_id: postId })

            return postLike[0]
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

    public insertComment = async (input: PostCommentInput): Promise<void> => {
        try {
            await this.connection(this.COMMENT_TABLE)
                .insert({
                    id: input.id,
                    author_id: input.userId,
                    post_id: input.postId,
                    comment: input.comment
                })
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

    public insertLike = async (input: LikePostInput): Promise<void> => {
        try {
            await this.connection(this.LIKE_TABLE)
                .insert({
                    id: input.id,
                    user_id: input.userId,
                    post_id: input.postId
                })
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

    public insertDislike = async (id: string): Promise<void> => {
        try {
            await this.connection(this.LIKE_TABLE)
                .update({ liked: 0 })
                .where({ id })
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