import svgPaths from "./svg-gihptatnjg";
import imgImageTheNewBroadcastEra from "figma:asset/ff148bf06b626d8e767fe2b38cfb8323af3ce071.png";
import imgImageWanderlustUi from "figma:asset/2c88af63a47f9a1f72955333ae3d78c7a1f0ef84.png";
import imgImageDigitalHauteCouture from "figma:asset/0d94e862498a85d6d19460d76ab0f3cbbad73d03.png";
import imgImageObjectPermanence from "figma:asset/660b30f4fc2c072560ca10bf9fcd68b99ffe58b5.png";
import imgImageStructuralBeige from "figma:asset/efcc22b9a08b912a525842032199b5c173b209dd.png";
import imgImageTheNewAvantGarde from "figma:asset/17e697c49be689f2606f76bf54ae50da7321959d.png";

function Heading() {
  return (
    <div className="h-[230.393px] relative shrink-0 w-[382.286px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Arial:Bold',sans-serif] leading-[115.2px] not-italic relative size-full text-[128px] text-black tracking-[-5.12px]">
        <p className="absolute left-0 top-[-12px]">Design</p>
        <p className="absolute left-0 top-[103.2px]">Trends</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] text-right tracking-[0.6px] uppercase whitespace-pre-wrap">EDIÇÃO ATUAL</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Text">
      <p className="-translate-x-full absolute font-['Arial:Regular',sans-serif] leading-[36px] left-[130px] not-italic text-[30px] text-black text-right top-[-3.29px]">Semana 1</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[56px] relative shrink-0 w-[129.366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[80px] relative shrink-0 w-[129.366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[24px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[230.393px] items-end justify-between left-[24px] top-0 w-[1232px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65px] left-[24px] top-[262.39px] w-[512px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.5px] left-0 not-italic text-[#6a7282] text-[20px] top-[-2.71px] w-[428px] whitespace-pre-wrap">Artigos selecionados da interseção entre cultura, tecnologia e estética dentro do reddit.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[327.393px] relative shrink-0 w-full" data-name="Section">
      <Container />
      <Paragraph />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[441.973px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-black top-[-5px] tracking-[-1.2px]">Melhores da semana</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function ImageTheNewBroadcastEra() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[813.33px]" data-name="Image (The New Broadcast Era)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTheNewBroadcastEra} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[600px] left-0 top-0 w-[813.33px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[813.33px]" data-name="Container">
      <ImageTheNewBroadcastEra />
      <Container6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[25.143px] relative rounded-[19174000px] shrink-0 w-[64.786px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19174000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[12.57px] not-italic text-[12px] text-white top-[3.57px]">Culture</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">4.0k</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon />
        <Text2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3.5 5V11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
          <path d={svgPaths.p1ac5b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">85</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8.571px] relative size-full">
          <Icon1 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.143px] relative rounded-[8px] shrink-0 w-[95.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.571px] py-[0.571px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[25.143px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[259.071px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[30px] left-0 not-italic text-[24px] text-white top-[-2.14px]">The New Broadcast Era</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="rounded-[19174000px] shrink-0 size-[20px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(194, 122, 255) 0%, rgb(255, 137, 4) 100%)" }} />;
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Glad</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container16 />
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[2.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-[-1.43px]">|</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[60.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Feb 9, 2026</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container15 />
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Heading2 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[12px] h-[100.286px] items-start left-[16px] pb-[0.571px] pt-[16.571px] px-[16.571px] rounded-[16px] top-[483.71px] w-[781.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container8 />
      <Container13 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[749.33px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip rounded-[24px] top-0 w-[813.33px]" data-name="Link">
      <Container5 />
      <Container7 />
      <Container17 />
    </div>
  );
}

function ImageWanderlustUi() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[394.67px]" data-name="Image (Wanderlust UI)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWanderlustUi} />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[288px] left-0 top-0 w-[394.67px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[394.67px]" data-name="Container">
      <ImageWanderlustUi />
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[25.143px] relative rounded-[19174000px] shrink-0 w-[57.911px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19174000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[12.57px] not-italic text-[12px] text-white top-[3.57px]">UI/UX</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">4.0k</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon3 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3.5 5V11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
          <path d={svgPaths.p1ac5b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">85</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8.571px] relative size-full">
          <Icon4 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.143px] relative rounded-[8px] shrink-0 w-[95.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.571px] py-[0.571px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[25.143px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[25px] relative shrink-0 w-[134.009px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[25px] left-0 not-italic text-[20px] text-white top-[-2.14px]">Wanderlust UI</p>
      </div>
    </div>
  );
}

function Container30() {
  return <div className="rounded-[19174000px] shrink-0 size-[20px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(194, 122, 255) 0%, rgb(255, 137, 4) 100%)" }} />;
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Glad</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container30 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[2.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-[-1.43px]">|</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[60.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Feb 8, 2026</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container29 />
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[25px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container28 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[12px] h-[95.286px] items-start left-[16px] pb-[0.571px] pt-[16.571px] px-[16.571px] rounded-[16px] top-[176.71px] w-[362.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container22 />
      <Container27 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[330.67px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[288px] left-0 overflow-clip rounded-[24px] top-0 w-[394.67px]" data-name="Link">
      <Container19 />
      <Container21 />
      <Container31 />
    </div>
  );
}

function ImageDigitalHauteCouture() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[394.67px]" data-name="Image (Digital Haute Couture)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDigitalHauteCouture} />
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[288px] left-0 top-0 w-[394.67px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[394.67px]" data-name="Container">
      <ImageDigitalHauteCouture />
      <Container33 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[25.143px] relative rounded-[19174000px] shrink-0 w-[98.375px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19174000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[12.57px] not-italic text-[12px] text-white top-[3.57px]">Visual Design</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">4.0k</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon6 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3.5 5V11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
          <path d={svgPaths.p1ac5b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">85</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8.571px] relative size-full">
          <Icon7 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.143px] relative rounded-[8px] shrink-0 w-[95.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.571px] py-[0.571px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[25.143px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[50px] relative shrink-0 w-[203.545px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[25px] left-0 not-italic text-[20px] text-white top-[-2.14px] w-[125px] whitespace-pre-wrap">Digital Haute Couture</p>
      </div>
    </div>
  );
}

function Container43() {
  return <div className="rounded-[19174000px] shrink-0 size-[20px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(194, 122, 255) 0%, rgb(255, 137, 4) 100%)" }} />;
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Glad</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container43 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[2.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-[-1.43px]">|</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[32px] relative shrink-0 w-[59.277px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-[-1px] w-[32px] whitespace-pre-wrap">Feb 5, 2026</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[32px] relative shrink-0 w-[125.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container42 />
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[50px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container41 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[12px] h-[120.286px] items-start left-[16px] pb-[0.571px] pt-[16.571px] px-[16.571px] rounded-[16px] top-[151.71px] w-[362.67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container35 />
      <Container40 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[330.67px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[288px] left-0 overflow-clip rounded-[24px] top-[312px] w-[394.67px]" data-name="Link">
      <Container32 />
      <Container34 />
      <Container44 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[600px] left-[837.33px] top-0 w-[394.67px]" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Container18 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[680px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[36px] left-[24px] top-0 w-[1232px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-black top-[-3.29px]">Últimas Curadorias</p>
    </div>
  );
}

function ImageObjectPermanence() {
  return (
    <div className="absolute h-[493.75px] left-0 top-0 w-[395px]" data-name="Image (Object Permanence)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageObjectPermanence} />
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[493.75px] left-0 top-0 w-[395px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="absolute h-[493.75px] left-0 top-0 w-[395px]" data-name="Container">
      <ImageObjectPermanence />
      <Container46 />
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[25.143px] relative rounded-[19174000px] shrink-0 w-[98.375px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19174000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[12.57px] not-italic text-[12px] text-white top-[3.57px]">Visual Design</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">4.0k</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon9 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3.5 5V11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
          <path d={svgPaths.p1ac5b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">85</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8.571px] relative size-full">
          <Icon10 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.143px] relative rounded-[8px] shrink-0 w-[95.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.571px] py-[0.571px] relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[25.143px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[25px] relative shrink-0 w-[182.027px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[25px] left-0 not-italic text-[20px] text-white top-[-2.14px]">Object Permanence</p>
      </div>
    </div>
  );
}

function Container56() {
  return <div className="rounded-[19174000px] shrink-0 size-[20px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(194, 122, 255) 0%, rgb(255, 137, 4) 100%)" }} />;
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Glad</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container56 />
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15px] relative shrink-0 w-[2.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-[-1.43px]">|</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[60.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Feb 2, 2026</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[127.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container55 />
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[25px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container54 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[12px] h-[95.286px] items-start left-[16px] pb-[0.571px] pt-[16.572px] px-[16.571px] rounded-[16px] top-[382.46px] w-[363px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container48 />
      <Container53 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[331px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[493.75px] left-[12px] overflow-clip rounded-[24px] top-0 w-[395px]" data-name="Link">
      <Container45 />
      <Container47 />
      <Container57 />
    </div>
  );
}

function ImageStructuralBeige() {
  return (
    <div className="absolute h-[493.75px] left-0 top-0 w-[395px]" data-name="Image (Structural Beige)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStructuralBeige} />
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[493.75px] left-0 top-0 w-[395px]" data-name="Container" />;
}

function Container58() {
  return (
    <div className="absolute h-[493.75px] left-0 top-0 w-[395px]" data-name="Container">
      <ImageStructuralBeige />
      <Container59 />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[25.143px] relative rounded-[19174000px] shrink-0 w-[57.911px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19174000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[12.57px] not-italic text-[12px] text-white top-[3.57px]">UI/UX</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">4.0k</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon12 />
        <Text22 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3.5 5V11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
          <path d={svgPaths.p1ac5b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">85</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.679px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8.571px] relative size-full">
        <Icon13 />
        <Text23 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.143px] relative rounded-[8px] shrink-0 w-[95.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[8.571px] pr-[0.571px] py-[0.571px] relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex h-[25.143px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[25px] relative shrink-0 w-[150.554px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[25px] left-0 not-italic text-[20px] text-white top-[-2.14px]">Structural Beige</p>
      </div>
    </div>
  );
}

function Container69() {
  return <div className="rounded-[19174000px] shrink-0 size-[20px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(194, 122, 255) 0%, rgb(255, 137, 4) 100%)" }} />;
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Glad</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container69 />
        <Text24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[2.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-[-1.43px]">|</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[65.17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Jan 28, 2026</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[20px] relative shrink-0 w-[131.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container68 />
        <Text25 />
        <Text26 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[25px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container67 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[12px] h-[95.286px] items-start left-[16px] pb-[0.571px] pt-[16.572px] px-[16.571px] rounded-[16px] top-[382.46px] w-[363px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container61 />
      <Container66 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[331px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[493.75px] left-[431px] overflow-clip rounded-[24px] top-0 w-[395px]" data-name="Link">
      <Container58 />
      <Container60 />
      <Container70 />
    </div>
  );
}

function ImageTheNewAvantGarde() {
  return (
    <div className="absolute h-[493.75px] left-0 top-0 w-[395px]" data-name="Image (The New Avant Garde)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTheNewAvantGarde} />
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[493.75px] left-0 top-0 w-[395px]" data-name="Container" />;
}

function Container71() {
  return (
    <div className="absolute h-[493.75px] left-0 top-0 w-[395px]" data-name="Container">
      <ImageTheNewAvantGarde />
      <Container72 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[25.143px] relative rounded-[19174000px] shrink-0 w-[64.786px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19174000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[12.57px] not-italic text-[12px] text-white top-[3.57px]">Culture</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">4.0k</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon15 />
        <Text27 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3.5 5V11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
          <path d={svgPaths.p1ac5b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.107px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-[-1.43px]">85</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8.571px] relative size-full">
          <Icon16 />
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.143px] relative rounded-[8px] shrink-0 w-[95.804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.571px] py-[0.571px] relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex h-[25.143px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[200.563px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[25px] left-0 not-italic text-[20px] text-white top-[-2.14px] w-[143px] whitespace-pre-wrap">The New Avant Garde</p>
    </div>
  );
}

function Container82() {
  return <div className="rounded-[19174000px] shrink-0 size-[20px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(194, 122, 255) 0%, rgb(255, 137, 4) 100%)" }} />;
}

function Text29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)]">Glad</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container82 />
        <Text29 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[15px] relative shrink-0 w-[2.393px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-[-1.43px]">|</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[32px] relative shrink-0 w-[62.589px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-[-1px] w-[37px] whitespace-pre-wrap">Jan 25, 2026</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[200.56px] top-[18px] w-[129.295px]" data-name="Container">
      <Container81 />
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container80 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[12px] h-[120.286px] items-start left-[16px] pb-[0.571px] pt-[16.572px] px-[16.571px] rounded-[16px] top-[357.46px] w-[363px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container74 />
      <Container79 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[331px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[40px] top-[24px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[493.75px] left-[850px] overflow-clip rounded-[24px] top-0 w-[395px]" data-name="Link">
      <Container71 />
      <Container73 />
      <Container83 />
    </div>
  );
}

function Track() {
  return (
    <div className="h-[499px] relative shrink-0 w-full" data-name="Track2">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function InnerSlider() {
  return (
    <div className="absolute content-stretch flex flex-col h-[499px] items-start left-[12px] overflow-clip pr-[-1px] top-[68px] w-[1256px]" data-name="InnerSlider2">
      <Track />
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[567.464px] relative shrink-0 w-full" data-name="Section">
      <Heading5 />
      <InnerSlider />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white h-[1831px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[64px] items-start pt-[128px] px-[199.143px] relative size-full">
        <Section />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15.98%_3.14%_11.15%_4.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.9857 23.3167">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a565e00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p390d2300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.paaacb80} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p24847e00} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.5px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[32px] relative shrink-0 w-[5.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#99a1af] text-[24px]">|</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[32px] relative shrink-0 w-[150.902px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.6px]">Design Trends</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 top-0 w-[592px]" data-name="Heading 2">
      <Icon18 />
      <Text32 />
      <Text33 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[48px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1.29px] w-[380px] whitespace-pre-wrap">Artigos selecionados da interseção entre cultura, tecnologia e estética dentro do reddit.</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[136px] left-0 top-0 w-[592px]" data-name="Container">
      <Heading9 />
      <Paragraph1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black top-[-1.43px]">Categorias</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6H14" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 14V6" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[272px]" data-name="Link">
      <Icon19 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] top-[-1.43px]">{` UI/UX`}</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_23.61%_8.34%_20.83%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88899 13.3327">
        <g id="Group">
          <path d={svgPaths.p3c25bb80} fill="var(--fill-0, #6A7282)" id="Vector" opacity="0.6" />
          <path d={svgPaths.p657100} fill="var(--fill-0, #6A7282)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p2673b7f0} fill="var(--fill-0, #6A7282)" id="Vector_3" />
          <path d={svgPaths.p23a7e440} fill="var(--fill-0, #6A7282)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p2c1f3700} fill="var(--fill-0, #6A7282)" id="Vector_5" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-[2px]" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[272px]" data-name="Link">
      <Icon20 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] top-[-1.43px]">{` Figma`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.07%_3.79%_3.89%_3.77%]" data-name="Group">
      <div className="absolute inset-[-4.09%_-4.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9957 15.9325">
          <g id="Group">
            <path d={svgPaths.p19a8300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.20482" />
            <path d={svgPaths.p17755c00} fill="var(--fill-0, #6A7282)" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.20482" />
            <path d={svgPaths.p25d55e00} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.20482" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-[2px]" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[272px]" data-name="Link">
      <Icon21 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] top-[-1.43px]">{` Design gráfico`}</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[136px] items-start left-[640px] top-0 w-[272px]" data-name="Container">
      <Heading10 />
      <List />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black top-[-1.43px]">Redes sociais</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_1337)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_18_1337">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[272px]" data-name="Link">
      <Icon22 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] top-[-1.43px]">{` Instagram`}</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14dc0c00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 6H1.33333V14H4V6Z" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p342eb800} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[272px]" data-name="Link">
      <Icon23 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] top-[-1.43px]">{` LinkedIn`}</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[136px] items-start left-[960px] top-0 w-[272px]" data-name="Container">
      <Heading11 />
      <List1 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[257.286px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px]">© 2026 Ditr studio. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[16px] relative shrink-0 w-[60.616px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px]">Privacidade</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.027px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px]">Termos</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[16px] relative shrink-0 w-[122.643px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Text34 />
        <Text35 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[48.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.571px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.571px] relative size-full">
          <Paragraph2 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[264.571px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[24px] relative size-full">
        <Container85 />
        <Container89 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9fafb] h-[385.143px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-solid border-t-[0.571px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[80.572px] px-[199.143px] relative size-full">
        <Container84 />
      </div>
    </div>
  );
}

function PQ() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[80px] h-[1099.429px] items-start left-0 top-0 w-[1678.286px]" data-name="pQ">
      <MainContent />
      <Footer />
    </div>
  );
}

function Group3() {
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

function Icon24() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group3 />
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1c46ef80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pd0d4d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[58.027px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon25 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[20px] not-italic text-[#6a7282] text-[12px] top-[-1px] tracking-[0.3px] uppercase">{` Início`}</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2471b880} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 4.5H10.5" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 10.5V4.5" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.268px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon26 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[20px] not-italic text-[#6a7282] text-[12px] top-[-1px] tracking-[0.3px] uppercase">{` UI/UX`}</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%_23.61%_8.34%_20.83%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66674 9.99951">
        <g id="Group">
          <path d={svgPaths.p35318000} fill="var(--fill-0, #6A7282)" id="Vector" opacity="0.6" />
          <path d={svgPaths.p210e5400} fill="var(--fill-0, #6A7282)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p4b31e00} fill="var(--fill-0, #6A7282)" id="Vector_3" />
          <path d={svgPaths.pcf35b00} fill="var(--fill-0, #6A7282)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.pcd11d00} fill="var(--fill-0, #6A7282)" id="Vector_5" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 overflow-clip size-[12px] top-[2px]" data-name="Icon">
      <Group4 />
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[58.545px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon27 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[20px] not-italic text-[#6a7282] text-[12px] top-[-1px] tracking-[0.3px] uppercase">{` Figma`}</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[4.07%_3.79%_3.89%_3.77%]" data-name="Group">
      <div className="absolute inset-[-4.09%_-4.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.9494">
          <g id="Group">
            <path d={svgPaths.p1fa74f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.903615" />
            <path d={svgPaths.p2282c180} fill="var(--fill-0, #6A7282)" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.903615" />
            <path d={svgPaths.p1cfb3340} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.903615" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 overflow-clip size-[12px] top-[2px]" data-name="Icon">
      <Group5 />
    </div>
  );
}

function Link15() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon28 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[20px] not-italic text-[#6a7282] text-[12px] top-[-1px] tracking-[0.3px] uppercase">{` Design gráfico`}</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[16px] relative shrink-0 w-[386.554px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link12 />
        <Link13 />
        <Link14 />
        <Link15 />
      </div>
    </div>
  );
}

function Icon29() {
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
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[19174000px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Link11 />
          <Navigation />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[80.571px] items-start left-0 pb-[0.571px] px-[199.143px] top-0 w-[1678.286px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <Container91 />
    </div>
  );
}

export default function EditorialDesignBlog() {
  return (
    <div className="bg-white relative size-full" data-name="Editorial Design Blog">
      <PQ />
      <Header />
    </div>
  );
}