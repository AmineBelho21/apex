import type { ApplianceKey } from "@/content/services";

/** Appliance line drawings from the canvas (64px grid, 1.6 stroke). Decorative. */
const paths: Record<ApplianceKey, React.ReactNode> = {
  refrigerator: (
    <>
      <rect x="18" y="6" width="28" height="52" rx="4" />
      <path d="M18 24h28" />
      <path d="M23 12v7M23 30v10" />
    </>
  ),
  washer: (
    <>
      <rect x="14" y="8" width="36" height="48" rx="4" />
      <path d="M14 18h36" />
      <circle cx="32" cy="37" r="11" />
      <circle cx="32" cy="37" r="6" />
      <circle cx="20" cy="13" r="1.5" />
      <circle cx="26" cy="13" r="1.5" />
      <path d="M38 13h8" />
    </>
  ),
  dryer: (
    <>
      <rect x="14" y="8" width="36" height="48" rx="4" />
      <path d="M14 18h36" />
      <circle cx="32" cy="37" r="11" />
      <path d="M26 34c2-2 4 2 6 0s4 2 6 0M26 40c2-2 4 2 6 0s4 2 6 0" />
      <circle cx="44" cy="13" r="2.5" />
      <path d="M19 13h10" />
    </>
  ),
  oven: (
    <>
      <rect x="12" y="8" width="40" height="48" rx="4" />
      <path d="M12 20h40" />
      <circle cx="19" cy="14" r="2" />
      <circle cx="27" cy="14" r="2" />
      <circle cx="37" cy="14" r="2" />
      <circle cx="45" cy="14" r="2" />
      <rect x="18" y="27" width="28" height="20" rx="3" />
      <path d="M22 52h20" />
    </>
  ),
  dishwasher: (
    <>
      <rect x="14" y="8" width="36" height="48" rx="4" />
      <path d="M14 17h36" />
      <path d="M22 23h20" />
      <path d="M20 30h24M20 36h24M20 42h24M20 48h24" strokeDasharray="2 3" />
      <circle cx="44" cy="12.5" r="1.5" />
    </>
  ),
};

export function ApplianceIcon({
  appliance,
  size = 22,
  className,
}: {
  appliance: ApplianceKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[appliance]}
    </svg>
  );
}
