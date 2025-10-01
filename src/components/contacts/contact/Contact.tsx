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
  const linkToOpenInNewTab =
    contact.icon === 'faLocationDot' || contact.icon === 'faWhatsapp';
  const iconColor =
    contact.icon === 'faWhatsapp' ? 'bg-accent text-whiteColor' : 'text-accent';

  return (
    <li>
      <a
        aria-label={contact.text}
        href={contact.link}
        target={`${linkToOpenInNewTab ? '_blank' : ''}`}
        className="h-[6rem] m-3 flex flex-col items-center justify-around"
      >
        <div
          className={`size-8 flex items-center justify-center rounded-full ${iconColor}`}
        >
          <FontAwesomeIcon
            icon={iconMap[contact.icon]}
            className="text-xl lg:text-3xl"
          />
        </div>
        <p className="text-sm text-text font-light hover:text-accent lg:text-base">
          {contact.text}
        </p>
      </a>
    </li>
  );
}
