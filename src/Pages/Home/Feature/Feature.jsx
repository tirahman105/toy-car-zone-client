import { FaShuttleVan } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Feature = () => {

  useEffect(()=> {
    Aos.init({duration: 1500});
  },[])
  return (
    <div className="px-7 mb-5">
      <h1 className="text-center text-3xl">Feature section</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-3">
        <div className="flex flex-col mx-auto  gap-1">
        <div className="card" data-aos ="fade-right">
            <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center" >
              <div className="flex justify-start items-center ">
               <div className="flex justify-center">
               <div className="basis-1/4">
                  <img
                    className="w-2/4"
                    src="https://cdn-icons-png.flaticon.com/512/3063/3063823.png"
                    alt=""
                  />
                </div>
                <div className="basis-1/2">
                  <h2 className="text-2xl">World wide fast Delivery</h2>
                  <p>Fast and Secure Delivery System</p>
                </div>
               </div>
              </div>
            </div>
          </div>
          <div className="card " data-aos ="fade-right">
            <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
              <div className="flex justify-start items-center ">
               <div className="flex justify-center">
               <div className="basis-1/4">
                  <img
                    className="w-2/4"
                    src="https://cdn-icons-png.flaticon.com/512/265/265668.png"
                    alt=""
                  />
                </div>
                <div className="basis-1/2">
                  <h2 className="text-2xl">24 X 7 Support</h2>
                  <p>Cooperative support team </p>
                </div>
               </div>
              </div>
            </div>
          </div>
          <div className="card " data-aos ="fade-right">
            <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
              <div className="flex justify-start items-center ">
               <div className="flex justify-center">
               <div className="basis-1/4">
                  <img
                    className="w-2/4"
                    src="https://cdn-icons-png.flaticon.com/512/291/291527.png"
                    alt=""
                  />
                </div>
                <div className="basis-1/2">
                  <h2 className="text-2xl">Best Quality products</h2>
                  <p>Fast and Secure Delivery System</p>
                </div>
               </div>
              </div>
            </div>
          </div>


          <div className="card" data-aos ="fade-right">
            <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
              <div className="flex justify-start items-center ">
               <div className="flex justify-center">
               <div className="basis-1/4">
                  <img
                    className="w-2/4"
                    src="https://cdn-icons-png.flaticon.com/512/612/612886.png"
                    alt=""
                  />
                </div>
                <div className="basis-1/2">
                  <h2 className="text-2xl">Surprize Gift voucher</h2>
                  <p>Special gift for your kids</p>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>


      
          
            <div className="card " data-aos="zoom-in" >
              <img
                className="border object-cover h-auto  rounded-lg"
                src="https://mouthsofmums.com.au/wp-content/uploads/2020/08/03/Vileda-SEO-Post-1-Main-Image.jpg"
                alt=""
              />
            </div>
           
        
        
        
      </div>

      {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          01
          <div className="card bg-slate-300 p-4">Test</div>
          <div className="card bg-slate-300 p-4">Test</div>
          <div className="card bg-slate-300 p-4">Test</div>
          <div className="card bg-slate-300 p-4">Test</div>
        </div>
        <div className="col-span-2 ... flex">
          02
          <div className="card bg-slate-300 w-full"> test 2</div>
          <div className="card bg-slate-300 w-full"> test 2</div>
        </div>
        <div className="row-span-2 col-span-2 ...">
          03 <div className=" bg-red-300">test 3</div>
        </div>
      </div> */}
    </div>
  );
};

export default Feature;
