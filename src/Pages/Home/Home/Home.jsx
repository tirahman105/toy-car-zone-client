import AllToyCategory from "../../AllToyCategory/AllToyCategory";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import Feature from "../Feature/Feature";
import ImgGallery from "../ImgGallery/ImgGallery";



const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Extra></Extra>
            <AllToyCategory></AllToyCategory>
            <ImgGallery></ImgGallery>
        </div>
    );
};

export default Home;