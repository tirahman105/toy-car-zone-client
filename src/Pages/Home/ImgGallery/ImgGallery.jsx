import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ImgGallery = () => {

  useEffect(()=> {
    Aos.init({duration: 1500});
  },[])
  const images = [
    'https://media.istockphoto.com/id/936639156/photo/chasing-the-car.jpg?s=612x612&w=0&k=20&c=oDkzKtvorVXjW9qR6CpNBvgonJvbv4nvap0Teoq-R6U=',
    'https://media.istockphoto.com/id/1044927526/photo/adorable-little-child-playing-with-blue-toy-car-at-home.jpg?s=170667a&w=0&k=20&c=xBQtr1ZZFk8JbsVgfAROYRn9XCYZo5G0R_L4tFCRdVI=',
    'https://media.istockphoto.com/id/687310488/photo/baby-boy-playing-on-bed.jpg?s=612x612&w=0&k=20&c=G0UM1S156mIyvdIX1mTPx6HeWvH-7vU8X_pEJUv8YtU=',
    'https://media.istockphoto.com/id/936639156/photo/chasing-the-car.jpg?s=612x612&w=0&k=20&c=oDkzKtvorVXjW9qR6CpNBvgonJvbv4nvap0Teoq-R6U=',
    'https://media.istockphoto.com/id/1044927526/photo/adorable-little-child-playing-with-blue-toy-car-at-home.jpg?s=170667a&w=0&k=20&c=xBQtr1ZZFk8JbsVgfAROYRn9XCYZo5G0R_L4tFCRdVI=',
    'https://media.istockphoto.com/id/687310488/photo/baby-boy-playing-on-bed.jpg?s=612x612&w=0&k=20&c=G0UM1S156mIyvdIX1mTPx6HeWvH-7vU8X_pEJUv8YtU=',
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
              data-aos="zoom-in"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;