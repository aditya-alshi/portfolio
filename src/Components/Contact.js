import { Form, useActionData, useNavigation } from "react-router-dom";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const url = "https://portfolio-vivc.onrender.com/contactme";
    // const url = "http://localhost:5000/contactme"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const status = await response.json();
    document.querySelector(".contact--form").reset();
    return { status };
  } catch (err) {
    return { err };
  }
};

export default function Contact() {
  let actionData = useActionData();
  const navigation = useNavigation();

  return (
    <div className="contact--wrapper">
      <h1>Contact</h1>
      <Form method="post" className="contact--form" replace>
        <label
          className="contact--form--labels contact--form--elements"
          htmlFor="name"
        >
          Name*
        </label>
        <br />
        <input
          className="contact--form--inputs contact--form--elements"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <br />
        <br />
        <label
          className="contact--form--labels contact--form--elements"
          htmlFor="emailaddress"
        >
          Email Address*
        </label>
        <br />
        <input
          className="contact--form--inputs contact--form--elements"
          type="email"
          name="emailaddress"
          id="emailaddress"
          placeholder="Your Email Address"
          required
        />
        <br />
        <br />
        <label
          className="contact--form--labels contact--form--elements"
          htmlFor="messageforMe"
        >
          Message*
        </label>
        <br />
        <textarea
          className="contact--form--inputs contact--form--elements"
          rows="6"
          name="messageforMe"
          id="messageforMe"
          placeholder="Your message"
        />
        <br />
        <br />
        <button className="contact--submit--button" type="submit">
          {navigation.state === "submitting" ? "Submitting..." : "Submit"}
        </button>
        {actionData ? " " + actionData.status.message : ""}
      </Form>
    </div>
  );
}
