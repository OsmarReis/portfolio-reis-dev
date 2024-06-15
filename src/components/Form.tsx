"use client";

import { FormEvent, useState } from "react";
import InputLayout from "./InputLayout";

interface FormContent {
  name: string;
  email: string;
  subject: string;
  message: string;
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formValues)
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 grow basis-80 max-w-[450px]">
      <h1 className="text-2xl font-medium mb-2 pl-1">Say Hi!</h1>
      <InputLayout
        id={form_content.id.name}
        placeholder={form_content.placeholders.name}
        required={true}
        // value={formValues.name}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          setFormValues({ ...formValues, name: event.currentTarget.value });
        }}
      />
      <InputLayout
        id={form_content.id.email}
        placeholder={form_content.placeholders.email}
        required={true}
        // value={formValues.email}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          setFormValues({
            ...formValues,
            email: event.currentTarget.value,
          });
        }}
      />
      <InputLayout
        id={form_content.id.subject}
        placeholder={form_content.placeholders.subject}
        required={true}
        // value={formValues.subject}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          setFormValues({
            ...formValues,
            subject: event.currentTarget.value,
          });
        }}
      />
      <textarea
        id={form_content.id.message}
        placeholder={form_content.placeholders.message}
        rows={5}
        className="px-5 py-3 text-sm text-slate-900 border border-slate-200 rounded-lg placeholder:text-slate-200 hover:border-slate-500 duration-200"
        onChange={(event: FormEvent<HTMLTextAreaElement>) => {
          setFormValues({
            ...formValues,
            message: event.currentTarget.value,
          });
        }}
      />
      <button
        type="submit"
        className="bg-red-500 text-white text-sm px-5 py-3 rounded-lg hover:bg-white hover:text-red-500 border border-red-500 duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
