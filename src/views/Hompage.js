import React from "react";
import bannerImage from "../images/homeBanner.svg";
import {Button} from "react-bootstrap";
const HomePage = () => {
    return (
        <>
            <div className="container homeSection">
                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-7 appInfoBox">
                        <h3 className="banner-heading">Secure NFT wallet</h3>
                        <p className="banner-content">"Shopify for NFTs"
                            Launch your own storefronts
                            Secured NFT Marketplace built on PersistenceSDK</p>
                        <div className="buttons-group">
                            <Button variant="primary" className="button-double-border">Launch your own Store
                                (Coming Soon)</Button>
                            <Button variant="primary" className="button-double-border">Market Place</Button>
                        </div>
                    </div>
                    <div className="col-md-5 banner-image-section">
                        <img src={bannerImage} alt={"bannerImage"} />
                    </div>
                </div>
            </div>
            <div className="container homeSection second-section">
                <h3 className="banner-heading heading">Get in Touch</h3>

                <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
                    <div className="col-md-6">
                        <div className="inner-box">
                            <p className="banner-content"> Artists & creators, want to get featured in the alpha launch of the marketplace
                                Apply today
                            </p>
                            <Button variant="primary" className="button-double-border">Fill the form</Button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="inner-box">
                            <p className="banner-content">Be the first to receive Asset Mantle updates, latest projects,announcements and sneak peeks.
                            </p>
                            <div className="buttons-group">
                            <Button variant="primary" className="button-double-border">Email</Button>
                            <Button variant="primary" className="button-double-border">Join Whitelis</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>


    );
};

export default HomePage;
