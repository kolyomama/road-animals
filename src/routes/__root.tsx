import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const navLinks = [
  { label: "Начало", id: "nachalo" },
  { label: "Защо е важно?", id: "zashcho" },
  { label: "Какво правим", id: "kakvo-pravim" },
  { label: "Гласът на животните", id: "glasat-na-zhivotnite" },
  { label: "Как да помогнеш", id: "kak-da-pomognesh" },
  { label: "Посланици", id: "poslanitsi" },
  { label: "Подкаст", id: "podkast" },
  { label: "Кампанията в града", id: "kampaniyata-v-grada" },
  { label: "Материали", id: "materiali" },
  { label: "Включи се", id: "vkluchi-se" },
  { label: "За нас", id: "za-nas" },
  { label: "Контакти", id: "kontakti" },
];

function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <button
          onClick={() => scrollToSection("nachalo")}
          className="font-display text-lg font-bold text-forest tracking-tight hover:text-forest-light transition-colors"
        >
          Пътят не е само за хора
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <style>{`nav[scrollbar-width\\:none]::-webkit-scrollbar { display: none; }`}</style>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium text-graphite/80 hover:bg-sand/40 hover:text-graphite transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-graphite hover:bg-sand/40 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Затвори меню" : "Отвори меню"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-3 gap-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileOpen(false);
                }}
                className="text-left rounded-lg px-3 py-2.5 text-base font-medium text-graphite/80 hover:bg-sand/40 hover:text-graphite transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Страницата не е намерена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Страницата, която търсите, не съществува или е преместена.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Начало
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Тази страница не зареди
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Нещо се обърка от наша страна. Можете да опитате отново или да се върнете в началото.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Опитай отново
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Начало
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Пътят не е само за хора" },
      { name: "description", content: "Младежка кампания за пътна екология и опазване на земноводни и влечуги. Костенурки, жаби, гущери и змии също имат право на път." },
      { name: "author", content: "Пътят не е само за хора" },
      { property: "og:title", content: "Пътят не е само за хора" },
      { property: "og:description", content: "Младежка кампания за пътна екология и опазване на земноводни и влечуги." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );
}
