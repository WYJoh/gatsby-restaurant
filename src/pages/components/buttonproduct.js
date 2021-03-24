import React from "react"
import { Link } from "gatsby"

export default function ButtonProduct({recipe}) {
    return (
        <>
            <Link to={"/recipe/" + recipe.id} class="buttonProduct">
				<button type="button" class="btn btn-danger">Product Details</button>
			</Link>
        </>
    )
}