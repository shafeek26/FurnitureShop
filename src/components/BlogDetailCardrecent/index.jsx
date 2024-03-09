import React from "react";
import { Text, Heading, Img } from "./..";

export default function BlogDetailCardrecent({
  image = "images/img_rectangle_1480_120x120.png",
  howtochoosea = "How to choose a chair at home",
  decembertwentys = "December 27, 2021",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="w-[70px] md:h-auto object-cover" />
      <div className="flex flex-col items-start justify-start w-[75%] pt-0.5 gap-2.5">
        <Heading size="s" as="h1">
          {howtochoosea}
        </Heading>
        <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
          {decembertwentys}
        </Text>
      </div>
    </div>
  );
}
