import Link from "next/link";
import Layout from "../components/Layout";

const Custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>This page does not exist. Please retunr to
                <Link legacyBehavior href="/">
                    <a> home</a>
                </Link>
            </p>
        </div>
    </Layout>

)

export default Custom404;