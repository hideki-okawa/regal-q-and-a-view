export type Question = {
    id: number
    title: string
    content: string
    user_name: string
    created_at: Date
}

export type QuestionList = {
    questions: Question[]
}