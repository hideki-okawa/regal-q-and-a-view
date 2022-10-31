import { useState } from "react";
import {
	Form,
	Input,
	Checkbox,
	Button,
	CheckboxProps,
} from "semantic-ui-react";
import Cookies from "js-cookie";
import Router from "next/router";

import { signUp } from "../../lib/api/User";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [isLawyer, setIsLawyer] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [submitError, setSubmitError] = useState<any>(null);

	const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputEmail = event.target.value;
		setEmail(inputEmail);
	};

	const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputName = event.target.value;
		setName(inputName);
	};

	const changeIsLawyer = (
		event: React.ChangeEvent<HTMLInputElement>,
		data: CheckboxProps
	) => {
		const inputIsLawyer = data.checked!;
		setIsLawyer(inputIsLawyer);
	};

	const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputPassword = event.target.value;
		// TODO: 6文字以上半角英数のみ（英数混合必須）のバリデーションを実装
		setPassword(inputPassword);
	};

	const changePasswordConfirmation = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const inputPasswordConfirmation = event.target.value;
		setPasswordConfirmation(inputPasswordConfirmation);
	};

	const handleSignIn = async () => {
		const resp = await signUp(
			name,
			email,
			password,
			passwordConfirmation,
			isLawyer
		);
		if (resp.status === 200) {
			Cookies.set("_access_token", resp.headers["access-token"]!);
			Cookies.set("_client", resp.headers["client"]!);
			Cookies.set("_uid", resp.headers["uid"]!);

			// setCurrentUser;
			Router.push("/");

			console.log("Signed in successfully!");
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
					label="ニックネーム ※必須"
					required
					onChange={changeName}
				/>
				<Form.Field
					control={Checkbox}
					label="弁護士として登録する"
					required
					onChange={changeIsLawyer}
				/>
				<Form.Field
					control={Input}
					label="パスワード ※必須"
					required
					type="password"
					onChange={changePassword}
				/>
				<div>※6文字以上半角英数のみ（英数混合必須）</div>
				<Form.Field
					control={Input}
					label="パスワード確認 ※必須"
					required
					type="password"
					onChange={changePasswordConfirmation}
				/>
				<div>※6文字以上半角英数のみ（英数混合必須）</div>
				<Form.Field control={Button} onClick={handleSignIn} error={submitError}>
					ユーザー登録する
				</Form.Field>
			</Form>
		</>
	);
}
