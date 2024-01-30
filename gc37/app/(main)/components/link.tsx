// LinkComponent.tsx
import React from "react";

interface LinkComponentProps {
  title: string;
  imageSrc: string;
  href: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  title,
  imageSrc,
  href,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row text-sm border bg-white/50 border-black p-4 mx-4 rounded-md hover:scale-105 hover:bg-white text-black shadow-md hover:shadow-lg transition-all duration-150"
    >
      <img className="w-5 max-w-none rounded-xl mr-1" src={imageSrc} alt="" />
      <h1 className=" text-md font-bold tracking-tight">{title}</h1>
    </a>
  );
};

export default LinkComponent;
