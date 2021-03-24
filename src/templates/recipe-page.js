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
                        <img className="foodImage" src={recipe.image.file.url} alt={recipe.name} />
                    </div>

                    <div className="col-sm-12">
                        <p className="foodDescriptionCenter">{recipe.description.description}</p>
                    </div>
                </div>
            </div>
        </Default>
    )
}