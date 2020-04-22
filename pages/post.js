import {withRouter} from 'next/router';
import Layout from './layout';
const post = withRouter((props) =>{
return <div>
    <Layout></Layout>
    <h1>{props.router.query.title}</h1>
</div>
})


export default post;