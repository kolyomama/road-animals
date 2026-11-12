import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { t } from "@/lib/typo";

type Variant = "primary" | "secondary" | "outline";

export function buttonClass(variant: Variant = "primary", extra?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-bold transition-all",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/30",
    variant === "primary" &&
      "bg-forest text-white shadow-lg shadow-forest/20 hover:-translate-y-0.5 hover:bg-forest-light",
    variant === "secondary" &&
      "bg-sun text-graphite shadow-lg shadow-sun/30 hover:-translate-y-0.5 hover:brightness-105",
    variant === "outline" &&
      "border-2 border-forest/35 bg-white/70 text-forest hover:-translate-y-0.5 hover:border-forest hover:bg-white",
    extra,
  );
}

type PagePath = "/" | "/kampaniata" | "/herpetofauna" | "/uchenite" | "/karta";

export function ButtonLink({
  to,
  hash,
  variant = "primary",
  className,
  children,
}: {
  to: PagePath;
  hash?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} hash={hash} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

/** Секция с еднакви отстъпи и ширина във всички страници */
export function Section({
  id,
  tone = "plain",
  className,
  children,
}: {
  id?: string;
  tone?: "plain" | "soft" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 md:py-24",
        tone === "soft" && "bg-sand/20",
        tone === "dark" && "bg-forest text-white",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

/** Центрирано заглавие на секция с кратък увод */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  light,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider",
            light ? "bg-white/15 text-white" : "bg-forest/10 text-forest",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-extrabold leading-[1.1] md:text-5xl",
          light ? "text-white" : "text-graphite",
        )}
      >
        {t(title)}
      </h2>
      {lead && (
        <p className={cn("mt-5 text-lg leading-relaxed md:text-xl", light ? "text-white/85" : "text-graphite/75")}>
          {t(lead)}
        </p>
      )}
    </div>
  );
}

/** Горна част на вътрешните страници */
export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="bg-gradient-to-b from-forest/10 to-transparent">
      <div className="mx-auto w-full max-w-4xl px-5 pb-6 pt-14 text-center md:px-8 md:pb-10 md:pt-20">
        {eyebrow && (
          <p className="mb-4 inline-block rounded-full bg-forest/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-forest">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-graphite sm:text-5xl md:text-6xl">
          {t(title)}
        </h1>
        {lead && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-graphite/75 md:text-xl">{t(lead)}</p>}
      </div>
    </div>
  );
}
