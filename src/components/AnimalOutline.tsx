import type { CSSProperties } from "react";

import type { AnimalKey } from "@/data/animals";

interface Props {
  animal: AnimalKey;
  className?: string;
  style?: CSSProperties;
  /** Цвят на запълването вътре в змията (трябва да е като фона зад рисунката) */
  bg?: string;
  title?: string;
}

/**
 * Контурни рисунки на животните (ръчно начертани SVG). Цветът идва от `currentColor`,
 * затова се оцветяват с text-* класове. Всички са във viewBox 240×140 и гледат надясно.
 */
export function AnimalOutline({ animal, className, style, bg = "var(--color-cream)", title }: Props) {
  return (
    <svg
      viewBox="0 0 240 140"
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {animal === "frog" && <Frog />}
      {animal === "tortoise" && <Tortoise />}
      {animal === "snake" && <Snake bg={bg} />}
      {animal === "lizard" && <Lizard />}
      {animal === "salamander" && <Salamander />}
    </svg>
  );
}

function Frog() {
  return (
    <>
      {/* тяло и глава */}
      <path d="M46 118 C34 96 48 62 92 54 C118 49 142 52 158 62 C166 50 184 48 192 60 C204 62 218 78 222 92 C223 100 216 106 206 106 L172 106 C170 112 160 118 148 118 Z" />
      {/* око */}
      <circle cx="184" cy="62" r="7" />
      <circle cx="185" cy="62" r="2.5" fill="currentColor" stroke="none" />
      {/* ноздра */}
      <circle cx="214" cy="84" r="1.6" fill="currentColor" stroke="none" />
      {/* задно краче */}
      <path d="M58 112 C52 86 84 78 102 94 C110 102 106 114 98 118" />
      <path d="M96 120 C112 126 134 126 150 122 M150 122 L160 125 M150 122 L159 117" />
      {/* предно краче */}
      <path d="M164 108 L170 124 L186 126" />
      {/* петънца по гърба */}
      <circle cx="104" cy="66" r="3" />
      <circle cx="124" cy="62" r="3" />
      <circle cx="142" cy="67" r="2.5" />
    </>
  );
}

function Tortoise() {
  return (
    <>
      {/* черупка */}
      <path d="M48 100 C48 52 90 30 124 30 C162 30 200 52 200 100 Z" />
      <path d="M86 100 C84 78 92 56 106 38" />
      <path d="M124 100 C124 76 124 54 124 31" />
      <path d="M162 100 C164 78 156 56 142 38" />
      <path d="M62 80 C90 71 158 71 187 80" />
      {/* глава */}
      <path d="M200 88 C210 79 224 77 230 85 C236 93 230 101 218 101 L200 101" />
      <circle cx="224" cy="85" r="2.2" fill="currentColor" stroke="none" />
      {/* крака и опашка */}
      <path d="M176 101 L178 117 L197 117 L195 101" />
      <path d="M62 101 L60 117 L80 117 L82 101" />
      <path d="M48 96 L35 102 L48 104" />
    </>
  );
}

function Snake({ bg }: { bg: string }) {
  const body = "M16 112 C46 112 50 70 92 70 C132 70 124 112 164 112 C196 112 200 80 208 64";
  return (
    <>
      {/* тяло: външен контур + вътрешно запълване = „контур“ */}
      <path d={body} stroke="currentColor" strokeWidth={24} />
      <path d={body} stroke={bg} strokeWidth={18} />
      {/* шарка */}
      <path d={body} strokeWidth={5} strokeDasharray="0 14" />
      {/* глава */}
      <ellipse cx="214" cy="50" rx="17" ry="11" transform="rotate(-50 214 50)" fill={bg} />
      <circle cx="217" cy="44" r="2.4" fill="currentColor" stroke="none" />
      {/* език */}
      <path d="M225 37 L231 30 M231 30 L236 29 M231 30 L233 24" strokeWidth={2.2} />
    </>
  );
}

function Lizard() {
  return (
    <>
      {/* тяло, глава, опашка (поглед отгоре) */}
      <ellipse cx="112" cy="70" rx="38" ry="17" />
      <path d="M146 62 C158 56 176 58 186 66 C190 70 190 72 186 76 C176 84 158 86 146 80" />
      <path d="M76 63 C58 60 44 76 26 72 C16 70 10 64 6 58 C12 70 24 80 40 80 C58 80 66 78 76 77" />
      {/* крака */}
      <path d="M128 55 L138 40 L152 38" />
      <path d="M128 85 L138 100 L152 102" />
      <path d="M94 55 L84 40 L70 38" />
      <path d="M94 85 L84 100 L70 102" />
      {/* око и шарка */}
      <circle cx="172" cy="64" r="2.2" fill="currentColor" stroke="none" />
      <path d="M86 70 L140 70" strokeWidth={4} strokeDasharray="0 9" />
    </>
  );
}

function Salamander() {
  return (
    <>
      {/* тяло, глава, опашка (поглед отгоре) */}
      <ellipse cx="108" cy="70" rx="46" ry="24" />
      <path d="M150 58 C162 50 186 52 192 66 C194 70 194 70 192 74 C186 88 162 90 150 82" />
      <path d="M64 62 C44 60 28 68 10 72 C28 76 44 82 64 80" />
      {/* крака */}
      <path d="M132 50 L142 34 L156 30" />
      <path d="M132 90 L142 106 L156 110" />
      <path d="M86 48 L76 32 L62 30" />
      <path d="M86 92 L76 108 L62 110" />
      {/* око и петна */}
      <circle cx="176" cy="62" r="2.2" fill="currentColor" stroke="none" />
      <g fill="currentColor" stroke="none" opacity="0.85">
        <circle cx="94" cy="60" r="5" />
        <circle cx="114" cy="78" r="6" />
        <circle cx="132" cy="64" r="4" />
        <circle cx="78" cy="76" r="4" />
        <circle cx="50" cy="71" r="3" />
        <circle cx="168" cy="72" r="2.6" />
      </g>
    </>
  );
}
