import React from "react";
import Navigation from "../Nav/Nav";
import styles from "./Home.module.scss";
import background from "../../assets/bg.jpg";

const Home=()=>{
    return(
        <div className={styles["container"]}>
           <h1>working</h1>
           <Navigation/>
           <div className={styles["background"]}>
                <img src={background} className={styles["layer"]}></img>
                <p className={styles["hero-heading"]}>Dummy text</p>
            </div>
           
        </div>
    )
}

export default Home;