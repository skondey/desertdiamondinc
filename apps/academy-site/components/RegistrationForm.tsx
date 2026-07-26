"use client";

import { useState, FormEvent } from "react";
import { programs, cohorts } from "@desertdiamond/shared/content";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    cohort: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", program: "", cohort: "", message: "" });
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
          Full Name *
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
        <label htmlFor="phone" className="block text-sm font-medium text-dd-black mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-medium text-dd-black mb-2">
          Program of Interest *
        </label>
        <select
          id="program"
          required
          value={formData.program}
          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        >
          <option value="">Select a program...</option>
          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.title} - ${program.price.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cohort" className="block text-sm font-medium text-dd-black mb-2">
          Preferred Cohort *
        </label>
        <select
          id="cohort"
          required
          value={formData.cohort}
          onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        >
          <option value="">Select a cohort...</option>
          {cohorts.map((cohort) => (
            <option key={cohort.name} value={cohort.name}>
              {cohort.name} (Starts {cohort.startDate})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dd-black mb-2">
          Additional Questions or Comments
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-dd-gray-300 rounded-lg focus:ring-2 focus:ring-dd-blue focus:border-transparent"
        />
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you for registering! We'll contact you within 1 business day with next steps.
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
        {status === "loading" ? "Submitting..." : "Submit Registration"}
      </button>
    </form>
  );
}
