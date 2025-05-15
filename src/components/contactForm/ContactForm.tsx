import { useRef } from 'react';
import FormField from './formField/FormField';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_7gulyn7', 'template_0obqap3', form.current, 'x5pEv8LMw4oFsjZl9')
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
      className="p-8 mb-10 flex flex-col bg-lightGray xl:rounded-xl"
    >
      <h2 className="pt-6 text-center text-gray text-largeFontSize lg:pt-12">
        <span className="text-black">Ponte en contacto</span>
        <br />
        con nosotros
      </h2>
      <section className="py-5 mx-auto w-full md:w-5/6 lg:w-5/12">
        <div className="">
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
        <div className="text-right">
          <button className="submit-button">Enviar</button>
        </div>
      </section>
    </form>
  );
}
