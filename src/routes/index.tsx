import { createFileRoute } from "@tanstack/react-router";
import { Car, CircleHelp, Download, EyeOff, FileText, Gauge, GraduationCap, Sticker } from "lucide-react";

import { FlipCard } from "@/components/FlipCard";
import { SeasonSlider } from "@/components/SeasonSlider";
import { VideoCard } from "@/components/VideoCard";
import { ButtonLink, Section, SectionHeading } from "@/components/site";
import { animals } from "@/data/animals";
import { videos } from "@/data/videos";
import { t } from "@/lib/typo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Пътят не е само за хора | Кампания за пътна екология" },
      {
        name: "description",
        content:
          "Всяка пролет костенурки, жаби, гущери и змии пресичат пътя. Присъедини се към младежка кампания, която учи, разказва истории и спасява животи по пътищата на България.",
      },
      { property: "og:title", content: "Пътят не е само за хора | Кампания за пътна екология" },
      {
        property: "og:description",
        content:
          "Всяка пролет костенурки, жаби, гущери и змии пресичат пътя. Присъедини се към младежка кампания, която учи, разказва истории и спасява животи по пътищата на България.",
      },
    ],
  }),
  component: Index,
});

const THREATS = [
  {
    icon: Car,
    title: "Трафикът",
    text: "През пролетта и лятото животните пресичат пътищата към вода, храна и дом. Бързите коли не оставят време за реакция.",
  },
  {
    icon: EyeOff,
    title: "Невниманието",
    text: "Малките животни са почти невидими на асфалта, особено вечер и след дъжд. Често шофьорът просто не ги забелязва.",
  },
  {
    icon: CircleHelp,
    title: "Страхът и неразбирането",
    text: "Някои хора умишлено прегазват змии и гущери, защото ги смятат за опасни. Повечето от тях са безвредни.",
  },
];

const RESOURCES = [
  { icon: Gauge, title: "Съвети за шофьори", text: "Кратка карта с най-важното, лесна за печат." },
  { icon: FileText, title: "Флаери и постери", text: "Послания за училища, магазини и обществени места." },
  { icon: Sticker, title: "Стикери", text: "За автомобили, витрини и раници." },
  { icon: GraduationCap, title: "Материали за учители", text: "Идеи и работни листове за час и извънкласни занимания." },
];

function Index() {
  return (
    <>
      {/* Начало: заглавие + слайдър на сезоните */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[32rem] opacity-50 [mask-image:linear-gradient(to_bottom,black_35%,transparent)]"
        >
          <img src="/images/hero.png" alt="" className="h-full w-full object-cover object-center" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 text-center md:px-8 md:pb-24 md:pt-20">
          <p className="mb-5 inline-block rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest shadow-sm">
            Младежка кампания за пътна екология
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold leading-[1.05] text-graphite sm:text-6xl md:text-7xl">
            {t("Пътят не е само за хора.")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-graphite/75 md:text-2xl">
            {t("Понякога по него преминава нечий живот.")}
          </p>

          <div className="mt-10 md:mt-14">
            <SeasonSlider />
          </div>
        </div>
      </div>

      {/* Кратко за кампанията */}
      <Section id="kampaniya" tone="soft">
        <SectionHeading
          title="Всяка година животни стават жертва на пътя"
          lead="Костенурки, жаби, гущери и змии пресичат пътищата в търсене на вода, храна и дом. Много от тях не успяват."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {THREATS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-white p-7 text-left shadow-lg shadow-forest/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-graphite">{t(title)}</h3>
              <p className="mt-2 leading-relaxed text-graphite/75">{t(text)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink to="/kampaniata">Виж още</ButtonLink>
        </div>
      </Section>

      {/* Херпетофауната в България */}
      <Section id="herpetofauna">
        <SectionHeading
          eyebrow="Опознай ги"
          title="Херпетофауната в България"
          lead="В България живеят около 60 вида земноводни и влечуги — от дребни тритони до едри змии и костенурки. Много от тях са защитени от закона. Обърни картите и ги опознай."
        />
        <div className="flex flex-wrap justify-center gap-6">
          {animals.map((animal) => (
            <FlipCard key={animal.key} animal={animal} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink to="/herpetofauna">Виж още</ButtonLink>
        </div>
      </Section>

      {/* Какво казват учените */}
      <Section id="uchenite" tone="soft">
        <SectionHeading
          title="Какво казват учените?"
          lead="Кратки разговори с херпетолози и природозащитници — на ясен и достъпен език."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {videos.slice(0, 3).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink to="/uchenite">Покажи всички видеа</ButtonLink>
        </div>
      </Section>

      {/* Ресурси */}
      <Section id="resursi">
        <SectionHeading
          title="Ресурси"
          lead="Материали за сваляне и разпространение. Могат да се използват свободно с образователна цел, при посочване на източника."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col rounded-3xl bg-white p-6 text-left shadow-lg shadow-forest/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun/40 text-graphite">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-graphite">{t(title)}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-graphite/75">{t(text)}</p>
              <button
                type="button"
                disabled
                className="mt-5 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-forest/10 px-5 py-2.5 text-sm font-bold text-forest/70"
              >
                <Download className="h-4 w-4" aria-hidden />
                Скоро
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Кои сме ние */}
      <Section id="za-nas" tone="dark">
        <SectionHeading
          light
          eyebrow="Кои сме ние"
          title="Млади хора, наука и грижа за природата"
          lead="От години работим с талантливи деца и младежи в областта на науката, изкуството, литературата, образованието и обществените каузи. „Пътят не е само за хора“ е естествено продължение на тази работа."
        />
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {["Фондация „Шанс за децата и природата на България“", "Център за млади таланти – Бургас"].map((name) => (
            <div key={name} className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">
              <p className="font-display text-2xl font-bold leading-tight text-white">{t(name)}</p>
              <p className="mt-2 text-sm text-white/70">Реализатор на проекта</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
