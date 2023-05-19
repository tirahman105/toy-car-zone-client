import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const MyToyCard = ({ toy }) => {
  const {
    _id,
    ToyName,
    SubCategory,
    Price,
    AvailableQuantity,
    Rating,
    SellerName,
    Pictureurl,
    Details,
    email,
  } = toy;
  return (
    
      <tr>
     
      
     <td>{ToyName}</td>
     <td>{SubCategory}</td>
     <td>${Price}</td>
     <td>{AvailableQuantity}</td>
     <td>{SellerName}</td>
     {/* <th>
     <Link to={`/toys/${_id}`}> <button className="btn btn-primary">View </button></Link>
    
     </th> */}
     <th>
    
     <button className="flex "><BsPencilSquare className="text-2xl"></BsPencilSquare> <span>Update</span></button>
     </th>
     <th>
    
     <button className="flex "><AiFillDelete className="text-3xl"></AiFillDelete> <span>Delete</span></button>
     </th>
   </tr>
    
  );
};

export default MyToyCard;
