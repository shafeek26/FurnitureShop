import { Img, Text } from "./..";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Header1 from "components/Header1";
import { RxCross2 } from "react-icons/rx";

export default function Header({ ...props }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check screen size here
      if (window.innerWidth >= 768) {
        // Close the sidebar if it's open
        setToggle(false);
      }
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
    {toggle ? <div className="fixed inset-0 z-50 bg-black-900_7f_01 flex justify-center items-center"><Header1 setToggle = {setToggle}/></div> : 
      <header
        {...props}
        className="relative flex justify-center items-center w-full p-[35px] sm:p-5 bg-white-A700"
      >
        <div className="flex flex-row justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1290px]">
        <Link to="/">
          <Img
            src="images/img_frame_146.svg"
            alt="image"
            className="h-[30px]"
          />
          </Link>
          <div className="md:hidden flex flex-row justify-between items-center w-[39%] md:w-full">
            <div className="flex flex-col justify-start items-center gap-2.5">
              <Text
                size="lg"
                as={Link}
                to="/"
                className="!text-black-900 tracking-[-0.50px]"
              >
                Home
              </Text>
            </div>
            <Text
              size="lg"
              as={Link}
              to="/shop"
              className="!text-black-900 tracking-[-0.50px]"
            >
              Shop
            </Text>
            <Text
              size="lg"
              as={Link}
              to="/blog"
              className="!text-black-900 tracking-[-0.50px]"
            >
              Blog
            </Text>
            <Text
              size="lg"
              as={Link}
              to="/aboutus"
              className="!text-black-900 tracking-[-0.50px]"
            >
              About
            </Text>
            <Text
              size="lg"
              as={Link}
              to="/contactus"
              className="!text-black-900 tracking-[-0.50px]"
            >
              Contact
            </Text>
            <Text
              size="lg"
              as={Link}
              to="/team"
              className="!text-black-900 tracking-[-0.50px]"
            >
              Team
            </Text>
          </div>
          {/* hamberger icon for toggle */}
          {toggle ? (
            <RxCross2
              className="text-3xl hidden md:block text-gray-600"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <FaBars
              className="text-3xl hidden md:block text-gray-600"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}

          {/* sidebar */}
          <div className="md:hidden flex flex-row justify-between w-auto gap-[30px]">
            <Img
              src="images/img_search.svg"
              alt="search_one"
              className="h-[24px] w-[24px]"
            />
            <Text
              size="lg"
              as={Link}
              to="/login"
              className="!text-black-900 tracking-[-0.50px]"
            >
              <Img
                src="images/img_list_black_900.svg"
                alt="list_one"
                className="h-[24px] w-[24px]"
              />
            </Text>
            <Text
              size="lg"
              as={Link}
              to="/cart"
              className="!text-black-900 tracking-[-0.50px]"
            >
              <Img
                src="images/img_list.svg"
                alt="list_three"
                className="h-[24px] w-[24px]"
              />
            </Text>
          </div>
        </div>
      </header>
}
    </>
  );
}


