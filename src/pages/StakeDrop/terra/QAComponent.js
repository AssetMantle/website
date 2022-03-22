import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";
import { TwitterShareButton } from "react-share";

export default function QAComponent({
  Quiz,
  closeModal,
  TimeLeftQuiz,
  address1,
}) {
  // answer
  const [qArray, setqArray] = useState();
  const [totalQs, setTotalQs] = useState();
  const [Answer1, setAnswer1] = useState();
  const [Answer2, setAnswer2] = useState();
  const [Answer3, setAnswer3] = useState();
  const [Answer4, setAnswer4] = useState();
  const [Answer5, setAnswer5] = useState();
  const [Answer6, setAnswer6] = useState();
  const [Q1, setQ1] = useState();
  const [Q2, setQ2] = useState();
  const [Q3, setQ3] = useState();
  const [Q4, setQ4] = useState();
  const [Q5, setQ5] = useState();
  const [Q6, setQ6] = useState();

  const [Submit, setSubmit] = useState(false);
  const [SubmitStatus, setSubmitStatus] = useState(false);
  const [SubmitResponse, setSubmitResponse] = useState();
  const [address, setAddress] = useState();
  const [SubmitButtonStat, setSubmitButtonStat] = useState("");

  const [questionShow, setQuestionShow] = useState(0);

  useEffect(() => {
    fetch(`https://terra-stakedrop.assetmantle.one/qna/${address1}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.qnaSet.length === 3) {
          setQ1(data.qnaSet[0]);
          setQ2(data.qnaSet[1]);
          setQ3(data.qnaSet[2]);
          setqArray(3);
        } else if (data.qnaSet.length === 6) {
          setQ1(data.qnaSet[0]);
          setQ2(data.qnaSet[1]);
          setQ3(data.qnaSet[2]);
          setQ4(data.qnaSet[3]);
          setQ5(data.qnaSet[4]);
          setQ6(data.qnaSet[5]);
          setqArray(6);
        }
      });
  }, [address1]);

  //   const handleSubmit = () => {
  //     console.log(Answer1, Answer2, Answer3);
  //   };
  const chainID = "columbus-5";
  const numToT = ["", "a", "b", "c", "d"];
  // const data = `${Q1.QId}_${numToT[Answer1]},${Q2.QId}_${numToT[Answer2]},${Q3.QId}_${numToT[Answer3]}`;
  // const data = "ques1Id_ans1Id,ques2Id_ans2Id"
  const handleSubmit = async () => {
    const data =
      qArray === 3
        ? `${Q1.QId}_${numToT[Answer1]},${Q2.QId}_${numToT[Answer2]},${Q3.QId}_${numToT[Answer3]}`
        : qArray === 6
        ? `${Q1.QId}_${numToT[Answer1]},${Q2.QId}_${numToT[Answer2]},${Q3.QId}_${numToT[Answer3]},${Q4.QId}_${numToT[Answer4]},${Q5.QId}_${numToT[Answer5]},${Q6.QId}_${numToT[Answer6]}`
        : false;
    const keplrAccount = await window.keplr.getOfflineSignerAuto(chainID);
    const accounts = await keplrAccount.getAccounts();
    setAddress(accounts[0].address);
    if(address !== accounts[0].address){
      alert(`Address mismatch:- Expecting address ${address1} got ${accounts[0].address}. Please Ensure that you use the same address to perform magix tx and submit the quiz.`)
      setSubmitResponse("res");
      setSubmitButtonStat(0)
    } else {
      const pub = await window.keplr.getKey(chainID);
      const keplrSign = await window.keplr.signArbitrary(
          chainID,
          accounts[0].address,
          data
      );
      const res = await fetch(
          "https://terra-stakedrop.assetmantle.one/qna",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              signedData: data,
              signature: keplrSign.signature,
              publicKey: pub.pubKey,
            }),
          }
      );
      setSubmitResponse(res);
    }

  };
  function countAnswer(data) {
    var counter = 0;
    data.forEach((dd) => {
      if (dd.correct) {
        counter++;
      }
    });

    return counter;
  }
  useEffect(() => {
    SubmitResponse &&
      SubmitResponse.status === 200 &&
      fetch(`https://terra-stakedrop.assetmantle.one/qna/${address}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success === true) {
            setSubmitStatus(true);
            setSubmit(countAnswer(data.qaData));
            setTotalQs(data.day *3);
            Quiz(true);
          } else {
            setSubmitStatus(false);
          }
        });
  }, [SubmitResponse]);

  return (
    <Container>
      <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
      <div className="modal__sc">
        <div
          className="modal__sc_close"
          onClick={() => closeModal(false)}
          onKeyPress={(e) => e.key === "Enter" && closeModal(false)}
        >
          <img src="/images/icons/close.png" alt="close" />
        </div>
        <div className="modal_container">
          <div className="section_questions__qBox_title">
            <h3 className="section_questions__qBox_title__name">
              Quiz{" "}
              <div className="section_questions__qBox_title__right">
                <span>
                  <BiTimeFive />
                </span>
                <p>{TimeLeftQuiz}</p>
              </div>
            </h3>
          </div>
          {SubmitStatus === true ? (
            <div className="Success_qas">
              <h3>Great Job!</h3>
              <br />
              <br />
              <h3>
                You answered {Submit} out of {totalQs} questions correctly.
              </h3>
              <br />
              <div className="section_questions__qBox_button a">
                <p>Share your result</p>
                <button>
                  <TwitterShareButton
                    title={
                      "Just claimed my Daily Rewards by Participating in $MNTL Stakedrop campaign Quiz. Have you?"
                    }
                    url={window.location.href}
                    via={"AssetMantle"}
                    hashtags={["MNTL,AssetMantle"]}
                    className="share_button"
                  >
                    <AiOutlineTwitter />
                  </TwitterShareButton>
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="section_questions__qBox_details">
                Participate in the quiz to receive 40% of the $MNTL rewards at
                the end of the campaign.
              </p>
              {qArray === 3 &&
                {
                  0: Q1 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q1.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  1: Q2 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q2.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  2: Q3 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q3.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                }[questionShow]}
              {qArray === 6 &&
                {
                  0: Q1 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q1.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer1(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer1 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q1.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  1: Q2 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q2.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer2(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer2 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q2.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  2: Q3 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q3.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer3(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer3 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q3.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  3: Q4 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q4.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer4(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer4 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q4.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer4(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer4 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q4.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer4(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer4 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q4.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer4(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer4 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q4.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  4: Q5 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q5.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer5(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer5 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q5.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer5(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer5 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q5.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer5(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer5 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q5.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer5(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer5 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q5.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                  5: Q6 && (
                    <div className="section_questions__qBox_questions">
                      <p className="section_questions__qBox_ques">
                        {Q6.Question}
                      </p>
                      <div className="section_questions__qBox_ans">
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer6(1)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer6 === 1 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q6.Options[0].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer6(2)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer6 === 2 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q6.Options[1].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer6(3)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer6 === 3 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q6.Options[2].Answer}</span>
                        </div>
                        <div
                          className="section_questions__qBox_ans__s"
                          role="button"
                          tabIndex="0"
                          onClick={() => setAnswer6(4)}
                        >
                          <div
                            className={`section_questions__qBox_ans__s_radio ${
                              Answer6 === 4 ? "selected" : ""
                            }`}
                          >
                            <span></span>
                          </div>
                          <span>{Q6.Options[3].Answer}</span>
                        </div>
                      </div>
                    </div>
                  ),
                }[questionShow]}
              {qArray === 3 ? (
                <div className="section_questions__qBox_footer">
                  <div className="section_questions__qBox_footer__element">
                    <button
                      className="section_questions__qBox_left"
                      onClick={() =>
                        setQuestionShow(
                          questionShow !== 0 ? questionShow - 1 : 0
                        )
                      }
                      disabled={questionShow === 0 ? true : false}
                    >
                      <AiOutlineLeft /> Back
                    </button>
                  </div>
                  <div className="section_questions__qBox_footer__element">
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 0 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(0)}
                    >
                      1
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 1 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(1)}
                    >
                      2
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 2 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(2)}
                    >
                      3
                    </div>
                  </div>
                  <div className="section_questions__qBox_footer__element">
                    <button
                      className="section_questions__qBox_right"
                      onClick={() =>
                        setQuestionShow(
                          questionShow !== 2 ? questionShow + 1 : 2
                        )
                      }
                      disabled={questionShow === 2 ? true : false}
                    >
                      Next <AiOutlineRight />
                    </button>
                  </div>
                </div>
              ) : qArray === 6 ? (
                <div className="section_questions__qBox_footer">
                  <div className="section_questions__qBox_footer__element">
                    <button
                      className="section_questions__qBox_left"
                      onClick={() =>
                        setQuestionShow(
                          questionShow !== 0 ? questionShow - 1 : 0
                        )
                      }
                      disabled={questionShow === 0 ? true : false}
                    >
                      <AiOutlineLeft /> Back
                    </button>
                  </div>
                  <div className="section_questions__qBox_footer__element">
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 0 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(0)}
                    >
                      1
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 1 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(1)}
                    >
                      2
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 2 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(2)}
                    >
                      3
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 3 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(3)}
                    >
                      4
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 4 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(4)}
                    >
                      5
                    </div>
                    <div
                      className={`section_questions__qBox_footer__dot ${
                        questionShow === 5 ? "selected" : ""
                      }`}
                      role="button"
                      onClick={() => setQuestionShow(5)}
                    >
                      6
                    </div>
                  </div>
                  <div className="section_questions__qBox_footer__element">
                    <button
                      className="section_questions__qBox_right"
                      onClick={() =>
                        setQuestionShow(
                          questionShow !== 5 ? questionShow + 1 : 5
                        )
                      }
                      disabled={questionShow === 5 ? true : false}
                    >
                      Next <AiOutlineRight />
                    </button>
                  </div>
                </div>
              ) : undefined}
              <div className="section_questions__qBox_button">
                {qArray === 3 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={SubmitButtonStat === 2 ? true:false}
                    disabled={Answer1 && Answer2 && Answer3 ? false : true}
                  >
                    Submit
                  </button>
                ) : qArray === 6 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={
                      Answer1 &&
                      Answer2 &&
                      Answer3 &&
                      Answer4 &&
                      Answer5 &&
                      Answer6
                        ? false
                        : true
                    }
                  >
                    Submit
                  </button>
                ) : undefined}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 500;
  background-color: hsla(0, 0%, 6%, 0.5);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  .modal___fo_bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .modal__sc {
    max-height: 100%;
    position: relative;
    z-index: 3;
    background-color: var(--dark-xs);
    padding: 0px;
    border-radius: 20px;
    @media (max-width: 548px) {
      padding: 0px;
      height: 100%;
    }
    &_close {
      font: var(--h2);
      color: var(--yellow);
      position: absolute;
      top: 20px;
      right: 30px;
      @media (max-width: 548px) {
        top: 10px;
        right: 20px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .modal_container {
    z-index: 7;
    height: 100%;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__title {
      font: var(--h2);
      color: var(--gray);
      margin: 0;
      text-align: center;
      padding-bottom: 24px;
    }
    .Success_qas {
      padding: 20px 40px 40px;
      @media (max-width: 548px) {
        padding: 20px 20px;
      }
      color: var(--gray);
      h3 {
        text-transform: capitalize;
      }
    }
  }
`;
