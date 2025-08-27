import { useMemo, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import sections from "@/data/sections";

type HeaderProps = {
  onNavigate: (id: string) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return sections.filter((s) =>
      s.title.toLowerCase().includes(q) ||
      s.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);

  const navigateTo = (id: string) => {
    setShowSuggest(false);
    setQuery("");
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="h-14 flex items-center gap-3">
          {/* Left: Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Открыть меню" className="p-2 rounded-md hover:bg-muted transition-colors">
                <Menu className="h-9 w-9 text-orange-500" strokeWidth={3} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:w-80 py-4">
              <div className="px-1">
                <div className="max-h-[72vh] overflow-auto pr-2">
                  <ul className="space-y-0.5">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <button
                          className="w-full text-left px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors text-sm story-link"
                          onClick={() => { setOpen(false); navigateTo(s.id); }}
                        >
                          <span>{s.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="h-4" />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Center: Title */}
          <div className="flex-1 flex items-center justify-center">
            <div className="truncate text-center font-semibold tracking-tight">
              ГОСТ 6482-2011 — Трубы железобетонные безнапорные
            </div>
          </div>

          {/* Right: Search */}
          <div className="hidden sm:block w-1/3">
            <div className="relative">
              <Input
                ref={inputRef}
                type="search"
                placeholder="Поиск по разделам…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggest(true)}
                onBlur={() => setTimeout(() => setShowSuggest(false), 150)}
                aria-label="Поиск по разделам"
              />
              {showSuggest && results.length > 0 && (
                <div className="absolute mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow animate-fade-in z-50">
                  <ul className="py-1 max-h-72 overflow-auto">
                    {results.map((s) => (
                      <li key={s.id}>
                        <button
                          className="w-full px-3 py-2 text-left hover:bg-muted transition-colors"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => navigateTo(s.id)}
                        >
                          {s.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
