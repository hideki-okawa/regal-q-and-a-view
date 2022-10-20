import type { NextPage, GetServerSideProps } from "next";

import Layout from "../components/Layout";
import QuestionList from "../components/organisms/QuestionList";

import fetchQuestions from "../lib/api/Questions";

type Props = {
	title: String;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const allPostsData = fetchQuestions();

	const props: Props = {
		title: allPostsData,
	};

	return { props: props };
};

const Home: NextPage<Props> = (props: Props) => {
	return (
		<Layout>
			{props.title}
			<QuestionList />
		</Layout>
	);
};

export default Home;
