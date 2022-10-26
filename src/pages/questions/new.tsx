import Layout from "../../components/Layout";

import QuestionForm from "../../components/organisms/QuestionForm";
import SubHeader from "../../components/atoms/SubHeader";

export default function NewQuestion() {
	return (
		<Layout>
			<SubHeader title="相談内容の入力" />
			<QuestionForm />
		</Layout>
	);
}
