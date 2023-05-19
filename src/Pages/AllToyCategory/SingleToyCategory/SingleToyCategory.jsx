import { Link } from "react-router-dom";


const SingleToyCategory = ({singleToyCategory}) => {

    const {_id, ToyName, SubCategory, Price, AvailableQuantity, Rating, SellerName, Pictureurl, Details, email} = singleToyCategory;
    return (
        <div>
        <div  className="card bg-base-100 shadow-xl">
       <figure>
         <img className="card-image" src={Pictureurl} alt="Shoes" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">{ToyName}</h2>
         <p>
           Price: <span>$ {Price}</span>
         </p>
         <div className="card-actions justify-end">

         <Link to={`/toys/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
           
         </div>
       </div>
     </div>
   </div>
    );
};

export default SingleToyCategory;