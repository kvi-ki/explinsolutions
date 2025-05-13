import './ContactForm.css';
import Input from './Input/Input';

export default function ContactForm() {
  return (
    <form className="p-[6vw] mb-10 bg-lightGray xl:rounded-xl">
      <h2 className="pt-6 text-center text-gray text-baseFontSize lg:text-largeFontSize lg:pt-12">
        Ponte en contacto con nosotros
      </h2>
      <div>
        <Input
          inputData={{
            name: 'subject',
            label: 'Asunto',
            type: 'text',
            placeholder: 'Introduce el asunto'
          }}
        />

        <Input
          inputData={{
            name: 'name',
            label: 'Nombre completo',
            type: 'text',
            placeholder: 'Introduce tu nombre'
          }}
        />

        <Input
          inputData={{
            name: 'email',
            label: 'Correo electrónico',
            type: 'email',
            placeholder: 'Introduce tu correo electrónico'
          }}
        />

        <Input
          inputData={{
            name: 'message',
            label: 'Mensaje',
            type: 'textarea',
            placeholder: 'Escribe tu mensaje'
          }}
        />
      </div>
    </form>
  );
}
