import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonClass } from "@/components/site";
import { cn } from "@/lib/utils";

type NavItem =
  | { label: string; to: "/kampaniata" | "/herpetofauna" | "/uchenite" | "/karta"; soon?: boolean }
  | { label: string; to: "/"; hash?: string; exact?: boolean };

const NAV: NavItem[] = [
  { label: "Начало", to: "/", exact: true },
  { label: "Кампанията", to: "/kampaniata" },
  { label: "Херпетофауна", to: "/herpetofauna" },
  { label: "Учените", to: "/uchenite" },
  { label: "Ресурси", to: "/", hash: "resursi" },
  { label: "Карта", to: "/karta", soon: true },
  { label: "За нас", to: "/", hash: "za-nas" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
      <rect width="40" height="40" rx="12" className="fill-forest" />
      {/* път */}
      <path d="M6 30 C14 30 14 18 22 18 S30 8 36 8" fill="none" stroke="white" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" />
      <path d="M6 30 C14 30 14 18 22 18 S30 8 36 8" fill="none" stroke="oklch(0.78 0.11 80)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 4" />
      {/* костенурка */}
      <path d="M12 27 C12 20 24 20 24 27 Z" fill="oklch(0.78 0.11 80)" />
      <circle cx="26" cy="25.5" r="2" fill="oklch(0.78 0.11 80)" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass =
    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-graphite/75 transition-colors hover:bg-forest/10 hover:text-forest";
  const activeClass = "bg-forest/10 !text-forest";

  const renderLink = (item: NavItem, mobile = false) => {
    const content = (
      <>
        {item.label}
        {"soon" in item && item.soon && (
          <span className="rounded-full bg-sun px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-graphite">
            скоро
          </span>
        )}
      </>
    );
    const cls = mobile ? cn(linkClass, "w-full !rounded-xl !py-3 !text-base") : linkClass;

    if (item.to === "/") {
      return (
        <Link
          key={item.label}
          to="/"
          hash={"hash" in item ? item.hash : undefined}
          onClick={close}
          className={cls}
          activeOptions={{ exact: true, includeHash: true }}
          activeProps={"hash" in item && item.hash ? undefined : { className: activeClass }}
        >
          {content}
        </Link>
      );
    }
    return (
      <Link key={item.label} to={item.to} onClick={close} className={cls} activeProps={{ className: activeClass }}>
        {content}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link to="/" onClick={close} className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display text-xl font-extrabold leading-tight tracking-tight text-forest sm:text-2xl">
            <span className="whitespace-nowrap">Пътят не е</span>{" "}
            <span className="whitespace-nowrap">само за хора</span>
          </span>
        </Link>

        <nav aria-label="Основно меню" className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => renderLink(item))}
          <Link to="/kampaniata" hash="vkluchi-se" className={buttonClass("secondary", "ml-2 whitespace-nowrap !px-5 !py-2 !text-sm")}>
            Включи се
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-graphite transition hover:bg-forest/10 xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Затвори менюто" : "Отвори менюто"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream xl:hidden">
          <nav aria-label="Основно меню" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => renderLink(item, true))}
            <Link to="/kampaniata" hash="vkluchi-se" onClick={close} className={buttonClass("secondary", "mt-2")}>
              Включи се
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
