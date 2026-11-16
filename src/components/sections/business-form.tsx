"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/field";
import type { BusinessPage } from "@/content/business-pages";

/**
 * Business request form (two columns on desktop). Not sent anywhere yet: it posts to the backend
 * in step 7, which then goes to /thanks.
 */
export function BusinessForm({
  page,
  extraField,
}: {
  page: BusinessPage["slug"];
  extraField: BusinessPage["form"]["extraField"];
}) {
  const id = useId();
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="reveal squircle grid gap-4 rounded-card-sm border border-line bg-white px-[18px] py-[22px] lg:grid-cols-2 lg:rounded-[32px] lg:p-10"
    >
      <input type="hidden" name="audience" value={page} />
      <Field id={`${id}-name`} label="Your name">
        <Input id={`${id}-name`} name="name" placeholder="First and last name" autoComplete="name" required />
      </Field>
      <Field id={`${id}-phone`} label="Phone">
        <Input id={`${id}-phone`} name="phone" type="tel" placeholder="(555) 555-0100" autoComplete="tel" required />
      </Field>
      <Field id={`${id}-company`} label="Company (optional)">
        <Input id={`${id}-company`} name="company" placeholder="Company name" autoComplete="organization" />
      </Field>
      <Field id={`${id}-extra`} label={extraField.label}>
        <Input
          id={`${id}-extra`}
          name={extraField.name}
          type={extraField.type}
          min={extraField.type === "number" ? 1 : undefined}
          inputMode={extraField.type === "number" ? "numeric" : undefined}
        />
      </Field>
      <Field id={`${id}-email`} label="Email (optional)" className="lg:col-span-2">
        <Input id={`${id}-email`} name="email" type="email" placeholder="you@company.com" autoComplete="email" />
      </Field>
      <Button type="submit" size="xl" fullWidth className="lg:col-span-2">
        Send request
      </Button>
    </form>
  );
}
