import svgPaths from "./svg-619ydif6w4";

function Group() {
  return (
    <div className="absolute contents inset-[15.98%_3.14%_11.15%_4.57%]" data-name="Group">
      <div className="absolute inset-[15.99%_68.78%_11.74%_4.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5198 23.1262">
          <path clipRule="evenodd" d={svgPaths.p3682d380} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.98%_3.14%_11.15%_68.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6522 23.3167">
          <path d={svgPaths.p2e8a3c00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.98%_31.28%_11.73%_43.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2788 23.1316">
          <path d={svgPaths.pa940700} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16%_59.23%_11.74%_33.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.90162 23.1243">
          <path d={svgPaths.p2b47b140} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p9bfa300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[19174000px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function MaterialSymbolsMenuRounded() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:menu-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:menu-rounded">
          <path d={svgPaths.p22af9300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[19174000px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
        <MaterialSymbolsMenuRounded />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Link />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start pb-[0.571px] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}