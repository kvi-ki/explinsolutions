import ContactForm from '@/components/contactForm/ContactForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ContactForm', () => {
  it('should render the contact form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Nombre completo')).toBeVisible();
    expect(screen.getByLabelText('Correo electrónico')).toBeVisible();
    expect(screen.getByLabelText('Asunto')).toBeVisible();
    expect(screen.getByLabelText('Mensaje')).toBeVisible();
  });

  it('should show error when inputs are invalid', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });

    fireEvent.click(submitButton);

    expect(screen.getByRole('textbox', { name: 'Nombre completo' })).toBeInvalid();
    expect(screen.getByRole('textbox', { name: 'Correo electrónico' })).toBeInvalid();
    expect(screen.getByRole('textbox', { name: 'Asunto' })).toBeInvalid();
    expect(screen.getByRole('textbox', { name: 'Mensaje' })).toBeInvalid();
  });
});
