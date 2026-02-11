import svgPaths from "./svg-gvu18frl4p";

function SolarFigmaBoldDuotone() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="solar:figma-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="solar:figma-bold-duotone">
          <path d={svgPaths.pc522880} fill="var(--fill-0, black)" id="Vector" opacity="0.6" />
          <path d={svgPaths.p7bf7900} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p1cbbfc00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p26070f40} fill="var(--fill-0, black)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p3b5ec480} fill="var(--fill-0, black)" id="Vector_5" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

export default function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full" data-name="Link">
      <SolarFigmaBoldDuotone />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">Figma</p>
    </div>
  );
}