import React from 'react';
interface ContactIconsProps {
  icon: React.ElementType; 
  text: string; 
  className?: string;
}

const ContactIcons: React.FC<ContactIconsProps> = (
    {
         icon: Icon,
         text,
         className,
        
     }
    ) => {
  return (
    <li className="flex items-center space-x-3">
      
      <Icon className="text-[#5999BB] w-[40px] h-[40px]" />

      
      <span className={`text-white ${className}`}>{text}</span>
    </li>
  );
};

export default ContactIcons;
