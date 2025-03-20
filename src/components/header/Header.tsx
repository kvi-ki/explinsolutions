export default function Header() {
  return (
    <>
      <header className="min-w-[8rem]">
        <img src="/favicon.png" alt="Explinsolutions label" className="label" />
        <div className="bg-[url(/assets/electric_tower.jpg)] heading-wrapper">
          <h1 className="heading">Explinsolutions_</h1>
          <div className="preamble">
            <p className="self-start">Servicio integral </p>
            <p className="self-end">para la industria</p>
          </div>
        </div>
      </header>
    </>
  );
}
