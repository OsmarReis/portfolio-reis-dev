import { FormEvent, FormEventHandler } from "react"

export default function Form() {

  const placeholders = {
    name: "Your Name",
    email: "Your Email",
    subject: "Your Subject",
    message: "Your Message"
  }


  const handleSubmit = (event: FormEvent) => {
    event.defaultPrevented
  }

  return(
    <form className="flex flex-col">
      <h1>Say Hi!</h1>
      <input id="Name" type="text" placeholder={placeholders.name} className=""/>
      <input id="Email" type="email" placeholder={placeholders.email} className=""/>
      <input id="Subject" type="text" placeholder={placeholders.name} className=""/>
      <textarea id="TextArea" placeholder={placeholders.message} className=" text-slate-400"/>
      <button className="">Send Message</button>
    </form>
  )
}