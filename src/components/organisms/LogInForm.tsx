import { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import Cookies from "js-cookie";
import Router from "next/router";

import { logIn } from "../../lib/api/User";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitError, setSubmitError] = useState<any>(null);

	const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputEmail = event.target.value;
		setEmail(inputEmail);
	};

	const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputPassword = event.target.value;
		// TODO: 6文字以上半角英数のみ（英数混合必須）のバリデーションを実装
		setPassword(inputPassword);
	};

	const handleLogIn = async () => {
		const resp = await logIn(email, password);
		if (resp.status === 200) {
			Cookies.set("_access_token", resp.headers["access-token"]!);
			Cookies.set("_client", resp.headers["client"]!);
			Cookies.set("_uid", resp.headers["uid"]!);

			// setCurrentUser;
			Router.push("/");

			console.log("Logined in successfully!");
		}
	};

	return (
		<>
			<Form>
				<Form.Field
					control={Input}
					label="メールアドレス ※必須"
					required
					onChange={changeEmail}
				/>
				<Form.Field
					control={Input}
					label="パスワード ※必須"
					required
					type="password"
					onChange={changePassword}
				/>
				<Form.Field control={Button} onClick={handleLogIn} error={submitError}>
					ログインする
				</Form.Field>
			</Form>
		</>
	);
}
