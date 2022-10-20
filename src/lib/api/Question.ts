import axios from "axios"

import {QuestionList} from "../../types/Question"

export default async function fetchQuestions(): Promise<QuestionList> {
    const url = `${process.env.API_ENDPOINT}/api/questions`
    return await axios.get(url)
        .then((resp)=>{
            return resp.data;
        })
        .catch((e) => {
            console.error(e)
        })
}