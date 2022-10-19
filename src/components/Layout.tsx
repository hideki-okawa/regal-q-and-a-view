import Head from "next/head";
import MainHeader from "./organisms/MainHeader";

import styles from "./layout.module.css";

type Props = {
	children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
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
