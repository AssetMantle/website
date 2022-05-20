import React, { useState, useEffect } from "react";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

const SubscribeForm = ({ status = "success", message, onValidated }) => {
  const [isLoading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  let email;

  useEffect(() => {
    if (document.querySelector("button#submit")) {
      document.querySelector("button#submit").disabled = disable;
    }
  }, [disable]);

  const onKeyPress = (e) => {
    if (e.which === 13) {
      submit();
    }
  };

  const handleChange = (e) => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (pattern.test(e.target.value)) {
      setDisable(false);
    } else {
      setDisable(true);
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
    document.querySelector("input#email").value = "";
  };
  return (
    <>
      {status === "error" && (
        <div
          style={{ color: "var(--yellow)" }}
          className="footer_container__element_2__subscribe_form__message"
        >
          Email already subscribed.
        </div>
      )}
      {status === "success" && (
        <div
          style={{ color: "var(--gray)" }}
          className="footer_container__element_2__subscribe_form__message"
        >
          Thank you for subscribing!
        </div>
      )}
      {status !== "success" && (
        <>
          <p className="footer_container__element_2__subscribe_label">
            Email ID
          </p>
          <div className="footer_container__element_2__subscribe_form__fields">
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
              ref={(node) => (email = node)}
              onChange={handleChange}
              onKeyPress={onKeyPress}
            />
            <button
              id="submit"
              type="submit"
              onClick={!isLoading ? submit : null}
            >
              {isLoading ? "Joining" : "Join"}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SubscribeForm;
