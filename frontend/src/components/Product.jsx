import React from 'react';
import { Card } from "react-bootstrap";
import Rating from './Rating';

const Product = ({ product }) => {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <a href={`product/${product._id}`}>
                    <Card.Img variant="top" className="my-2" src={product.image} />
                </a>

                <Card.Body>

                    <a href={`product/${product._id}`} style={{ textDecoration: 'none' }}>
                        <Card.Title as="div" className="my-2">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </a>

                    <Card.Text as="div">
                        <div className="my-2">
                            {/* {product.rating} from {product.numReviews} reviews */}
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </div>
                    </Card.Text>

                    <Card.Text as="h3">${product.price}</Card.Text>

                </Card.Body>
            </Card>
        </>
    );
}

export default Product;