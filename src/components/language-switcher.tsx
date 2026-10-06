import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/i18n";
import { Flag } from "@/components/flags";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("header.language")}
        className={`inline-flex h-11 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 text-sm text-foreground hover:bg-white/10 ${className}`}
      >
        <Flag code={current.code} />
        <span className="text-xs font-semibold uppercase">{current.code}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[100] min-w-[10rem]">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => i18n.changeLanguage(l.code)}
            className={l.code === current.code ? "font-semibold" : ""}
          >
            <span className="mr-2"><Flag code={l.code} /></span>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
