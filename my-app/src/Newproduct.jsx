

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Newproduct() {
    
    
    const navigate = useNavigate();

    function Addproduct() {

        const name = document.getElementById("Name").value;
        const price =document.getElementById("price").value;
        const description = document.getElementById("description").value;
       

        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify( 
                {   title: name,
                    price: price,
                    description: description,
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
            navigate('/product')

 
    }

    return (
        <div>

            <h1>New Product:</h1>
            <div className="New-product" >
                <p>Name</p>
                <br />
                <input type="text" id="Name" />
                <br />
                <p>Price</p>
                <br />
                <input type="number" id="price" />
                <br />
                <p>Description</p>
                <br />
                <input type="text" id="description" />
            </div>
            <br />
            <br />

            <button onClick={Addproduct}>create</button>
            <br />
            <br />
            <Link to={'/product'}>Go back</Link>


        </div>
    )
}

export default Newproduct;