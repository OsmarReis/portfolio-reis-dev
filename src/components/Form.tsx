"use client";

import { FormEvent, useState } from "react";
import InputLayout from "./InputLayout";

interface FormContent {
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
}

export default function Form() {
  const [formValues, setFormValues] = useState<FormContent>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form_content = {
    id: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    placeholders: {
      name: "Your Name",
      email: "Your Email",
      subject: "Your Subject",
      message: "Your Message",
    },
    type: {
      text: "text",
      email: "email",
      password: "password",
      radio: "radio",
    },
  };

  const handleSubmit = (event: FormEvent) => {
    console.log(formValues);
    event.defaultPrevented;
  };

  return (
    <form className="flex flex-col gap-6 max-w-96">
      <h1 className="text-2xl font-medium mb-2 pl-1">Say Hi!</h1>
      <InputLayout
        id={form_content.id.name}
        placeholder={form_content.placeholders.name}
        value={formValues.name}
        onChange={(event: FormEvent) => {
          setFormValues({ ...formValues, name: event.currentTarget.nodeValue });
        }}
      />
      <InputLayout
        id={form_content.id.email}
        placeholder={form_content.placeholders.email}
        value={formValues.email}
        onChange={(event: FormEvent) => {
          setFormValues({
            ...formValues,
            email: event.currentTarget.nodeValue,
          });
        }}
      />
      <InputLayout
        id={form_content.id.subject}
        placeholder={form_content.placeholders.subject}
        value={formValues.subject}
        onChange={(event: FormEvent) => {
          setFormValues({
            ...formValues,
            subject: event.currentTarget.nodeValue,
          });
        }}
      />
      <textarea
        id={form_content.id.message}
        placeholder={form_content.placeholders.message}
        rows={5}
        className="px-5 py-3 text-sm text-slate-900 border border-slate-200 rounded-lg placeholder:text-slate-200 hover:border-slate-500 duration-200"
      />
      <button
        className="bg-red-500 text-white text-sm px-5 py-3 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 duration-300"
        onSubmit={handleSubmit}
      >
        Send Message
      </button>
    </form>
  );
}
