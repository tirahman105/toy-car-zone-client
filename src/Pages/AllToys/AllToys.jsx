import { useLoaderData } from "react-router-dom";
import "./AllToys.css";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl text-center">All Toyes page: {toys.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {toys.map((toy) => (
          <div key={toy._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img className="card-image" src={toy?.Pictureurl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <span className="indicator-item indicator-top indicator-end badge badge-secondary">{toy?.SubCategory}</span>
              <h2 className="card-title">{toy?.ToyName}</h2>
              <p>
                Price: <span>$ {toy.Price}</span>
              </p>
              <p>
                Available Quantity: {toy?.AvailableQuantity}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
