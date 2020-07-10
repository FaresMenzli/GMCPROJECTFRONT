 import React from "react";
import { Link } from "react-router-dom";

const AddProduct = ({ handelChange, action, produit, isEdit }) => {
  return (
   
    <div className="add-card">
      <p className="card-title-add">
       {/*  {isEdit ? "Edit Contact" : "New Contact"} */}
      </p>
<div className="container d-flex">
      <input
        name="Name"
        type="text"
        placeholder="Name..."
        onChange={handelChange}
       /*  value={produit.Name} */
      />

      <input
        name="Category"
        type="text"
        placeholder="Category..."
        onChange={handelChange}
/*         value={produit.Category}
 */      />

      <input
        name="Prix"
        type="text"
        placeholder="Prix..."
        onChange={handelChange}
/*         value={produit.Prix}
 */      />
  <input
        name="Description"
        type="text"
        placeholder="Description..."
        onChange={handelChange}
/*         value={produit.Category}
 */      />
  <input
        name="Photo"
        type="text"
        placeholder="PhotoURL..."
        onChange={handelChange}
/*         value={produit.Category}
 */      />
 </div>

     {/*  { <Link to="/Contact-list">
        <input
          type="button"
          value={isEdit ? "Edit Contact" : "Add Contact"}
          className="add-button"
          onClick={action}
        />
      </Link> } */}
    </div>
  );
};

export default AddProduct; 