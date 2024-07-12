import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function Editpro (){

    let { id } = useParams();
    const [product,setProduct]=useState({});

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json()
    )
    .then((data) => {
        console.log(data);
        setProduct(data);
    })
 
    })









    return(
        <div>
   <h1>Edit</h1>
   <div className="edit-product">
                <p></p>
                <br />
                <input type="text"value={product.title} />
                <br />
                <p></p>
                <br />
                <input type="number" value={product.price} />
                <br />
                <p></p>
                <br />
                <input type="text"   value={product.description}/>

            </div>


<Link to={'/product'}>Home</Link>
<br />
<Link to={`/Product/Showpro/${product.id}`}>Show</Link>
        </div>
    )
}
export default Editpro; 