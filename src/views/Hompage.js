import React from "react";
import bannerImage from "../images/homeBanner.svg";
import {Button} from "react-bootstrap";
const HomePage = () => {
    return (
        <>
            <div className="container homeSection">
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-7 appInfoBox">
                        <h3 className="banner-heading">Shopify for NFTs</h3>
                        <p className="banner-content">
                            Launch your own storefronts
                            <br/> Secured NFT Marketplace built on PersistenceSDK</p>
                        <div className="buttons-group">
                            <Button variant="primary" className="button-double-border">Marketplace</Button>
                            <Button variant="secondary" className="button-double-border" disabled title="Coming Soon">Launch Your Own Store
                            </Button>
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
                            <Button variant="secondary" className="button-double-border" disabled>Join Whitelist(bob123@gmail.com)</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container features-section">
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Multi-Wallet Support Wallets</p>
                            <p className="card-content">Asset Mantle supports a variety of web3 wallets including Keplr and hardware wallets like Ledger</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Interoperable NFTs</p>
                            <p className="card-content">An implementation of the NFT interface. The interNFT is defined to allow for maximum application logic flexibility in one interface and is focused on inter chain ownership transfer.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Launch Your Own Stores</p>
                            <p className="card-content">The marketplace will allow users to create their own storefronts. This marketplace will further allow users to upload, publish, and sell their minted NFTs.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="inner-card">
                            <p className="card-title">Interoperability</p>
                            <p className="card-content">The NFT module is implemented at the native chain application logic level instead of at the Smart Contract level,r</p>
                        </div>
                    </div>
                </div>
            </div>
            </>


    );
};

export default HomePage;
