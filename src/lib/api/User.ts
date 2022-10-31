import axios from "axios";
import Cookies from "js-cookie";

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

export function getCurrentUser() {
	// 未認証なら何も返さない
	if (
		!Cookies.get("_access_token") ||
		!Cookies.get("_client") ||
		!Cookies.get("_uid")
	) {
		return;
	}

	const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/auth/sessions`;
	return axios.get(url, {
		headers: {
			"Content-Type": "application/json",
			"access-token": Cookies.get("_access_token"),
			client: Cookies.get("_client"),
			uid: Cookies.get("_uid"),
		},
	});
}
