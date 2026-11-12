import { createFileRoute } from "@tanstack/react-router";
import { MapPinned } from "lucide-react";

import { ButtonLink, PageHero, Section } from "@/components/site";
import { t } from "@/lib/typo";

export const Route = createFileRoute("/karta")({
  head: () => ({
    meta: [
      { title: "Карта | Пътят не е само за хора" },
      { name: "description", content: "Интерактивна карта на опасните участъци за земноводни и влечуги — очаквайте скоро." },
    ],
  }),
  component: MapSoon,
});

function MapSoon() {
  return (
    <>
      <PageHero eyebrow="Очаквайте скоро" title="Карта на опасните места" />
      <Section>
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-lg shadow-forest/10">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-forest/10 text-forest">
            <MapPinned className="h-8 w-8" aria-hidden />
          </span>
          <p className="mt-6 text-lg leading-relaxed text-graphite/80">
            {t(
              "Подготвяме интерактивна карта, която ще показва къде и кога животните пресичат пътищата. Тя ще разграничава измерени данни, подадени наблюдения и приблизителен риск. Събираме и подреждаме данните.",
            )}
          </p>
          <div className="mt-8">
            <ButtonLink to="/kampaniata" hash="vkluchi-se">
              Включи се
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
