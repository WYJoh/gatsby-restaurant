import React from "react"
import { Link } from "gatsby"

export default function ButtonProduct() {
    return (
        <>
            <Link to="/menu.js" class="buttonProduct">
				<button type="button" class="btn btn-danger">Product Details</button>
			</Link>
        </>
    )
}