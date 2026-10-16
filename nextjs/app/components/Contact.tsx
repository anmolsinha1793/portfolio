'use client';

import { useState } from 'react';
import { CONTAINER, SECTION } from './styles';

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Web3Forms access key. Get one free at https://web3forms.com by entering your
 * email — no account needed — and paste it here.
 *
 * It lives in source rather than an env var on purpose: Web3Forms keys are
 * designed to be public (they only permit sending mail *to* the address that
 * registered them), and this app builds for both Vercel and GitHub Pages, so a
 * source constant avoids configuring the same secret in two places.
 *
 * The form is inert until this is set — see SUBMIT_ENDPOINT below.
 */
const WEB3FORMS_KEY = 'f03df988-c62e-404a-b806-4b87423b3929';
const SUBMIT_ENDPOINT = 'https://api.web3forms.com/submit';
const isConfigured = !WEB3FORMS_KEY.startsWith('REPLACE_WITH_');

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

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
  const [status, setStatus] = useState<SendStatus>('idle');

  const isComplete =
    values.name.trim().length > 0 &&
    EMAIL_PATTERN.test(values.mail) &&
    values.project.trim().length > 0;

  const update = (field: Field, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: false }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

    if (!isConfigured) {
      window.alert(
        'The contact form has no Web3Forms access key yet. Add one in Contact.tsx.'
      );
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${values.name}`,
          from_name: values.name,
          name: values.name,
          email: values.mail,
          message: values.project,
          // Honeypot: Web3Forms rejects the submission when this is filled.
          botcheck: new FormData(event.currentTarget).get('botcheck') ?? '',
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || `Request failed (${response.status})`);
      }

      window.alert('Message sent');
      setValues({ name: '', mail: '', project: '' });
    } catch (error) {
      window.alert(
        `Sorry, the message could not be sent. ${
          error instanceof Error ? error.message : 'Please try again.'
        }`
      );
    } finally {
      setStatus('idle');
    }
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
            {/* Honeypot: hidden from people, filled in by bots. Web3Forms
                discards any submission where it is set. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
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
              disabled={status === 'sending'}
              className={`inline-block rounded-[0.5rem] bg-first px-4 py-3 font-medium text-body [transition:.4s] hover:bg-first-alt hover:text-body light:text-title ${isComplete && status !== 'sending' ? '' : 'disabled__button'}`}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
