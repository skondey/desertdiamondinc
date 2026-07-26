"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dd-black mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dd-black mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-dd-black mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-dd-black mb-2">
          Service of Interest
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="aws-cloud">AWS Cloud Architecture & Deployment</option>
          <option value="infrastructure-as-code">Infrastructure as Code (Terraform)</option>
          <option value="devops-cicd">DevOps & CI/CD</option>
          <option value="zero-trust">Zero Trust Architecture & IAM</option>
          <option value="security-compliance">Security & Compliance</option>
          <option value="systems-admin">Systems Administration</option>
          <option value="managed-support">Managed Support</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dd-black mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        />
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! We'll be in touch within 1 business day.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
