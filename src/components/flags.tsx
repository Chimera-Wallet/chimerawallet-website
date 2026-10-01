const cls = "h-3.5 w-5 rounded-[2px] shrink-0";

export function Flag({ code }: { code: string }) {
  switch (code) {
    case "es":
      return (
        <svg viewBox="0 0 3 2" className={cls} aria-hidden="true">
          <rect width="3" height="2" fill="#AA151B" />
          <rect y="0.5" width="3" height="1" fill="#F1BF00" />
        </svg>
      );
    case "fr":
      return (
        <svg viewBox="0 0 3 2" className={cls} aria-hidden="true">
          <rect width="1" height="2" fill="#002654" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#CE1126" />
        </svg>
      );
    case "ru":
      return (
        <svg viewBox="0 0 3 2" className={cls} aria-hidden="true">
          <rect width="3" height="2" fill="#FFFFFF" />
          <rect y="0.667" width="3" height="0.667" fill="#0039A6" />
          <rect y="1.333" width="3" height="0.667" fill="#D52B1E" />
        </svg>
      );
    case "zh":
      return (
        <svg viewBox="0 0 30 20" className={cls} aria-hidden="true">
          <rect width="30" height="20" fill="#DE2910" />
          <polygon fill="#FFDE00" points="5,2 6.2,5.6 10,5.6 6.9,7.8 8.1,11.4 5,9.2 1.9,11.4 3.1,7.8 0,5.6 3.8,5.6" />
          <circle cx="10" cy="2" r="0.8" fill="#FFDE00" />
          <circle cx="12" cy="4" r="0.8" fill="#FFDE00" />
          <circle cx="12" cy="7" r="0.8" fill="#FFDE00" />
          <circle cx="10" cy="9" r="0.8" fill="#FFDE00" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 30" className={cls} aria-hidden="true">
          <clipPath id="uk-t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      );
  }
}
