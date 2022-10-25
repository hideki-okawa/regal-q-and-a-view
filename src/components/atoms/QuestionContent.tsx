import { Question as QuestionType } from "../../types/Question";

type Props = {
	question: QuestionType;
};

export default function QuestionContent(props: Props) {
	return (
		<>
			<p>公開日時: {props.question.created_at}</p>
			<p>{props.question.content}</p>
			<p>{props.question.user_name} さん</p>
		</>
	);
}
