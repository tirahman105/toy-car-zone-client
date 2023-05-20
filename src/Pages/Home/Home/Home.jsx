import AllToyCategory from "../../AllToyCategory/AllToyCategory";
import Banner from "../Banner/Banner";
import ImgGallery from "../ImgGallery/ImgGallery";



const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AllToyCategory></AllToyCategory>
            <ImgGallery></ImgGallery>
        </div>
    );
};

export default Home;