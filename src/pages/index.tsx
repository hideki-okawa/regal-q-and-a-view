import type { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<div>
				home
				<Link href="/answers/answer">Answer page</Link>
			</div>
		</Layout>
	);
};

export default Home;
