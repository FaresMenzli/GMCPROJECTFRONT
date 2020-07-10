import React,{useState} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import ProductDetails from './ProductDetails'

const ProductCard = (props,{match}) => {
    const [prod, setProd] = useState({Name:"",Category:"",Prix:"",Description:""})

    const produitAAfficher = (id)=>{
        const result = props.produits.filter(e => e._id == id)
          
          return result
         
    }
    return (
        <BrowserRouter>
        
        
        <div className="mainContainer"  >
            {props.produits.map((e )=>(
               <div className="text-center"key={e._id}>
                <Link  to={`/produit/${e._id}`}>  
                    {console.log(e._id)}
                    {console.log()}
             <div key={e._id}  className="card border-primary mb-2" style={{ width: '18rem' }}>
                <p>  {e.Name}</p>
                <p>{e.Category}</p>
                <p>{e.Prix}</p>
                <p>{e.Description}</p>
        </div></Link>
             </div> )  )}
        </div>
        
        <Route path={`/produit/:_id`} render= {({match}) =>( 
        <div> 
            <h3 className="text-center"> 

            {setProd(produitAAfficher(match.params._id)[0])}
         
            {console.log(prod)}
         <p>{<ProductDetails prod={prod}></ProductDetails>}</p> 
           <p>{  match.params._id}  </p>
        <p>{props.prodit}</p>
            </h3>
        </div> )}></Route>
        
        </BrowserRouter>
        
    )
}

export default ProductCard
