import { useEffect, useState } from "react";
import SingleToyCategory from "./SingleToyCategory/SingleToyCategory";


const AllToyCategory = () => {
    const [allToyCategory, setAllToyCategory] = useState([]);
    const [activeTab, setActiveTab] = useState("ss");

   

    useEffect(() => {
        fetch(`https://toy-car-zone-server.vercel.app/toys/${activeTab}`)
          .then((res) => res.json())
          .then((result) => {
            setAllToyCategory(result);
          });
      }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div>
        <h1 className=" text-3xl text-center mt-5 p-5">Toy cars</h1>

     
        
            <div className="tabs flex justify-center align-middle">
              <div
                onClick={() => handleTabClick("regular")}
                className={`tab  tab-lifted regular ${
                  activeTab == "regular" ? " bg-red-500 text-white" : ""
                }`}
              >
                Regular car
              </div>
              <div
                onClick={() => handleTabClick("sports")}
                className={`tab  tab-lifted sports ${
                  activeTab == "sports" ? " bg-red-500 text-white" : ""
                }`}
              >
                Sports car
              </div>
              <div
                onClick={() => handleTabClick("police")}
                className={`tab  tab-lifted police ${
                  activeTab == "police" ? " bg-red-500 text-white" : ""
                }`}
              >
                Police car
              </div>
              <div
                onClick={() => handleTabClick("truck")}
                className={`tab  tab-lifted truck ${
                  activeTab == "truck" ? " bg-red-500 text-white" : ""
                }`}
              >
                Truck 
              </div>
            </div>
         
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 px-4 mt-4">
          {allToyCategory?.map((singleToyCategory) => (
            <SingleToyCategory
            key={singleToyCategory._id} 
            singleToyCategory={singleToyCategory}></SingleToyCategory>
          ))}
        </div>
      </div>
    );
};

export default AllToyCategory;