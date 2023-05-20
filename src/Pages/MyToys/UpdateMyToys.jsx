import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";


const UpdateMyToys = ({toy, handleToyUpdate}) => {

    const {user} = useContext(AuthContext);
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
      
    } = useForm();

    
    return (
        <div>
                {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
<div className="p-8 border-solid border-2 rounded rounded-lg border-orange-100 bg-orange-100">
      <form
        onSubmit={handleSubmit(handleToyUpdate)}
        className="p-7 bg-white rounded shadow-md"
      >
         <h1 className="text-3xl text-center">Update toy</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
          <input
            defaultValue={toy?._id}
              type="text"
                                    
              {...register("_id", { required: true })}
              className="hidden"
            />
            <label htmlFor="toyName" className="block text-gray-700">
              Toy Name
            </label>
            <input
            defaultValue={toy?.ToyName}
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
              defaultValue={toy?.SubCategory}
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
              defaultValue={toy?.Price}
              id="price"
              placeholder="Price"
              {...register("Price", { required: true, min: 0, maxLength: 100 })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-gray-700">
              Available Quantity
            </label>
            <input
              type="number"
              defaultValue={toy?.AvailableQuantity}
              id="quantity"
              placeholder="Available Quantity"
              {...register("AvailableQuantity", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

        

        

        

          <div className="col-span-2">
            <label htmlFor="pictureUrl" className="block text-gray-700">
              Picture URL
            </label>
            <input
              type="url"
              defaultValue={toy?.Pictureurl}
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
              defaultValue={toy?.Details}
              {...register("Details", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
        <input
          type="submit"
          value="Update Toy"
          className=" w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
        />
        </div>
      </form>
      {/* Close button */}
      <label htmlFor="my-modal-5" className="modal-close btn">
            Close
          </label>
      </div>
</div>
        </div>
    );
};

export default UpdateMyToys;