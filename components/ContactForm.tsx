"use client";

import { useState, useRef, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, CircularProgress } from "@mui/material";
import ContactWrapper from "@/components/ContactWrapper";

export default function ContactForm() {
  const isClient = typeof window !== "undefined"; // Prevent SSR issues
  const [loading, setLoading] = useState(isClient ? false : undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isClient) return;
    setLoading(false);
  }, [isClient]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isClient) return;
    
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setModalIsOpen(true);
        formRef.current?.reset();
      } else {
        setError("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="mx-5">
      <ContactWrapper />
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="w-full flex flex-col my-4">
          <label className="font-bold text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            className="p-4 bg-gray-50 border border-gray-100"
            autoComplete="off"
            id="name"
            name="name"
          />
        </div>
        <div className="w-full flex flex-col my-4">
          <label className="font-bold text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            minLength={5}
            maxLength={150}
            required
            className="p-4 bg-gray-50 border border-gray-100"
            autoComplete="off"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="font-bold text-white" htmlFor="message">
            Message
          </label>
          <textarea
            rows={5}
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="w-full p-4 bg-gray-50 border border-gray-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 w-40 bg-gray-700 hover:bg-secondary hover:bg-opacity-50 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 transition duration-200 ease-in-out"
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
        </button>
      </form>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      <Dialog open={modalIsOpen} onClose={closeModal}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your message was successfully sent. We will be contacting you back within 5 working days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
