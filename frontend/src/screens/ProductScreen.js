import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
const ProductScreen = ({id}) => {
  return (
    <>
      <h1>Product</h1>
      <Row>
        
          <Col sm={23} md={6} lg={4} xl={3}>
            <Product product={products[id]} />
          </Col>
        
      </Row>
    </>
  )
}

export default ProductScreen