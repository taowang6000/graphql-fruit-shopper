import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Grid, Image} from 'semantic-ui-react'

const Products = props => {
  const {displayedProducts, handleUnassign, orderId, handleAssign} = props
  return (
    <Grid columns="equal">
      {displayedProducts.map(product => (
        <div className="product" key={product.id}>
          <Grid.Column>
            <Image src={product.image} alt="image" />
            <Link to={`/products/${product.id}`}>
              <h3> {product.name}</h3>
            </Link>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <div>
              {handleAssign ? (
                <Button
                  color="green"
                  onClick={event => handleAssign(product.id)}
                >
                  Add to Cart
                </Button>
              ) : (
                <div />
              )}
              {handleUnassign ? (
                <Button onClick={event => handleUnassign(orderId, product.id)}>
                  unassign
                </Button>
              ) : (
                <div />
              )}
            </div>
          </Grid.Column>
        </div>
      ))}
    </Grid>
  )
}

export default Products
