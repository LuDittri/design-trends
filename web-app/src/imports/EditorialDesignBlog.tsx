import svgPaths from "./svg-cpo5f5ibzl";
import imgImageWithFallback from "figma:asset/2c88af63a47f9a1f72955333ae3d78c7a1f0ef84.png";
import imgImage9 from "figma:asset/84b66156c4f7e4ba0f57cd9f54cee09341026882.png";
import imgImageWithFallback1 from "figma:asset/5f4086208f6e22c9c4897361e6f2be57343945c8.png";
import imgLastPosts from "figma:asset/660b30f4fc2c072560ca10bf9fcd68b99ffe58b5.png";
import imgLastPosts1 from "figma:asset/efcc22b9a08b912a525842032199b5c173b209dd.png";

function Heading() {
  return (
    <div className="font-['Satoshi:Bold',sans-serif] h-[256px] leading-[128px] not-italic relative shrink-0 text-[128px] text-black tracking-[-6.4px] w-full" data-name="Heading 1">
      <p className="absolute left-0 top-[-11.14px]">Design</p>
      <p className="absolute left-0 top-[116.86px]">Trends</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[39px] left-0 not-italic text-[#6a7282] text-[24px] top-[-2.57px] w-[504px] whitespace-pre-wrap">Artigos selecionados da interseção entre cultura, tecnologia e estética dentro do reddit.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[350px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[120.027px]" data-name="Text">
      <p className="-translate-x-full absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[121px] not-italic text-[#99a1af] text-[14px] text-right top-[-1.43px]">EDIÇÃO ATUAL</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[80px] relative shrink-0 w-[120.027px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <p className="-translate-x-full absolute font-['Satoshi:Regular',sans-serif] leading-[36px] left-[120.52px] not-italic text-[30px] text-black text-right top-[22.71px]">Semana 1</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex h-[350px] items-end justify-between left-[223.14px] top-[96px] w-[1232px]" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[354.446px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-black top-[-5px] tracking-[-1.2px]">Melhores da semana</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center py-[2px] relative">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Ver todas as postagens</p>
        <Icon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Link />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[810.661px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.1)] h-[600px] left-0 top-0 w-[810.661px]" data-name="Container">
      <div className="absolute h-[1016px] left-[-56px] top-[-208px] w-[922px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function TrendCard() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[810.661px]" data-name="TrendCard">
      <ImageWithFallback />
      <Container4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%_0.78%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.5117">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p4687e80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteCommentLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="mingcute:comment-line">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2.667px] items-center relative shrink-0">
      <MingcuteCommentLine />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">4,0k</p>
    </div>
  );
}

function BxUpvote() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bx:upvote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bx:upvote">
          <path d={svgPaths.p15072200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[2.667px] items-center justify-center relative shrink-0">
      <BxUpvote />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">85</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[5.333px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[5.333px]" />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Text1 />
      <Text2 />
    </div>
  );
}

function WordpressCommentAuthorAvatar() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="wordpress:comment-author-avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="wordpress:comment-author-avatar">
          <path clipRule="evenodd" d={svgPaths.p34f32080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <WordpressCommentAuthorAvatar />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)]">Glad</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">07/02/2026</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame3 />
      <div className="flex h-[27.019px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[27.019px]">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0185 3">
                <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="3" x2="27.0185" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[45px] not-italic relative shrink-0 text-[32px] text-white">Real asf</p>
      <Frame4 />
    </div>
  );
}

function TrendCard1() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] bottom-0 content-stretch flex flex-col gap-[12px] h-[145px] items-start left-1/2 p-[32px] rounded-[21px] w-[810.661px]" data-name="TrendCard">
      <Frame />
      <Heading2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[738.66px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[24px]" data-name="TrendCard">
      <Icon1 />
    </div>
  );
}

function Article() {
  return (
    <div className="bg-[#f3f4f6] overflow-clip relative rounded-[32px] self-stretch shrink-0 w-[810.661px]" data-name="Article">
      <TrendCard />
      <TrendCard1 />
      <TrendCard2 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[389.33px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[300px] left-0 top-0 w-[389.33px]" data-name="Container" />;
}

function TrendCard3() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[389.33px]" data-name="TrendCard">
      <ImageWithFallback1 />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[317.33px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[24px]" data-name="TrendCard">
      <Icon2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text3 />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">07/02/2026</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[45px] min-h-px min-w-px not-italic relative text-[32px] text-white whitespace-pre-wrap">Real asf</p>
    </div>
  );
}

function TrendCard5() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] bottom-0 content-stretch flex flex-col gap-[12px] items-start justify-center left-[calc(50%-0.17px)] p-[12px] rounded-[4px] w-[389px]" data-name="TrendCard">
      <Frame6 />
      <Heading3 />
    </div>
  );
}

function Article1() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[32px] shrink-0 w-[389.33px]" data-name="Article">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImageWithFallback1} />
      <TrendCard3 />
      <TrendCard4 />
      <TrendCard5 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[389.33px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[300px] left-0 top-0 w-[389.33px]" data-name="Container" />;
}

function TrendCard6() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[389.33px]" data-name="TrendCard">
      <ImageWithFallback2 />
      <Container7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard7() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[317.33px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[24px]" data-name="TrendCard">
      <Icon3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text4 />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">07/02/2026</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[45px] min-h-px min-w-px not-italic relative text-[32px] text-white whitespace-pre-wrap">Real asf</p>
    </div>
  );
}

function TrendCard8() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] bottom-0 content-stretch flex flex-col gap-[12px] items-start justify-center left-[calc(50%-0.17px)] p-[12px] rounded-[4px] w-[389px]" data-name="TrendCard">
      <Frame7 />
      <Heading4 />
    </div>
  );
}

function Article2() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[32px] shrink-0 w-[389.33px]" data-name="Article">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImageWithFallback1} />
      <TrendCard6 />
      <TrendCard7 />
      <TrendCard8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[389.33px]" data-name="Container">
      <Article1 />
      <Article2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Article />
      <Container5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[700px] items-start left-[199px] px-[24px] top-[486px] w-[1280px]" data-name="Section">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-black top-[-3.29px]">Últimas Curadorias</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[45px] min-h-px min-w-px not-italic relative text-[28px] text-center text-white whitespace-pre-wrap">Real asf</p>
    </div>
  );
}

function TrendCard9() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col gap-[12px] items-start justify-center p-[12px] relative rounded-[4px] shrink-0 w-[389px]" data-name="TrendCard">
      <Frame8 />
      <Heading6 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard10() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[309px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[32px]" data-name="TrendCard">
      <Icon4 />
    </div>
  );
}

function LastPosts() {
  return (
    <div className="content-stretch flex gap-[300px] h-[500px] items-end justify-center overflow-clip relative rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px] rounded-tr-[100px] shrink-0" data-name="Last posts">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px] rounded-tr-[100px] size-full" src={imgLastPosts} />
      <TrendCard9 />
      <TrendCard10 />
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[45px] min-h-px min-w-px not-italic relative text-[28px] text-center text-white whitespace-pre-wrap">Real asf</p>
    </div>
  );
}

function TrendCard11() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] relative rounded-[4px] shrink-0 w-full" data-name="TrendCard">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[12px] relative w-full">
          <Frame9 />
          <Heading7 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard12() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[738.67px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[24px]" data-name="TrendCard">
      <Icon5 />
    </div>
  );
}

function LastPosts1() {
  return (
    <div className="content-stretch flex flex-col gap-[315px] h-[500px] items-center justify-end overflow-clip relative rounded-[32px] shrink-0 w-[811px]" data-name="Last posts">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgLastPosts1} />
      <TrendCard11 />
      <TrendCard12 />
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[45px] min-h-px min-w-px not-italic relative text-[28px] text-center text-white whitespace-pre-wrap">Real asf</p>
    </div>
  );
}

function TrendCard13() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] relative rounded-[4px] shrink-0 w-full" data-name="TrendCard">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[12px] relative w-full">
          <Frame10 />
          <Heading8 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard14() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[738.67px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[24px]" data-name="TrendCard">
      <Icon6 />
    </div>
  );
}

function LastPosts2() {
  return (
    <div className="content-stretch flex flex-col gap-[315px] h-[390px] items-center justify-end overflow-clip relative rounded-[32px] shrink-0 w-[811px]" data-name="Last posts">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgLastPosts1} />
      <TrendCard13 />
      <TrendCard14 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[389.33px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLastPosts} />
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5.333px] relative rounded-[25565334px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.762px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[25565334px]" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[21.333px] not-italic relative shrink-0 text-[16px] text-white">R/Design</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text8 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[45px] min-h-px min-w-px not-italic relative text-[28px] text-center text-white whitespace-pre-wrap">Real asf</p>
    </div>
  );
}

function TrendCard15() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] bottom-0 content-stretch flex flex-col gap-[12px] items-start justify-center left-1/2 p-[12px] rounded-[4px] w-[389px]" data-name="TrendCard">
      <Frame11 />
      <Heading9 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TrendCard16() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[317.33px] rounded-[19174000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[48px] top-[24px]" data-name="TrendCard">
      <Icon7 />
    </div>
  );
}

function LastPostsXSmall() {
  return (
    <div className="bg-[#f3f4f6] h-[390px] overflow-clip relative rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px] rounded-tr-[100px] shrink-0 w-[389px]" data-name="Last posts/X small">
      <ImageWithFallback3 />
      <TrendCard15 />
      <TrendCard16 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-start flex flex-wrap gap-[32px_31px] items-start relative shrink-0 w-full" data-name="Container">
      <LastPosts />
      <LastPosts1 />
      <LastPosts2 />
      <LastPostsXSmall />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[1000px] items-start left-[199px] px-[24px] top-[1226px] w-[1280px]" data-name="Section">
      <Heading5 />
      <Container8 />
    </div>
  );
}

function ManifestVectorized() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.5px]" data-name="Manifest [Vectorized]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.5 32">
        <g id="Manifest [Vectorized]">
          <path clipRule="evenodd" d={svgPaths.p3c5e8100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p146e4f80} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p34ce5000} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p488a3f0} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 py-[2px] top-0" data-name="Heading 2">
      <ManifestVectorized />
      <div className="flex h-[27px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[27px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="27" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[1.28] not-italic relative shrink-0 text-[24px] text-black tracking-[-1.5px]">Design Trends</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[87.75px] left-0 top-[60px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#6a7282] text-[18px] top-[-1.71px] w-[377px] whitespace-pre-wrap">Artigos selecionados da interseção entre cultura, tecnologia e estética dentro do reddit.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[175px] left-0 top-0 w-[592px]" data-name="Container">
      <Heading10 />
      <Paragraph1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-black top-[-1.86px]">Categorias</p>
    </div>
  );
}

function SymbolUiUx() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Symbol ui/ux">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Symbol ui/ux">
          <path d={svgPaths.p17592050} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p10636f80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p245ba100} fill="var(--fill-0, #D9D9D9)" id="Vector_3" />
          <path d={svgPaths.p21905b00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p39e50900} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pcb56200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2fc9c580} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p219e5dc0} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p37ba6e80} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p308fb500} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.pcff7900} fill="var(--fill-0, black)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <SymbolUiUx />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">UI/UX</p>
    </div>
  );
}

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

function Link2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <SolarFigmaBoldDuotone />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">Figma</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[11.12%_11.1%_12.48%_12.18%]" data-name="Group">
      <div className="absolute inset-[-4.09%_-4.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5956 16.53">
          <g id="Group">
            <path d={svgPaths.p30499380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p3a102700} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.pfd11a00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconoirDesignNibSolid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="iconoir:design-nib-solid">
      <Group1 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <IconoirDesignNibSolid />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">Design gráfico</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[175px] items-start left-[640px] top-0 w-[272px]" data-name="Container">
      <Heading11 />
      <List />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-black top-[-1.86px]">Redes sociais</p>
    </div>
  );
}

function MdiInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:instagram">
          <path d={svgPaths.p2c5f2300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="List Item">
      <MdiInstagram />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px]">Instagram</p>
    </div>
  );
}

function MdiLinkedin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:linkedin">
          <path d={svgPaths.p347f9100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="List Item">
      <MdiLinkedin />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px]">LinkedIn</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[960px] top-0 w-[272px]" data-name="Container">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[175px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[282.161px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-1.43px]">© 2026 Ditr studio. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-1.43px]">Privacidade</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-1.43px]">Termos</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-start relative">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[52.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.571px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.571px] relative size-full">
          <Paragraph2 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative w-full">
        <Container10 />
        <Container14 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col items-start left-0 pt-[80.571px] px-[199.143px] top-[2266px] w-[1678.286px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.571px] inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Home() {
  return (
    <div className="bg-white h-[2606px] relative shrink-0 w-full" data-name="Home">
      <Section />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1099.429px] items-start left-0 top-0 w-[1678.286px]" data-name="App">
      <Home />
    </div>
  );
}

function ManifestVectorized1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[84.5px]" data-name="Manifest [Vectorized]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.5 32">
        <g id="Manifest [Vectorized]">
          <path clipRule="evenodd" d={svgPaths.p3c5e8100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p32a78c00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p34ce5000} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p488a3f0} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function MajesticonsHome() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="majesticons:home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="majesticons:home">
          <path d={svgPaths.p1f56ef80} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <MajesticonsHome />
        <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">Início</p>
      </div>
    </div>
  );
}

function SymbolUiUx1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Symbol ui/ux">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Symbol ui/ux">
          <path d={svgPaths.p17592050} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p10636f80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p245ba100} fill="var(--fill-0, #D9D9D9)" id="Vector_3" />
          <path d={svgPaths.p21905b00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p39e50900} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pcb56200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2fc9c580} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p219e5dc0} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p37ba6e80} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p308fb500} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.pcff7900} fill="var(--fill-0, black)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <SymbolUiUx1 />
        <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">UI/UX</p>
      </div>
    </div>
  );
}

function SolarFigmaBoldDuotone1() {
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

function Link6() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <SolarFigmaBoldDuotone1 />
        <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">Figma</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[11.12%_11.1%_12.48%_12.18%]" data-name="Group">
      <div className="absolute inset-[-4.09%_-4.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5956 16.53">
          <g id="Group">
            <path d={svgPaths.p30499380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p3a102700} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.pfd11a00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconoirDesignNibSolid1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="iconoir:design-nib-solid">
      <Group2 />
    </div>
  );
}

function Link7() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <IconoirDesignNibSolid1 />
        <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px]">Design gráfico</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[353.17px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[69.42%_12.5%_12.5%_69.42%]" data-name="Vector">
        <div className="absolute inset-[-23.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.28333 5.28333">
            <path d="M4.45 4.45L0.833333 0.833333" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p32110270} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
        <Icon8 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[37.143px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Button />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.009px] relative size-full">
          <ManifestVectorized1 />
          <Navigation />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[80.571px] items-start left-0 pb-[0.571px] px-[199.143px] top-0 w-[1678.286px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <Container16 />
    </div>
  );
}

export default function EditorialDesignBlog() {
  return (
    <div className="bg-white relative size-full" data-name="Editorial Design Blog">
      <App />
      <Header />
    </div>
  );
}