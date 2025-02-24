import { BPdotsSquare } from "@/config/fonts/LocalImports";
import React, { useState } from "react";
import { sendEmail } from "@/app/actions/email";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sentMail, setSentMail] = useState(false);

  const emailAddress = "hello@mantleworks.one";

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await sendEmail({
        name: `${firstName} ${lastName}`.trim(),
        businessEmail: email,
        companyName: company,
        message,
      });

      console.log("response: ", response);

      if (response?.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSentMail(true);
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  }

  return (
    <section className="am-metrics-parent" id="contact">
      <div className={`am-container am-contact ${BPdotsSquare.className}`}>
        <div className="content">
          <h2>Connect</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="two-col">
              {[
                {
                  label: "First Name",
                  value: firstName,
                  setter: setFirstName,
                  id: "first_name",
                },
                {
                  label: "Last Name",
                  value: lastName,
                  setter: setLastName,
                  id: "last_name",
                },
              ].map(({ label, value, setter, id }) => (
                <div key={id} className="element">
                  {/* <label htmlFor={id} className="">
                          {label}
                        </label> */}
                  <input
                    type="text"
                    id={id}
                    className=""
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    required
                    placeholder={label}
                  />
                </div>
              ))}
            </div>
            {[
              {
                label: "Business Email",
                value: email,
                setter: setEmail,
                type: "email",
                id: "email",
              },
              {
                label: "Company Name",
                value: company,
                setter: setCompany,
                type: "text",
                id: "company",
              },
            ].map(({ label, value, setter, type, id }) => (
              <div key={id} className="element">
                {/* <label htmlFor={id} className="">
                        {label}
                      </label> */}
                <input
                  type={type}
                  id={id}
                  className=""
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  required
                  placeholder={label}
                />
              </div>
            ))}
            <div className="element">
              {/* <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-[var(--am-tll-orange)]"
                    >
                      Message
                    </label> */}
              <textarea
                id="message"
                rows="4"
                className=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`am-mw-bg-gradient-red-blue ${
                sentMail ? "disabled" : ""
              }`}
              disabled={sentMail}
            >
              <span>{sentMail ? "Email Sent" : "Submit"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
