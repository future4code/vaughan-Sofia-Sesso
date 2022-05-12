export class Recipe {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public createdAt: string,
        private creatorId: string
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
        this.creatorId = creatorId
    }

    public getCreatorId = (): string => {
        return this.creatorId
    }
}