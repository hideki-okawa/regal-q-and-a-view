import Link from "next/link";
import { Button } from "semantic-ui-react";

export default function NewQuestionButton() {
	return (
		<Link href={`/questions/new`}>
			<Button content="無料相談 新しく投稿する" size="big" />
		</Link>
	);
}
