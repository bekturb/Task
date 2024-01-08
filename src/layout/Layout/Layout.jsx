import React from 'react';
import Header from "../Header";
import Routers from "../../Routers";

const Layout = () => {

    return (
        <>
             <Header />
            <main>
                <Routers />
            </main>
        </>
    );
};

export default Layout;