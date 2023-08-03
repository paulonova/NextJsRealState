import { gql } from "@apollo/client";
import client from "client";
import BlockRenderer from "components/BlockRenderer";
import cleanAndTransformBlocks from "utils/cleanAndTransformBlocks";

const Home = ({blocks}) => {
  console.log('Props:', blocks)
  return <div><BlockRenderer blocks={blocks}/></div>;
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
      blocks : cleanAndTransformBlocks(data.nodeByUri.blocks)
    }
  }
}

export default Home;