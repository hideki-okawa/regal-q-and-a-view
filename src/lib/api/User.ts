import axios from "axios";

export function signUp(
	name: string,
	email: string,
	password: string,
	passwordConfirmation: string,
	isLawyer: boolean
) {
	const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/auth`;
	return axios.post(url, {
		name: name,
		email: email,
		password: password,
		password_confirmation: passwordConfirmation,
		is_lawyer: isLawyer,
	});
}
