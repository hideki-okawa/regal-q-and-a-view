import Layout from "../components/Layout";
import SubHeader from "../components/atoms/SubHeader";
import SignUpForm from "../components/organisms/SignUpForm";

export default function SignUp() {
	return (
		<Layout>
			<SubHeader title="新規会員登録" />
			<SignUpForm />
		</Layout>
	);
}
