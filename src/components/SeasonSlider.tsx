import * as SliderPrimitive from "@radix-ui/react-slider";
import { useEffect, useState, type CSSProperties } from "react";
import { CalendarCheck, ChevronLeft, ChevronRight, Leaf, Snowflake, Sprout, Sun } from "lucide-react";

import { AnimalOutline } from "@/components/AnimalOutline";
import { animals } from "@/data/animals";
import {
  MONTHS,
  MONTHS_SHORT,
  SEASON_LABEL,
  SEASON_OF_MONTH,
  STATE_LABEL,
  phases,
  type PhaseState,
  type SeasonKey,
} from "@/data/seasons";
import { t } from "@/lib/typo";

const SEASON_BG: Record<SeasonKey, string> = {
  winter: "linear-gradient(160deg, oklch(0.94 0.025 235), oklch(0.88 0.035 250))",
  spring: "linear-gradient(160deg, oklch(0.96 0.06 130), oklch(0.9 0.08 150))",
  summer: "linear-gradient(160deg, oklch(0.97 0.08 95), oklch(0.9 0.09 75))",
  autumn: "linear-gradient(160deg, oklch(0.94 0.07 65), oklch(0.86 0.09 50))",
};

const SEASON_ICON: Record<SeasonKey, typeof Sun> = {
  winter: Snowflake,
  spring: Sprout,
  summer: Sun,
  autumn: Leaf,
};

const STATE_COLOR: Record<PhaseState, string> = {
  sleep: "oklch(0.6 0.05 250)",
  wake: "oklch(0.58 0.1 80)",
  active: "oklch(0.45 0.08 150)",
  peak: "oklch(0.58 0.14 40)",
};

const THUMB = 28; // px, трябва да съвпада с размера на „топчето“

function labelLeft(i: number): CSSProperties {
  return { left: `calc(${THUMB / 2}px + (100% - ${THUMB}px) * ${i} / 11)` };
}

export function SeasonSlider() {
  const [month, setMonth] = useState(3);
  const [today, setToday] = useState<number | null>(null);

  // Започваме от текущия месец (след зареждането в браузъра)
  useEffect(() => {
    const m = new Date().getMonth();
    setToday(m);
    setMonth(m);
  }, []);

  const season = SEASON_OF_MONTH[month];
  const SeasonIcon = SEASON_ICON[season];
  const go = (delta: number) => setMonth((m) => (m + delta + 12) % 12);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 shadow-xl shadow-forest/10">
      {(Object.keys(SEASON_BG) as SeasonKey[]).map((key) => (
        <div
          key={key}
          aria-hidden
          className="absolute inset-0 transition-opacity duration-700"
          style={{ background: SEASON_BG[key], opacity: key === season ? 1 : 0 }}
        />
      ))}

      <div className="relative p-5 sm:p-8">
        {/* месец и бутони */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/80 text-forest shadow-sm">
              <SeasonIcon className="h-6 w-6" aria-hidden />
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-graphite/60">
                Годишният път на животните
              </p>
              <p className="font-display text-3xl font-extrabold leading-tight text-graphite sm:text-4xl">
                {MONTHS[month]}
                <span className="block whitespace-nowrap font-body text-base font-semibold text-graphite/55 sm:ml-2 sm:inline">
                  <span className="max-sm:hidden">· </span>
                  {SEASON_LABEL[season]}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Предишен месец"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-graphite shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Следващ месец"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/80 text-graphite shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* животните */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4" aria-live="polite">
          {animals.map((animal) => {
            const phase = phases[animal.key][month];
            const color = STATE_COLOR[phase.state];
            return (
              <div
                key={animal.key}
                className="flex w-[calc(50%-0.375rem)] flex-col items-center text-center sm:w-[calc(33.333%-0.7rem)] lg:w-[calc(20%-0.8rem)]"
              >
                <div className="relative w-full rounded-2xl bg-white px-3 py-4 shadow-sm">
                  <AnimalOutline
                    animal={animal.key}
                    bg="white"
                    className="mx-auto h-auto w-full max-w-[170px] transition-all duration-500"
                    // цветът и прозрачността следват фазата
                    style={{ color, opacity: phase.state === "sleep" ? 0.55 : 1 }}
                  />
                  {phase.state === "sleep" && (
                    <span
                      aria-hidden
                      className="absolute right-3 top-2 animate-pulse font-display text-xl font-bold"
                      style={{ color }}
                    >
                      z<span className="text-base">z</span>
                      <span className="text-sm">z</span>
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-graphite">{animal.name}</h3>
                <span
                  className="mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-bold text-white transition-colors duration-500"
                  style={{ backgroundColor: color }}
                >
                  {STATE_LABEL[phase.state]}
                </span>
                <p className="mt-2 min-h-[3.75rem] text-sm leading-snug text-graphite/80">{t(phase.text)}</p>
              </div>
            );
          })}
        </div>

        {/* плъзгач */}
        <div className="mt-6 px-1">
          <SliderPrimitive.Root
            min={0}
            max={11}
            step={1}
            value={[month]}
            onValueChange={(v) => setMonth(v[0])}
            aria-label="Месец от годината"
            className="relative flex h-8 w-full touch-none select-none items-center"
          >
            <SliderPrimitive.Track className="relative h-2.5 w-full grow overflow-hidden rounded-full bg-graphite/15">
              <SliderPrimitive.Range className="absolute h-full rounded-full bg-forest" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
              aria-label="Месец"
              className="block cursor-grab rounded-full border-2 border-forest bg-white shadow-md outline-none transition-shadow focus-visible:ring-4 focus-visible:ring-forest/30 active:cursor-grabbing"
              style={{ width: THUMB, height: THUMB }}
            />
          </SliderPrimitive.Root>

          <div className="relative mt-1 h-6">
            {MONTHS_SHORT.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setMonth(i)}
                style={labelLeft(i)}
                aria-label={MONTHS[i]}
                className={`absolute top-0 -translate-x-1/2 rounded px-0.5 text-[11px] leading-6 transition-colors sm:text-sm ${
                  i === month ? "font-extrabold text-forest" : "font-medium text-graphite/55 hover:text-graphite"
                } ${i !== month && i % 2 === 1 ? "max-sm:hidden" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-graphite/60">
          <p>Ориентировъчно за България. Предстои преглед от херпетолог.</p>
          {today !== null && month !== today && (
            <button
              type="button"
              onClick={() => setMonth(today)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 font-semibold text-forest shadow-sm transition hover:bg-white"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden />
              Към текущия месец
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
