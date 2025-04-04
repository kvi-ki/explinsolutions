import data from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneFlip,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMap: Record<string, IconDefinition> = {
  faLocationDot,
  faPhoneFlip,
  faWhatsapp,
  faEnvelope
};

export default function Contacts() {
  return (
    <section>
      <ul>
        {data.contacts.data.map((contact) => (
          <li>
            <FontAwesomeIcon
              icon={iconMap[contact.icon]}
              className={`size-6 rounded-full ${contact.icon === 'faWhatsapp' ? 'bg-green text-white' : 'text-green'}`}
            />
            <p>{contact.text}</p>
          </li>
        ))}
      </ul>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5973.584035260995!2d2.4197296999999995!3d41.5304456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b50057db099d%3A0x4cfeddb863fec1fc!2sExplinsolutions!5e0!3m2!1sen!2ses!4v1743757698960!5m2!1sen!2ses"
        className="w-full h-auto"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
