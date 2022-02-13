import React from "react";
import { useState } from "react";
import styles from "./Faq.module.scss";
import Footer from "../Footer/Footer";

const Faq = () => {
	const [visible, setVisible] = useState(null);
	const data = [
		{
			id: 1,
			question:
				"Do I need any academic qualifications to study degree from distance education?",
			answer:
				"Yes, there are specific entry level requirements for each programme. For any degree eligibility is +2 /Intermediate equivalent is required. For master's degree, any 3 year degree is required.",
		},
		{
			id: 2,
			question: "Is distance education degree as valid as a regular degree?",
			answer:
				"Distance education degree obtained from any recognised university is valid.",
		},
		{
			id: 3,
			question: "What are the various modes of fee payment?",
			answer: "Fee can be paid by Net Banking / phonePe / GPay",
		},
		{
			id: 4,
			question: "Which is the nearest landmark?",
			answer:
				"Vidya systems is located near MS Ramaiah Engineering College bus stop or CSB bank, Mathikere branch. You can get the directions to the same in contact page.",
		},
		{
			id: 5,
			question: "When are the examinations held?",
			answer:
				"Generally the semester exams will be held in the month of January. Those who have enrolled in July session will have exams in July and those who have enrolled in January session will have exams in January.",
		},
		{
			id: 6,
			question: "What are the office timings?",
			answer:
				"Monday to Saturday from 10 AM to 6:30 PM. Vidya systems will be closed on Sunday.",
		},
	];

	const clickHandler = (i) => {
		if (visible === i) {
			return setVisible(null);
		}
		setVisible(i);
	};

	return (
		<>
			<div className={styles["container"]}>
				<h1>Frequently Asked Questions</h1>
				<div className={styles["accordian-container"]}>
					{data.map((f, i) => (
						<div className={styles["accordian"]}>
							<div
								className={styles["accordian-question"]}
								onClick={() => clickHandler(i)}
							>
								<h5>{f.question}</h5>
								<span>{visible === i ? "-" : "+"}</span>
							</div>
							{visible === i ? <p>{f.answer}</p> : <></>}
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Faq;
