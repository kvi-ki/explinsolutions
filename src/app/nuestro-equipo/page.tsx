'use client';

import Image from 'next/image';

import AnimatedService from '@/utils/AnimatedService';

export default function AboutUs() {
  return (
    <div className="bg-lightGray p-20 mb-10 xl:rounded-xl">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <h1 className="text-4xl">Nuestro Equipo</h1>
        <AnimatedService>
          <Image
            src="/images/team.webp"
            alt="explinsolutions_ team photo"
            width={2000}
            height={400}
            className="w-full h-70 object-cover object-center rounded-xl"
          />

          <div className="text-text text-xl flex flex-col gap-8 pt-10">
            <p>
              <b>
                explinsolutions<span className="text-accent">_</span>
              </b>{' '}
              es una ingeniería industrial especializada en automatización y sistemas
              eléctricos llave en mano.
            </p>
            <p>
              Acompañamos a cada cliente en todo el proceso: diseñamos, programamos,
              fabricamos e implantamos soluciones que optimizan la producción y
              elevan la eficiencia de sus operaciones.
            </p>
            <p>
              Nuestro equipo une experiencia consolidada con una visión joven e
              innovadora, trabajando siempre bajo tres pilares fundamentales:
              eficiencia, innovación y fiabilidad.
            </p>
            <p>
              Lo que nos diferencia es la atención directa y cercana, el compromiso
              con la calidad y la flexibilidad para adaptarnos a las necesidades
              específicas de sectores tan exigentes como alimentación, farmacéutica,
              logística, energía y manufactura.
            </p>
            <p>
              En cada proyecto buscamos no solo ofrecer un servicio técnico, sino una
              solución real que marque la diferencia desde el primer día.
            </p>
          </div>
        </AnimatedService>
      </div>
    </div>
  );
}
