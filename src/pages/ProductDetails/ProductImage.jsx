import React from "react";
import { Col } from "react-bootstrap";

export const ProductImage = ({imgSelected}) => {
    return (
        <Col className="col-12 col-lg-5">
            {
                <div className="main_img p-4"><img className="w-100" src={imgSelected}/></div>
            }
        </Col>
    )
}


export default ProductImage;