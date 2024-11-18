import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const FormContact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    setLoading(true);
    setIsSubmitted(false);
    setError(null);

    emailjs
      .send(
        "service_twkldo4",
        "template_ikocaf8",
        data,
        "v_uAluIeQUUcMHhqP"
      )
      .then(
        () => {
          setIsSubmitted(true);
          reset();
          setLoading(false);
        },
        (error) => {
          setError('Échec de l\'envoi du message, veuillez réessayer.');
          console.error('EmailJS Error:', error);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 items-stretch">
        <div>
          <label htmlFor="firstName" className="text-sm">Nom Complet</label>
          <input
            id="firstName"
            aria-invalid={errors.firstName ? "true" : "false"}
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('firstName', { required: 'Champs Requis' })}
          />
          {errors.firstName && <span className="text-red-600">{errors.firstName.message}</span>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('email', {
              required: 'Champs Requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Adresse email invalide'
              }
            })}
          />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea
            id="message"
            rows="4"
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('message', {
              required: 'Champs Requis',
              minLength: { value: 10, message: 'Votre message doit contenir au moins 10 caractères.' }
            })}
          />
          {errors.message && <span className="text-red-600">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`inline-block self-end ${loading ? 'bg-gray-500' : 'bg-cyan-700'} text-white font-bold rounded-lg px-6 py-2 uppercase text-sm`}
        >
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">
          Votre message a été envoyé avec succès !
        </div>
      )}

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormContact;
