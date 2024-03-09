import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input } from "../../components";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full pt-[75px] px-14 md:pt-5 md:px-5">
            <div className="flex flex-col items-center justify-start w-full gap-[49px] max-w-[1290px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
                Your Cart
              </Heading>
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                <div className="flex flex-col w-[64%] md:w-full gap-[30px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-row md:flex-col justify-between items-center w-[88%] md:w-full md:gap-10">
                      <div className="flex flex-row sm:flex-col justify-start items-center w-[62%] md:w-full gap-5 sm:gap-5">
                        <Img
                          src="images/img_rectangle_1480.png"
                          alt="image"
                          className="w-[120px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[15px]">
                          <Heading as="h2" className="tracking-[-0.50px] !font-bold !leading-[35px]">
                            Complete set of sofa, pillows and bed sheets
                          </Heading>
                          <Heading
                            as="h3"
                            className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold"
                          >
                            $ 75.00
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[17%] p-1 border-black-900 border border-solid">
                        <div className="flex flex-row justify-between items-center w-[80%] py-[5px] mx-2.5">
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/defaultNoData.png" />
                          </Button>
                          <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                            1
                          </Text>
                          <Button size="xs" shape="square" className="w-[24px]">
                            <Img src="images/img_bx_plus_circle_1.svg" />
                          </Button>
                        </div>
                      </div>
                      <Heading size="md" as="h4" className="tracking-[-0.50px]">
                        $ 75.00
                      </Heading>
                    </div>
                    <Button color="gray_50_01" size="7xl" shape="square" className="w-[50px]">
                      <Img src="images/img_frame_48096032.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[54%] md:w-full gap-5 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1480.png"
                        alt="image"
                        className="w-[120px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[15px]">
                        <Heading as="h5" className="tracking-[-0.50px] !font-bold">
                          Teak wood chair
                        </Heading>
                        <Heading as="h6" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-poppins !font-bold">
                          $ 24.00
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[15%] p-1 border-black-900 border border-solid">
                      <div className="flex flex-row justify-between items-center w-[80%] py-[5px] mx-2.5">
                        <Img src="images/img_bx_minus_circle.svg" alt="image_one" className="h-[24px] w-[24px]" />
                        <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                          1
                        </Text>
                        <Img
                          src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                          alt="image_two"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                    </div>
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      $ 75.00
                    </Heading>
                    <Button color="gray_50_01" size="7xl" shape="square" className="w-[50px]">
                      <Img src="images/img_frame_48096032.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end w-[33%] gap-7 p-[27px] sm:p-5 bg-gray-50_01">
                  <Heading as="h5" className="mt-[9px] tracking-[-0.50px] !font-bold">
                    Cart Total
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <div className="flex flex-row justify-between items-center w-full py-0.5">
                      <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                        Subtotal
                      </Text>
                      <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                        $ 99.00
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                      <Input
                        size="sm"
                        shape="square"
                        name="your_voucher"
                        placeholder="Your Voucher"
                        className="w-[73%] md:w-full !text-black-900_3f"
                      />
                      <Button
                        size="5xl"
                        shape="square"
                        className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold min-w-[98px]"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="h-px w-full bg-black-900" />
                  <div className="flex flex-row justify-between items-center w-full py-0.5">
                    <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                      Total
                    </Text>
                    <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                      $ 99.00
                    </Heading>
                  </div>
                  <Button
                    size="8xl"
                    shape="square"
                    className="w-full mb-1 sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold"
                  >
                    Checkout Now
                  </Button>
                </div>
              </div>
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
