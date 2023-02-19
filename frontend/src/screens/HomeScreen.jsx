import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { getProducts } from '../services/products';


const HomeScreen = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    if (products?.length === 0) return (<p>No Products Found</p>);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products && products.map(product =>
                    <Col
                    sm={12} md={6}  lg={4} xl={3} 
                     key={product._id}
                     >
                        <Product
                            product={product}
                        />
                    </Col>
                )}
            </Row>
        </>
    );
}

export default HomeScreen;