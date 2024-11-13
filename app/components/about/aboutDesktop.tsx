export default function  DesktopSection(): JSX.Element  {
  return (
    <div className=" w-[100%] ml-10 ml:pl-0 pt-10 flex items-center justify-center relative">
      <div className="relative border-custom h-[390px] ml:h-[490px] w-[580px]">
        <div className="absolute md:-top-5 ml:-top-[12px] ml:-left-28 w-full md:h-56 ml:h-72 bg-bodyBackground z-10">
          <img
            src="/about/image 10.png"
            alt="Image 1"
            className="absolute md:-top-48 ml:-top-52 md:scale-125 ml:left-14 z-40 transform translate-x-4  rounded-md"
          />
        </div>
        <img
          src="/about/image 11.png"
          alt="Image 2"
          className="absolute md:-bottom-32 ml:-bottom-20 left-40 ml:scale-125 z-30 transform -translate-x-0 translate-y-4 rounded-md"
        />
      </div>

    </div>
  );
};