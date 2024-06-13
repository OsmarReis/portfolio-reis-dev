import { FormEvent } from "react";

interface InputLayoutProps {
  id: string;
  type?: string;
  placeholder: string;
  value?: string | null;
  required?: boolean;
  onChange(event: FormEvent): void;
}

export default function InputLayout({
  id,
  type,
  placeholder,
  value,
  required,
  onChange,
}: InputLayoutProps) {
  return (
    <input
      id={id}
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      value={value || undefined}
      className="px-5 py-3 text-sm text-slate-900 border border-slate-200 rounded-lg placeholder:text-slate-200 hover:border-slate-500 duration-200"
      required={required}
    />
  );
}
