import img1 from "figma:asset/901f60176131613f9cb5ae2b9ee49bca7698cd3a.png";

export default function Frame() {
  return (
    <div className="bg-[#f9f9f9] relative size-full">
      <div className="absolute h-[100px] left-0 top-0 w-[200px]" data-name="彩色拉炮 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-darken object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}