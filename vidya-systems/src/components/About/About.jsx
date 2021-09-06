import React from 'react';
import styles from './About.module.scss'

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
            <p className={styles["desc"]}>“Vidya Systems” was founded and registered under Company’s Act in 1996.<br/>
We were co- partners of MICE initially in the year 1996, Manipal Institute of Computer Education being a leading Computer Training institute with more than 5000 students who have studied in our centre. Programmers, Computer users trained in MICE are now working in different organizations in India and Abroad.
<br/>
With encouragement from educators throughout the India, we partnered  with Sikkim Manipal University –Distance Education  in the year 2000  which was  born  with the basic objective of strengthening the close link of education to skill development and the making the youth of Sikkim educated, skilled and employable, giving them the capacity to harness diverse opportunities both within and outside Sikkim. This created more job opportunities for our youth, thus solving the growing unemployment in the State. We were an Authorized Distance Learning Centre located at Bangalore North, played a lead role for running Distance Education Under Graduate and Post-Graduation Programs from Sikkim Manipal University.  We were awarded as a “Best Performer” for the year 2008, 2009, 2010, 2011 and 2012 from Sikkim Manipal University.
<br/>
In the year of 2013 we were one among the first Distance Education Centre to start the 
GITAM Distance Learning at Mathikere, Bangalore.
</p>
        </div>
    )
}
export default About;