import React from "react";

interface InformationTextProps {
  number: string;
  label: string;
}

function InformationText({ number, label }: InformationTextProps) {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <p className="md:text-[58px] text-4xl">{number}</p>
      <span className="header-span text-[12px] md:text-[22px]">
        {label.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </span>
    </div>
  );
}

export default InformationText;
