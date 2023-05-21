import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const AddAToy = () => {

    const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    
  } = useForm();
  const onSubmit = (toy) => 
  
  {

    fetch('https://toy-car-zone-server.vercel.app/toys', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(toy)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire(
            "success!",
            "The toy has been Added Successfully.",
            "success"
          ).then(() => {
            window.location.href = "/mytoys";
          });
          reset();
         
        })
  
    console.log(toy);

  }

  

  return (
    <div>
     
    

      <div className="p-8 border-solid border-2  border-orange-100 bg-orange-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-7 bg-white rounded shadow-md"
      >
         <h1 className="text-3xl text-center font-semibold my-4">Add a toy</h1>
         <div className="divider"></div> 
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="toyName" className="block text-gray-700">
              Toy Name
            </label>
            <input
              type="text"
              id="toyName"
              placeholder="Toy Name"
              {...register("ToyName", { required: true, maxLength: 80 })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="subCategory" className="block text-gray-700">
              Sub Category
            </label>
            <select
              id="subCategory"
              {...register("SubCategory", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            >
              <option value="regular">Regular car</option>
              <option value="sports">Sports car</option>
              <option value="truck">Truck</option>
              {/* <option value="police">Police car</option> */}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              step="any"
              placeholder="Price"
              {...register("Price", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-gray-700">
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              placeholder="Available Quantity"
              {...register("AvailableQuantity", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-gray-700">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              placeholder="Rating"
              {...register("Ratings", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="sellerName" className="block text-gray-700">
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              {...register("SellerName", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="sellerEmail" className="block w-full text-gray-700">
              Seller Email
            </label>
            <input
              type="text"
              id="sellerEmail"
              defaultValue={user?.email}
              placeholder="Seller Email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="pictureUrl" className="block text-gray-700">
              Picture URL
            </label>
            <input
              type="url"
              id="pictureUrl"
              placeholder="Picture URL"
              {...register("Pictureurl", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="details" className="block text-gray-700">
              Details
            </label>
            <textarea
              id="details"
              {...register("Details", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
        <input
          type="submit"
          value="Add Toy"
          className=" w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
        />
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddAToy;
