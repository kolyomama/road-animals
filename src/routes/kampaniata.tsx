import { createFileRoute } from "@tanstack/react-router";
import { Camera, Megaphone, School, Share2 } from "lucide-react";

import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/site";
import { t } from "@/lib/typo";

export const Route = createFileRoute("/kampaniata")({
  head: () => ({
    meta: [
      { title: "За кампанията | Пътят не е само за хора" },
      {
        name: "description",
        content:
          "Какво представлява младежката кампания „Пътят не е само за хора“, защо е нужна и как можеш да се включиш.",
      },
    ],
  }),
  component: Campaign,
});

const WHY = [
  {
    title: "Животните пресичат по необходимост",
    text: "Търсят вода за размножаване, храна, слънчево място или зимно скривалище. Пътищата често разделят тези места.",
  },
  {
    title: "Пътят е опасен по различни начини",
    text: "Трафикът, невниманието и умишленото прегазване отнемат живота на много животни, особено през пролетта и лятото.",
  },
  {
    title: "Малките промени помагат",
    text: "По-бавно шофиране на опасните места, повече внимание вечер и след дъжд, и знание за това кои са животните около нас.",
  },
];

const JOIN = [
  { icon: Share2, title: "Сподели", text: "Разкажи на приятели и семейство. Всяко споделяне стига до нов шофьор." },
  { icon: Camera, title: "Наблюдавай", text: "Забележи животно на пътя? Запиши къде и кога — данните ни помагат да намерим опасните места." },
  { icon: School, title: "Въведи в клас", text: "Учители и ръководители могат да ползват материалите ни в час и в клубове." },
  { icon: Megaphone, title: "Стани посланик", text: "Присъедини се към младите хора, които разпространяват кампанията в своя град." },
];

function Campaign() {
  return (
    <>
      <PageHero
        eyebrow="За кампанията"
        title="Пътят не е само за хора"
        lead="Младежка кампания, която учи как да споделяме пътя с костенурките, жабите, гущерите и змиите."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-graphite/80">
          <p>
            {t(
              "Всяка година много земноводни и влечуги загиват по пътищата — от трафика, от невниманието и понякога от умишлено прегазване. За повечето от тях няма точни числа, защото у нас все още не се събират системно такива данни.",
            )}
          </p>
          <p>
            {t(
              "Затова кампанията има две цели: да разкаже на хората защо тези животни са на пътя и да събере знания и наблюдения, които да помогнат на природозащитниците.",
            )}
          </p>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading title="Защо е нужна кампанията?" />
        <div className="grid gap-5 md:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-3xl bg-white p-7 text-left shadow-lg shadow-forest/10">
              <h3 className="font-display text-2xl font-bold leading-tight text-graphite">{t(w.title)}</h3>
              <p className="mt-3 leading-relaxed text-graphite/75">{t(w.text)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="vkluchi-se">
        <SectionHeading title="Как да се включиш?" lead="Има място за всеки — ученик, учител, шофьор или просто любопитен човек." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {JOIN.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-white p-6 text-left shadow-lg shadow-forest/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun/40 text-graphite">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-graphite">{t(title)}</h3>
              <p className="mt-2 leading-relaxed text-graphite/75">{t(text)}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/herpetofauna" variant="outline">
            Опознай животните
          </ButtonLink>
          <ButtonLink to="/">Към началото</ButtonLink>
        </div>
      </Section>
    </>
  );
}
