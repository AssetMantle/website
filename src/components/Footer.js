import React from 'react';
import logo from "../images/logo.svg";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Icon from "./icons";
const Footer = () => {
    const socialList = [
        {
            url: "https://twitter.com/AssetMantle",
            iconName: 'twitter-logo',
            tooltip: 'twitter'
        }, {
            url:  "https://medium.com/persistence-blog" ,
            iconName: 'medium',
            tooltip: 'medium'
        }, {
            url: "https://t.me/assetmantle",
            iconName: 'telegram-plane',
            tooltip: 'telegram'
        }, {
            url: "https://discord.gg/gQBaV799",
            iconName: 'discord',
            tooltip: 'discord'
        },
    ];
    return (
       
        <div className="footer">
            <div className="container">
                <div className="bottom-section">
                    <div className="blogs">
                        <a href="https://persistence.one" target="_blank" rel="noopener noreferrer" className="help">
                            Company
                        </a>
                        <a href="https://notes.persistence.one/s/Jufq_ChF-" target="_blank" rel="noopener noreferrer" className="blog">
                            Docs
                        </a>
                    </div>
                    <div className="top-section">
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <p className="footer-text"> © {new Date().getFullYear()}
                            <span className="link_color"> AssetMantle - Marketplace for NFTs </span>
                        </p>
                    </div>
                    <div className="bottom-right-section">
                        <div className="social-links-section">
                            <ul className="list-unstyled footer-list">
                                {
                                    socialList.map((item,) => (
                                        <OverlayTrigger
                                            key={item.iconName}
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-${item.iconName}}`}>
                                                    {item.tooltip}
                                                </Tooltip>
                                            }
                                        >
                                            <a href={item.url}  rel="noopener noreferrer"
                                                target="_blank"><Icon viewClass="social_icon_imgg"
                                                    icon={item.iconName} /></a>
                                        </OverlayTrigger>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default Footer;
