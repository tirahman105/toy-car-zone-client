import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToyTable = ({ toy, index }) => {
  useTitle('All Toys');
  const {
    _id,
    ToyName,
    SubCategory,
    Price,
    AvailableQuantity,
    Ratings,
    SellerName,
    Pictureurl,
    Details,
    email,
  } = toy;
  return (
   
    <tr>
     
      <td>{index}.</td>
      <td>{ToyName}</td>
      <td>{SubCategory}</td>
      <td>${Price}</td>
      <td>{AvailableQuantity}</td>
      <td>{SellerName}</td>
      <th>
      <Link to={`/toys/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
      </th>
    </tr>
  );
};

export default AllToyTable;
