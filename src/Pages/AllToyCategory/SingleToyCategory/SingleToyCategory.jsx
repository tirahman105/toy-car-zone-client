import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'


const SingleToyCategory = ({singleToyCategory}) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const {_id, ToyName, SubCategory, Price, AvailableQuantity, Ratings, SellerName, Pictureurl, Details, email} = singleToyCategory;

    const handleViewDetails = () => {
        if (user) {
          navigate(`/toys/${_id}`);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please log in first to see details!',
          }).then(() => {
            navigate("/login");
          });
        }
      };
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

         <Link to={`/toys/${_id}`}> <button onClick={handleViewDetails} className="btn btn-primary">View Details</button></Link>
           
         </div>
       </div>
     </div>
   </div>
    );
};

export default SingleToyCategory;