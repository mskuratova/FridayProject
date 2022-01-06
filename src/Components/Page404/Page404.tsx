import React from "react";
import classes from "./Page.module.css";

export const Page404 = ()=>{
    return(
        <div className={classes.background}>
            <div className={classes.error_wrapper}>
                <div>404</div>
                <div>Page not found!</div>
                <img src="https://samurai.it-incubator.by/static/media/cat-avatar.d04271ed.gif" alt="cat"/>

            </div>
        </div>
    )
}