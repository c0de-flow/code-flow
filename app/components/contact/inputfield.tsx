import React from 'react';

interface InputFieldProps {
  type?: string;
  name?: string;
  id?: string;
  backgroundColor?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  value?: string;
  padding?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  name,
  id,
  backgroundColor = 'transparent',
  placeholder = '',
  width = '100%',
  height = '52px',
  value,
  padding = '13px',
  onChange,
  className,
}) => {
  const commonStyles = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: '#ffffff',
    border: '1px solid #5999BB',
    borderRadius: '0px',
    padding: padding,
    fontSize: '18px',
    outline: 'none',
  };

  return type === 'textarea' ? (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-[0_0_40px_6px_rgba(0,178,255,0.7)] hover:border-blue-300 hover:shadow-[0_0_40px_6px_rgba(0,178,255,0.7)]`}
      style={commonStyles}
    />
  ) : (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-[0_0_40px_6px_rgba(0,178,255,0.7)] hover:border-blue-300 hover:shadow-[0_0_40px_6px_rgba(0,178,255,0.7)]`}
      style={commonStyles}
    />
  );
};
