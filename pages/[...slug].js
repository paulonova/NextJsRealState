import { gql } from '@apollo/client'
import client from 'client'
import BlockRenderer from 'components/BlockRenderer'
import cleanAndTransformBlocks from 'utils/cleanAndTransformBlocks'

const Page = (props) => {
  console.log('PROPS PAGE: ', props)
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  )
}

export default Page

/**
 * getStaticProps needs to be here because of getStaticPaths
 */
export const getStaticProps = async (context) => {
  console.log('CONTEXT: ', context)
  const uri = `/${context.params.slug.join('/')}/`
  console.log('URI: ', uri)
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
          }
        }
      }
    `,
    variables: {
      uri,
    },
  })
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      title: data.nodeByUri.title,
    },
  }
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        nodeByUri(uri: "/") {
          id
        }
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  })

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== '/')
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split('/'),
        },
      })),
    fallback: 'blocking',
  }
}

/**
 * FALLBACK: false or blocking
 * https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking
 *
 * If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
 *
 * If fallback is 'blocking', new paths not returned by getStaticPaths will wait for the HTML to be
 * generated, identical to SSR (hence why blocking), and then be cached for future requests so it
 * only happens once per path.
 */
