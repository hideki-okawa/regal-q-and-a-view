import Head from "next/head";
import { useState, useEffect, createContext } from "react";

import MainHeader from "./organisms/MainHeader";

import styles from "./layout.module.css";
import { User } from "../types/User";
import { getCurrentUser } from "../lib/api/User";

type Props = {
	children?: React.ReactNode;
};

export const AuthContext = createContext(
	{} as {
		currentUser: User | undefined;
		setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
	}
);

export default function Layout({ children }: Props) {
	const [currentUser, setCurrentUser] = useState<User | undefined>();

	const handleGetCurrentUser = async () => {
		const res = await getCurrentUser();
		// 認証済みユーザーが居ることの確認
		if (res!.data.is_login) {
			setCurrentUser(res?.data.data);

			console.log(res?.data.data);
		} else {
			console.log("No current user");
		}
	};

	useEffect(() => {
		// 認証済みユーザーの取得
		handleGetCurrentUser();
	}, [setCurrentUser]);

	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Regal Q&A" />
			</Head>
			<MainHeader />
			<div>{children}</div>
		</div>
	);
}
