
import { Link } from "react-router-dom";



function Newproduct() {


    function Addproduct() {
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
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
                <input type="text" id=" description" />
            </div>
            <br />
            <br />

            <button onClick={Addproduct}>create</button>
            <br />
            <br />
            <Link to={'/Allproducts'}>Go back</Link>


        </div>
    )
}

export default Newproduct;