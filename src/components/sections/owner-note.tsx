import { Eyebrow } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { business } from "@/content/business";

const stats = [
  { figure: business.warranty.label, text: "Every repair backed. Same issue comes back, so do I." },
  { figure: business.pricing.diagnostic, text: "Flat diagnostic, straight toward your repair." },
  { figure: "1", text: "Owner on every job. You deal with me, not a call center." },
];

/** Dark panel: the owner's promise, a photo slot and three figures. */
export function OwnerNote() {
  return (
    <Panel tone="ink" className="reveal mt-14 px-5 py-10 lg:mt-[120px] lg:py-[88px]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-20">
        <figure className="flex flex-col gap-[18px] lg:gap-6">
          <Eyebrow tone="ink">A note from the owner</Eyebrow>
          <span aria-hidden="true" className="text-[64px] leading-[0.6] font-medium text-accent lg:text-[96px]">
            “
          </span>
          <blockquote className="flex flex-col gap-[18px] lg:gap-6">
            <p className="text-[28px] leading-[1.1] font-medium tracking-[-0.03em] lg:text-44">
              If it’s not worth fixing, I’ll tell you, even when it costs me the job.
            </p>
            <p className="max-w-[560px] text-16 leading-[1.6] text-on-ink-muted lg:text-18">
              Most shops quote the repair and take the money. I won’t. I won’t let you spend{" "}
              <strong className="font-medium text-white">$300 fixing a $700 washer</strong> that’s on its way out. I’d
              rather lose the job and keep your trust. That’s why my neighbors keep calling back.
            </p>
          </blockquote>
          <figcaption className="flex flex-col gap-0.5 pt-1.5">
            <span className="text-17 font-medium">{business.ownerFirstName}</span>
            <span className="text-14 text-on-ink-faint">The owner, {business.legalName}</span>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-3.5">
          {/* PLACEHOLDER until the owner's photo exists (canvas: owner with the van, outside the shop). */}
          <div className="squircle flex h-[260px] items-center justify-center rounded-tile border border-dashed border-white/22 bg-[#2A2826] p-5 text-center text-14 text-on-ink-faint lg:h-[420px] lg:rounded-panel-sm">
            [PHOTO: the owner with the van, outside the shop]
          </div>
          <dl>
            {stats.map((stat) => (
              <div key={stat.text} className="flex flex-col gap-1.5 border-t border-white/14 py-[18px]">
                <dt className="text-30 font-medium tracking-[-0.03em] lg:text-36">{stat.figure}</dt>
                <dd className="text-14 leading-[1.45] text-on-ink-muted">{stat.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Panel>
  );
}
