import { PhoneIcon } from "@/components/icons";
import { Stars } from "@/components/ui/stars";
import { business, telHref } from "@/content/business";

/** Black strip above the desktop header. The mobile canvas has none. */
export function TopBar() {
  return (
    <div className="px-page hidden h-10 items-center justify-between bg-ink text-13 text-on-ink-soft xl:flex">
      <span className="flex items-center gap-2">
        <Stars size={12} />
        <span>
          <span className="text-white">{business.reviews.rating}</span> · {business.reviews.count} Google reviews
        </span>
      </span>
      <span>
        Open {business.hours} · {business.serviceArea}
      </span>
      <a href={telHref} className="flex items-center gap-1.5 text-white">
        <PhoneIcon size={14} />
        Call {business.phone.display}
      </a>
    </div>
  );
}
