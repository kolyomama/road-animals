import { useState, type KeyboardEvent } from "react";
import { RotateCw } from "lucide-react";

import { AnimalOutline } from "@/components/AnimalOutline";
import type { Animal } from "@/data/animals";
import { t } from "@/lib/typo";
import { cn } from "@/lib/utils";

/**
 * Завъртаща се карта: отпред снимка (или контурна рисунка, ако още няма снимка), отзад информация.
 * На компютър се обръща при посочване, на телефон — при докосване. Работи и с клавиатура (Enter/интервал).
 */
export function FlipCard({ animal, className }: { animal: Animal; className?: string }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={cn("flip-scene h-[27rem]", className)}>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${animal.name} — обърни картата`}
        onClick={toggle}
        onKeyDown={onKey}
        className="group h-full w-full cursor-pointer rounded-3xl outline-none focus-visible:ring-4 focus-visible:ring-forest/40"
      >
        <div
          className={cn(
            "flip-inner",
            flipped && "[transform:rotateY(180deg)]",
            "group-hover:[transform:rotateY(180deg)]",
          )}
        >
          {/* предна страна */}
          <div className="flip-face flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest/10">
            <div className="relative flex-1 overflow-hidden" style={{ backgroundColor: animal.tint }}>
              {animal.photo ? (
                <img
                  src={animal.photo}
                  alt={animal.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center p-6">
                  <AnimalOutline
                    animal={animal.key}
                    bg={animal.tint}
                    className="h-auto w-full max-w-[220px] text-forest/80"
                  />
                </div>
              )}
              {animal.photo && animal.photoCredit && (
                <span className="absolute bottom-1.5 right-2 rounded bg-black/40 px-1.5 py-0.5 text-[10px] text-white">
                  {animal.photoCredit}
                </span>
              )}
            </div>
            <div className="flex items-end justify-between gap-3 p-5">
              <div className="text-left">
                <h3 className="font-display text-3xl font-extrabold leading-none text-graphite">{animal.name}</h3>
                <p className="mt-1.5 text-sm italic text-graphite/55">{animal.latin}</p>
                <p className="mt-2 text-sm font-medium text-forest">{t(animal.tagline)}</p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest/10 text-forest" aria-hidden>
                <RotateCw className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* задна страна */}
          <div className="flip-face flip-back overflow-y-auto rounded-3xl bg-forest p-6 text-left text-white shadow-lg shadow-forest/20">
            <h3 className="font-display text-3xl font-extrabold leading-none">{animal.name}</h3>
            <p className="mt-4 text-[0.95rem] leading-snug text-white/90">{t(animal.facts)}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-sun">Кога е на пътя</p>
            <p className="mt-1 text-[0.95rem] leading-snug text-white/90">{t(animal.onRoad)}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-sun">Какво мога да направя</p>
            <p className="mt-1 text-[0.95rem] leading-snug text-white/90">{t(animal.help)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
