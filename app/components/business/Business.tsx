// components/business/Business.jsx
import SectionTitle from "../sectionTitle/SectionTitle";
import EllipseBackground from "../ellipse/EllipseBackground";
import businessCard from "@/app/constants/BusinessCards";
import BusinessCardMobile from "./BusinessCardMobile";

const Business = () => {
  return (
    <section
      id="our-business"
      className="flex flex-col justify-center items-center py-40 relative"
    >
      <div className="relative mb-20 md:mb-60">
        <SectionTitle title="Our Business" />
        <EllipseBackground
          width="395px"
          height="395px"
          backgroundColor="rgba(33, 103, 252, 0.1)"
          opacity={1}
          blur="130px"
          top="-300px"
          left="-150px"
        />
      </div>

      {/* Map through businessCard array for mobile and small screens */}
      <div className="flex flex-col gap-8 items-center w-full custom-container md:hidden">
        {businessCard.map((card, index) => (
          <BusinessCardMobile key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Business;
