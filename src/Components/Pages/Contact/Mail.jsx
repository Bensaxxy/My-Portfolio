/** @format */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Mail = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

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
        () => {
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Your name</label>
          <input id="contact-name" type="text" name="user-name" autoComplete="name" placeholder="Jane Doe" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-secondary dark:focus:ring-secondary/15" required />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Your email</label>
          <input id="contact-email" type="email" name="user-email" autoComplete="email" placeholder="jane@company.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-secondary dark:focus:ring-secondary/15" required />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">How can I help?</label>
          <textarea id="contact-message" name="user-project" rows="5" className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-secondary dark:focus:ring-secondary/15" required placeholder="Tell me about the role, project, or opportunity." />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`rounded-xl px-5 ${
            loading
              ? "bg-primary/80 dark:bg-secondary/80 cursor-not-allowed"
              : "bg-primary hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-secondary"
          } text-white font-semibold py-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {/* Success Message */}
      {messageSent && (
        <p className="text-emerald-600 font-semibold" role="status">
          Your message has been sent successfully!
        </p>
      )}
      {error && <p className="text-sm font-medium text-rose-600" role="alert">Your message could not be sent. Please email Benjamin directly instead.</p>}
    </div>
  );
};
