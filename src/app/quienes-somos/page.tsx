'use client';

import AnimatedService from '@/utils/AnimatedService';

export default function AboutUs() {
  return (
    <div className="bg-lightGray p-20 mb-10 xl:rounded-xl">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-20">
        <h1 className="text-4xl">Nuestro Equipo</h1>
        <AnimatedService>
          <div className="text-text text-xl flex flex-col gap-8">
            <p>
              <b>explinsolutions</b> es una ingeniería industrial especializada en
              <b>automatización y sistemas eléctricos llave en mano</b>.
            </p>
            <p>
              Acompañamos a cada cliente en todo el proceso:{' '}
              <b>diseñamos, programamos, fabricamos e implantamos soluciones</b> que
              optimizan la producción y elevan la eficiencia de sus operaciones.
            </p>
            <p>
              Nuestro equipo une <b>experiencia consolidada</b> con una{' '}
              <b>visión joven e innovadora</b>, trabajando siempre bajo tres pilares
              fundamentales: <b>eficiencia, innovación y fiabilidad</b>.
            </p>
            <p>
              Lo que nos diferencia es la{' '}
              <b>atención directa y cercana, el compromiso con la calidad</b> y la{' '}
              <b>flexibilidad</b> para adaptarnos a las necesidades específicas de
              sectores tan exigentes como{' '}
              <b>alimentación, farmacéutica, logística, energía y manufactura</b>.
            </p>
            <p>
              En cada proyecto buscamos no solo ofrecer un servicio técnico, sino una{' '}
              <b>solución real que marque la diferencia desde el primer día</b>.
            </p>
          </div>
        </AnimatedService>
      </div>
    </div>
  );
}
