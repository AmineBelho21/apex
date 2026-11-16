import { PillLink } from "@/components/ui/chip";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { business } from "@/content/business";
import { areaGroups, areaHref, shopOnMap } from "@/content/areas";

/**
 * Illustrative map from the canvas: a dashed service zone, two rivers, one dot per mapped area,
 * and the shop. Abstract shapes, not real geography.
 */
function AreaMap() {
  const points = areaGroups.flatMap((group) => group.areas).filter((area) => area.map);
  const labelProps = { fontSize: 12, fill: "#57534E", fontFamily: "inherit" } as const;
  return (
    <svg
      viewBox="0 0 520 470"
      role="img"
      aria-label={`Illustrative map of the service area: ${business.serviceArea}, with the shop.`}
      className="h-auto w-full"
    >
      <path
        d="M21 169 Q 156 0 364 28 T 447 235 Q 416 446 260 432 T 21 367 Z"
        fill="#F7E6DF"
        stroke="#B8412A"
        strokeWidth="1"
        strokeDasharray="4 5"
        opacity="0.9"
      />
      <path d="M494 0 C 442 141, 416 258, 374 470" stroke="#C9D6DB" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path
        d="M114 0 C 156 118, 234 212, 260 329 S 286 446, 322 470"
        stroke="#C9D6DB"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      {points.map((area) => (
        <g key={area.name}>
          <circle cx={area.map!.x} cy={area.map!.y} r="5" fill="#111111" />
          <text x={area.map!.x + 9} y={area.map!.y + 4} {...labelProps}>
            {area.name}
          </text>
        </g>
      ))}
      <circle cx={shopOnMap.x} cy={shopOnMap.y} r="14" fill="#B8412A" opacity="0.18" />
      <circle cx={shopOnMap.x} cy={shopOnMap.y} r="7" fill="#B8412A" />
      <text
        x={shopOnMap.x - 8}
        y={shopOnMap.y - 16}
        fontSize="13"
        fontWeight="500"
        fill="#B8412A"
        textAnchor="end"
        fontFamily="inherit"
      >
        The shop
      </text>
    </svg>
  );
}

/** Sand panel: area pills by region, and the illustrative map. */
export function AreasSection() {
  return (
    <Panel id="areas" className="mt-14 scroll-mt-4 px-[18px] py-10 lg:mt-[120px] lg:py-[88px]">
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-[22px]">
          <SectionHeading eyebrow="Service areas" title={`Across ${business.serviceArea}.`} className="gap-[22px]!" />
          <Lead className="max-w-[480px]">
            Same-week across the city, often same-day. Outside the list? Call and I’ll tell you straight if I can reach
            you.
          </Lead>
          {areaGroups.map((group) => (
            <div key={group.name} className="flex flex-col gap-3">
              <h3 className="text-15 font-semibold">{group.name}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.areas.map((area) => (
                  <li key={area.name}>
                    {area.slug ? (
                      <PillLink href={areaHref(area.slug)}>{area.name}</PillLink>
                    ) : (
                      <span className="inline-flex h-9 items-center rounded-full border border-transparent bg-white px-3 text-14 text-muted">
                        {area.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="squircle flex w-full flex-col gap-2.5 rounded-card-sm border border-line bg-white p-3 lg:rounded-[32px] lg:p-5">
          <AreaMap />
          <p className="px-1.5 pb-1 text-13 text-subtle">
            Same-week across {business.serviceArea}, often same-day. Map is illustrative.
          </p>
        </div>
      </div>
    </Panel>
  );
}
