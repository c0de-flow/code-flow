import Image from "next/image";

interface ProjectsCardProps {
  card: {
    imgSrc: string;
    speciality: string;
    title: string;
    description: string;
  };
  index: number;
}

const ProjectsCardDesktop = ({ card, index }: ProjectsCardProps) => {
  return (
    // Check for index to change display from flex-row or flex-row-reverse
    <div
      className={`group flex justify-between items-center transition-transform duration-300 w-full ${
        index % 2 === 0 ? "" : "flex-row-reverse"
      } hover:cursor-pointer`}
    >
      {/* Image with zoom-in on hover */}
      <Image
        src={card.imgSrc}
        alt={card.title}
        width={440}
        height={260}
        className="max-w-full z-10 transform transition-transform duration-300 group-hover:scale-105"
      />

      {/* Content area with subtle floating effect and shadow on hover */}
      <div
        className={`${
          index % 2 === 0 ? "-ml-1 ml:-ml-5" : "-mr-1 ml:-mr-5"
        } gap-4 py-4 px-2 text-wrap ml:px-8 ml:text-nowrap bg-darkBlue flex flex-col justify-center items-center text-center w-full border rounded-[34px] border-borderColor transition-transform duration-300 group-hover:shadow-header-box group-hover:-translate-y-1`}
      >
        <h4 className="font-abril text-lightBlue text-xl ml:text-2xl group-hover:scale-105 transition-transform duration-300">
          {card.speciality}
        </h4>
        <p className="font-abhaya text-ml ml:text-xl">{card.title}</p>
        <p className="font-abhaya text-ml ml:text-xl">{card.description}</p>
      </div>
    </div>
  );
};

export default ProjectsCardDesktop;
