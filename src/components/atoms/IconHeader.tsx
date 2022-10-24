import { Header, Icon } from "semantic-ui-react";

type Props = {
	title: string;
};

export default function IconHeader(props: Props) {
	return (
		<>
			<Header as="h2" dividing>
				<Icon name="question" />
				<Header.Content>{props.title}</Header.Content>
			</Header>
		</>
	);
}
