import React, {useState} from "react";
import bannerImage from "../images/homeBanner.svg";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import MailChimpModal from "../components/mailChimpModal";
import Icon from "../components/icons";
const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const modalHandler = () =>{
        setShowModal(true);
    };
    return (
        <>
            <div className="container homeSection">
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-7 appInfoBox">
                        <h3 className="banner-heading">Shopify of NFTs</h3>
                        <p className="banner-content">
                            Launch your own storefronts
                            <br/> Secured NFT Marketplace built on PersistenceSDK</p>
                        <div className="buttons-group">
                            <a href="https://demo.app.assetmantle.one/" target="_blank" rel="noopener noreferrer" className="btn-primary-link">
                                Marketplace
                            </a>
                            <OverlayTrigger
                                key="coming-soon-button"
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-coming-soon-button`}>
                                        Coming Soon
                                    </Tooltip>
                                }
                            >
                                <Button variant="secondary" className="button-double-border">Launch Your Own Store
                                </Button>
                            </OverlayTrigger>

                        </div>
                    </div>
                    <div className="col-md-5 banner-image-section">
                        <img src={bannerImage} alt={"bannerImage"} />
                    </div>
                </div>
            </div>
            <div className="container second-section">
                <h3 className="banner-heading heading">Get in Touch</h3>
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-6">
                        <div className="inner-box">
                            <p className="banner-content"> Artists & creators, want to get featured in the alpha launch of the marketplace
                                Apply today
                            </p>
                            <a href="https://forms.gle/bcVYqGXUiHsTM2XF8" target="_blank" rel="noopener noreferrer" className="btn-primary-link">
                                Fill the form
                            </a>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="inner-box">
                            <p className="banner-content">Be the first to receive Asset Mantle updates, latest projects,announcements and sneak peeks.
                            </p>
                            <div className="buttons-group">
                            <Button variant="secondary" className="button-double-border" disabled onClick={modalHandler}>Join Whitelist(bob123@gmail.com)</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container features-section">
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Multi-Wallet Support</p>
                            <p className="card-content">Asset Mantle supports a variety of web3 wallets including Keplr and hardware wallets like Ledger
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Interoperable NFTs</p>
                            <p className="card-content">Built on top our InterNFT Standards, the marketplace would allow an convinient way to support cross-chain interoperable NFTs</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Launch Your Own Stores</p>
                            <p className="card-content">The marketplace will allow users to create their own storefronts with user friendly & drag-and-drop experience.
                                Also allow users to upload, publish, and sell their minted NFTs.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Decentralised NFT marketplace
                            </p>
                            <p className="card-content">First Decentralised marketplace for NFTs in cosmos ecosystem with zero gas fees and low minting costs.</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal ?
                    <MailChimpModal setShowModal={setShowModal}/>
                    : ""
            }
            </>


    );
};

export default HomePage;
