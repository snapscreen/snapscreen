import HubspotForm from 'react-hubspot-form'
import { Loader } from "@/components/Loader";
import { CONTACT_EMAIL } from '@/lib/constants'

export function ContactForm () {
  return (
    <>
      <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
        Get in touch
      </h2>
      <p className="mt-2">
        Your message will be delivered to{' '}
        <a
          href={"mailto:" + CONTACT_EMAIL}
          className="font-medium underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
      <HubspotForm
        portalId="7433878"
        formId="a1575fee-463f-415a-ae4c-80a5b4e63f12"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<Loader />}
      />
    </>
  );
};
