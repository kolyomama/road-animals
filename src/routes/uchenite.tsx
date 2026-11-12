import { createFileRoute } from "@tanstack/react-router";

import { VideoCard } from "@/components/VideoCard";
import { PageHero, Section } from "@/components/site";
import { videos } from "@/data/videos";

export const Route = createFileRoute("/uchenite")({
  head: () => ({
    meta: [
      { title: "Какво казват учените? | Пътят не е само за хора" },
      { name: "description", content: "Видео разговори с херпетолози и природозащитници за земноводните и влечугите по пътищата." },
    ],
  }),
  component: Scientists,
});

function Scientists() {
  return (
    <>
      <PageHero
        eyebrow="Видео"
        title="Какво казват учените?"
        lead="Кратки разговори с херпетолози и природозащитници — на ясен и достъпен език."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Section>
    </>
  );
}
