import React, { useState, useEffect } from "react";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

const SubscribeForm = ({ status, message, onValidated }) => {
  const [isLoading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  let email;

  console.log(status, message, onValidated, isLoading, disable);

  useEffect(() => {
    document.querySelector("button#submit").disabled = disable;
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
      <input
        type="email"
        id="email"
        placeholder="example@gmail.com"
        required
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <button id="submit" type="submit" onSubmit={!isLoading ? submit : null}>
        Join
      </button>
      <div className="subscription-result">
        {status === "error" && (
          <div style={{ color: "red" }} className="show-message">
            Email already subscribed.
          </div>
        )}
        {status === "success" && (
          <div style={{ color: "green" }} className="show-message">
            Thank you for subscribing!
          </div>
        )}
      </div>
    </>
  );
};

export default SubscribeForm;
