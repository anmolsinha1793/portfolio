'use client';

import { useState } from 'react';
import { CONTAINER, SECTION } from './styles';

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CONTACT_CARDS = [
  {
    icon: 'bx bx-mail-send contact__card__icon',
    title: 'Email',
    detail: 'anmol.sinha1993@gmail.com',
    href: 'mailto:anmol.sinha1993@gmail.com',
  },
  {
    icon: 'bx bxl-whatsapp contact__card__icon',
    title: 'Whatsapp',
    detail: '8270300886',
    href: 'https://api.whatsapp.com/send?phone=918270300886&text=Hi There',
  },
  {
    icon: 'bx bxl-messenger contact__card__icon',
    title: 'Messenger',
    detail: 'anmol sinha',
    href: 'https://m.me/anmol.sinha9',
  },
];

type Field = 'name' | 'mail' | 'project';

export default function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: '',
    mail: '',
    project: '',
  });
  const [errors, setErrors] = useState<Record<Field, boolean>>({
    name: false,
    mail: false,
    project: false,
  });

  const isComplete =
    values.name.trim().length > 0 &&
    EMAIL_PATTERN.test(values.mail) &&
    values.project.trim().length > 0;

  const update = (field: Field, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: false }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const invalids: Field[] = [];
    if (!values.name.trim()) invalids.push('name');
    if (!values.mail.trim() || !EMAIL_PATTERN.test(values.mail)) invalids.push('mail');
    if (!values.project.trim()) invalids.push('project');

    setErrors({
      name: invalids.includes('name'),
      mail: invalids.includes('mail'),
      project: invalids.includes('project'),
    });

    if (invalids.length) {
      window.alert(`Please enter valid value for ${invalids.join(',')} field(s)`);
      return;
    }

    window.alert('Message sent');
    setValues({ name: '', mail: '', project: '' });
  };

  const inputClass = (field: Field) =>
    errors[field] ? 'contact__form__input error__val' : 'contact__form__input';
  const inputProps = (field: Field) => ({
    id: `form__${field}`,
    name: `form__${field}`,
    className: inputClass(field),
    value: values[field],
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => update(field, event.target.value),
  });

  return (
    <section className={`${SECTION} pb-12`} id="contact">
      <span className="block text-center text-smaller text-text-light">Get in touch</span>
      <h2 className="mb-8 text-center text-h2 text-first lg:mb-14">Contact Me</h2>

      <div className={`grid gap-y-12 md:grid-cols-[repeat(2,max-content)] md:justify-center md:gap-x-12 lg:gap-x-24 ${CONTAINER}`}>
        <div>
          <h3 className="mb-6 text-center text-h3">Talk to me</h3>

          <div className="grid gap-4 sm:grid-cols-[300px] sm:justify-center">
            {CONTACT_CARDS.map((card) => (
              <div className="rounded-xl bg-container p-4 text-center" key={card.title}>
                <i className={card.icon}></i>
                <h3 className="text-small font-medium">{card.title}</h3>
                <span className="contact__card__detail">{card.detail}</span>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__button flex items-center justify-center gap-x-1 text-small text-first"
                >
                  Write me{' '}
                  <i className="bx bx-right-arrow-alt contact__button__icon text-base [transition:.4s]"></i>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-h3">Write me your project</h3>

          <form name="contact_form" className="contact__form sm:mx-auto sm:w-[360px]" onSubmit={handleSubmit}>
            <div className="contact__form__div">
              <label className="contact__form__tag" htmlFor="form__name">
                Names
              </label>
              <input
                type="text"
                placeholder="Insert your name"
                required
                {...inputProps('name')}
              />
            </div>

            <div className="contact__form__div">
              <label className="contact__form__tag" htmlFor="form__mail">
                Mail
              </label>
              <input
                type="email"
                placeholder="Insert your email"
                required
                {...inputProps('mail')}
              />
            </div>

            <div className="contact__form__div contact__form__area h-44">
              <label className="contact__form__tag" htmlFor="form__project">
                Project
              </label>
              <textarea
                placeholder="Insert your project"
                required
                rows={4}
                {...inputProps('project')}
              />
            </div>

            <button
              type="submit"
              id="send__button"
              className={`inline-block rounded-[0.5rem] bg-first px-4 py-3 font-medium text-body [transition:.4s] hover:bg-first-alt hover:text-body light:text-title ${isComplete ? '' : 'disabled__button'}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
