import React from "react"
import Default from "../layouts/default.js"

export default function RecipePage({ pageContext }) {
    const { recipe } = pageContext;
    return (
        <Default>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>{recipe.name}</h3>
                        <image className="foodImage" src={recipe.image.file.url} alt={recipe.name} />
                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-8">
                        <p className="foodDescription">{recipe.description.description}</p>
                        <a href="/" class="buttonProduct">
			            </a>
                    </div>
                </div>
            </div>
        </Default>
    )
}