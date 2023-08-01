import React, {} from "react";
import "./Item.css";

const ProductExample = () => {
    return (
        <div className="item-card">
            <div className="item__image">
            <img src={require('../ImageExample/ImgExample.webp')} />
            </div>
            <div className="item__title">
                Dummy text of print
            </div>
            <div className="item__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <div className="item__price">
200$
            </div>
<div><button className="button">Add To Cart</button></div>
        </div>
    )
};

export default ProductExample;