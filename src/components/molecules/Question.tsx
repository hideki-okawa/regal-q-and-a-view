import { Item, Divider } from "semantic-ui-react";
import Link from "next/link";

export default function Question() {
	return (
		<>
			<Item>
				<Item.Content>
					<Item.Header as="a">
						<Link href="/answers/answer">退学を取り消してもらえますか？</Link>
					</Item.Header>
					<Item.Meta>2022/10/20</Item.Meta>
				</Item.Content>
			</Item>
			<Divider />
		</>
	);
}
