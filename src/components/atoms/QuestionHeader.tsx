import { Header, Icon } from "semantic-ui-react";

type Props = {
	title: string;
};

export default function MainHeader(props: Props) {
	return (
		<>
			<Header as="h3">
				<Icon name="question" />
				<Header.Content>{props.title}</Header.Content>
			</Header>
		</>
	);
}
