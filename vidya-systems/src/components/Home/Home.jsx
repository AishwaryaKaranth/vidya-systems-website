import React from "react";
import Navigation from "../Nav/Nav";
import styles from "./Home.module.scss";

const Home=()=>{
    return(
        <div className={styles["container"]}>
           <h1>working</h1>
           <Navigation/>
        </div>
    )
}

export default Home;