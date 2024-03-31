import { Text, Img, Heading } from "../index";
import { Link } from "react-router-dom";


export default function Product({ ...props }) {
  return (
    <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[400px] w-full relative">
        <Link to={`/shopdetaildescription/${props.item.id}`}>
          <Img
            src={props.item.image}
            alt="image_one"
            className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
              </Link>
          {/* <Button
            size="lg"
            shape="square"
            className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
          >
            Living Room
          </Button> */}
          <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
            <Text
              as="p"
              className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
            >
              New
            </Text>
            {/* <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-5">
              <Button
                color="black_900"
                shape="circle"
                className="w-[40px] shadow-xs"
              >
                <Img src="images/img_bx_heart_1.svg" />
              </Button>
              <Button
                color="yellow_100"
                shape="circle"
                className="w-[40px] shadow-xs"
              >
                <Img src="images/img_bx_cart_2.svg" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Heading as="h3" className="tracking-[-0.50px]">
          {props.item.tittle}
        </Heading>
        <Text
          size="lg"
          as="p"
          className="!text-blue_gray-900_01 tracking-[-0.50px]"
        >
          $24
        </Text>
      </div>
    </div>
  );
}
