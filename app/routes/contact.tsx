import { use, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useActionData } from 'react-router';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  // formData to object
  const form: Record<string, string> = {};
  formData.forEach((value, key) => {
    form[key] = value.toString();
  });
  const { error } = await supabase.from('drivers').insert([form]);
  if (error) {
    console.error('Error inserting driver:', error);
    return { success: false, message: 'Failed to submit form. Please try again later.' };
  }
  return { success: true, message: 'Thank you! We’ll contact you very soon.' };
};

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    message: ''
  });

  const actionData = useActionData<typeof action>();
  const { success, message } = actionData || {};

  useEffect(() => {
    if (success) {
      setSubmitted(true);
    }
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Become a Driver</h1>
      <p className="text-center text-white/80">
        Interested in joining AIMOBILITY? Fill out this quick form and we’ll contact you shortly.
      </p>

      {!submitted ? (
        <form method='POST' className="space-y-4">
          <input
            required name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className="w-full p-3 rounded border border-white/10 bg-white/10 placeholder-white/60 text-white"
          />
          <input
            required name="phone" value={form.phone} onChange={handleChange}
            placeholder="Phone number or WhatsApp"
            className="w-full p-3 rounded border border-white/10 bg-white/10 placeholder-white/60 text-white"
          />
          <input
            required name="city" value={form.city} onChange={handleChange}
            placeholder="City / Region"
            className="w-full p-3 rounded border border-white/10 bg-white/10 placeholder-white/60 text-white"
          />
          <textarea
            name="message" value={form.message} onChange={handleChange}
            rows={4} placeholder="Optional message..."
            className="w-full p-3 rounded border border-white/10 bg-white/10 placeholder-white/60 text-white"
          />
          <button
            type="submit"
            className="w-full p-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Thank you!</h2>
          <p>We’ll contact you very soon. Stay ready 🚗</p>
        </div>
      )}
    </div>
  );
}


// import { useEffect } from "react";

// const Apply = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section className="space-y-6 max-w-xl">
//       <h2 className="text-3xl font-semibold">Join Our YC Journey</h2>
//       <p>
//         We're applying to Y Combinator to scale Yaimo globally. If you're a founder,
//         AI engineer, or passionate supporter—reach out or follow our story.
//       </p>
//       <a
//         href="mailto:team@Yaimo.ai"
//         className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
//       >
//         Contact Us
//       </a>
//     </section>
//   );
// };

export default Contact;