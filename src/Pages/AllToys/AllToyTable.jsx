import React from "react";
import { Link } from "react-router-dom";

const AllToyTable = ({ toy }) => {
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
    //    <div className="container mx-auto">
    //      <div className="overflow-x-auto">

    //      <div className="overflow-x-auto">
    //   <table className="table w-full">
    //     {/* head */}
    //     <thead>
    //       <tr>

    //         <th>Name</th>
    //         <th>Sub Category</th>
    //         <th>Favorite Color</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* row 1 */}
    //       <tr>

    //         <td>{ToyName}</td>
    //         <td>{SubCategory}</td>
    //         <td>{Price}</td>
    //       </tr>

    //     </tbody>
    //   </table>
    // </div>

    //     </div>
    //    </div>
    <tr>
     
      
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
