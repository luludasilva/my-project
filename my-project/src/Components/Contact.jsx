import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/send-mail ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
     if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[70px] font-semibold mb-8 leading-normal uppercase text-white">Contáctanos</h1>
      <form data-aos="fade-left" action="" className="flex flex-col gap-2 lg:w-1/2" onSubmit={handleSubmit}>
        <div className="lg:flex gap-9">
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-cyan-800 p-4 border-2 border-emerald-600 b_glow text-xl text-white"
            placeholder="Ingresa tu nombre"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-cyan-800 p-4 border-2 border-emerald-600 b_glow text-xl text-white"
            placeholder="Ingresa tu Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-cyan-800 p-4 border-2 border-emerald-600 b_glow text-xl text-white"
          placeholder="Dejanos tu mensaje"
          name="message"
          id=""
          cols="30"
          rows="10"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          className="neno-button shadow-xl hover:shadow-emerald-600/50 text-white border-2 border-emerald-600 hover:bg-cyan-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold md-10"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Enviando...' : 'Enviar'}
        </button>
        {submitSuccess !== null && (
          <div className={`text-${submitSuccess ? 'green' : 'red'}-500 text-center mt-2`}>
            {submitSuccess ? '¡Mensaje enviado con éxito!' : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;       
