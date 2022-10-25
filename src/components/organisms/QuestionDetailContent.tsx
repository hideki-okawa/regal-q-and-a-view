import { Container } from "semantic-ui-react";

import IconHeader from "../atoms/IconHeader";
import QuestionContent from "../atoms/QuestionContent";

import { Question as QuestionType } from "../../types/Question";
import { Answer } from "../../types/Answer";

type Props = {
	question: QuestionType;
	answers: Answer[];
};

export default function QuestionDetailContent(props: Props) {
	return (
		<>
			<Container>
				<IconHeader title={props.question.title} icon="question" />
				<QuestionContent question={props.question} />
				<IconHeader title="弁護士からの回答タイムライン" icon="answer" />
				{props.answers.map((answer) => {
					return <div>{answer.comment}</div>;
				})}
			</Container>
			{/* <Item.Group>
				{props.questions.map((question) => {
					return (
						<Question
							id={question.id}
							title={question.title}
							content={question.content}
							user_name={question.user_name}
							created_at={question.created_at}
						/>
					);
				})}
			</Item.Group> */}
		</>
	);
}
