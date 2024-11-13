import { useForm } from 'react-hook-form';
import { useState } from 'react';

const FormContact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError('Erreur lors de l\'envoi du message');
      }
    } catch (err) {
      setError('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 items-stretch">
        <div>
          <label htmlFor="firstName" className="text-sm">Nom Complet</label>
          <input
            id="firstName"
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('firstName', { required: 'Champs Requis' })}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('email', {
              required: 'Champs Requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Adresse email invalide'
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder=" Message..."
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('message', { required: 'Champs Requis' })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button type="submit" className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
          Envoyer
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
