import { createFileRoute } from "@tanstack/react-router";

import { FlipCard } from "@/components/FlipCard";
import { PageHero, Section } from "@/components/site";
import { animals } from "@/data/animals";
import { t } from "@/lib/typo";

export const Route = createFileRoute("/herpetofauna")({
  head: () => ({
    meta: [
      { title: "Херпетофауна на България | Пътят не е само за хора" },
      {
        name: "description",
        content: "Земноводните и влечугите в България: кои са те, кога са активни и как да ги пазим на пътя.",
      },
    ],
  }),
  component: Herpetofauna,
});

function Herpetofauna() {
  return (
    <>
      <PageHero
        eyebrow="Опознай ги"
        title="Херпетофауната в България"
        lead="Земноводните (жаби, тритони, саламандри) и влечугите (костенурки, гущери, змии) са част от нашата природа. Обърни картите и ги опознай."
      />
      <Section>
        <div className="flex flex-wrap justify-center gap-6">
          {animals.map((animal) => (
            <FlipCard key={animal.key} animal={animal} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" />
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-graphite/60">
          {t("Тук ще добавим още видове, снимки и подробности. Информацията предстои да бъде прегледана от херпетолог.")}
        </p>
      </Section>
    </>
  );
}
