import { Link } from "react-router-dom";



function Editpro (){
    return(
        <div>
   <h1>Edit</h1>
   <div className="edit-product">
                <p>Name</p>
                <br />
                <input type="text" />
                <br />
                <p>Price</p>
                <br />
                <input type="number" />
                <br />
                <p>Description</p>
                <br />
                <input type="text" />
            </div>


<Link to={'/product'}>Home</Link>
<br />
<Link to={'/Product/Showpro'}>Show</Link>
        </div>
    )
}
export default Editpro; 