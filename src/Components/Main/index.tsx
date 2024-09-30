import React from "react";
import { PageMainBlock } from "./Page_main-block";
import style from "./Main.module.scss"


export const Main=()=>{
    return(
        <main className={style.page}><PageMainBlock/></main>
    )
}