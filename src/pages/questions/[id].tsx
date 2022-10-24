import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import QuestionDetailContent from "../../components/organisms/QuestionDetailContent";

import { fetchQuestion } from "../../lib/api/Question";

import { Question as QuestionType } from "../../types/Question";

type Props = {
	question: {
		question: QuestionType;
	};
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
	const props: Props = {
		question: question,
	};
	return { props: props };
};

export default function QuestionDetail(props: Props) {
	return (
		<Layout>
			<QuestionDetailContent question={props.question.question} />
		</Layout>
	);
}
