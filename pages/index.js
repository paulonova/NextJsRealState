import { gql } from "@apollo/client";
import client from "client";

export default function Home(props) {
  console.log('Props:', props)
  return <div>Next JS &amp; WordPress course2.</div>;
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
      data,
      myexampleprops: 'test'
    }
  }
}