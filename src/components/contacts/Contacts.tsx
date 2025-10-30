import data from '../../data.json';
import Contact from './contact/Contact';

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center justify-around my-10 lg:my-24"
    >
      <h2 className="text-center text-blackColor text-3xl mb-6 lg:mb-14 lg:text-4xl">
        Dónde estamos
      </h2>
      <div className="w-full flex flex-col items-center justify-around lg:h-[30rem] lg:flex-row">
        <ul>
          {data.contacts.data.map((contact) => (
            <Contact
              key={contact.link}
              contact={{
                icon: contact.icon,
                text: contact.text,
                link: contact.link
              }}
            />
          ))}
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5973.584035260995!2d2.4197296999999995!3d41.5304456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b50057db099d%3A0x4cfeddb863fec1fc!2sExplinsolutions!5e0!3m2!1sen!2ses!4v1743757698960!5m2!1sen!2ses"
          title="Ubicación de explinsolutions_ en Google Maps"
          className="w-full h-full p-4 lg:max-w-[40rem]"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
