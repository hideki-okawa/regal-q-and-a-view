import { Header, Icon } from "semantic-ui-react";

type Props = {
	title: string;
	icon: string;
};

type IconProps = {
	name: string;
};

function HeaderIcon(props: IconProps) {
	switch (props.name) {
		case "question":
			return <Icon name="question" />;
		case "answer":
			return <Icon name="font" />;
		default:
			return <Icon name="font" />;
	}
}
export default function IconHeader(props: Props) {
	return (
		<>
			<Header as="h2" dividing>
				<HeaderIcon name={props.icon} />
				<Header.Content>{props.title}</Header.Content>
			</Header>
		</>
	);
}
