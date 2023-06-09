import { useEffect } from "react";
import ClientFeedback from "../ClientFeadback";
import Gallery from "../Gallery";
import ShopByCategory from "../ShopByCategory";
import WhyWe from "../WhyWe";
import Banner from "../banner";
import useTitle from "../../../hooks/useTitle";



const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <WhyWe></WhyWe>
            <ClientFeedback></ClientFeedback>
        </div>
    );
};

export default Home;

