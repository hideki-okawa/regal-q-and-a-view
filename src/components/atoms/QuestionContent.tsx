type Props = {
	content: string;
};

export default function MainHeader(props: Props) {
	return (
		<>
			<p>{props.content}</p>
		</>
	);
}
