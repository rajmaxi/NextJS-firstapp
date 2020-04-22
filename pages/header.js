import Head from 'next/head';

export default function Header() {
  return (
    <div classNameName="header">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>
      </Head>     
    </div>
  )
}

{/* function Post(props){
  return <Link as={`/${props.id}`} href={`/post?title=${props.title}`}><span>{props.title}</span></Link>
  } */}
  