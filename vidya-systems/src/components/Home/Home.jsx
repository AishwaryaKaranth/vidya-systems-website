import React from "react";
import Navigation from "../Nav/Nav";
import styles from "./Home.module.scss";
import heroImage from "../../assets/hero-image-2.svg";


const Home=()=>{
    return(
        <>
            <div className={styles["container"]}>
                <div className={styles["container-grid"]}>
                    <img src={heroImage} className={styles["hero-image"]}></img>
                </div>
                <div className={styles["container-grid"]}>
                    <h2 className={styles["hero-heading"]}>Learn from the best.</h2>
                    <button className={styles["hero-button"]}>Know More</button>
                </div>
            </div>
            <hr></hr>
            <div className={styles["flex-container"]}>
                <div className={styles["flex-container-grid"]}>
                    <p>1</p>
                </div>
                <div className={styles["flex-container-grid"]}>
                    <p>1</p>
                </div>
                <div className={styles["flex-container-grid"]}>
                    <p>1</p>
                </div>
            </div>
            <footer>
                <p>&#169; Vidya Systems 2021</p>
            </footer>
        </>
    )
}

export default Home;