import * as React from "react"
import Default from "../layouts/default.js"
import './index.css';
import { graphql } from "gatsby"
import MenuItemPrev from "./menuitemprev.js"

// markup
const IndexPage = ({ data }) => {
  return (
    <Default>
      <h2>Welcome!</h2>

      {data.allContentfulRecipes.nodes.map(recipe => (
        <MenuItemPrev recipe={recipe}></MenuItemPrev>
      ))}

    </Default>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
      nodes {
          id
          name
          category {
            title
          }
          description {
              description
          }
          image {
              file {
                  url
              }
          }
      }
  }
}  
`