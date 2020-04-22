import Head from 'next/head';
import Layout from './layout';

export default function contact() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <p className="description">Conatct Page</p>
      </Layout>
    </div>
  )
}
