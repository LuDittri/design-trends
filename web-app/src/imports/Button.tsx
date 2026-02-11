import svgPaths from "./svg-afacozdf1l";

function IcBaselineReddit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-reddit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-reddit">
          <path d={svgPaths.p31acfe80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1d9dd780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center px-[16px] relative rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Button">
      <IcBaselineReddit />
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Acessar artigo do reddit</p>
    </div>
  );
}