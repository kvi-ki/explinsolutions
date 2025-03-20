export default function Service({ name }: { name: string }) {
  return (
    <li className="service-item">
      <h3 className="service-heading">{name}</h3>
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
