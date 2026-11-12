const NBSP = " ";

/**
 * Типографска помощна функция за български текст:
 *  - свързва едносричните предлози и съюзи (в, с, к, и, о, а, на, по, за, до, от, със, във, не, че, да)
 *    със следващата дума, за да не остават накрая на реда;
 *  - свързва последните две думи, за да няма самостоятелна дума на последния ред.
 *
 * Ползва се като {t("текст")} във всички видими текстове.
 */
const SHORT_WORDS = new Set([
  "в", "с", "к", "и", "о", "а", "у",
  "на", "по", "за", "до", "от", "се", "да", "че", "не", "ни", "ги", "го", "му", "ми", "ти", "то", "те",
  "със", "във", "при", "без", "над", "под",
]);

export function t(text: string): string {
  if (!text) return text;
  const words = text.split(" ");
  if (words.length < 2) return text;

  let out = words[0];
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1].toLowerCase().replace(/[^\p{L}]/gu, "");
    const isLast = i === words.length - 1;
    const isDash = words[i] === "–" || words[i] === "—";
    const bindToPrev = isDash || SHORT_WORDS.has(prev) || (isLast && words.length > 2);
    out += (bindToPrev ? NBSP : " ") + words[i];
  }
  return out;
}
