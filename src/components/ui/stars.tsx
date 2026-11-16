import { StarIcon } from "@/components/icons";

export function Stars({ size = 12, label = "5 stars" }: { size?: number; label?: string }) {
  return (
    <span role="img" aria-label={label} className="inline-flex gap-0.5 text-accent">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </span>
  );
}
