import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'


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
          })
        }
      };
    return (
  //       <div>
  //       <div  className="card bg-base-100 shadow-xl">
  //      <figure>
  //        <img className="card-image" src={Pictureurl} alt="Shoes" />
  //      </figure>
  //      <div className="card-body hover:bg-[#FDEEDC]">
  //        <h2 className="card-title">{ToyName}</h2>
  //        <p>
  //          Price: <span>$ {Price}</span>
  //        </p>
  //        <div className="card-actions justify-end">

  //        <Link to={`/toys/${_id}`}> <button onClick={handleViewDetails} className="btn btn-primary">View Details</button></Link>
           
  //        </div>
  //      </div>
  //    </div>
  //  </div>

  
//   <div className="border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition duration-300">
//   <figure className="overflow-hidden">
//     <img className="w-full p-10   h-auto" src={Pictureurl} alt="Shoes" />
//   </figure>
//   <div className="p-4">
//     <h2 className="text-xl font-semibold mb-2">{ToyName}</h2>
//     <p className="text-gray-600">
//       Price: <span className="font-medium">${Price}</span>
//     </p>
//     <div className="mt-4 flex justify-end">
//       <Link to={`/toys/${_id}`}>
//         <button className="btn btn-primary transition duration-300 hover:bg-blue-500 hover:text-white">
//           View Details
//         </button>
//       </Link>
//     </div>
//   </div>

// </div>

<div className="border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition duration-300">
  <figure className="overflow-hidden">
    <img className="w-full p-10 h-auto" src={Pictureurl} alt="Shoes" />
  </figure>
  <div className="p-4 px-10 border hover:bg-[#FDEEDC]">
    <h2 className="text-xl font-semibold mb-2">{ToyName}</h2>
    <p className="text-gray-600">
      <span className="mr-2 font-bold">Price:</span> <span className="font-medium">${Price}</span>
    </p>
    <div className='flex '>
      <span className="mr-2 font-bold">Ratings: </span>
        <Rating style={{ maxWidth: 120 }} 
          value={Math.round(Ratings || 0)} readOnly />
          {/* <span>{Ratings}</span> */}
        </div>

    <div className="mt-4 flex justify-end">
      <Link to={`/toys/${_id}`}>
        <button className="btn bg-[#D36F3F] hover:bg-blue-700 transition duration-300  hover:text-white">
          View Details
        </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default SingleToyCategory;