import Link from 'next/link';

export const metadata = {
  title: 'Política de Cookies | explinsolutions_'
};

export default function PoliticaDeCookies() {
  return (
    <div className="bg-lightGray p-6 mb-10 lg:p-20 xl:rounded-xl">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 text-text font-light">
        <h1 className="text-4xl font-normal">Política de Cookies</h1>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el
            dispositivo del usuario al visitar un sitio web.
          </p>
          <p>
            Su finalidad es permitir que la web recuerde información sobre la visita
            para garantizar su correcto funcionamiento técnico.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">
            2. Tipos de cookies utilizadas en este sitio web
          </h2>
          <p>
            El sitio web{' '}
            <Link href="/" className="font-normal hover:text-accent">
              www.explinsolutions.com
            </Link>{' '}
            utiliza únicamente cookies técnicas o necesarias.
          </p>
          <h3 className="font-normal">Cookies técnicas o necesarias</h3>
          <p>
            Permiten el funcionamiento básico del sitio web y son imprescindibles
            para su correcto funcionamiento. Sin estas cookies, el sitio no puede
            funcionar correctamente.
          </p>
          <p>
            Al ser estrictamente necesarias, no requieren el consentimiento del
            usuario y no pueden desactivarse.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">3. Cookies de terceros</h2>
          <p>
            Este sitio web no utiliza cookies de terceros ni herramientas de análisis
            o seguimiento externas.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">
            4. Gestión de cookies desde el navegador
          </h2>
          <p>
            El usuario puede configurar su navegador para bloquear o eliminar
            cookies. Tenga en cuenta que bloquear las cookies técnicas puede afectar
            al funcionamiento del sitio web.
          </p>
          <p>Puede gestionar las cookies desde la configuración de su navegador:</p>
          <ul className="list-disc list-inside flex flex-col gap-1 ml-5">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-normal">
            5. Actualizaciones de la política de cookies
          </h2>
          <p>
            explinsolutions_ se reserva el derecho a modificar la presente política
            para adaptarla a cambios legislativos o técnicos.
          </p>
        </section>
      </div>
    </div>
  );
}
