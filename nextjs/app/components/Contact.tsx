import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get In Touch</span>
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container container grid">
        <form id="contact_form" action="" method="POST" className="contact__form">
          <label className="contact__label" htmlFor="form__name">Name</label>
          <input type="text" name="form__name" id="form__name" placeholder="Name" className="contact__input" required />
          <label className="contact__label" htmlFor="form__mail">Email</label>
          <input type="email" name="form__mail" id="form__mail" placeholder="Email" className="contact__input" required />
          <label className="contact__label" htmlFor="form__project">Project</label>
          <input type="text" name="form__project" id="form__project" placeholder="Project" className="contact__input" required />
          <textarea name="form__textarea" id="form__message" placeholder="Message" className="contact__input contact__textarea" required />
          <button id="send__button" className="contact__button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
