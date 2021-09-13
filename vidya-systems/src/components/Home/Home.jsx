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
                <br/>
                <h3>Admissions</h3>
                <p>Admissions to all the programs will be given as follows</p>
                <ul>
                    <li>Academic Year  Batch : July of the year to May of next year [May Exams]</li>
                    <li>Calendar Year Batch:  January to December of the year [December Exams]</li>
                </ul>
                <br/>
                <h3>Academic Programmes </h3>
                <p>The GITAM University offers a wide range of programmes, conventional and innovative, leading to Diploma, Undergraduate and Postgraduate Degrees.  </p>
                <ul>
                    <li>Diploma in Communication English (DCE) [ Period of study : 1 year]</li>
                    <li>Diploma in Computer Applications (DCA)  ) [ Period of study : 1 year]</li>
                    <li>BA – HEP ,BA-PPS, BA-HPS  [ Period of study : 3 years]</li>
                    <li>B.Com [ Period of study :  3 years]</li>
                    <li>MA  - Economics / English  [ Period of study :  2 years]</li>
                    <li>M.Com [ Period of study :  2 years]</li>
                    <li>MBA [ HRM/ Financial Management, Marketing Management, Systems Management, Hospital Management, Operations Managements  [ Period of study :  2 years]</li>
                    <li>MCA [ Period of study :  3  years]</li>
                </ul>
            </div>
            <footer>
                <p>Copyright Vidya Systems 2021</p>
            </footer>
        </>
    )
}

export default Home;