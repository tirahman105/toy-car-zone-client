// import { Link, useLoaderData } from "react-router-dom";
// import { BsPencilSquare } from "react-icons/bs";
// import { AiFillDelete } from "react-icons/ai";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import UpdateMyToys from "./UpdateMyToys";

// const MyToyCard = ({ toy }) => {
//   const loadedUsers = useLoaderData();
//   const [toys, setToys] = useState([]);
//   const [control, setControl] = useState(false);
//   const {
//     _id,
//     ToyName,
//     SubCategory,
//     Price,
//     AvailableQuantity,
//     Rating,
//     SellerName,
//     Pictureurl,
//     Details,
//     email,
//   } = toy;

//   const handleDelete = () => {
//     Swal.fire({
//       title: "Confirm Delete",
//       text: "Are you sure you want to delete this toy?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Delete",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         console.log("delete", _id);
//         fetch(`https://toy-car-zone-server.vercel.app/toys/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire(
//                 "Deleted!",
//                 "The toy has been deleted.",
//                 "success"
//               ).then(() => {
//                 window.location.reload();
//               });
//               // const remaining = toys.filter((toy) => toy._id !== _id);
//               // setToys(remaining);
//             }
//           });
//       }
//     });
//   };

//   const handleToyUpdate = (data) => {
//     console.log(data);
//     fetch(`https://toy-car-zone-server.vercel.app/updateToy/${data._id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.modifiedCount > 0) {
//           setControl(!control);
//         }
//         console.log(result);
//       });
//   };

//   return (
//     <>
//       <tr>
//         <td>{ToyName}</td>
//         <td>{SubCategory}</td>
//         <td>${Price}</td>
//         <td>{AvailableQuantity}</td>
//         <td>{SellerName}</td>
//         <th>

          
//           <label htmlFor="my-modal-5" className="btn">
//             {" "}
//             <BsPencilSquare className="text-2xl" />
//             Edit
//           </label>
//           <UpdateMyToys
//             toy={toy}
//             handleToyUpdate={handleToyUpdate}
//           />
//         </th>
//         <th>
//           <button onClick={handleDelete} className="flex ">
//             <AiFillDelete className="text-3xl" />
//             <span>Delete</span>
//           </button>
//         </th>
//       </tr>
//     </>
//   );
// };

// export default MyToyCard;


import { Link, useLoaderData } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateMyToys from "./UpdateMyToys";

const MyToyCard = ({ toy }) => {
  const loadedUsers = useLoaderData();
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [toyIdToUpdate, setToyIdToUpdate] = useState(null);
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

  const handleDelete = () => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete", _id);
        fetch(`https://toy-car-zone-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The toy has been deleted.",
                "success"
              ).then(() => {
                window.location.reload();
              });
              // const remaining = toys.filter((toy) => toy._id !== _id);
              // setToys(remaining);
            }
          });
      }
    });
  };

  const handleToyUpdate = (data) => {
    console.log(data);
    fetch(`https://toy-car-zone-server.vercel.app/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

  const openUpdateModal = (_id) => {
    // Set the ID of the toy to be updated and show the modal
    setToyIdToUpdate(_id);
    setShowUpdateModal(true);
  };

  return (
    <>
      <tr>
        <td>{ToyName}</td>
        <td>{SubCategory}</td>
        <td>${Price}</td>
        <td>{AvailableQuantity}</td>
        <td>{SellerName}</td>
        <th>
          <label htmlFor="my-modal-5" className="btn">
            {" "}
            <BsPencilSquare className="text-2xl" />
            Edit
          </label>
          <button onClick={() => openUpdateModal(_id)} className="hidden">
            Open Update Modal
          </button>
          {showUpdateModal && (
            <UpdateMyToys
              toy={toy}
              handleToyUpdate={handleToyUpdate}
              showUpdateModal={showUpdateModal}
              handleCloseUpdateModal={() => setShowUpdateModal(false)}
            />
          )}
        </th>
        <th>
          <button onClick={handleDelete} className="flex ">
            <AiFillDelete className="text-3xl" />
<span>Delete</span>
</button>
</th>
</tr>
</>
);
};

export default MyToyCard;