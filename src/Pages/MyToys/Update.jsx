// import { useForm } from "react-hook-form";
// import { useLoaderData } from "react-router-dom";


// const Update = () => {
//     const loadedToy = useLoaderData();

//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm();
  
//     const handleToyUpdate = (data) => {
//       console.log(data);
//       fetch(`https://toy-car-zone-server.vercel.app/toysUpdate/${data._id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       })
//         .then((res) => res.json())
//         .then((result) => {
//         //   if (result.modifiedCount > 0) {
//         //     // setControl(!control);
//         //   }
//           console.log(result);
//           if (data.modifiedCount > 0) {
//             alert('user updated successfully')
//         }

//         });
//     };


    
  
//     const onSubmit = (loadedToy) => {
//       handleSubmit(handleToyUpdate);
//     };
        
//           return (
//             <div>
             
            
        
//               <div className="p-8 border-solid border-2  border-orange-100 bg-orange-100">
//               <form
//         onSubmit={onSubmit}
//         className="p-7 bg-white rounded shadow-md"
//       >
//          <h1 className="text-3xl text-center">Update toy</h1>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//           <input
//             defaultValue={loadedToy?._id}
//               type="text"
                                    
//               {...register("_id", { required: true })}
//               className="hidden"
//             />
//             <label htmlFor="toyName" className="block text-gray-700">
//               Toy Name
//             </label>
//             <input
//             defaultValue={loadedToy?.ToyName}
//               type="text"
//               id="toyName"
//               placeholder="Toy Name"
//               {...register("ToyName", { required: true, maxLength: 80 })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>

//           <div>
//             <label htmlFor="subCategory" className="block text-gray-700">
//               Sub Category
//             </label>
//             <select
//               id="subCategory"
//               defaultValue={loadedToy?.SubCategory}
//               {...register("SubCategory", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             >
//               <option value="regular">Regular car</option>
//               <option value="sports">Sports car</option>
//               <option value="truck">Truck</option>
//               {/* <option value="police">Police car</option> */}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="price" className="block text-gray-700">
//               Price
//             </label>
//             <input
//               type="number"
//               defaultValue={loadedToy?.Price}
//               id="price"
//               placeholder="Price"
//               {...register("Price", { required: true, min: 0, maxLength: 100 })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>

//           <div>
//             <label htmlFor="quantity" className="block text-gray-700">
//               Available Quantity
//             </label>
//             <input
//               type="number"
//               defaultValue={loadedToy?.AvailableQuantity}
//               id="quantity"
//               placeholder="Available Quantity"
//               {...register("AvailableQuantity", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>

        

        

        

//           <div className="col-span-2">
//             <label htmlFor="pictureUrl" className="block text-gray-700">
//               Picture URL
//             </label>
//             <input
//               type="url"
//               defaultValue={loadedToy?.Pictureurl}
//               id="pictureUrl"
//               placeholder="Picture URL"
//               {...register("Pictureurl", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>
//           <div className="col-span-2">
//             <label htmlFor="details" className="block text-gray-700">
//               Details
//             </label>
//             <textarea
//               id="details"
//               defaultValue={loadedToy?.Details}
//               {...register("Details", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             ></textarea>
//           </div>
//         </div>
//         <div className="text-center">
//         <input
//           type="submit"
//           value="Update Toy"
//           className=" w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
//         />
//         </div>
//       </form>
//               </div>
//             </div>
//     );
// };

// export default Update;



import  { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleToyUpdate = (data) => {
    fetch(`https://toy-car-zone-server.vercel.app/toysUpdate/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message) {
          alert('Toy updated successfully');
        }
      });
  };

  const onSubmit = (data) => {
    handleToyUpdate(data);
  };

  // Fetch toy data and set default values
  useEffect(() => {
    fetch(`https://toy-car-zone-server.vercel.app/toys/details/${id}`)
      .then((res) => res.json())
      .then((toy) => {
        // Set default values for form inputs using setValue
        setValue('ToyName', toy.ToyName);
        setValue('SubCategory', toy.SubCategory);
        setValue('Price', toy.Price);
        setValue('AvailableQuantity', toy.AvailableQuantity);
        setValue('Pictureurl', toy.Pictureurl);
        setValue('Details', toy.Details);
      });
  }, [id, setValue]);

  return (
    <div>
      <div className="p-8 border-solid border-2 border-orange-100 bg-orange-100">
        <form onSubmit={handleSubmit(onSubmit)} className="p-7 bg-white rounded shadow-md">
          <h1 className="text-3xl text-center">Update Toy</h1>

          {/* Form fields and inputs */}
          <div>
            <label htmlFor="ToyName" className="block">
              Toy Name
            </label>
            <input
              type="text"
              id="ToyName"
              {...register('ToyName', { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
            {errors.ToyName && <span className="text-red-500">Toy Name is required</span>}
</div>
<div>
        <label htmlFor="SubCategory" className="block">
          Sub Category
        </label>
        <select
          id="SubCategory"
          {...register('SubCategory', { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        >
          <option value="regular">Regular car</option>
          <option value="sports">Sports car</option>
          <option value="truck">Truck</option>
        </select>
        {errors.SubCategory && <span className="text-red-500">Sub Category is required</span>}
      </div>

      {/* Other form fields */}

      <div>
        <label htmlFor="Price" className="block">
          Price
        </label>
        <input
          type="number"
          id="Price"
          {...register('Price', { required: true, min: 0 })}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        />
        {errors.Price && <span className="text-red-500">Price is required and must be a positive number</span>}
      </div>

      {/* Other form fields */}

      <div>
        <label htmlFor="Details" className="block">
          Details
        </label>
        <textarea
          id="Details"
          {...register('Details', { required: true })}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        ></textarea>
        {errors.Details && <span className="text-red-500">Details is required</span>}
      </div>

      <div className="text-center">
        <input
          type="submit"
          value="Update Toy"
          className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
        />
      </div>
    </form>
  </div>
</div>
);
};

export default Update;