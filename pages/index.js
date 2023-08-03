import { gql } from "@apollo/client";
import client from "client";

const Home = (props) => {
  console.log('Props:', props)
  return <div>Next JS &amp; WordPress course.</div>;
}



export const getStaticProps = async () =>{
  const {data} = await client.query({
    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }
    `
  })
  return{
    props: {
      blocks : data.nodeByUri.blocks
    }
  }
}

export default Home;