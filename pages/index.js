import { gql } from "@apollo/client";
import client from "client";

const Home = (data) => {
  console.log('Props:', data)
  return <div>Next JS &amp; WordPress course.</div>;
}



export const getStaticProps = async () =>{
  const {data} = await client.query({
    query: gql`
    query NewQuery {
      pages {
        nodes {
          title
        }
      }
    }
    `
  })
  return{
    props: {
      data
    }
  }
}

export default Home;