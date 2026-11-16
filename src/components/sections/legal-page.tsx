import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { LegalDoc } from "@/content/legal";

/** Privacy / Terms: sticky "On this page" index on the left, the sections on the right. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="px-page pt-10 pb-16 lg:pt-20 lg:pb-[120px]">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[280px_minmax(0,760px)] lg:gap-24">
        <nav aria-label="On this page" className="order-2 lg:sticky lg:top-28 lg:order-1 lg:self-start">
          <p className="mb-2 text-13 text-subtle">On this page</p>
          <ul className="flex flex-col gap-1">
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="flex min-h-9 items-center text-14 text-muted">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <article className="order-1 flex flex-col gap-8 lg:order-2">
          <header className="enter flex flex-col gap-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: doc.title }]} />
            <h1 className="text-[40px] leading-none font-medium tracking-[-0.04em] lg:text-52">{doc.title}</h1>
            <p className="text-14 text-subtle">
              Last updated {doc.updated} · Draft, to be reviewed by the owner and a lawyer.
            </p>
          </header>
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="flex scroll-mt-24 flex-col gap-2 border-t border-line pt-6">
              <h2 className="text-20 font-medium tracking-[-0.01em] lg:text-22">{section.title}</h2>
              <p className="text-16 leading-[1.6] text-muted lg:text-17">{section.body}</p>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
