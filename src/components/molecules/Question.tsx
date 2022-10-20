import { Item, Divider } from "semantic-ui-react";
import Link from "next/link";

import { Question as QuestionType } from "../../types/Question";

type Props = QuestionType;

export default function Question(props: Props) {
	return (
		<>
			<Item>
				<Item.Content>
					<Item.Header as="a">
						<Link href="/answers/answer">{props.title}</Link>
					</Item.Header>
					<Item.Meta>{props.created_at.toString()}</Item.Meta>
					<Item.Meta>{props.user_name}</Item.Meta>
				</Item.Content>
			</Item>
			<Divider />
		</>
	);
}
