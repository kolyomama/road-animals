import { useState } from "react";
import { Mic, Play } from "lucide-react";

import type { Video } from "@/data/videos";
import { t } from "@/lib/typo";

/**
 * Видео карта. Ако има youtubeId, показва миниатюра и зарежда плейъра (youtube-nocookie) едва при натискане.
 * Ако няма — показва „Скоро“.
 */
export function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const ready = Boolean(video.youtubeId);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest/10">
      <div className="relative aspect-video w-full overflow-hidden bg-forest/90">
        {ready && playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : ready ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Пусни видеото: ${video.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-forest shadow-lg">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </span>
          </button>
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-forest to-forest-light text-white">
            <div className="flex flex-col items-center gap-2 text-center">
              <Mic className="h-10 w-10 opacity-90" aria-hidden />
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Скоро
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 text-left">
        <h3 className="font-display text-2xl font-bold leading-tight text-graphite">{t(video.title)}</h3>
        <p className="mt-2 text-sm font-medium text-forest">{video.speaker}</p>
      </div>
    </article>
  );
}
