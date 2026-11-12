import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Gauge,
  CloudRain,
  Car,
  ShieldAlert,
  PhoneCall,
  MessageCircle,
  PenTool,
  Palette,
  Mic,
  Headphones,
  HandHelping,
  Share2,
  Award,
  MapPin,
  Radio,
  BookOpen,
  Download,
  FileText,
  Image,
  Map,
  Users,
  GraduationCap,
  Building2,
  HeartHandshake,
} from "lucide-react";

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
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="nachalo"
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Илюстрация на костенурка, пресичаща полски път"
            className="h-full w-full object-cover object-center"
            width={1344}
            height={768}
          />
          {/* Soft overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-graphite md:text-6xl lg:text-7xl drop-shadow-sm">
            Пътят не е само за хора.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-graphite/85 md:text-xl md:leading-relaxed drop-shadow-sm">
            Понякога по него преминава нечий живот. Всяка пролет и лято костенурки,
            жаби, гущери и змии тръгват през пътя — към вода, към дом, към живот.
            Малка промяна в скоростта ни може да означава голяма разлика за тях.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => scrollToSection("zashcho")}
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Научи повече
            </button>

            <button
              onClick={() => scrollToSection("vkluchi-se")}
              className="inline-flex items-center justify-center rounded-full bg-sun px-8 py-3.5 text-base font-semibold text-graphite shadow-lg shadow-sun/20 transition-all hover:-translate-y-0.5 hover:bg-sun/90 hover:shadow-xl hover:shadow-sun/25 focus:outline-none focus:ring-2 focus:ring-sun focus:ring-offset-2"
            >
              Включи се
            </button>

            <button
              onClick={() => scrollToSection("glasat-na-zhivotnite")}
              className="inline-flex items-center justify-center rounded-full border-2 border-forest/30 bg-white/80 px-8 py-3.5 text-base font-semibold text-forest backdrop-blur-sm shadow-md transition-all hover:-translate-y-0.5 hover:bg-white hover:border-forest/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Виж историите
            </button>
          </div>
        </div>
      </section>

      {/* Защо е важно? */}
      <section
        id="zashcho"
        className="relative bg-sand/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Малък път за нас. Дълго и опасно пътуване за тях.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite/85 md:text-xl md:leading-relaxed">
            <p>
              Всяка пролет и лято хиляди земноводни и влечуги тръгват на път —
              търсят храна, партньор, място за размножаване или ново
              местообитание. За да стигнат дотам, много от тях трябва да пресекат
              нещо, което ние почти не забелязваме: пътя.
            </p>
            <p>
              За човек това е няколко секунди зад волана. За костенурка — минути
              на открито, без прикритие. За жаба след дъжд — единственият начин
              да стигне до водата, в която трябва да остави поколението си. За
              гущер или змия — момент на голяма уязвимост, в който често биват
              подминавани… или умишлено премазвани, просто защото будят страх и
              неразбиране.
            </p>
            <p>
              Повечето от тези животни не са опасни. Те не пресичат пътя, за да
              ни притесняват — правят го, защото пътят е пресякъл техния свят, а
              не обратното.
            </p>
            <p>
              Тази страница съществува, за да можем да го видим и да реагираме
              с малко повече внимание.
            </p>
          </div>
        </div>
      </section>

      {/* Какво правим? */}
      <section
        id="kakvo-pravim"
        className="relative bg-background py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Кампания, направена от млади хора — с помощта на наука, изкуство и
            доброволчество.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            „Пътят не е само за хора“ съчетава няколко неща, които рядко вървят
            заедно, но тук работят като едно цяло:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                ),
                text: "Младежко творчество — истории, илюстрации и послания, създадени от деца и младежи.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /><path d="M8 7h8" /><path d="M8 11h6" /><path d="M8 15h4" /></svg>
                ),
                text: "Експертно знание — факти и съвети, проверени от специалисти по опазване на природата.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ),
                text: "Доброволчество — младежи, които участват активно във всеки етап от кампанията.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
                ),
                text: "Интервюта и подкаст — разговори с експерти на достъпен и интересен език.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                ),
                text: "Печатни и дигитални материали — флаери, картички, постери, образователни карти.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ),
                text: "Публично информационно събитие — среща на живо с местната общност.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                ),
                text: "Онлайн кампания — истории и съвети, споделени в дигиталното пространство.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></svg>
                ),
                text: "Дългосрочна дигитална библиотека — материали, достъпни и след края на проекта.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mt-0.5 shrink-0 text-forest">{item.icon}</div>
                <p className="text-base leading-relaxed text-graphite/85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-sand/30 p-6 md:p-8">
            <p className="text-center text-lg font-medium leading-relaxed text-graphite md:text-xl">
              Целта не е да изплашим никого. Целта е да покажем, че малко повече
              внимание на пътя може да спаси нечий живот — и че това внимание
              може да тръгне именно от младите хора.
            </p>
          </div>
        </div>
      </section>

      {/* Гласът на животните */}
      <section
        id="glasat-na-zhivotnite"
        className="relative bg-sand/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Ако можеха да проговорят, какво щяха да ни кажат?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            Помолихме млади пишещи таланти да направят нещо необичайно: да
            разкажат историята на пътя през очите на самите животни. Всеки разказ
            е написан от името на костенурка, жаба, гущер, змия или друго
            същество, което среща пътя на своя път — и е придружен от авторска
            илюстрация и кратък експертен факт, който обяснява какво стои зад
            историята.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Бавният път на костенурката",
                fact: "Костенурките се движат бавно, но сигурно. За тях всяка стъпка на асфалта е риск, защото нямат възможност бързо да избягат от приближаваща кола.",
                bg: "bg-forest/15",
              },
              {
                title: "След дъжда тръгвам към водата",
                fact: "Жабите се придвижват към водоемите след дъжд, за да снасят хайвера си. Мокрият асфалт е единственият път, но и най-опасният.",
                bg: "bg-earth/20",
              },
              {
                title: "Не съм страшна, просто пресичам",
                fact: "Повечето змии в България са безопасни за хората. Те избягват срещи с нас, но пътищата ги принуждават да излизат на открито.",
                bg: "bg-sun/25",
              },
              {
                title: "Топлият асфалт не е дом",
                fact: "Гущерите обичат топлината, но асфалтът може да достигне опасни температури. Понякога ги виждаме на пътя просто защото търсят слънце.",
                bg: "bg-forest/10",
              },
            ].map((card, idx) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-card shadow-sm overflow-hidden transition-all hover:shadow-md cursor-pointer"
                  onClick={() => setIsOpen((o) => !o)}
                >
                  {/* Image placeholder */}
                  <div className={`aspect-[4/3] ${card.bg} flex items-center justify-center relative overflow-hidden`}>
                    <span className="font-display text-sm text-graphite/30 tracking-wide">Илюстрация</span>
                    {/* Fact overlay */}
                    <div className={`absolute inset-0 bg-forest/90 p-5 flex flex-col justify-center items-center text-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                      <span className="text-xs font-semibold text-sun uppercase tracking-wider mb-2">Знаеш ли, че…</span>
                      <p className="text-sm text-white/90 leading-relaxed">{card.fact}</p>
                    </div>
                  </div>
                  {/* Title */}
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold text-graphite text-center">{card.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection("materiali")}
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Прочети историите
            </button>
          </div>
        </div>
      </section>

      {/* Как да помогнеш като шофьор? */}
      <section
        id="kak-da-pomognesh"
        className="relative bg-background py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Няколко секунди внимание могат да означават цял един живот.
          </h2>

          <div className="mt-10 space-y-4">
            {[
              {
                icon: <Gauge size={24} />,
                text: "Намали скоростта в участъци близо до водоеми, гори, поля и покрайнините на населени места.",
              },
              {
                icon: <CloudRain size={24} />,
                text: "Бъди особено внимателен през пролетта, лятото, след дъжд и в топли вечери.",
              },
              {
                icon: <Car size={24} />,
                text: "Ако видиш животно на пътя — намали и го заобиколи, вместо да преминеш през него.",
              },
              {
                icon: <ShieldAlert size={24} />,
                text: "Не докосвай змии или непознати животни, ако не знаеш как да реагираш безопасно.",
              },
              {
                icon: <PhoneCall size={24} />,
                text: "Ако забележиш животно в опасност, потърси компетентна организация за помощ.",
              },
              {
                icon: <MessageCircle size={24} />,
                text: "Говори с децата в колата за уважение към живите същества.",
              },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mt-0.5 shrink-0 text-forest">{tip.icon}</div>
                <p className="text-base leading-relaxed text-graphite/85">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection("materiali")}
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Виж пълните съвети
            </button>
          </div>
        </div>
      </section>

      {/* Млади посланици на пътната екология */}
      <section
        id="poslanitsi"
        className="relative bg-sand/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Кампанията расте с всеки млад човек, който се включи.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            Не е нужно да си биолог или еколог, за да помогнеш. Търсим млади
            хора, които искат да участват — по свой начин, със своите умения и
            интереси.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Автор", icon: <PenTool size={20} /> },
              { label: "Художник", icon: <Palette size={20} /> },
              { label: "Младежки репортер", icon: <Mic size={20} /> },
              { label: "Участник в подкаста", icon: <Headphones size={20} /> },
              { label: "Помощник при събития", icon: <HandHelping size={20} /> },
              { label: "Разпространител", icon: <Share2 size={20} /> },
              { label: "Посланик", icon: <Award size={20} /> },
            ].map((role, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="shrink-0 text-forest">{role.icon}</div>
                <span className="text-base font-medium text-graphite/90">
                  {role.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection("vkluchi-se")}
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Стани посланик
            </button>
          </div>
        </div>
      </section>

      {/* Интервюта и подкаст */}
      <section
        id="podkast"
        className="relative bg-background py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Разговори, които обясняват пътя от друга гледна точка.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            Тук ще намираш кратки интервюта с експерти и епизоди на подкаста на
            кампанията — на ясен и достъпен език, без сложна терминология.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Какво всъщност е „пътна екология“?",
              "Защо земноводните и влечугите са толкова уязвими точно на пътя?",
              "Какво трябва да знае всеки шофьор?",
              "Митове и истини за змиите и гущерите.",
              "Как младите хора могат реално да помагат на природата около себе си?",
            ].map((topic, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mt-1 shrink-0 text-forest">
                  <Radio size={20} />
                </div>
                <p className="text-base leading-relaxed text-graphite/85 font-medium">
                  {topic}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest/40 px-8 py-3.5 text-base font-semibold text-white shadow-sm cursor-not-allowed"
            >
              <Headphones size={20} />
              Слушай подкаста
              <span className="ml-1 text-xs font-normal opacity-80">(скоро)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Кампанията в града */}
      <section
        id="kampaniyata-v-grada"
        className="relative bg-sand/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            От екрана — на улицата.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite/85 md:text-xl md:leading-relaxed">
            <p>
              „Пътят не е само за хора“ не остава само онлайн. Кампанията ще
              достигне до хората и на живо — чрез флаери, стикери и картички с
              QR кодове, които водят право към сайта, чрез информационни
              материали, поставени на подходящи обществени места, и чрез събитие
              с младежи доброволци.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection("materiali")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              <MapPin size={20} />
              Виж къде ни срещаш
            </button>
          </div>
        </div>
      </section>

      {/* Материали за сваляне */}
      <section
        id="materiali"
        className="relative bg-background py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Библиотека, която остава и след кампанията.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            Тук ще събираме всичко създадено по проекта — свободно за преглед, споделяне и използване с образователна цел:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Истории от „Гласът на животните“",
                desc: "Разкази от името на костенурки, жаби, гущери и змии — за четене и споделяне.",
              },
              {
                icon: <Image size={22} />,
                title: "Илюстрации на младите автори",
                desc: "Авторски рисунки към всяка история — готови за печат и дигитално използване.",
              },
              {
                icon: <FileText size={22} />,
                title: "Флаери и постери за разпространение",
                desc: "Кратки и запомнящи се послания, които можеш да разпечаташ или споделиш.",
              },
              {
                icon: <Map size={22} />,
                title: "Образователни карти за видовете и техните маршрути",
                desc: "Научи кои животни срещаш по пътя, къде се движат и защо.",
              },
              {
                icon: <ShieldAlert size={22} />,
                title: "Съвети за шофьори в кратък, лесен за печат формат",
                desc: "Бърз справочник с най-важните неща, които всеки шофьор може да направи.",
              },
              {
                icon: <Users size={22} />,
                title: "Материали за учители и родители",
                desc: "Идеи за разговори, занимания и уроци с деца и тийнейджъри по темата.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-4 rounded-2xl bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="shrink-0 text-forest">{item.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-graphite">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-graphite/70">{item.desc}</p>
                </div>
                <div className="mt-auto pt-2">
                  <button
                    disabled
                    className="inline-flex items-center gap-2 rounded-full bg-forest/20 px-4 py-2 text-sm font-semibold text-forest cursor-not-allowed opacity-70"
                  >
                    <Download size={16} />
                    Свали (скоро)
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest/40 px-8 py-3.5 text-base font-semibold text-white shadow-sm cursor-not-allowed"
            >
              <BookOpen size={20} />
              Разгледай библиотеката
              <span className="ml-1 text-xs font-normal opacity-80">(скоро)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Включи се */}
      <section
        id="vkluchi-se"
        className="relative bg-sand/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Пътят на промяната минава през всички нас.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite/85 md:text-xl">
            Тази кампания има нужда от много различни хора, за да работи наистина:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users size={20} />,
                label: "Младежи",
                desc: "Пиши, рисувай, снимай, споделяй — включи се с това, което умееш.",
              },
              {
                icon: <Users size={20} />,
                label: "Родители",
                desc: "Разкажи на децата си за животните на пътя и защо вниманието е важно.",
              },
              {
                icon: <GraduationCap size={20} />,
                label: "Учители",
                desc: "Използвай материалите в час или организирай тематична седмица.",
              },
              {
                icon: <Building2 size={20} />,
                label: "Училища",
                desc: "Направете кампанията част от училищния живот — събитие, клуб или проект.",
              },
              {
                icon: <HeartHandshake size={20} />,
                label: "Граждани",
                desc: "Сподели съветите с приятели и бъди пример за внимание на пътя.",
              },
              {
                icon: <HeartHandshake size={20} />,
                label: "Партньорски организации",
                desc: "Обединяваме усилия с НПО, природозащитни групи и местни инициативи.",
              },
              {
                icon: <Building2 size={20} />,
                label: "Бизнеси",
                desc: "Подкрепи кампанията като спонсор или разпространи посланията сред служителите си.",
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-3 rounded-2xl bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="shrink-0 text-forest">{group.icon}</div>
                <h3 className="font-display text-base font-semibold text-graphite">{group.label}</h3>
                <p className="text-sm leading-relaxed text-graphite/70">{group.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <button
              disabled
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-xl hover:shadow-forest/25 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 cursor-not-allowed opacity-70"
            >
              Стани доброволец
            </button>
            <button
              disabled
              className="inline-flex items-center justify-center rounded-full bg-sun px-8 py-3.5 text-base font-semibold text-graphite shadow-lg shadow-sun/20 transition-all hover:-translate-y-0.5 hover:bg-sun/90 hover:shadow-xl hover:shadow-sun/25 focus:outline-none focus:ring-2 focus:ring-sun focus:ring-offset-2 cursor-not-allowed opacity-70"
            >
              Стани партньор
            </button>
            <button
              onClick={() => scrollToSection("materiali")}
              className="inline-flex items-center justify-center rounded-full border-2 border-forest/30 bg-white/80 px-8 py-3.5 text-base font-semibold text-forest backdrop-blur-sm shadow-md transition-all hover:-translate-y-0.5 hover:bg-white hover:border-forest/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
            >
              Свали материали
            </button>
          </div>
        </div>
      </section>

      {/* За нас */}
      <section id="za-nas" className="scroll-mt-24 bg-sand/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <span className="inline-block rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest">
            За нас
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-graphite md:text-4xl lg:text-5xl">
            Фондация „Шанс за децата и природата на България“ и Център за млади таланти – Бургас
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite/80">
            От години работим с талантливи деца и младежи в областта на науката, изкуството, литературата, образованието и обществените каузи. Вярваме, че младите хора не просто могат да учат за света около себе си — те могат активно да го променят към по-добро, когато им дадем възможност, доверие и подходяща среда.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-graphite/80">
            „Пътят не е само за хора“ е естествено продължение на тази работа: тук творчеството среща природозащитата, а младежката енергия се превръща в реална обществена промяна.
          </p>
        </div>
      </section>

      {/* Footer / Контакти */}
      <footer id="kontakti" className="scroll-mt-24 bg-graphite text-white/90">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest font-display text-xl font-bold text-white">
                  ПНХ
                </div>
                <div className="font-display text-lg font-semibold leading-tight text-white">
                  Пътят не е<br />само за хора
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Фондация „Шанс за децата и природата на България“ × Център за млади таланти – Бургас
              </p>
              <div className="mt-5 flex gap-3">
                {[
                  { label: "Facebook", d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" },
                  { label: "Instagram", d: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.72 3.72 0 0 1-.9 1.38 3.72 3.72 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.93a2.73 2.73 0 1 1 0-5.46 2.73 2.73 0 0 1 0 5.46zm5.35-7.1a.98.98 0 1 1-1.96 0 .98.98 0 0 1 1.96 0z" },
                  { label: "YouTube", d: "M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.58A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.12c1.9.58 9.4.58 9.4.58s7.5 0 9.4-.58a3 3 0 0 0 2.1-2.12C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
                  { label: "TikTok", d: "M19.6 6.7a5.6 5.6 0 0 1-3.4-1.15 5.6 5.6 0 0 1-2.15-3.55h-3.2v12.3a2.6 2.6 0 1 1-1.85-2.5V8.55a5.85 5.85 0 1 0 5.05 5.8V9.6a8.8 8.8 0 0 0 5.55 1.95V8.35a5.5 5.5 0 0 1 0-1.65z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-forest"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold text-white">Контакти</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Имейл</span>
                  <a href="mailto:info@example.bg" className="transition-colors hover:text-white">
                    info@example.bg
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Телефон</span>
                  <a href="tel:+359000000000" className="transition-colors hover:text-white">
                    +359 000 000 000
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-white/50">Град</span>
                  Бургас, България
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold text-white">
                Партньори и финансиращи организации
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 items-center justify-center rounded-lg bg-white/10 text-xs text-white/50"
                  >
                    Лого {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="max-w-4xl text-xs leading-relaxed text-white/60">
              Всички текстове, илюстрации и материали в този сайт са създадени в рамките на кампанията „Пътят не е само за хора“. Могат да бъдат използвани свободно с образователна цел, при коректно посочване на източника.
            </p>
            <p className="mt-4 text-xs text-white/40">
              © {new Date().getFullYear()} Пътят не е само за хора. Всички права запазени.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
