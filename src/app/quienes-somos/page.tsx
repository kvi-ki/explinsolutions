'use client';

import AnimatedService from '@/utils/AnimatedService';

export default function AboutUs() {
  return (
    <div className="bg-lightGray h-[39rem] p-20 mb-10 xl:rounded-xl">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-20">
        <h1 className="text-4xl">Nuestro Equipo</h1>
        <AnimatedService>
          <p className="text-text text-xl">
            Explinsolutions_ es una ingeniería industrial especializada en
            automatización y sistemas eléctricos llave en mano. Diseñamos,
            programamos, fabricamos e implantamos soluciones personalizadas que
            optimizan procesos y aumentan la productividad. Nuestro equipo combina
            experiencia y visión joven, trabajando bajo tres pilares: eficiencia,
            innovación y fiabilidad. Nos distingue la atención directa, el compromiso
            con la calidad y un enfoque flexible adaptado a cada cliente en sectores
            como alimentación, farmacéutica, logística, energía o manufactura.
          </p>
        </AnimatedService>
      </div>
    </div>
  );
}
