import React from "react"
import Default from "../layouts/default.js"
import MenuItemPrev from "./menuitemprev.js"

export default function Home() {
    const appetizers = [
        {
            "name": "Classic Sampler",
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/09/4c/01/joes-classic-sampler.jpg",
            "description": "Crab and shrimp dip, hush puppies and calamari",
            "price": "16.99"
        },
        {
            "name": "Fried Calamari",
            "image": "https://thecozyapron.com/wp-content/uploads/2019/12/fried-calamari_thecozyapron_1.jpg",
            "description": "With marinara",
            "price": "10.99"
        },
        {
            "name": "Crab and Shrimp Dip",
            "image": "https://lh3.googleusercontent.com/4yuAWVuWCaC3tDeXe8RhvaBO77LlJhxMdy0yDxQdXhcNRlNTgEqX-m6NR68-cOYt7W_Rh2N5EJeg9vjWayl3=w1280-h960-c-rj-v1-e365",
            "description": "With crab meat, shrimp, cream cheese and veggies",
            "price": "10.99"
        },
        {
            "name": "Fried Shrimp Basket",
            "image": "https://blog.apartmentsathighpoint.com/wp-content/uploads/2019/08/friend-shrimp-basket.jpg",
            "description": "1/2 pound, served hot or cold",
            "price": "11.99"
        }
    ];
    const entrees = [
        {
            "name": "Mahi Mahi Sandwich",
            "image": "https://asassyspoon.com/wp-content/uploads/2017/02/blackened-mahi-mahi-sandwich4-2.jpg",
            "description": "Blackened, with cajun remoulade, lettuce, tomato and French fries",
            "price": "15.99"
        },
        {
            "name": "Stuffed Flounder",
            "image": "https://www.askchefdennis.com/wp-content/uploads/2011/06/stuffed-flounder.jpg",
            "description": "Flounder filled with a crab stuffing and a side of corn on the cob",
            "price": "20.99"
        },
        {
            "name": "Lobster Tails",
            "image": "https://www.great-taste.net/wp-content/uploads/2020/02/butterflied-lobster-tails.jpg",
            "description": "Four lobster tails, with seasonal vegetables",
            "price": "18.99"
        },
        {
            "name": "Crab Cake Sandwich",
            "image": "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2016/3/15/0/CCFAM105H_Crab-Cake-on-Brioche-with-Pickled-Cabbage_s4x3.jpg.rend.hgtvcom.826.620.suffix/1458059870276.jpeg",
            "description": "Scratch made with lump crab, lettuce, onions and remoulade sauce",
            "price": "13.99"
        }
    ];
    const desserts = [
        {
            "name": "Key Lime Pie",
            "image": "https://www.favfamilyrecipes.com/wp-content/uploads/2019/05/Key-Lime-Pie-500x375.jpg",
            "description": "Topped with whipped cream, lime slice",
            "price": "8.49"
        },
        {
            "name": "Triple-Chocolate Mousse",
            "image": "https://petitworldcitizen.files.wordpress.com/2013/12/mousse-cake-2.jpg",
            "description": "Topped with shaved chocolate",
            "price": "9.99"
        }
    ];

    return (
        <>
        <Default>            
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>~ Appetizers ~</h2>
                        {appetizers.map((item) => {
                            return <MenuItemPrev name={item.name} image={item.image} description={item.description} price={item.price}></MenuItemPrev>
                        })}

                        <h2>~ Entrees ~</h2>
                        {entrees.map((item) => {
                            return <MenuItemPrev name={item.name} image={item.image} description={item.description} price={item.price}></MenuItemPrev>
                        })}

                        <h2>~ Desserts ~</h2>
                        {desserts.map((item) => {
                            return <MenuItemPrev name={item.name} image={item.image} description={item.description} price={item.price}></MenuItemPrev>
                        })}

                    </div>
                </div>
            </div>
        </Default>
        </>
    )
}