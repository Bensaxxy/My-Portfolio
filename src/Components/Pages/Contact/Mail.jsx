/** @format */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Mail = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          // console.log("message sent");
          form.current.reset();
          setMessageSent(true);
          setLoading(false);
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <h1 className=" font-semibold dark:text-secondary">
        Write me a message 👇🏾{" "}
      </h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Name Input */}
        <input
          type="text"
          name="user-name"
          placeholder="Your Name"
          className="border rounded border-black/20 outline-none duration-500 hover:border-primary/80 px-4 py-2"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          name="user-email"
          placeholder="Your Email"
          className="border border-black/20 outline-none duration-500 hover:border-primary/80 rounded px-4 py-2"
          required
        />

        {/* Message Textarea */}
        <textarea
          name="user-project"
          rows="4"
          className="border border-black/20 outline-none duration-500 hover:border-primary/80 rounded px-4 py-2 resize-none"
          required
          placeholder="message"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          value="Send"
          rows="4"
          className={`${
            loading
              ? "bg-primary/80 dark:bg-secondary/80 cursor-not-allowed"
              : "bg-primary hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-secondary"
          } text-white font-semibold py-2 rounded transition duration-300`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {/* Success Message */}
      {messageSent && (
        <p className="text-green-500 font-semibold mt-4">
          Your message has been sent successfully!
        </p>
      )}
    </div>
  );
};
