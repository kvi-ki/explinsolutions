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

export type ContactProps = {
  icon: string;
  text: string;
  link: string;
};

export default function Contact({ contact }: { contact: ContactProps }) {
  return (
    <li key={contact.icon}>
      <a
        href={contact.link}
        target={`${contact.icon === 'faLocationDot' || contact.icon === 'faWhatsapp' ? '_blank' : ''}`}
        className="h-[6rem] m-3 flex flex-col items-center justify-around"
      >
        <FontAwesomeIcon
          icon={iconMap[contact.icon]}
          className={`size-6 rounded-full ${contact.icon === 'faWhatsapp' ? 'bg-green text-white' : 'text-green'} lg:size-7`}
        />
        <p className="text-sm text-darkGray font-light lg:text-base">
          {contact.text}
        </p>
      </a>
    </li>
  );
}
