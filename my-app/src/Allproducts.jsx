
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Allproducts() {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    function deletePro(id) {

        console.log(id);
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"

        }) .then(res => res.json())
        .then(json => console.log(json))
    }


    return (
        <div>
            <h1>Products</h1>

            <div className="Table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>

                    {products.map((product) => (
                        <tr>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><Link to={`/Product/Showpro/${product.id}`} >Show/</Link>

                                <Link to={`/Product/Edit/${product.id}`}>Edit/</Link>

                                <Link onClick={deletePro(product.id)}>delete</Link></td>

                        </tr>
                    ))}

                    <tr>
                        <td></td>
                    </tr>
                </table>

            </div>
            <button><Link to={'/Product/new'}>Add Product</Link></button>
        </div>
    )
}
export default Allproducts;