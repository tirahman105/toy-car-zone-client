import { useLoaderData } from "react-router-dom";
import "./AllToys.css";
import AllToyTable from "./AllToyTable";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    useTitle('All Toys');
  const toys = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl text-center">All Toyes page: {toys.length}</h1>

      <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Toy name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            toys.map((toy, index) => <AllToyTable
                                key={toy._id}
                                toy={toy}
                                index={index +1}
                               
                            ></AllToyTable>)
                        }
                    </tbody>

                </table>
            </div>


    </div>
  );
};

export default AllToys;
