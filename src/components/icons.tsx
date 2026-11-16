import type { ReactNode } from "react";

/** Line icons from the canvas: 24px grid, 1.6 stroke, round caps. Always decorative (aria-hidden). */
type IconProps = { size?: number; className?: string };

function StrokeIcon({ size = 16, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </StrokeIcon>
);

export const MessageIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M4 5h16v11H9l-5 4z" />
  </StrokeIcon>
);

/** Nudges forward when its `group` parent (button, card, link) is hovered. */
export const ArrowRightIcon = ({ className, ...p }: IconProps) => (
  <StrokeIcon
    {...p}
    className={`transition-[translate] duration-(--dur-base) ease-out group-hover:translate-x-[3px] ${className ?? ""}`}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </StrokeIcon>
);

export const ChevronDownIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M6 9l6 6 6-6" />
  </StrokeIcon>
);

export const MenuIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M4 8h16M4 16h16" />
  </StrokeIcon>
);

export const CloseIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </StrokeIcon>
);

export const PlusIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M12 5v14M5 12h14" />
  </StrokeIcon>
);

export const MinusIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M5 12h14" />
  </StrokeIcon>
);

/** Filled star, accent color. */
export function StarIcon({ size = 12, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" fill="currentColor" />
    </svg>
  );
}

export const CheckIcon = (p: IconProps) => (
  <svg
    width={p.size ?? 14}
    height={p.size ?? 14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={p.className}
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </StrokeIcon>
);

export const PinIcon = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </StrokeIcon>
);
