import React from 'react';
import Header from '../header/header';
import AboutUs from '../aboutUs/abousUs';
import Games from '../upcomingGames/upcomingGames';
import CastleWrap from '../castleWrap/castleWrap';
import Gallery from '../gallery/gallery';
import Reviews from '../reviews/reviews';
import PricePlan from '../pricePlans/pricePlan';
import Blog from '../blogPosts/blog';
import Subscription from '../subscription/subscribe';
import Faq from '../faq/faq';
import Footer from '../footer/footer';

const App = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Games />
            <CastleWrap />
            <Gallery />
            <Reviews />
            <PricePlan />
            <Faq />
            <Blog />
            <Subscription />
            <Footer />
        </>
    )
}

export default App;