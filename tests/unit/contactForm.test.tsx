import ContactForm from '@/components/contactForm/ContactForm';
import { render, screen } from '@testing-library/react';

describe('ContactForm', () => {
  it('should render the contact form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Nombre completo')).toBeVisible();
    expect(screen.getByLabelText('Correo electrónico')).toBeVisible();
    expect(screen.getByLabelText('Asunto')).toBeVisible();
    expect(screen.getByLabelText('Mensaje')).toBeVisible();
  });
});
