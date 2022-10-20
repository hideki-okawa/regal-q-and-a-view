import { Header, Icon } from "semantic-ui-react";
import Link from "next/link";

export default function MainHeader() {
	return (
		<>
			<Link href="/answers/answer">
				<Header as="h1">
					<Icon name="handshake outline" />
					<Header.Content>
						Regal Q&A
						<Header.Subheader>
							弁護士に無料相談できる「法律Q&A」
						</Header.Subheader>
					</Header.Content>
				</Header>
			</Link>
		</>
	);
}
