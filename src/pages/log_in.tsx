import Layout from "../components/Layout";
import SubHeader from "../components/atoms/SubHeader";
import LogInForm from "../components/organisms/LogInForm";

export default function LogIn() {
	return (
		<Layout>
			<SubHeader title="ログイン" />
			<LogInForm />
		</Layout>
	);
}
