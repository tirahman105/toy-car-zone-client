import { useLoaderData } from "react-router-dom";

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

const ToyDetails = () => {
  const toys = useLoaderData();

  
  const {
    ToyName,
    SubCategory,
    Price,
    AvailableQuantity,
    Ratings,
    SellerName,
    Pictureurl,
    Details,
    email,
  } = toys;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2">
        <figure >
          <img
            src={Pictureurl}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ToyName}</h2>
          <p>Seller Name: {SellerName}</p>
          <p>Seller Email: {email}</p>
          <p>Sub Category: {SubCategory}</p>
          <p>Price:$ {Price}</p>
          <p>Avaiable Quantity: {AvailableQuantity}</p>
          <div className='flex '>
        <Rating style={{ maxWidth: 150 }} 
          value={Math.round(Ratings || 0)} readOnly />
          <span>{Ratings}</span>
        </div>

        <p>
        Details:  {Details}
        </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
