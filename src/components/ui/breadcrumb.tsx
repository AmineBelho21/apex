import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * "Home › Dishwasher repair". Links going back up use the `nav-back` page transition
 * (slides in from the left, docs/MOTION.md §6). The last crumb is the current page.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-14 text-subtle">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">›</span> : null}
            {item.href ? (
              <Link href={item.href} transitionTypes={["nav-back"]} className="text-subtle">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
