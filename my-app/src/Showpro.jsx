import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Showpro() {

    const [product, setProduct] = useState({})
    let { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json()
            )
            .then((data) => {
                console.log(data);
                setProduct(data);
            })


    })





    return (
        <div>
            <h1> show </h1>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>







            <div className="Show-links">
                <Link to={'/product'} >Back</Link>
                <br />
                <Link to={`/Product/Edit/${product.id}`}>Edit</Link>
            </div>

        </div>
    )
}

export default Showpro;