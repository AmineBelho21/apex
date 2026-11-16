import { business } from "@/content/business";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";

const { ownerFirstName, pricing, warranty } = business;

type Message = { from: "you" | "owner"; text: string; time: string } | { divider: string };

/** Copy from the canvas; prices are placeholders. */
const thread: Message[] = [
  { from: "you", text: "Water all over the kitchen floor from the fridge.", time: "8:12 AM" },
  { from: "owner", text: `I can be there tomorrow. ${pricing.diagnostic} to diagnose, and it comes off the repair.`, time: "8:14 AM" },
  { from: "you", text: "What time?", time: "8:15 AM" },
  { from: "owner", text: "11:30 to 1:30. I’ll text before I head over.", time: "8:16 AM" },
  { divider: "Next day" },
  {
    from: "owner",
    text: `Defrost drain is blocked, nothing is broken. [$295 to $375], backed ${warranty.span}. Go ahead?`,
    time: "12:05 PM",
  },
  { from: "you", text: "Yes, go for it.", time: "12:06 PM" },
  { from: "owner", text: "Fixed. Floor’s dry.", time: "1:20 PM" },
];

/**
 * Sample text thread with the owner (home hero, "How it works" on service pages).
 * `animate`: messages enter in order on mount (only for a thread visible on load).
 */
export function TextThread({ animate = false }: { animate?: boolean }) {
  return (
    <figure
      aria-label="Example text conversation with the owner"
      className="squircle flex flex-col overflow-hidden rounded-panel-sm border border-line bg-white shadow-float lg:rounded-[32px]"
    >
      <div className="flex items-center gap-3 border-b border-line px-4 py-3.5 lg:px-5 lg:py-4">
        <span className="flex size-[38px] items-center justify-center rounded-full bg-accent text-15 font-medium text-white">
          {business.ownerInitial}
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-15 font-medium">{ownerFirstName} · the owner</span>
          <span className="text-12 text-subtle">Usually replies within the hour</span>
        </span>
      </div>
      <div className="flex flex-col gap-2 px-3.5 pt-3.5 pb-[18px] lg:gap-2.5 lg:px-5 lg:pt-[18px] lg:pb-[22px]">
        {thread.map((message, i) => {
          // Messages arrive in order, 40ms apart (capped at 300ms by the `enter` utility).
          const delay = animate ? stagger(i, "--i") : undefined;
          if ("divider" in message) {
            return (
              <span key={i} style={delay} className={cn(animate && "enter", "self-center py-1 text-12 text-subtle")}>
                {message.divider}
              </span>
            );
          }
          const mine = message.from === "you";
          return (
            <div
              key={i}
              style={delay}
              className={cn(
                animate && "enter",
                "flex max-w-[82%] flex-col gap-1",
                mine ? "items-end self-end" : "items-start self-start",
              )}
            >
              <span
                className={cn(
                  "rounded-[20px] px-3.5 py-2.5 text-14 leading-[1.4] lg:px-[15px] lg:py-[11px] lg:text-15",
                  mine ? "rounded-br-md bg-ink text-white" : "rounded-bl-md bg-sand text-ink",
                )}
              >
                {message.text}
              </span>
              <span className="text-11 text-subtle">
                {mine ? "You" : ownerFirstName} · {message.time}
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

