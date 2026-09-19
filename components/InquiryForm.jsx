"use client";

import Web3Form from "@/components/Web3Form";
import { Field, SelectField, TextareaField } from "@/components/FormFields";
import { pickupPoints, serviceTiers } from "@/lib/site";

/** `defaultService` is a serviceTiers value such as "monthly". */
export default function InquiryForm({ defaultService }) {
  const preselected =
    serviceTiers.find((tier) => tier.value === defaultService)?.label ?? "";

  return (
    <Web3Form
      subject="New shuttle booking inquiry from the Lagos Island Pilots website"
      formName="Lagos Island Pilots - Shuttle inquiry"
      submitLabel="Send booking inquiry"
      successMessage="Thanks. We have your booking inquiry and will confirm availability soon."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* <SelectField
          label="Service"
          name="service"
          required
          options={serviceTiers}
          defaultValue={preselected}
          className="sm:col-span-2"
        /> */}
        <Field
          label="Parent or guardian name"
          name="name"
          placeholder="Enter parent or guardian name"
          required
          autoComplete="name"
        />
        <Field
          label="Phone number"
          name="phone"
           placeholder="Enter your phone number"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          label="Email"
          name="email"
           placeholder="Enter your email address"
          type="email"
          autoComplete="email"
          required={false}
          className="sm:col-span-2"
        />
        <SelectField
          label="Pickup point"
          name="pickup_location"
          required
          options={[...pickupPoints, "Somewhere else (tell us below)"]}
        />
        <Field label="School (destination)" name="destination" required />
        <TextareaField
          label="Anything else we should know?"
           placeholder="Write something..."
          name="message"
          rows={3}
          className="sm:col-span-2"
        />
      </div>
    </Web3Form>
  );
}
