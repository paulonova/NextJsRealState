import { gql } from '@apollo/client'
import client from 'client'

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties {
            nodes {
              databaseId
              uri
              title
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
            }
          }
        }
      `,
    })
    return res.status(200).json({
      properties: data.properties.nodes,
    })
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

export default handler
