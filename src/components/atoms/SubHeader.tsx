import { Header } from "semantic-ui-react";

type Props = {
	title: string;
};

export default function MainHeader(props: Props) {
	return (
		<>
			<Header as="h2" dividing>
				{props.title}
			</Header>
		</>
	);
}
