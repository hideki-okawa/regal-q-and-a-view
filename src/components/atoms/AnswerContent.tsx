import { Header, Icon, Button } from "semantic-ui-react";

import { Answer as AnswerType } from "../../types/Answer";

type Props = {
	answer: AnswerType;
};

function Answer(props: Props) {
	if (props.answer.is_lawyer) {
		return (
			<>
				<Header as="h4">
					<Icon name="doctor" />
					<Header.Content>
						{props.answer.user_name} 弁護士
						{/* <Header.Subheader>Manage your preferences</Header.Subheader> */}
					</Header.Content>
				</Header>
				{/* {/* <p>{props.question.content}</p> */}
				<p>{props.answer.comment}</p>
				<Button
					content="Like"
					icon="thumbs up outline"
					label={{ as: "a", basic: true, content: props.answer.helpful_count }}
					labelPosition="right"
					size="tiny"
				/>
			</>
		);
	}
	return (
		<>
			<Header as="h4">
				<Icon name="user" />
				<Header.Content>
					{props.answer.user_name} さん
					{/* <Header.Subheader>Manage your preferences</Header.Subheader> */}
				</Header.Content>
			</Header>
			<p>{props.answer.comment}</p>
			<p>{props.answer.created_at.toString()}</p>
		</>
	);
}

export default function QuestionContent(props: Props) {
	return (
		<>
			<Answer answer={props.answer} />
		</>
	);
}
