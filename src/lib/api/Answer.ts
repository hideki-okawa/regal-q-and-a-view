import axios from "axios"

import {AnswerList} from "../../types/Answer"

export async function fetchQuestionAnswers(question_id: number): Promise<AnswerList> {
    const url = `${process.env.API_ENDPOINT}/api/questions/${question_id}/answers`
    return await axios.get(url)
        .then((resp)=>{
            return resp.data;
        })
        .catch((e) => {
            console.error(e)
        })
}