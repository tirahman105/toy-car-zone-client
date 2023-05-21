// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import MyToyCard from "./MyToyCard";
// import useTitle from "../../hooks/useTitle";

// const MyToys = () => {
//   useTitle('My-Toys')
//   const { user } = useContext(AuthContext);
//   const [allToys, setAllToys] = useState([]);
//   const [searchText, setSearchText] = useState("")

//   const [toys, setToys] = useState([]); // State to hold the toys data
//   const [sortOrder, setSortOrder] = useState("asc"); // State to track the sort order

//   const handleSort = () => {
//     // Toggle the sort order
//     const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
//     setSortOrder(newSortOrder);

//     // Sort the toys based on price
//     const sortedToys = [...toys].sort((a, b) => {
//       if (newSortOrder === "asc") {
//         return a.Price - b.Price; // Sort in ascending order
//       } else {
//         return b.Price - a.Price; // Sort in descending order
//       }
//     });

//     // Update the toys state with the sorted data
//     setToys(sortedToys);
//   };

//   const url = `https://toy-car-zone-server.vercel.app/toys?email=${user?.email}`;

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setAllToys(data));
//   }, []);

// const handleSearch = () =>{
//     fetch(`https://toy-car-zone-server.vercel.app/toySearchByName/${searchText}`)
//     .then((res) => res.json())
//       .then((data) => setAllToys(data));
// }
//   return (
//     <div>
//       <h1 className="text-3xl text-center">My Toyes page: {allToys.length}</h1>
//       <button onClick={handleSort}>
//         Sort by Price {sortOrder === "asc" ? "Low to High" : "High to Low"}
//       </button>
//       <div className="overflow-x-auto w-full">
//         <div className="form-control mb-4">
//           <div className="input-group">
//             <input
//              onChange={(e) => setSearchText(e.target.value)}
//               type="text"
//               placeholder="Search…"
//               className="input input-bordered"
//             />
//             <button onClick={handleSearch} className="btn btn-square">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <table className="table w-full ">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>Toy name</th>
//               <th>Sub Category</th>
//               <th>Price</th>
//               <th>Available Quantity</th>
//               <th>Seller Name</th>
//               <th> Action</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {allToys?.map((toy) => (
//               <MyToyCard key={toy._id} toy={toy}></MyToyCard>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyToys;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyCard from "./MyToyCard";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My-Toys");
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState(" ");

  const url = `https://toy-car-zone-server.vercel.app/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-car-zone-server.vercel.app/toySearchByName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  const handleSort = (sortOrder) => {
    // Sort the toys based on price
    const sortedToys = [...allToys].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Price - b.Price; // Sort in ascending order
      } else {
        return b.Price - a.Price; // Sort in descending order
      }
    });

    // Update the sorted toys in the state
    setAllToys(sortedToys);
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-4">My Toys page: {allToys.length}</h1>

      {/* <div className="flex">
       
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search..."
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              Sort by Price
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleSort("asc")}>
                <a>Low to High</a>
              </li>
              <li onClick={() => handleSort("desc")}>
                <a>High to Low</a>
              </li>
            </ul>
          </div>
        
      </div> */}

<div className="flex justify-center my-4">
  <div className="flex">
    <div className="input-group">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search..."
        className="input input-bordered"
      />
      <button onClick={handleSearch} className="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>

    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Sort by Price
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li onClick={() => handleSort("asc")}>
          <a>Low to High</a>
        </li>
        <li onClick={() => handleSort("desc")}>
          <a>High to Low</a>
        </li>
      </ul>
    </div>
  </div>
</div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Seller Name</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <MyToyCard key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
