import useTitle from "../../../hooks/useTitle";
import AllToyCategory from "../../AllToyCategory/AllToyCategory";
import Banner from "../Banner/Banner";
import ReviewSection from "../Extra/ReviewSection";

import Feature from "../Feature/Feature";
import ImgGallery from "../ImgGallery/ImgGallery";



const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            
            <AllToyCategory></AllToyCategory>
            <ImgGallery></ImgGallery>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;