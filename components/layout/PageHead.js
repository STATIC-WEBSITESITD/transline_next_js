import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Transline Logistics"}
                </title>
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
        </>
    )
}

export default PageHead