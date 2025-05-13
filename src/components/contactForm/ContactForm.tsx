import FormField from './Input/Input';

export default function ContactForm() {
  return (
    <form className="p-8 mb-10 bg-lightGray xl:rounded-xl">
      <h2 className="pt-6 text-center text-gray text-largeFontSize lg:pt-12">
        <span className="text-black">Ponte en contacto</span>
        <br />
        con nosotros
      </h2>
      <div className="py-5 mx-auto md:w-5/6 lg:w-5/12">
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
    </form>
  );
}
