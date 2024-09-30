import { Footer } from "Components/Common/Footer";
import { Header } from "Components/Common/Header";
import { Main } from "Components/Main";
import React from "react";

export const MainContent=()=>{
    return (
        <div>
        <Header/>
        <Main/>
        <Footer />
        </div>
    )
}