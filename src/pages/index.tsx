import type { NextPage, GetServerSideProps } from "next";

import Layout from "../components/Layout";
import QuestionList from "../components/organisms/QuestionList";
import NewQuestionButton from "../components/atoms/NewQuestionButton";

import { fetchQuestions } from "../lib/api/Question";

import { QuestionList as QuestionArray } from "../types/Question";

type Props = {
	questionList: QuestionArray;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let questionList: QuestionArray = { questions: [] };

	await fetchQuestions().then((data) => {
		questionList = data;
	});
	const props: Props = {
		questionList: questionList,
	};
	return { props: props };
};

const Home: NextPage<Props> = (props: Props) => {
	return (
		<Layout>
			<NewQuestionButton />
			<QuestionList questions={props.questionList.questions} />
		</Layout>
	);
};

export default Home;
