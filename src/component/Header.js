import React,{useState} from 'react'


import {BrowserRouter,Route,Link } from 'react-router-dom'
import Category from "./Category"
import Home from "./Home"
import AddProduct from "./AddProduct"
import { addProduit } from '../js/actions/actionsProduit'

 const Header = (props) => {
   /* const dispatch = useDispatch() ;
    //3 59:18
    const produits =useSelector((state)=> state.products)
  useEffect(() => {
    dispatch(getproduits());
   
  }, [])  */


   
   let porduits=props.produits
    return (
        <BrowserRouter>
        <div>
        <ul className="navbar nav justify-content-around  navHeader">
    <li className="btn btn-light "><Link to="/">Home</Link></li>
    <li className="btn btn-light "><Link to="/Category">Category</Link></li>
    <li className="btn btn-light "><Link to="/AddProduct">Ajouter un Produit</Link></li>
   {/*  <li><Link to="/Product">Product</Link></li>
    <li><Link to="/AdminArena">Admin-Area</Link></li> */}

    </ul>
           {/*  <nav className="navbar navbar-dark bg-dark">
            <Link to="/Category">Category{ <p style={{ color: 'white' }}>Category</p> } </Link>
</nav> */}
       {<Route path="/" exact /* component={Home} */  render={(porduits) => <Home   {...props}  />}></Route>   }
    <Route path="/Category"  component={Category}></Route>
    <Route path="/AddProduct"   render={() => (
          <AddProduct
           // handelChange={handelChange}
           // action={isEdit ? editUser : add}
            produit={props.produit}
           // isEdit={isEdit}
          />
        )}
      />



    
        </div>
        </BrowserRouter>
    )
}

export default Header
