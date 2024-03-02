import { Form, useActionData } from "react-router-dom";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const response = await fetch("http://localhost:5000/contactme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const message = await response.text();
    return { message };
  } catch (err) {
    return { err };
  }
};

export default function Contact() {
  const actionData = useActionData();

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
          Mail Now
        </button>
      </Form>
      {actionData ? actionData.message : "nothing"}
    </div>
  );
}
