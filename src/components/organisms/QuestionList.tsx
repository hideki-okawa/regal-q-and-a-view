import { Item } from "semantic-ui-react";

import SubHeader from "../atoms/SubHeader";
import Question from "../molecules/Question";
import { Question as QuestionType } from "../../types/Question";

type Props = {
	questions: QuestionType[];
};

export default function QuestionList(props: Props) {
	return (
		<>
			<SubHeader title="法律Q&A一覧" />
			<Item.Group>
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
			</Item.Group>
		</>
	);
}
