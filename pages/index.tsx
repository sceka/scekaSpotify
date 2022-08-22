import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Sceka Spotify</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Sidebar />
            </main>
            {/* <div>{Player}</div>  */}
        </div>
    );
};

export default Home;
