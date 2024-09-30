import { Footer } from "Components/Common/Footer";
import { Header } from "Components/Common/Header";
import { Payment } from "Components/Payment";
import React from "react";

export const MainContent=()=>{
    return (
        <div>
        <Header/>
        <Payment/>
        <Footer />
        </div>
    )
}