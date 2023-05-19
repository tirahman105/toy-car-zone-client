import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyCard from "./MyToyCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("")


  const url = `https://toy-car-zone-server.vercel.app/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);



const handleSearch = () =>{
    fetch(`https://toy-car-zone-server.vercel.app/toySearchByName/${searchText}`)
    .then((res) => res.json())
      .then((data) => setAllToys(data));
}
  return (
    <div>
      <h1 className="text-3xl text-center">My Toyes page: {allToys.length}</h1>
      
      <div className="overflow-x-auto w-full">
        <div className="form-control mb-4">
          <div className="input-group">
            <input
             onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
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
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Seller Name</th>
              <th> Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <MyToyCard key={toy._id} toy={toy}></MyToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
