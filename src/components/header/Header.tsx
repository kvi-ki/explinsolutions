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

      <header className="min-w-[8rem]">
        <img src="/favicon.png" alt="Explinsolutions label" className="label" />
        <div
          className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper"
          style={{ clipPath: 'url(#headerClip)' }}
        >
          <h1 className="heading">Explinsolutions_</h1>
        </div>
      </header>
    </>
  );
}
