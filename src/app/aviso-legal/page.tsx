import Link from 'next/link';

export const metadata = {
  title: 'Aviso Legal | explinsolutions_'
};

export default function AvisoLegal() {
  return (
    <div className="bg-lightGray p-6 mb-10 lg:p-20 xl:rounded-xl">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 text-text font-light">
        <h1 className="text-4xl font-normal">Aviso Legal</h1>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">1. Datos identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en la{' '}
            <strong>
              Ley 34/2002, de Servicios de la Sociedad de la Información y de
              Comercio Electrónico (LSSI-CE)
            </strong>
            , se facilitan los siguientes datos:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>
              <strong>Titular:</strong> EXPLINSOLUTION, S.L.
            </li>
            <li>
              <strong>NIF/CIF:</strong> B70652060
            </li>
            <li>
              <strong>Domicilio social:</strong> Camí del Mig, 5, 08349 Cabrera de
              Mar (Barcelona)
            </li>
            <li>
              <strong>Correo electrónico:</strong> administración@explinsolutions.com
            </li>
            <li>
              <strong>Teléfono:</strong> +34 619 792 023
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">2. Objeto</h2>
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web:{' '}
            <span className="font-normal">www.explinsolutions.com</span>
          </p>
          <p>
            La navegación por el sitio web atribuye la condición de usuario e implica
            la aceptación plena de todas las condiciones aquí recogidas.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado del sitio web y a no
            emplearlo para:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Realizar actividades ilícitas o contrarias a la buena fe</li>
            <li>Difundir contenidos ofensivos, ilegales o perjudiciales</li>
            <li>Provocar daños en los sistemas físicos o lógicos del titular</li>
          </ul>
          <p>
            explinsolutions_ se reserva el derecho a retirar cualquier contenido que
            considere inapropiado.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">
            4. Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, diseño, logotipos,
            código, etc.) son propiedad de explinsolutions_ o cuentan con las
            licencias necesarias.
          </p>
          <p>
            Queda prohibida su reproducción, distribución o modificación sin
            autorización expresa del titular.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">5. Responsabilidad</h2>
          <p>explinsolutions_ no se hace responsable de:</p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Daños derivados del uso del sitio web</li>
            <li>Posibles errores u omisiones en los contenidos</li>
            <li>Problemas técnicos o interrupciones del servicio</li>
          </ul>
          <p>
            No obstante, se adoptarán todas las medidas necesarias para garantizar el
            correcto funcionamiento del sitio.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">6. Enlaces externos</h2>
          <p>Este sitio web puede contener enlaces a páginas de terceros.</p>
          <p>
            explinsolutions_ no se responsabiliza del contenido ni de las políticas
            de privacidad de dichos sitios externos.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">7. Protección de datos</h2>
          <p>
            El tratamiento de los datos personales se rige por lo establecido en la{' '}
            <Link
              href="/politica-de-privacidad"
              className="font-normal hover:text-accent"
            >
              Política de Privacidad
            </Link>{' '}
            del sitio web.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">8. Legislación aplicable</h2>
          <p>El presente Aviso Legal se rige por la legislación española.</p>
          <p>
            Para la resolución de conflictos, las partes se someterán a los juzgados
            y tribunales del domicilio del titular del sitio web.
          </p>
        </section>
      </div>
    </div>
  );
}
