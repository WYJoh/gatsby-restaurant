import React from "react"
import ButtonProduct from "./components/buttonproduct"

export default function MenuItemPrev({recipe}) {
    return (
        <div className="menuItemPrev">
            <div className="row">
                <div className="col-sm-4 col-md-6 col-lg-4">
                    <h3>
                        {recipe.name}
                    </h3>
                    <img className="foodImage" src={recipe.image.file.url} alt={recipe.name} />
                </div>
                <div className="col-sm-8 col-md-6 col-lg-8">
                    <p className="foodDescription" dangerouslySetInnerHTML={{ __html: recipe.description.description }}>
                    
                    </p>
                    <ButtonProduct recipe={recipe}></ButtonProduct>
                </div>
            </div>
        </div>
    )
}