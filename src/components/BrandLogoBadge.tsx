import {assetUrl} from '../lib/assets';

const PNG_LOGOS: Record<string, string> = {
  PRAN: assetUrl('/assets/pran-logo.png'),
  RFL: assetUrl('/assets/rfl-logo.png'),
  AAFI: assetUrl('/assets/aafi-logo.png'),
  GETWELL: assetUrl('/assets/getwell-logo.png'),
  SUNSHINE: assetUrl('/assets/sunshine-logo.png'),
  'DECENT TYRE': assetUrl('/assets/decent_tyre-logo.png'),
  SAFEMET: assetUrl('/assets/safemet-logo.png'),
  TOPPER: assetUrl('/assets/topper-logo.png'),
  'DESHBANDHU GROUP': assetUrl('/assets/deshbandhu-logo.png'),
};

export function BrandLogoBadge({brand, className = ''}: {brand: string; className?: string}) {
  const key = brand.toUpperCase();
  const imgSrc = PNG_LOGOS[key];
  const needsLightPlate = key === 'DESHBANDHU GROUP';

  return (
    <div
      className={`flex h-14 w-32 items-center justify-center px-2 py-1.5 ${
        needsLightPlate
          ? 'rounded-sm bg-white/95 shadow-sm'
          : 'bg-transparent'
      } ${className}`}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${brand} logo`}
          className="max-h-full max-w-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]"
          referrerPolicy="no-referrer"
        />
      ) : key === 'AKIJ' ? (
        <svg
          viewBox="0 0 120 72"
          className="h-full w-auto max-w-full"
          aria-label="AKIJ logo"
        >
          <path d="M26 4 H94 V44 L60 66 L26 44 Z" fill="#D91F26" />
          <text
            x="60"
            y="38"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="24"
            letterSpacing="1"
          >
            AKIJ
          </text>
        </svg>
      ) : key === 'FRUTIKA' ? (
        <svg
          viewBox="0 0 180 60"
          className="h-full w-auto max-w-full"
          aria-label="FRUTIKA logo"
        >
          <rect x="4" y="6" width="172" height="48" rx="6" fill="#E3321D" />
          <text
            x="90"
            y="39"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontStyle="italic"
            fontWeight="800"
            fontSize="28"
            letterSpacing="0.5"
          >
            Frutika
          </text>
        </svg>
      ) : key === 'FARMLAND' ? (
        <svg
          viewBox="0 0 200 60"
          className="h-full w-auto max-w-full"
          aria-label="FARMLAND logo"
        >
          <text
            x="100"
            y="35"
            textAnchor="middle"
            fill="#4ADE80"
            fontFamily="Georgia, serif"
            fontWeight="700"
            fontSize="24"
            letterSpacing="1.5"
          >
            FARMLAND
          </text>
          <rect x="34" y="43" width="132" height="2.5" fill="#F59E0B" />
        </svg>
      ) : (
        <span className="display text-sm text-foreground">{brand}</span>
      )}
    </div>
  );
}
