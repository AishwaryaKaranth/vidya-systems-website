import React from "react";
import styles from "./Home.module.scss";
import heroImage from "../../assets/hero-image-2.svg";
import grid1Image from "../../assets/expert.svg";
import grid2Image from "../../assets/certify.svg";
import grid3Image from "../../assets/time.svg";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Top distance education center in Mathikere, Bangalore North offering software training, undergraduate and postgraduate courses"
				></meta>
				<title>Vidya Systems</title>
			</Helmet>
			<div className={styles["container"]}>
				<div className={styles["container-grid"]}>
					<img
						src={heroImage}
						className={styles["hero-image"]}
						alt="depicting books"
					></img>
				</div>
				<div className={styles["container-grid"]}>
					<h2 className={styles["hero-heading"]}>Learn from the best.</h2>
					<button className={styles["hero-button"]}>
						<HashLink
							to="/#courses-info"
							style={{ color: "var(--secondary-color)" }}
						>
							Know More
						</HashLink>
					</button>
				</div>
			</div>
			<hr></hr>
			<div className={styles["intro-container"]}>
				<h2>Vidya Systems</h2>
				<h5>Explore Learning</h5>
				<p>
					Vidya Systems is one of the best centre in Bangalore North providing
					Distance Education Courses - Under Graduation and Post-Graduation
					Degree’s in the field of IT and Management. Vidya Systems's mission is
					to embrace the oneness of all people through Educational Programs like
					Industry Oriented Programs - IT Programs in the field of Big Data
					Hadoop, Machine Learning, Cloud Platforms and to help empower learners
					through learning, teaching and to provide performance opportunities.
				</p>
			</div>
			<div className={styles["flex-container"]}>
				<div className={styles["flex-container-grid"]}>
					<div className={styles["flex-inner-grid"]}>
						<img src={grid1Image} alt="depicting trainers" />
						<h5>Expert Trainers</h5>
					</div>
				</div>
				<div className={styles["flex-container-grid"]}>
					<div className={styles["flex-inner-grid"]}>
						<img src={grid2Image} alt="depicting certificates" />
						<h5>Get Certified</h5>
					</div>
				</div>
				<div className={styles["flex-container-grid"]}>
					<div className={styles["flex-inner-grid"]}>
						<img src={grid3Image} alt="depicting a clock" />
						<h5>Flexible Timings</h5>
					</div>
				</div>
			</div>
			<div className={styles["intro-container"]} id="courses-info">
				<h2>Invest in your career with Vidya Systems</h2>
				<p>
					Vidya Systems offers courses from <span>Gitam University</span> and
					<span>Suresh Gyan Vihar University</span>. <br />
					Check out the <Link to="/" className={styles["intro-container-link"]}>undergraduate</Link> and <Link to="/" className={styles["intro-container-link"]}>postgraduate</Link> courses from Gitam
					university here.
					<br />
					Check out <Link to="/SvguUG" className={styles["intro-container-link"]}>undergraduate</Link> and <Link to="/SvguPG" className={styles["intro-container-link"]}>postgraduate</Link> courses from SGVU here.
					<br />
					<Link to="/Contact" style={{color:"black"}} className={styles["intro-container-link"]}>To know more reach out to us.</Link>
				</p>
			</div>
			<div className={styles["faq-container"]}>
				<Faq />
			</div>
			<footer>
				<p>&#169; Vidya Systems 2022</p>
			</footer>
		</>
	);
};

export default Home;
