import React from 'react'

const ProductDetails = (props) => {
    return (
        <div>
      
    {props.prod==undefined? <p></p> :<p>{props.prod.Name}</p> }
        </div>
    )
}

export default ProductDetails
