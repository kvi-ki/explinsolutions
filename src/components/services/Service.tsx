export default function Service({ name }: { name: string }) {
  return (
    <li className="border border-green rounded-xl p-2 m-4 w-1/3 aspect-square flex flex-col justify-center sm:1/6 md:w-1/6 xl:w-48">
      <h3 className="w-full text-center text-wrap">{name}</h3>
      <ul className="list-disc hidden">
        <li>Automatización Industrial</li>
        <li>Diseño y fabricación de Armarios eléctricos</li>
        <li>Instalaciones eléctricas</li>
        <li>Instalaciones Redes</li>
        <li>Mantenimiento de maquinaria y equipos electromecánicos</li>
      </ul>
    </li>
  );
}
