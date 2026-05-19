import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | explinsolutions_'
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="bg-lightGray p-6 mb-10 lg:p-20 xl:rounded-xl">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 text-text font-light">
        <h1 className="text-4xl font-normal">Política de Privacidad</h1>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">1. Responsable del tratamiento</h2>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
            3/2018 (LOPDGDD), se informa de:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>
              <strong>Responsable:</strong> EXPLINSOLUTION, S.L.
            </li>
            <li>
              <strong>NIF/CIF:</strong> B70652060
            </li>
            <li>
              <strong>Domicilio:</strong> Camí del Mig, 5, 08349 Cabrera de Mar
              (Barcelona)
            </li>
            <li>
              <strong>Correo electrónico:</strong> administración@explinsolutions.com
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">
            2. Finalidad del tratamiento de datos
          </h2>
          <p>
            Los datos personales que el usuario facilite a través del sitio web serán
            tratados con las siguientes finalidades:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>
              Gestionar las consultas realizadas a través del formulario de contacto
            </li>
            <li>Responder solicitudes de información sobre nuestros servicios</li>
            <li>Mantener comunicaciones profesionales y comerciales</li>
            <li>
              Enviar comunicaciones comerciales o informativas relacionadas con
              nuestra actividad, siempre que el usuario haya dado su consentimiento
              expreso
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">3. Legitimación</h2>
          <p>La base legal para el tratamiento de los datos es:</p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>El consentimiento del usuario al enviar el formulario</li>
            <li>La aplicación de medidas precontractuales a petición del usuario</li>
            <li>
              El interés legítimo en mantener relaciones profesionales en el ámbito
              B2B
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">4. Conservación de los datos</h2>
          <p>Los datos se conservarán:</p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Mientras exista una relación comercial o interés legítimo</li>
            <li>Hasta que el usuario solicite su supresión</li>
            <li>
              Durante el tiempo necesario para cumplir con obligaciones legales
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">5. Destinatarios de los datos</h2>
          <p>Los datos no se cederán a terceros, salvo en los siguientes casos:</p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Cumplimiento de obligaciones legales</li>
            <li>
              Prestadores de servicios necesarios para el funcionamiento del sitio
              web (como hosting o herramientas digitales), con los que se hayan
              firmado los correspondientes contratos de confidencialidad
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">6. Derechos del usuario</h2>
          <p>El usuario puede ejercer los siguientes derechos:</p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Acceso a sus datos personales</li>
            <li>Rectificación de datos inexactos</li>
            <li>Supresión de sus datos</li>
            <li>Limitación del tratamiento</li>
            <li>Oposición al tratamiento</li>
            <li>Portabilidad de sus datos</li>
          </ul>
          <p>
            Para ejercerlos, puede enviar una solicitud a:{' '}
            <a
              href="mailto:administracion@explinsolutions.com"
              className="hover:text-accent font-normal"
            >
              administracion@explinsolutions.com
            </a>
            , indicando el derecho que desea ejercer y adjuntando copia de un
            documento identificativo.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">7. Seguridad de los datos</h2>
          <p>
            explinsolutions_ adopta las medidas técnicas y organizativas necesarias
            para garantizar la seguridad, integridad y confidencialidad de los datos
            personales.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">8. Procedencia de los datos</h2>
          <p>
            Los datos personales tratados proceden directamente del usuario a través
            de:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Formularios de contacto</li>
            <li>Comunicaciones por correo electrónico</li>
            <li>Relaciones profesionales</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">9. Comunicaciones comerciales</h2>
          <p>
            En caso de que el usuario autorice expresamente el envío de
            comunicaciones comerciales, podrá recibir información sobre servicios,
            novedades o contenidos relacionados con la actividad de explinsolutions_.
          </p>
          <p>El usuario podrá retirar su consentimiento en cualquier momento.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">10. Uso de cookies</h2>
          <p>
            Este sitio web utiliza exclusivamente cookies técnicas necesarias para su
            correcto funcionamiento. Para más información, puede consultar la{' '}
            <Link
              href="/politica-de-cookies"
              className="font-normal hover:text-accent"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">
            11. Cambios en la política de privacidad
          </h2>
          <p>
            explinsolutions_ se reserva el derecho a modificar la presente política
            para adaptarla a cambios legislativos o de funcionamiento del sitio web.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">12. Legislación aplicable</h2>
          <p>
            La presente política se rige por la legislación española y europea en
            materia de protección de datos.
          </p>
        </section>
      </div>
    </div>
  );
}
