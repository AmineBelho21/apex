import type { ReactNode } from "react";

/** Centered single-message layout (Thanks, 404): icon, optional tag, title, text, then the rest. */
export function MessagePage({
  icon,
  tag,
  title,
  text,
  children,
}: {
  icon: ReactNode;
  tag?: ReactNode;
  title: ReactNode;
  text: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="px-page flex justify-center pt-16 pb-20 lg:pt-[120px] lg:pb-[140px]">
      <div className="flex w-full max-w-[720px] flex-col items-center gap-6 text-center">
        <div className="enter">{icon}</div>
        {tag ? <div className="enter [--i:1]">{tag}</div> : null}
        <h1 className="enter text-[40px] leading-none font-medium tracking-[-0.04em] [--i:2] lg:text-[64px]">{title}</h1>
        <p className="enter max-w-[560px] text-16 leading-[1.55] text-muted [--i:3] lg:text-19">{text}</p>
        <div className="enter flex w-full flex-col items-center gap-6 [--i:4]">{children}</div>
      </div>
    </section>
  );
}
