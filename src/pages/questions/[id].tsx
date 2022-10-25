import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import QuestionDetailContent from "../../components/organisms/QuestionDetailContent";

import { fetchQuestion } from "../../lib/api/Question";
import { fetchQuestionAnswers } from "../../lib/api/Answer";

import { Question as QuestionType } from "../../types/Question";
import { AnswerList } from "../../types/Answer";

type Props = {
	question: {
		question: QuestionType;
	};
	answers: AnswerList;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	let question: QuestionType = {
		id: 0,
		title: "",
		content: "",
		user_name: "",
		created_at: new Date(),
	};

	await fetchQuestion(Number(id)).then((data) => {
		question = data;
	});

	let answers: AnswerList = { answers: [] };

	await fetchQuestionAnswers(Number(id)).then((data) => {
		answers = data;
	});

	const props: Props = {
		question: question,
		answers: answers,
	};
	return { props: props };
};

export default function QuestionDetail(props: Props) {
	return (
		<Layout>
			<QuestionDetailContent
				question={props.question.question}
				answers={props.answers.answers}
			/>
		</Layout>
	);
}
