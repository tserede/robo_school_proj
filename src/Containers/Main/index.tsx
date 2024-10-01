import { Footer } from "Components/Common/Footer";
import { Header } from "Components/Common/Header";
import { Main } from "Components/Main";
import React from "react";
import style from "./MainContent.module.scss"

export const MainContent=()=>{
    return (
        <div className={style.wrapper}>
        <Header/>
        <Main/>
        <Footer />
        </div>
    )
}