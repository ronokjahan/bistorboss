import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Catagory from "../Banner/Catagory/Catagory";
import PopularManu from "../PpularManu/PopularManu";
import Feature from "./Feature";
import TestTemonial from "./TesteMonial/TestTemonial";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularManu></PopularManu>
            <Feature></Feature>
            <TestTemonial></TestTemonial>
        </div>
    );
};

export default Home;