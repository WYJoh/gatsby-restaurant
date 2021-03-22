import React from "react"
import ButtonProduct from "./components/buttonproduct"

export default function MenuItemPrev(props) {
    return (
        <div className="menuItemPrev">
            <div className="row">
                <div className="col-sm-4 col-md-6 col-lg-4">
                    <h3>
                        {props.name}
                    </h3>
                    <img className="foodImage" src={props.image} alt={props.name} />
                </div>
                <div className="col-sm-8 col-md-6 col-lg-8">
                    <p className="foodDescription">
                        {props.description} ({props.price})
                    </p>
                    <ButtonProduct></ButtonProduct>
                </div>
            </div>
        </div>
    )
}