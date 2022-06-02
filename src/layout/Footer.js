import React from "react";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { FooterContainer } from "../styles/layout/FooterStyle";

import DATA from "../data/footerData.json";

// icons
import { BsTwitter } from "react-icons/bs";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";

import BugBountyModal from "../components/BugBountyModal";
import SubscribeForm from "../components/SubscribeForm";
import { RequestAFeature } from "../components/RequestAFeature";
import { useTranslation } from "react-i18next";

const mailURl = process.env.REACT_APP_MAIL_CHIMP_URL;

const Footer = () => {
  const { t } = useTranslation();

  // const [email, setEmail] = useState();
  const [bugBountyModalStat, setBugBountyModalStat] = useState(false);
  const [suggestFeatureModalStat, setSuggestFeatureModalStat] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  const Icons = {
    twitter_icon: <BsTwitter />,
    discord_icon: <FaDiscord />,
    telegram_icon: <FaTelegramPlane />,
    github_icon: <FaGithub />,
    instagram_icon: <FaInstagram />,
  };

  return (
    <FooterContainer>
      <div className="footer_container">
        <div className="footer_container__element">
          <h2 className="footer__title">{t("FOOTER_TITLE")}</h2>
          <p className="footer__details">{t("FOOTER_DESCRIPTION")}</p>
          <div className="footer_container__element_emails">
            <h3 className="footer_container__element_emails__title">
              {t("EMAIL")}
            </h3>
            <img
              src="/images/icons/email_icon.png"
              alt="email icon"
              className="footer_container__element_emails__icon"
            />
          </div>

          <div className="footer_container__element_email__tile">
            <h4 className="footer_container__element_email__tile_title">
              {t("FOOTER_EMAIL_DESCRIPTION_1")}
            </h4>
            <a
              className="footer_container__element_email__tile_email"
              href={`mailto:${DATA.contents.email1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DATA.contents.email1}
            </a>
          </div>

          <div className="footer_container__element_email__tile">
            <h4 className="footer_container__element_email__tile_title">
              {t("FOOTER_EMAIL_DESCRIPTION_2")}
            </h4>
            <a
              className="footer_container__element_email__tile_email"
              href={`mailto:${DATA.contents.email2}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DATA.contents.email2}
            </a>
          </div>
        </div>
        <div className="footer_container__element_2">
          <div className="footer_container__element_2__subscribe">
            <h3 className="footer_container__element_2__subscribe_title">
              {t("FOOTER_SUBSCRIBE_TITLE")}
            </h3>
            <div className="footer_container__element_2__subscribe_form">
              <MailchimpSubscribe
                url={mailURl}
                render={({ subscribe, status, message }) => (
                  <SubscribeForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>

          <div className="footer_container__element_2_social">
            <h3 className="footer_container__element_2_social__title">
              {t("FOOTER_SOCIAL_TITLE")}
            </h3>
            <div className="footer_container__element_2_social__icons">
              {DATA.social.links &&
                React.Children.toArray(
                  DATA.social.links.map((data, index) => (
                    <a
                      className={`footer_container__element_2_social__icons_icon ${data.icon}`}
                      href={data.href && data.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icons[data.icon]}
                    </a>
                  ))
                )}
            </div>
          </div>
        </div>
        <div className="footer_container__element_2">
          <div className="footer_container__element_2__logo">
            <img src="/images/icons/logo.svg" alt="" />
          </div>
          <div className="footer_container__element_2__links">
            <p className="footer_container__element_2__links_link">
              {t("FOOTER_BUG_BOUNTY_LABEL")}&nbsp;
              <button
                className="footer_container__element_2__links_link__button"
                onClick={() => setBugBountyModalStat(true)}
                onKeyPress={(e) =>
                  e.key === "Enter" && setBugBountyModalStat(true)
                }
              >
                {t("BUG_BOUNTY_MODAL_TITLE")}
              </button>
            </p>
            <p className="footer_container__element_2__links_link">
              {t("FOOTER_FEATURE_LABEL")}&nbsp;
              <button
                className="footer_container__element_2__links_link__button"
                onClick={() => setSuggestFeatureModalStat(true)}
                onKeyPress={(e) =>
                  e.key === "Enter" && setSuggestFeatureModalStat(true)
                }
              >
                {t("REQUEST_A_FEATURE_MODAL_TITLE")}
              </button>
            </p>
            <p className="footer_container__element_2__links_link">
              {t("FOOTER_BLOG_LABEL")}&nbsp;
              <a
                href={DATA.contents.blogLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("BLOG")}
              </a>
            </p>
            <p className="footer_container__element_2__links_link">
              {t("FOOTER_DOCS_LABEL")}&nbsp;
              <a
                href={DATA.contents.docsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("DOCS")}
              </a>
            </p>
            <p className="footer_container__element_2__links_link">
              {t("FOOTER_EXPLORER_LABEL")}&nbsp;
              <a
                href={DATA.contents.explorerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("EXPLORER")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="bottom__line" />
      <div className="copy-right__footer">
        &copy; AssetMantle {new Date().getFullYear()} -{" "}
        {t("FOOTER_RIGHT_RESERVED")}{" "}
      </div>
      {bugBountyModalStat === true && (
        <BugBountyModal closeModal={setBugBountyModalStat} />
      )}
      {suggestFeatureModalStat === true && (
        <RequestAFeature closeModal={setSuggestFeatureModalStat} />
      )}
    </FooterContainer>
  );
};

export default Footer;
