import { Text, Button, Img, Heading } from "../../components";

export default function SingleBlog({ ...props }) {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-6">
      <Img
        src={props.blog.image}
        alt="image"
        className="w-full md:h-auto sm:w-full object-cover"
      />
      <div className="flex flex-col items-start justify-start w-full gap-[18px]">
        <Heading size="xl" as="h2" className="tracking-[-0.50px]">
          {props.blog.title}
        </Heading>
        <div className="flex flex-row justify-start w-full">
          <div className="flex flex-row justify-between items-center w-[62%]">
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Img
                src="images/img_bx_edit_alt_1.svg"
                alt="by_admin_one"
                className="h-[18px] w-[18px] mb-px"
              />
              <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                By Admin
              </Text>
            </div>
            <div className="h-[15px] w-px bg-gray-500" />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Img
                src="images/img_bx_calendar_1.svg"
                alt="december_102022"
                className="h-[18px] w-[18px]"
              />
              <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                December 10, 2022
              </Text>
            </div>
          </div>
        </div>
        <Text
          as="p"
          className="!text-gray-500 tracking-[-0.50px] leading-[35px]"
        >
          {props.blog.description}
        </Text>
        <Button
          color="black_900"
          size="4xl"
          variant="outline"
          shape="square"
          className="sm:px-5 tracking-[-0.50px] font-semibold min-w-[139px] sm:min-w-full"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
