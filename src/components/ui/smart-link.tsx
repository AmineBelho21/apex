import Link from "next/link";
import type { ComponentProps } from "react";

/** Internal paths and hashes go through next/link; tel:, sms:, mailto: and external URLs stay plain anchors. */
export function SmartLink({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return <Link href={href} {...props} />;
  }
  return <a href={href} {...props} />;
}
