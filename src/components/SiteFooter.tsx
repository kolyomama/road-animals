import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { t } from "@/lib/typo";

/**
 * Долна част на сайта: контакти, партньори, авторски права.
 * ЗАМЕСТИТЕЛИ: имейл, телефон, социални мрежи и лога на партньорите трябва да се попълнят с истинските данни.
 */
const SOCIAL = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-graphite text-white/90">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-extrabold leading-tight text-white">Пътят не е само за хора</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {t(
                "Младежка кампания за пътна екология и опазване на земноводните и влечугите. Реализира се от Фондация „Шанс за децата и природата на България“ и Център за млади таланти – Бургас.",
              )}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Контакти</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sun" aria-hidden />
                <a href="mailto:info@example.bg" className="hover:text-white">
                  info@example.bg
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sun" aria-hidden />
                <a href="tel:+359000000000" className="hover:text-white">
                  +359 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-sun" aria-hidden />
                <span>Бургас, България</span>
              </li>
            </ul>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              <li>
                <Link to="/kampaniata" className="text-white/70 hover:text-white">
                  За кампанията
                </Link>
              </li>
              <li>
                <Link to="/herpetofauna" className="text-white/70 hover:text-white">
                  Херпетофауна
                </Link>
              </li>
              <li>
                <Link to="/uchenite" className="text-white/70 hover:text-white">
                  Какво казват учените
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Партньори</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="grid h-16 place-items-center rounded-xl bg-white/10 text-xs text-white/45">
                  Лого {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-white/60">
            {t(
              "Текстовете, илюстрациите и материалите в този сайт са създадени в рамките на кампанията „Пътят не е само за хора“. Могат да се използват свободно с образователна цел, при коректно посочване на източника.",
            )}
          </p>
          <p className="mt-3 text-xs text-white/40">© {new Date().getFullYear()} Пътят не е само за хора</p>
        </div>
      </div>
    </footer>
  );
}
