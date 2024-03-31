import { Text, Img, Heading } from "../../components";

export default function ProductServices({ ...props }) {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-10">
      <Img src={props.service.icon} alt="fast_shipping" className="h-[60px]" />
      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
        <Heading as="h3" className="tracking-[-0.50px]">
          {props.service.title}
        </Heading>
        <Text
          as="p"
          className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
        >
          {props.service.description}
        </Text>
      </div>
    </div>
  );
}
