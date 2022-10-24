import QuestionHeader from "../atoms/QuestionHeader";

import { Question as QuestionType } from "../../types/Question";

type Props = {
	question: QuestionType;
};

export default function QuestionDetailContent(props: Props) {
	return (
		<>
			<QuestionHeader title={props.question.title} />
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
