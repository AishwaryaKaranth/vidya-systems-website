import React from "react";
import { useState } from "react";
import style from "./Faq.module.scss";

const Faq = () => {
  const [visible, setVisibility] = useState(true);
  const [dropdown, setDropdown] = useState(true);
  var faq = [
    {
      id: 1,
      question: "question1",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      id: 2,
      question: "question2",
      answer: "answer2",
    },
    {
      id: 3,
      question: "question3",
      answer: "answer3",
    },
  ];

  return (
    <div className="App">
      <h2 className={style["faq-heading"]}>Frequently Asked Questions</h2>
      <div className={style["container"]}>
        {faq.map((f) => (
          <section className={style["faq-container"]}>
            <li className={style["faq-question-container"]} key={faq.id}>
              {f.question}
            </li>
            <div className={style["faq-button-container"]}>
              <button
                className={style["faq-button"]}
                onClick={() => setVisibility(visible ? false : true)}
              >
                +
              </button>
            </div>
            {visible && (
              <li className={style["faq-answer-container"]} key={faq.id}>
                {f.answer}
              </li>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Faq;
