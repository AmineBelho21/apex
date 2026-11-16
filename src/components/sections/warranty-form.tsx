"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/field";

/** Warranty claim form. Not sent anywhere yet: it posts to the backend in step 7, which then goes to /thanks. */
export function WarrantyForm() {
  const id = useId();
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="enter squircle flex flex-col gap-4 rounded-card-sm border border-line bg-white px-[18px] py-[22px] [--i:3] lg:rounded-[32px] lg:p-10"
    >
      <Field id={`${id}-phone`} label="Phone number used for the repair">
        <Input id={`${id}-phone`} name="phone" type="tel" placeholder="(555) 555-0147" autoComplete="tel" required />
      </Field>
      <Field id={`${id}-receipt`} label="Receipt number (optional)">
        <Input id={`${id}-receipt`} name="receipt" placeholder="e.g. APX-2041" />
      </Field>
      <Field id={`${id}-message`} label="What’s happening again?">
        <Textarea id={`${id}-message`} name="message" rows={4} placeholder="Same symptom as before? Since when?" required />
      </Field>
      <Button type="submit" size="xl" fullWidth>
        Send warranty request
      </Button>
    </form>
  );
}
