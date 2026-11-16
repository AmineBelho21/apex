"use client";

import { useId } from "react";
import { ApplianceIcon } from "@/components/appliance-icon";
import { Button } from "@/components/ui/button";
import { ChipGroup, ChoiceChip } from "@/components/ui/chip";
import { Field, Input, Textarea } from "@/components/ui/field";
import { business } from "@/content/business";
import { services } from "@/content/services";

/**
 * "Tell me what's going on" form. The canvas draws the appliance options as plain tags; here they
 * are single-choice chips. Not sent anywhere yet: submission lands with the backend (step 7).
 */
export function ContactForm({ area }: { area?: string }) {
  const id = useId();
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="squircle flex flex-col gap-[18px] rounded-card-sm border border-line bg-white px-[18px] py-[22px] lg:rounded-[32px] lg:p-9"
    >
      {area ? <input type="hidden" name="area" value={area} /> : null}
      <div className="grid gap-3.5 lg:grid-cols-2">
        <Field id={`${id}-name`} label="Your name">
          <Input id={`${id}-name`} name="name" placeholder="First name" autoComplete="given-name" required />
        </Field>
        <Field id={`${id}-phone`} label="Phone">
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            placeholder="(555) 555-0100"
            autoComplete="tel"
            required
          />
        </Field>
      </div>
      <ChipGroup legend="Which appliance?">
        {services.map((service) => (
          <ChoiceChip
            key={service.key}
            name="appliance"
            value={service.key}
            icon={<ApplianceIcon appliance={service.key} size={22} />}
          >
            {service.shortName}
          </ChoiceChip>
        ))}
      </ChipGroup>
      <Field id={`${id}-message`} label="What’s it doing?">
        <Textarea id={`${id}-message`} name="message" placeholder="Brand, model if you have it, and the symptom." />
      </Field>
      <Button type="submit" size="xl" fullWidth>
        Send to {business.ownerFirstName}
      </Button>
      <p className="text-center text-13 text-subtle">Usually a reply within the hour. Same-week, often same-day.</p>
    </form>
  );
}
