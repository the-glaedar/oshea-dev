import React from 'react'
import { graphql } from 'gatsby'


export const HomepageTemplate = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data

  return (
    <section>
      <h1>{document.IntroTagline}</h1>
    </section>
  )
}

export const query = graphql`
  query HomeQuery {
    allPrismicHomepage {
      edges {
        node {
          uid
          data {
            example_key_text
          }
        }
      }
    }
  }
`

export default HomepageTemplate