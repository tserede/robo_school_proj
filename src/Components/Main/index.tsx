import React from "react";
import { PageMainBlock } from "./Page_main-block";
import { PageAbout } from "./Page_about";
import style from "./Main.module.scss"
import { PageWhatyouget } from "./Page_whatyouget";



export const Main=()=>{
    return(
        <div className={style.wrapper}>
        <PageMainBlock/>
        <PageAbout/>
        <PageWhatyouget/>
        </div>
    )
}