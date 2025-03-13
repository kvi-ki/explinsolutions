export default function Header() {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="headerClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.70 L 0.55,0.70 0.52,0.73 L 0.52,1 L 0,1 L 0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <header
        className="m-3 min-h-[250px] text-white"
        style={{
          backgroundImage: "url('/assets/electric_tower.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'url(#headerClip)',
          borderRadius: '3%'
        }}
      >
        <h1 className="relative top-2 left-4 text-header tracking-wide">
          Explinsolutions
        </h1>
      </header>
    </>
  );
}
