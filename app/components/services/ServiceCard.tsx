import Image from "next/image";

interface ServiceCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  width: string;
  height: string;
  padding: string;
}

const ServiceCard = ({
  imgSrc,
  altText,
  title,
  description,
  width ,
  height ,
  padding,
}: ServiceCardProps) => {
  return (
    <div
      className={`w-${width} h-${height} ${padding} rounded-[52px] text-white flex flex-col items-center gradient-border`}
    >
      {/* Image */}
      <Image
        src={imgSrc}
        alt={altText}
        width={240}
        height={240}
        className="w-[240px]"
      />

      {/* Title with glow effect */}
      <div className="relative mt-5">
        <div className="absolute inset-3 bg-[#2167FC] opacity-[900%] blur-3xl"></div>
        <h3 className="text-center font-abhaya font-extrabold text-[30px]">{title}</h3>
      </div>

      {/* Description */}
      <p className="font-abhaya font-normal text-[16px] py-8 px-1 md:p-6 text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
