import { useTheme } from "@/app/contexts/ThemeContext";
import React, { useState } from "react";

export const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setSubmitStatus({
        success: false,
        message:
          error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FF6B7A]/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#FF6B7A] rounded-full animate-pulse"></div>
            <span className="text-[#FF6B7A] font-semibold text-md uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h3
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            Let&apos;s <span className="text-[#FF6B7A]">Get In Touch</span>
          </h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitStatus.message && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.success
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className={`block mb-2 font-medium ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full p-3 rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block mb-2 font-medium ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full p-3 rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FF6B7A] hover:bg-[#ff5060] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
