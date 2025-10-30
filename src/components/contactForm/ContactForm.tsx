import { useRef } from 'react';
import FormField from './formField/FormField';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_7gulyn7',
          'template_0obqap3',
          form.current,
          'x5pEv8LMw4oFsjZl9'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    }
    console.log('email sent');

    event.currentTarget.reset();
  };

  return (
    <form
      id="contact-form"
      ref={form}
      onSubmit={sendEmail}
      className="mb-10 flex flex-col self-center xl:p-0"
    >
      <div className="py-5 w-xs lg:w-xl">
        <div className="flex flex-col gap-8">
          <FormField
            inputData={{
              name: 'name',
              label: 'Nombre completo',
              type: 'text',
              placeholder: 'Introduce tu nombre'
            }}
          />

          <FormField
            inputData={{
              name: 'email',
              label: 'Correo electrónico',
              type: 'email',
              placeholder: 'Introduce tu correo electrónico'
            }}
          />

          <FormField
            inputData={{
              name: 'subject',
              label: 'Asunto',
              type: 'text',
              placeholder: 'Introduce el asunto'
            }}
          />

          <FormField
            inputData={{
              name: 'message',
              label: 'Mensaje',
              type: 'textarea',
              placeholder: 'Escribe tu mensaje'
            }}
          />
        </div>
        <div className="text-right mt-8">
          <button className="w-32 p-3 rounded-xl border border-accent bg-accent text-black font-bold text-lg tracking-widest cursor-pointer hover:bg-accent-on-hover">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
