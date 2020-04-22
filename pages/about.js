import Head from 'next/head';
import Layout from './layout';

export default function about() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
           <p className="description">About Page</p>
      </Layout>

    </div>
  )
}
