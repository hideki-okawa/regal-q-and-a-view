import { Container } from "semantic-ui-react";

import IconHeader from "../atoms/IconHeader";
import QuestionContent from "../atoms/QuestionContent";

import { Question as QuestionType } from "../../types/Question";

type Props = {
	question: QuestionType;
};

export default function QuestionDetailContent(props: Props) {
	return (
		<>
			<Container text>
				<IconHeader title={props.question.title} />
				<QuestionContent content={props.question.content} />
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
