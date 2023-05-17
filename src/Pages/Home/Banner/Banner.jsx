import "animate.css";
import car  from "../../../assets/bg-car.png";

const Banner = () => {
  return (
    <div>
        
    
      <div className="hero min-h-screen bg-[#FDEEDC]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-end">
          <img
            src={car}
            className="max-w-sm rounded-lg animate__animated animate__slideInRight"
          />
          <div>
   
            <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Ready, Set, Play!</h1>
            <p className="py-6">
             Let Your Child's Imagination Drive Wild with Our Toy Cars!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  All Toys
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
