import SectionTitle from "../sectionTitle/SectionTitle";
import ChoiceBox from "./choiceBox";

export default function  MobileSection(): JSX.Element  {
    return (
      <div className="w-[90%]  flex items-center justify-center">
        <div className="relative border-custom h-[220px] w-[70%]">
          <div className="absolute -top-10 -left-12 w-full h-40 bg-bodyBackground z-10">
            <img
              src="/about/imageAboutMobail.png"
              alt="Image 1"
              className="absolute -top-29 scale-125 left-5 z-40 transform translate-x-3 -translate-y-2 rounded-md"
            />
          </div>
          <img
            src="/about/imageAboutMobail2.png"
            alt="Image 2"
            className="absolute -bottom-0 -right-9 scale-110 z-30 transform -translate-x-4 translate-y-4 rounded-md"
          />
        </div>
        <div className="flex flex-col items-center ml-10 ml:hidden w-[35%">
          <SectionTitle title="Why choose " className="text-[20px] " />
          <div className="flex flex-col space-y-5 mt-7">
            <ChoiceBox text="Quality" className="text-xl w-16 h-20 px-10" />
            <ChoiceBox text="Trust" className="text-xl w-16 h-20 px-10" />
            <ChoiceBox text="Fast" className="text-xl w-16 h-20 px-10" />
          </div>
        </div>
      </div>
    );
  };
  