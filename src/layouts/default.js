import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';

export default function Default({children}) {
    return (
        <>
            <img class="buttonCart" alt="Cart" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" />

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h1>Johnson's Seafood Shack</h1>
                        </div>
                        <div className="col-sm-2">
                            <img class="blueFish" src="https://www.jing.fm/clipimg/full/28-280028_fish-png-images-transparent-pictures-cartoon-fish-transparent.png" alt="Blue Fish" />
                        </div>
                        <div className="col-sm-3">
                            <MainNav></MainNav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {children}
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <MainNav></MainNav>
                        </div>
                        <div className="col-sm-5">
                            [ social media icons ]
                        </div>
                        <div className="col-sm-2">
                            &copy; 2021
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}