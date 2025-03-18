import { useEffect, useState } from 'react';

export default function Header() {
  const screenPath = 'M 0,0 L 1,0 L 1,0.70 L 0.52,0.70 L 0.52,1 L 0,1 L 0,0 Z';
  const largeScreenPath =
    'M 0,0 L 1,0 L 1,0.70 L 0.60,0.70 L 0.60,1 L 0,1 L 0,0 Z';

  const [clipPath, setClipPath] = useState(screenPath);

  useEffect(() => {
    const updateClipPath = () => {
      setClipPath(window.innerWidth > 1280 ? largeScreenPath : screenPath);
    };

    updateClipPath();
    window.addEventListener('resize', updateClipPath);

    return () => window.removeEventListener('resize', updateClipPath);
  }, []);

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="headerClip" clipPathUnits="objectBoundingBox">
            <path d={clipPath} />
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
        <div className="preamble">
          <p className="self-start">Servicio integral </p>
          <p className="self-end">para la industria</p>
        </div>
      </header>
    </>
  );
}
