import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input } from "../../components";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[98px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-[1290px]">
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
                  Meet Our Team
                </Heading>
                <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center leading-[35px]">
                  <>
                    We write various things related to furniture, from tips and what things <br />I need to pay
                    attention to when choosing furniture
                  </>
                </Text>
              </div>
              <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
                <div className="flex flex-col items-center justify-start w-full gap-7">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[450px] w-full relative">
                      <Img
                        src="images/img_rectangle_1487.png"
                        alt="image"
                        className="justify-center h-[450px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-row justify-between w-[49%] bottom-[5%] right-0 left-0 m-auto absolute">
                        <Button color="yellow_100" size="7xl" shape="circle" className="w-[50px]">
                          <Img src="images/img_bxl_linkedin_1.svg" />
                        </Button>
                        <Button color="gray_50_01" size="7xl" shape="circle" className="w-[50px]">
                          <Img src="images/img_bxl_facebook.svg" />
                        </Button>
                        <Button color="gray_50_01" size="7xl" shape="circle" className="w-[50px]">
                          <Img src="images/img_bxl_twitter.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2.5">
                    <Heading size="2xl" as="h2" className="tracking-[-0.50px] text-center">
                      Make Jhane
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                      Finance Manager
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_1487_450x416.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-1.5">
                    <Heading size="2xl" as="h3" className="tracking-[-0.50px] text-center">
                      Jinny Owen
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                      Marketing Manager
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_1487_1.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-1">
                    <Heading size="2xl" as="h4" className="tracking-[-0.50px] text-center">
                      Mia Lobey
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                      Accountant
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-7">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_1487_2.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-2.5">
                    <Heading size="2xl" as="h5" className="tracking-[-0.50px] text-center">
                      Make Jhane
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                      Finance Manager
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_1487_3.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-1.5">
                    <Heading size="2xl" as="h6" className="tracking-[-0.50px] text-center">
                      Jinny Owen
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                      Marketing Manager
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_1487_4.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-1">
                    <Heading size="2xl" as="h2" className="tracking-[-0.50px] text-center">
                      Mia Lobey
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                      Accountant
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
