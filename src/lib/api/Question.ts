import Router from "next/router";
import axios from "axios";

import { QuestionList, Question } from "../../types/Question";

export async function fetchQuestions(): Promise<QuestionList> {
	const url = `${process.env.API_ENDPOINT}/api/questions`;
	return await axios
		.get(url)
		.then((resp) => {
			return resp.data;
		})
		.catch((e) => {
			console.error(e);
		});
}

export async function fetchQuestion(id: number): Promise<Question> {
	const url = `${process.env.API_ENDPOINT}/api/questions/${id}`;
	return await axios
		.get(url)
		.then((resp) => {
			return resp.data;
		})
		.catch((e) => {
			console.error(e);
		});
}

export async function postQuestion(
	userName: string,
	title: string,
	content: string
): Promise<any> {
	const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/questions`;
	return await axios
		.post(url, {
			user_name: userName,
			title: title,
			content: content,
		})
		.then(() => {
			Router.push("/");
			return;
		})
		.catch((e) => {
			console.error(e);
			return e;
		});
}
