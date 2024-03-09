import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input } from "../../components";

export default function WishlistPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[49px] md:px-5 max-w-[1290px]">
            <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
              Wishlist
            </Heading>
            <div className="justify-center w-full gap-[131px] grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <Button color="gray_50_01" size="7xl" shape="square" className="w-full">
                <Img src="images/img_bx_trash_1.svg" />
              </Button>
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[70%] sm:w-full gap-5 sm:gap-5">
                  <Img src="images/img_rectangle_1480.png" alt="image" className="w-[120px] md:h-auto object-cover" />
                  <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-3.5">
                    <Heading as="h2" className="tracking-[-0.50px] !font-bold !leading-[35px]">
                      Complete set of sofa, pillows and bed sheets
                    </Heading>
                    <Heading as="h3" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold">
                      $ 75.00
                    </Heading>
                  </div>
                </div>
                <Heading size="md" as="h4" className="tracking-[-0.50px]">
                  $ 75.00
                </Heading>
              </div>
              <Heading size="md" as="h5" className="w-full !text-blue_gray-900_01 tracking-[-0.50px]">
                In Stock
              </Heading>
              <Button
                color="black_900"
                size="8xl"
                shape="square"
                className="w-full sm:px-5 tracking-[-0.50px] font-semibold min-w-[146px]"
              >
                Add to Cart
              </Button>
              <Button color="gray_50_01" size="7xl" shape="square" className="w-full">
                <Img src="images/img_bx_trash_1.svg" />
              </Button>
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[70%] sm:w-full gap-5 sm:gap-5">
                  <Img
                    src="images/img_rectangle_1480_120x120.png"
                    alt="image"
                    className="w-[120px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[11px]">
                    <Heading as="h6" className="tracking-[-0.50px] !font-bold">
                      Teak wood chair
                    </Heading>
                    <Heading as="h5" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold">
                      $ 24.00
                    </Heading>
                  </div>
                </div>
                <Heading size="md" as="h6" className="tracking-[-0.50px]">
                  $ 24.00
                </Heading>
              </div>
              <Heading size="md" as="h6" className="w-full !text-deep_orange-A400 tracking-[-0.50px]">
                Out Stock
              </Heading>
              <Button
                color="blue_gray_100"
                size="8xl"
                shape="square"
                className="w-full sm:px-5 tracking-[-0.50px] font-semibold min-w-[146px]"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-start w-full pl-[46px] gap-11 py-[46px] md:gap-5 md:p-5 bg-gradient max-w-[1290px]">
          <div className="flex flex-col items-center justify-start w-[48%] md:w-full ml-[13px] gap-10">
            <div className="flex flex-col items-center justify-start w-full gap-2.5">
              <Heading size="4xl" as="h2" className="!text-gray-50_01 tracking-[-0.50px]">
                Subscribe now and get 10% off all items
              </Heading>
              <Text size="md" as="p" className="!text-gray-50_01 tracking-[-0.50px] leading-[35px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text.
              </Text>
            </div>
            <div className="flex flex-row sm:flex-col justify-start w-full gap-px sm:gap-5">
              <Input shape="square" name="email" placeholder="Your email here.." className="w-[74%] md:w-full" />
              <Button
                size="10xl"
                shape="square"
                className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-bold min-w-[157px]"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <Img
            src="images/img_pexels_photo_by.png"
            alt="pexelsphotoby"
            className="w-[48%] md:w-full md:h-[309px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
