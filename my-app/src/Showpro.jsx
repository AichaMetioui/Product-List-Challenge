import { Link } from "react-router-dom";

function Showpro (){

    return(
        <div>
<h1> show </h1>

<div className="Show-links">
<Link to={'/Allproducts'} >Back</Link>
<br />
<Link to={'/Product/Edit'}>Edit</Link>
</div>

        </div>
    )
}

 export default Showpro;