import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyCard from "./MyToyCard";

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
  
    const url = `https://toy-car-zone-server.vercel.app/toys?email=${user?.email}`;
  
  
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllToys(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center'>My Toyes page: {allToys.length}</h1>

            <div className="overflow-x-auto w-full">
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
                    {
                            allToys.map(toy => <MyToyCard
                                key={toy._id}
                                toy={toy}
                            ></MyToyCard>)
                        }
                    </tbody>

                </table>
            </div>
            
            
        </div>
    );
};

export default MyToys;