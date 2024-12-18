import Image from "next/image";

interface ProjectsCardProps {
  card: {
    imgSrc: string;
    speciality: string;
    title: string;
    description: string;
  };
}

const ProjectsCardMobile = ({ card }: ProjectsCardProps) => {
  return (
    <div className="w-full max-w-[400px] h-full relative flex flex-col justify-end items-center text-white md:px-8 rounded-[17px] shadow-businnessShadow cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300">
      {/* Image with styles */}
      <div className="relative w-full h-full">
        <Image
          src={card.imgSrc}
          alt={card.title}
          width={400}
          height={400}
          className="rounded-[17px] w-full transition-all duration-300 ease-in-out hover:opacity-80"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bodyBackground rounded-[17px]"></div>

      <div className="absolute inset-0 rounded-[9px] bg-gradient-to-b from-transparent to-businessOverlay shadow-ml"></div>

      {/* Card Content */}
      <div className="gap-2 flex flex-col justify-end items-center text-center z-10 absolute bottom-5">
        <h4 className="font-abril text-ml">{card.speciality}</h4>
        <p className="font-abhaya text-xs">{card.title}</p>
        <p className="font-abhaya text-xs">{card.description}</p>
      </div>
    </div>
  );
};

export default ProjectsCardMobile;
