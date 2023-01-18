import Layout from "../components/Layout";

const _error = ({statusCode}) => {
    return(
        <Layout>
            {
                statusCode ? (
                    <p>Could not load your page: Status {statusCode}.</p>
                ): (
                    <p>Could not load this page.</p>
                )
            }
        </Layout>
    )
}

export default _error