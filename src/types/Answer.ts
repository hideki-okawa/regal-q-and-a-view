export type Answer = {
    id: number
    question_id: number
    comment: string
    user_name: string
    is_lawyer: boolean
    helpful_count: number
    created_at: Date
}

export type AnswerList = {
    answers: Answer[]
}