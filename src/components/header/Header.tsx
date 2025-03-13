export default function Header() {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="headerClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.70 L 0.52,0.70 L 0.52,1 L 0,1 L 0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <header
        className="m-3 min-h-[250px] text-white bg-[url(/assets/electric_tower.jpg)] bg-cover bg-center rounded-xl lg:min-h-[380px]"
        style={{ clipPath: 'url(#headerClip)' }}
      >
        <h1 className="pt-4 pl-3 text-header tracking-wide lg:text-headerLg lg:pt-12 lg:pl-6 xl:text-headerXl  xl:pt-16 xl:pl-40">
          Explinsolutions_
        </h1>
      </header>
    </>
  );
}
