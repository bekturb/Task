import React from 'react';
import Stories from "../../components/Stories/Stories";
import "../../styles/home.scss"
import Categories from "../../components/Categories/Categories";

const Home = () => {
    return (
        <>
            <Stories/>
            <Categories/>
        </>
    );
};

export default Home;