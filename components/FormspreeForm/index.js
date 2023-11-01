'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Input from 'components/Input';

function FormspreeForm({ formId }) {
  console.log('FORM ID: ', formId);

  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p className="max-w-5xl mx-auto my-5">Thanks for joining!</p>;
  }
  return (
    <>
      <div>
        <h2 className="max-w-5xl mx-auto my-5 text-4xl text-center mb-10">
          Contact Us
        </h2>
      </div>
      <form className=" max-w-5xl mx-auto my-5" onSubmit={handleSubmit}>
        <Input
          required
          id="email"
          type="email"
          name="email"
          placeholder="Email.."
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="border-2 border-slate-400 p-1 hover:border-slate-500"
          id="message"
          name="message"
          placeholder="Message.."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div>
          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default FormspreeForm;
