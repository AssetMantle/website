import React, {useState} from "react";
import {Button} from "react-bootstrap";
import MailChimpModal from "../components/mailChimpModal";

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
                            <a href="https://demo.assetmantle.one/" target="_blank" rel="noopener noreferrer" className="btn-primary-link">
                                Marketplace
                            </a>
                            <Button variant="secondary" className="button-double-border" disabled title="Coming Soon">Launch Your Own Store
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-5 banner-image-section">
                        <img src='/images/homeBanner.svg' alt={"bannerImage"} />
                    </div>
                </div>
            </div>
            <div className="container second-section">
                <h3 className="banner-heading heading">Get in Touch</h3>
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-6">
                        <div className="inner-box">
                            <p className="banner-content"> Apply today to launch your own stores and NFT Collections on assetMantle.
                            </p>
                            <a href="https://forms.gle/bcVYqGXUiHsTM2XF8" target="_blank" rel="noopener noreferrer" className="btn-primary-link">
                               Apply here
                            </a>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="inner-box">
                            <p className="banner-content">Subscribe to our newsletters and be the first one to get latest updates and announcements.
                            </p>
                            <div className="buttons-group">
                            <Button variant="secondary" className="button-double-border" onClick={modalHandler}>Join Whitelist(bob123@gmail.com)</Button>
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
                            <p className="card-content">assetMantle supports a variety of web3 wallets including Keplr and hardware wallets like Ledger.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Interoperable NFTs</p>
                            <p className="card-content">Built on top our InterNFT Standards, the marketplace would allow a convinient way to support cross-chain interoperable NFTs.</p>
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
                            <p className="card-content">First Decentralised marketplace for NFTs in cosmos ecosystem with zero gas fees and low minting cost.</p>
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
