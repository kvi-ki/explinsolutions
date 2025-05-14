jest.mock('@emailjs/browser', () => {
  return {
    __esModule: true,
    default: {
      sendForm: jest.fn()
    }
  };
});

import ContactForm from '@/components/contactForm/ContactForm';
import { fireEvent, render, screen } from '@testing-library/react';
import emailjs from '@emailjs/browser';

describe('ContactForm', () => {
  it('should render the contact form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Nombre completo')).toBeVisible();
    expect(screen.getByLabelText('Correo electrónico')).toBeVisible();
    expect(screen.getByLabelText('Asunto')).toBeVisible();
    expect(screen.getByLabelText('Mensaje')).toBeVisible();
  });

  it('should show error when inputs are empty', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });

    fireEvent.click(submitButton);

    expect(screen.getByRole('textbox', { name: 'Nombre completo' })).toBeInvalid();
    expect(screen.getByRole('textbox', { name: 'Correo electrónico' })).toBeInvalid();
    expect(screen.getByRole('textbox', { name: 'Asunto' })).toBeInvalid();
    expect(screen.getByRole('textbox', { name: 'Mensaje' })).toBeInvalid();
  });

  it('should show error when email is not valid', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    const emailField = screen.getByRole('textbox', { name: 'Correo electrónico' });

    fireEvent.change(emailField, { target: { value: 'invalidEmail' } });
    fireEvent.click(submitButton);

    expect(emailField).toBeInvalid();
  });

  it('should submit the form when inputs data is valid', () => {
    const mockSendForm = emailjs.sendForm as jest.Mock;

    mockSendForm.mockResolvedValueOnce({
      status: 200,
      text: 'OK'
    });

    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    const nameField = screen.getByRole('textbox', { name: 'Nombre completo' });
    const emailField = screen.getByRole('textbox', { name: 'Correo electrónico' });
    const subjectField = screen.getByRole('textbox', { name: 'Asunto' });
    const messageField = screen.getByRole('textbox', { name: 'Mensaje' });

    fireEvent.change(nameField, { target: { value: 'Some Name' } });
    fireEvent.change(emailField, { target: { value: 'some@email.com' } });
    fireEvent.change(subjectField, { target: { value: 'Some subject' } });
    fireEvent.change(messageField, { target: { value: 'Some message' } });
    fireEvent.click(submitButton);

    expect(mockSendForm).toHaveBeenCalledTimes(1);
    expect(mockSendForm).toHaveBeenCalledWith(
      'service_7gulyn7',
      'template_0obqap3',
      expect.any(HTMLFormElement),
      'x5pEv8LMw4oFsjZl9'
    );
  });
});
