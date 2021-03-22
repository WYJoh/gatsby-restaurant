import React from "react"
import { Link } from "gatsby"

export default function MainNav() {
    return (
        <>
            <ul className="main-nav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </>
    )
}