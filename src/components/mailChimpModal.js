import React, {useState, useEffect} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {Button, Modal, Spinner, Form} from "react-bootstrap";

const mailURl = process.env.REACT_APP_MAIL_CHIMP_URL;

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 500));
}

const CustomForm = ({status, message, onValidated}) => {
    const [isLoading, setLoading] = useState(false);
    const [disable, setDisable] = useState(true);
    let email;
    const onKeyPress = (e) => {
        if (e.which === 13) {
            submit()
        }
    };

    const handleChange = (e) => {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(e.target.value)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    };


    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
                setDisable(true);
            });
        }
    }, [isLoading]);

    const submit = () => {
        setLoading(true);
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });
        document.getElementById('email').value = '';
    };
    return (
        <div>

            <div className="mail-chimp-section">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        ref={node => (email = node)}
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        onKeyPress={onKeyPress}
                    />
                </Form.Group>
                <Button className="btn-subscribe" onClick={!isLoading ? submit : null} disabled={disable}>
                    {isLoading ?
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        : 'Subscribe'}
                </Button>
            </div>
            <div className="subscription-result">
                {status === "error" && (
                    <div
                        style={{color: "red"}}
                        className="show-message"
                    >

                        Email already subscribed.</div>
                )}
                {status === "success" && (
                    <div
                        style={{color: "green"}}
                        className="show-message"
                    >Thank you for subscribing!
                    </div>
                )}
            </div>
        </div>
    );
};
const MailChimpModal = (props) =>{
    const [show, setShow] = useState(true);
    const handleClose = () =>{
      setShow(false);
      props.setShowModal(false);
    };
    const url = mailURl;
    return(
        <Modal show={show} onHide={handleClose} className="mail-modal"
               centered>
            <Modal.Header closeButton>
                Join Whitelist
            </Modal.Header>

            <Modal.Body>
                <MailchimpSubscribe
                    url={url}
                    render={({subscribe, status, message}) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </Modal.Body>
        </Modal>
    )
};

export default MailChimpModal;