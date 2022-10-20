import { Item } from "semantic-ui-react";

import SubHeader from "../atoms/SubHeader";
import Question from "../molecules/Question";

export default function QuestionList() {
	return (
		<>
			<SubHeader title="法律Q&A一覧" />
			<Item.Group>
				<Question />
			</Item.Group>
		</>
	);
}
