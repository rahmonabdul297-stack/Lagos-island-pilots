"use client";

import Web3Form from "@/components/Web3Form";
import { Field, SelectField, TextareaField } from "@/components/FormFields";
import { contactServiceTypes, pickupPoints } from "@/lib/site";

export default function ContactForm() {
  return (
    <Web3Form
      subject="New inquiry from the Lagos Island Pilots website"
      formName="Lagos Island Pilots - Contact form"
      submitLabel="Send inquiry"
      successMessage="Thanks. We have your inquiry and will get back to you soon."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          required
          autoComplete="name"
          className="sm:col-span-2"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="e.g. 0801 234 5678"
        />
        <SelectField
          label="Pickup location (Lagos Island)"
          name="pickup_location"
          required
          options={[...pickupPoints, "Somewhere else (tell us below)"]}
        />
        <Field
          label="School or destination in Yaba"
          name="destination"
          required
        />
        <SelectField
          label="Service type"
          name="service_type"
          required
          options={contactServiceTypes}
          className="sm:col-span-2"
        />
        <TextareaField
          label="Message"
          name="message"
          required
          placeholder="Tell us your child's school, class times and anything we should know."
          className="sm:col-span-2"
        />
      </div>
    </Web3Form>
  );
}
