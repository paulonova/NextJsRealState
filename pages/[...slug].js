import { gql } from '@apollo/client'
import client from 'client'
import { Page } from 'components/Page'
import { getPageStaticProps } from 'utils/getPageStaticProps'

export default Page

export const getStaticProps = getPageStaticProps

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
