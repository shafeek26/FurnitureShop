import { Img, Text } from "./..";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Header1({ ...props }) {
  return (
    <div className="absolute top-0 right-0 bottom-0 h-screen z-10 w-full overflow-y-auto">
      <div className="flex flex-col justify-around h-full bg-white-A700 sm:w-full w-1/2 opacity-100">
        <div className="flex flex-col justify-start items-center gap-2.5">
          <RxCross2
            className=" absolute top-[3%] right-[10%] text-3xl hidden md:block  sm:text-gray-900 text-gray-100"
            onClick={() => props.setToggle((prev) => !prev)}
          />

          <Link to="/">
          <Img
            src="images/img_frame_146.svg"
            alt="image"
            className="h-[30px] mb-10"
            onClick={() => props.setToggle((prev) => !prev)}
          />
          </Link>
          <hr className="border-1 border-black-900"/>
          <Text
            size="lg"
            as={Link}
            to="/"
            className="!text-black-900 tracking-[-0.50px]"
            onClick={() => props.setToggle((prev) => !prev)}
          >
            Home
          </Text>
        </div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Text
            size="lg"
            as={Link}
            to="/shop"
            className="!text-black-900 tracking-[-0.50px]"
            onClick={() => props.setToggle((prev) => !prev)}
          >
            Shop
          </Text>
        </div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Text
            size="lg"
            as={Link}
            to="/blog"
            className="!text-black-900 tracking-[-0.50px]"
            onClick={() => props.setToggle((prev) => !prev)}
          >
            Blog
          </Text>
        </div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Text
            size="lg"
            as={Link}
            to="/aboutus"
            className="!text-black-900 tracking-[-0.50px]"
            onClick={() => props.setToggle((prev) => !prev)}
          >
            About
          </Text>
        </div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Text
            size="lg"
            as={Link}
            to="/contactus"
            className="!text-black-900 tracking-[-0.50px]"
            onClick={() => props.setToggle((prev) => !prev)}
          >
            Contact
          </Text>
        </div>
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Text
            size="lg"
            as={Link}
            to="/team"
            className="!text-black-900 tracking-[-0.50px]"
            onClick={() => props.setToggle((prev) => !prev)}
          >
            Team
          </Text>
        </div>
        <hr className="border-1 border-black-900"/>
        <div className="flex flex-row justify-around w-auto gap-[30px]">
            <Text
              size="lg"
              as={Link}
              to="/login"
              className="!text-black-900 tracking-[-0.50px]"
              onClick={() => props.setToggle((prev) => !prev)}
            >
              <Img
                src="images/img_list_black_900.svg"
                alt="list_one"
                className="h-[32px] w-[32px]"
              />
            </Text>
            <Text
              size="lg"
              as={Link}
              to="/cart"
              className="!text-black-900 tracking-[-0.50px]"
              onClick={() => props.setToggle((prev) => !prev)}
            >
              <Img
                src="images/img_list.svg"
                alt="list_three"
                className="h-[32px] w-[32px]"
              />
            </Text>
          </div>
      </div>     
    </div>
  );
}
