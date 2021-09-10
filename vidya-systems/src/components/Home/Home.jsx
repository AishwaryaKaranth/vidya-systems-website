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
                </div>
            </div>
            <hr></hr>
            <div className={styles["home-container"]}>
                <h2>About Vidya Systems</h2>
                <p>Vidya Systems was founded and registered under Company’s Act in 1996. With encouragement from educators throughout the India, we partnered  with Sikkim Manipal University –Distance Education  in the year 2000.
                We were awarded as a “Best Performer” for the year 2008, 2009, 2010, 2011 and 2012 from Sikkim Manipal University.
                In the year of 2013 we were one among the first Distance Education Centre to start the 
                GITAM Distance Learning at Mathikere, Bangalore.
                </p>
            </div>
        </>
    )
}

export default Home;