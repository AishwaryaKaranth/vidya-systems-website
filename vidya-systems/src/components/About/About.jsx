import React from 'react';
import styles from './About.module.scss'
import Footer from "../Footer/Footer";

const About=()=>{
    return(
        <div className={styles["container"]}>
            <h2 className={styles["about-heading"]}>Vidya Systems</h2>
            <h4 className={styles["about-subheading"]}>Explore Learning</h4>
            <br/>
            <h3 className={styles["mission-heading"]}>Our Mission</h3>
            <ul>
                <li className={styles["mission-points"]}>To promote Educational awareness and concern globally for Learners.</li>
                <li className={styles["mission-points"]}>To support the Centre’s belief and justice to be given to all its students.</li>
            </ul>
            <h3 className={styles["mission-heading"]}>Our Purpose</h3>
            <ul>
                <li className={styles["mission-points"]}>To be the best Centre in Bangalore North for providing Distance Education Courses-Under Graduation and Post-Graduation Degree’s  in the field of IT and Management.</li>
                <li className={styles["mission-points"]}>To embrace the oneness of all people through Educational Programs like Industry Oriented Programs- IT Programs in the field of Big Data Hadoop, Machine Learning, Cloud Platforms.</li>
                <li className={styles["mission-points"]}>To help empower learners through learning, teaching and  to provide performance opportunities</li>
            </ul>
            <Footer/>
        </div>
    )
}
export default About;