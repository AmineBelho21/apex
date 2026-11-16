"use client";

import { useId } from "react";

/** Footer "Repair tips" sign-up. Not wired yet: subscribing lands with the backend (step 7). */
export function NewsletterForm() {
  const id = useId();
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex h-[52px] gap-1.5 rounded-full border border-white/14 bg-white/8 py-1 pr-1 pl-[18px] has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-3 has-[input:focus-visible]:outline-accent"
    >
      <label htmlFor={id} className="sr-only">
        Email
      </label>
      <input
        id={id}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        className="min-w-0 grow bg-transparent text-15 text-white outline-none focus-visible:outline-none"
      />
      <button type="submit" className="h-11 shrink-0 rounded-full bg-white px-[18px] text-14 font-medium text-ink">
        Subscribe
      </button>
    </form>
  );
}
