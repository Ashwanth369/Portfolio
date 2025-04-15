"use client";

import styles from "./Contact.module.css";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";
import profile from "@/public/profile.json";

const { email, github, linkedin } = profile.contact;

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const isDisabled = status !== "idle";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("sent");
        setTimeout(() => {
          form.reset();
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "sent":
        return "Sent!";
      case "error":
        return "Failed";
      default:
        return "Send Message";
    }
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.heading}>Get in Touch</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isDisabled}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={isDisabled}
          />
        </div>
        <div className={styles.messageWrapper}>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            disabled={isDisabled}
          />
          <button
            type="submit"
            className={clsx(styles.submitButton, {
              [styles.sent]: status === "sent",
              [styles.error]: status === "error",
            })}
            disabled={isDisabled}
          >
            {getButtonText()}
          </button>
        </div>
      </form>

      <div className={styles.contact_buttons}>
        <a href={`mailto:${email}`} className={styles.button}>
          <FaEnvelope /> Email
        </a>
        <a href={github} className={styles.button} target="_blank">
          <FaGithub /> GitHub
        </a>
        <a href={linkedin} className={styles.button} target="_blank">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
