import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { StakeDropContainer } from "../../styles/pages/stakeDropStyle";
import { useTranslation } from "react-i18next";

import UList from "../../components/UList";
import UList2 from "../../components/UList2";
import Details from "../../components/Details";
// import { calculateFee } from "@cosmjs/stargate";

export default function StakeDrop() {
  const { t } = useTranslation();

  function countAnswer(data) {
    var counter = 0;
    data.forEach((dd) => {
      if (dd.correct) {
        counter++;
      }
    });
    return counter;
  }

  // checking calculating cosmos reward
  const [cosmosDropStats, setCosmosDropStats] = useState({
    isCompleted: true,
    rewardLine1: "--",
    rewardLine2: 0,
  });
  const [cosmosCorrectAnswers, setCosmosCorrectAnswers] = useState();
  const [CosmosCheckingState, setCosmosCheckingState] = useState(0);
  const [CosmosAddress, setCosmosAddress] = useState(0);
  const cosmosChainID = "cosmoshub-4";
  const handleCosmosConnect = async () => {
    if (window.keplr) {
      setCosmosCheckingState(1);
      let offlineSigner = window.keplr.getOfflineSigner(cosmosChainID);
      let accounts = await offlineSigner.getAccounts();
      const account = accounts[0].address;
      setCosmosAddress(account);
      setCosmosCheckingState(2);
    } else {
      window.alert("Please install Keplr to move forward with the task.");
      setCosmosCheckingState(5);
    }
  };

  useEffect(() => {
    if (CosmosCheckingState === 2) {
      setCosmosCheckingState(3);
      fetch(
        `https://cosmos-stakedrop.assetmantle.one/delegator/${CosmosAddress}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success.toString() === "true") {
            setCosmosDropStats({
              isCompleted: true,
              rewardLine1: data.received,
            });
            setCosmosCheckingState(3);
            fetch(
              `https://cosmos-stakedrop.assetmantle.one/qna/${CosmosAddress}`
            )
              .then((res) => res.json())
              .then((data) => {
                setCosmosCorrectAnswers(countAnswer(data.qaData));
                setCosmosCheckingState(4);
              });
          } else if (data.success.toString() === "false") {
            setCosmosCheckingState(4);
            setCosmosDropStats({
              isCompleted: true,
              rewardLine1: "You didn't participate in this campaign!",
            });
          } else {
            setCosmosCheckingState(5);
          }
        });
    }
  }, [CosmosCheckingState, CosmosAddress]);

  const cosmosCalculation =
    Number(cosmosDropStats.rewardLine1) *
    (0.6 + (0.4 * cosmosCorrectAnswers) / 18);

  const [persistenceDropStats, setPersistenceDropStats] = useState({
    isCompleted: true,
    rewardLine1: 1234,
    rewardLine2: 12345,
  });
  const [terraDropStats, setTerraDropStats] = useState({
    isCompleted: true,
    rewardLine1: 1234,
    rewardLine2: 12345,
  });
  const [comdexDropStats, setComdexDropStats] = useState({
    isCompleted: true,
    rewardLine1: 1234,
    rewardLine2: 12345,
  });
  const [junoDropStats, setJunoDropStats] = useState({
    isCompleted: true,
    rewardLine1: 1234,
    rewardLine2: 12345,
  });
  const [stargazeDropStats, setStargazeDropStats] = useState({
    isCompleted: true,
    rewardLine1: 124,
    rewardLine2: 85748983,
  });

  const whatIsLIST = [
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_1"),
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_2"),
    t("STAKEDROP_WHAT_IS_STAKEDROP_LI_3"),
  ];

  const howItWorksLIST = [
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_1_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_1_DESCRIPTION"),
    },
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_2_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_2_DESCRIPTION"),
    },
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_3_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_3_DESCRIPTION"),
    },
    {
      title: t("STAKEDROP_HOW_IT_WORKS_LI_4_TITLE"),
      body: t("STAKEDROP_HOW_IT_WORKS_LI_4_DESCRIPTION"),
    },
  ];

  const AvailableStakeDrop = [
    {
      logo: "Cosmos_Logo.png",
      name: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_NAME"),
      value: "2,000,000 $MNTL",
      date: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_DATE"),
      start: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_START"),
      end: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_1_END"),
    },
    {
      logo: "Persistence_logo.png",
      name: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_NAME"),
      value: "1,000,000 $MNTL",
      date: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_DATE"),
      start: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_START"),
      end: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_2_END"),
    },
    {
      logo: "Terra_logo.png",
      name: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_NAME"),
      value: "2,000,000 $MNTL",
      date: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_DATE"),
      start: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_START"),
      end: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_3_END"),
    },
    {
      logo: "Comdex_logo.png",
      name: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_NAME"),
      value: "1,000,000 $MNTL",
      date: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_DATE"),
      start: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_START"),
      end: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_4_END"),
    },
    {
      logo: "Juno_logo.png",
      name: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_NAME"),
      value: "2,000,000 $MNTL",
      date: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_DATE"),
      start: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_START"),
      end: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_5_END"),
    },
    {
      logo: "Stargaze_logo.png",
      name: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_NAME"),
      value: "1,000,000 $MNTL",
      date: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_DATE"),
      start: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_START"),
      end: t("STAKEDROP_AVAILABLE_STAKEDROP_DROP_6_END"),
    },
  ];

  const FAQ = [
    {
      q: t("STAKEDROP_FAQ_QUESTION_1"),
      a: t("STAKEDROP_FAQ_ANSWER_1"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_2"),
      a: t("STAKEDROP_FAQ_ANSWER_2"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_3"),
      a: t("STAKEDROP_FAQ_ANSWER_3"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_4"),
      a: t("STAKEDROP_FAQ_ANSWER_4"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_5"),
      a: t("STAKEDROP_FAQ_ANSWER_5"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_6"),
      a: t("STAKEDROP_FAQ_ANSWER_6"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_7"),
      a: t("STAKEDROP_FAQ_ANSWER_7"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_8"),
      a: t("STAKEDROP_FAQ_ANSWER_8"),
    },
    {
      q: t("STAKEDROP_FAQ_QUESTION_9"),
      a: t("STAKEDROP_FAQ_ANSWER_9"),
    },
  ];

  return (
    <>
      <StakeDropContainer>
        <section className="section_intro">
          <div className="section_intro__element">
            <h1>{t("STAKEDROP_INTRO_TITLE")}</h1>
            <p className="section_intro__element_subtitle">
              {t("STAKEDROP_INTRO_SUB_TITLE")}
            </p>
            <p className="section_intro__element_description">
              {t("STAKEDROP_INTRO_DESCRIPTION")}
            </p>
            <div className="section_intro__element_buttons">
              <button className="section_intro__element_buttons_button">
                {t("STAKEDROP_INTRO_BUTTON_1")}
              </button>
              <button className="section_intro__element_buttons_button">
                {t("STAKEDROP_INTRO_BUTTON_2")}
              </button>
            </div>
            <div className="section_intro__element_readBlog">
              <p className="section_intro__element_readBlog__text">
                {t("AIRDROP_HERO_READ_BLOG_TEXT")}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.assetmantle.one/2022/03/14/mantledrop-stakedrop-101/"
                className="section_intro__element_readBlog__button"
              >
                {t("AIRDROP_HERO_READ_BLOG_BUTTON_TEXT")}
              </a>
            </div>
          </div>
          <div className="section_intro__element">
            <img
              src="/images/stakedrop/spiral.png"
              alt="network chain illustration"
            />
          </div>
        </section>
        <section className="section_whatIs">
          <h1>{t("STAKEDROP_WHAT_IS_STAKEDROP_TITLE")}</h1>
          <p>{t("STAKEDROP_WHAT_IS_STAKEDROP_DESCRIPTION")}</p>
          <div className="section_whatIs__element">
            <img
              src="/images/stakedrop/double_coin.png"
              alt="double coin illustration"
            />
            <UList data={whatIsLIST}></UList>
          </div>
        </section>
        <section className="section_howItWorks">
          <h2>{t("STAKEDROP_HOW_IT_WORKS_TITLE")}</h2>
          <p>{t("STAKEDROP_HOW_IT_WORKS_DESCRIPTION")}</p>
          <UList2 data={howItWorksLIST}></UList2>
        </section>
        <section className="section_availableStakeDrop">
          <h2>{t("STAKEDROP_AVAILABLE_STAKEDROP_TITLE")}</h2>
          <div className="section_availableStakeDrop__body">
            {React.Children.toArray(
              AvailableStakeDrop.map((data) => (
                <div
                  className={`section_availableStakeDrop__body_element ${
                    data.name.includes("Cosmos")
                      ? cosmosDropStats.isCompleted && "completed2"
                      : data.name.includes("Persistence")
                      ? persistenceDropStats.isCompleted && "completed2"
                      : data.name.includes("Terra")
                      ? terraDropStats.isCompleted && "completed2"
                      : data.name.includes("Comdex")
                      ? comdexDropStats.isCompleted && "completed2"
                      : data.name.includes("Juno")
                      ? junoDropStats.isCompleted && "completed2"
                      : data.name.includes("Stargaze")
                      ? stargazeDropStats.isCompleted && "completed2"
                      : ""
                  } ${
                    data.name.includes("Junoe") || data.name.includes("Stargazes")
                      ? "active"
                      : "comingSoon"
                  }`} //remove the last logic
                >
                  <div className="section_availableStakeDrop__body_element__stat">
                    <span>{t("COMPLETED")}</span>
                    <span>{t("ONGOING")}</span> {/* remove this span */}
                  </div>
                  <div className="section_availableStakeDrop__body_element__title">
                    <img
                      src={`/images/stakedrop/${data.logo}`}
                      alt="cosmos (atom) logo"
                    />
                    <a
                      href={
                        data.name.includes("Cosmos")
                          ? "/stakedrop/cosmos"
                          : data.name.includes("Terra")
                          ? "/stakedrop/terra"
                          : data.name.includes("Persistence")
                          ? "/stakedrop/persistence"
                          : data.name.includes("Comdex")
                          ? "/stakedrop/comdex"
                          : data.name.includes("Juno")
                          ? "/stakedrop/juno"
                          : data.name.includes("Stargaze")
                          ? "/stakedrop/stargaze"
                          : ""
                      }
                      className="section_availableStakeDrop__body_element__title_button_normal"
                    >
                      {t("VIEW")}
                    </a>
                    <a
                      href={
                        data.name.includes("Cosmos")
                          ? "/stakedrop/cosmos"
                          : data.name.includes("Persistence")
                          ? "/stakedrop/persistence"
                          : data.name.includes("Terra")
                          ? "/stakedrop/terra"
                          : data.name.includes("Comdex")
                          ? "/stakedrop/comdex"
                          : data.name.includes("Juno")
                          ? "/stakedrop/juno"
                          : data.name.includes("Stargaze")
                          ? "/stakedrop/stargaze"
                          : ""
                      }
                      className="section_availableStakeDrop__body_element__title_button_completed"
                    >
                      {t("DETAILS")}
                    </a>
                    <button className="section_availableStakeDrop__body_element__title_button_coming_soon">
                      {t("COMING_SOON")}
                    </button>
                  </div>
                  <div className="section_availableStakeDrop__body_element__body">
                    <p>{data.name}</p>
                    <div className="section_availableStakeDrop__body_element__body_options">
                      <div className="section_availableStakeDrop__body_element__body_options_option">
                        <img
                          src="/images/stakedrop/coins.png"
                          alt="coins illustration"
                        />
                        <p>{data.value}</p>
                      </div>
                      <div className="section_availableStakeDrop__body_element__body_options_option">
                        <img
                          src="/images/stakedrop/calender.png"
                          alt="calender illustration"
                        />
                        <p>{data.date}</p>
                      </div>
                      <div className="section_availableStakeDrop__body_element__body_options_option">
                        <img
                          src="/images/stakedrop/flag_fill.png"
                          alt="flag_fill illustration"
                        />
                        <p>{data.start}</p>
                      </div>
                      <div className="section_availableStakeDrop__body_element__body_options_option">
                        <img
                          src="/images/stakedrop/flag_outline.png"
                          alt="flag_outline illustration"
                        />
                        <p>{data.end}</p>
                      </div>
                    </div>
                    <div className="section_availableStakeDrop__body_element__body_data">
                      <div className="section_availableStakeDrop__body_element__body_data__img">
                        <img
                          src="/images/stakedrop/coins.png"
                          alt="small coins illustration"
                        />
                      </div>
                      <div className="section_availableStakeDrop__body_element__body_data__text">
                        <p>
                          {t(
                            "STAKEDROP_AVAILABLE_STAKEDROP_DROP_COMPLETED_TEXT"
                          )}
                        </p>
                        <p>
                          {data.name.includes("Cosmos")
                            ? cosmosDropStats.rewardLine1 !==
                              "You didn't participate in this campaign!"
                              ? isNaN(cosmosCalculation)
                                ? `0 $MNTL`
                                : `${cosmosCalculation} $MNTL`
                              : "You didn't participate in this campaign!"
                            : undefined}{" "}
                          {/* {cosmosCorrectAnswers} */}
                        </p>
                        {/* <p>
                          {data.name.includes("Cosmos")
                            ? cosmosDropStats.rewardLine2
                            : data.name.includes("Persistence")
                            ? persistenceDropStats.rewardLine2
                            : data.name.includes("Terra")
                            ? terraDropStats.rewardLine2
                            : data.name.includes("Comdex")
                            ? comdexDropStats.rewardLine2
                            : data.name.includes("Juno")
                            ? junoDropStats.rewardLine2
                            : data.name.includes("Stargaze")
                            ? stargazeDropStats.rewardLine2
                            : ""}
                        </p> */}
                      </div>
                    </div>
                    <div className="section_availableStakeDrop__body_element__claim_button">
                      <button
                        onClick={handleCosmosConnect}
                        disabled={
                          CosmosCheckingState === 0 || CosmosCheckingState === 4
                            ? false
                            : true
                        }
                      >
                        {data.name.includes("Cosmos")
                          ? {
                              0: "Check",
                              1: "Connecting Wallet",
                              2: "Wallet Connected",
                              3: "Calculating Rewards",
                              4: "Calculated",
                              5: "Failed - Retry",
                            }[CosmosCheckingState]
                          : // : data.name.includes("Persistence")
                            // ? persistenceDropStats.rewardLine2
                            // : data.name.includes("Terra")
                            // ? terraDropStats.rewardLine2
                            // : data.name.includes("Comdex")
                            // ? comdexDropStats.rewardLine2
                            // : data.name.includes("Juno")
                            // ? junoDropStats.rewardLine2
                            // : data.name.includes("Stargaze")
                            // ? stargazeDropStats.rewardLine2
                            ""}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        <section className="section_explanation">
          <h3>{t("STAKEDROP_EXPLANATION_TITLE")}</h3>
          <div className="section_explanation__video">
            <ReactPlayer
              url="https://youtu.be/Mo5GxFWG12w"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </section>
        <section className="section_faq">
          <h2>{t("STAKEDROP_FAQ_TITLE")}</h2>
          {/* <p>{t("STAKEDROP_FAQ_DESCRIPTION")}</p> */}
          {FAQ &&
            React.Children.toArray(
              FAQ.map((faq) => <Details title={faq.q} details={faq.a} />)
            )}
        </section>
      </StakeDropContainer>
      {/* {modalStat && <Modal modalTitle={modal} closeModal={setModalStat} />} */}
    </>
  );
}
