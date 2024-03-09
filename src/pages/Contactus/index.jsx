import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, TextArea } from "../../components";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function ContactusPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[75px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full md:px-5 max-w-[1291px]">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[450px] w-full relative">
                  <Img
                    src="images/img_rectangle_28.png"
                    alt="image_one"
                    className="justify-center h-[450px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[37%] h-full gap-[30px] left-[5%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <Heading size="md" as="h1" className="!text-yellow-100 tracking-[-0.50px]">
                        Best Room Decor Items
                      </Heading>
                      <Heading size="3xl" as="h2" className="!text-white-A700 tracking-[-0.50px] leading-[60px]">
                        Our goods have the best quality and materials in the world
                      </Heading>
                    </div>
                    <Button
                      color="yellow_100"
                      size="9xl"
                      shape="square"
                      className="sm:px-5 tracking-[-0.50px] font-poppins font-bold min-w-[170px] sm:min-w-full"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 md:px-5 max-w-[1291px]">
            <div className="flex flex-row justify-center w-[48%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[41px]">
                <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                  Frequently asked questions
                </Heading>
                <Accordion preExpanded={[0]} className="flex flex-col w-full gap-[23px] md:gap-[11.5px]">
                  {[...Array(4)].map((_, i) => (
                    <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-row justify-between items-start w-full">
                                  <Text size="2xl" as="p" className="mt-px !text-black-900 !font-raleway">
                                    How to buy a product?
                                  </Text>
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <div className="w-full h-px bg-black-900_19 rotate-[0deg]" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[48%] md:w-full gap-[23px]">
              <a href="#">
                <Heading size="xl" as="h3" className="tracking-[-0.50px]">
                  Contact Us
                </Heading>
              </a>
              <div className="flex flex-col items-start justify-start w-full gap-8">
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] sm:w-full gap-4">
                      <Heading size="md" as="h4" className="tracking-[-0.50px]">
                        Your Name
                      </Heading>
                      <Input
                        color="blue_gray_100"
                        size="xl"
                        variant="outline"
                        shape="square"
                        type="text"
                        name="name"
                        placeholder="Write your name here...."
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] sm:w-full gap-4">
                      <Heading size="md" as="h5" className="tracking-[-0.50px]">
                        Your Email
                      </Heading>
                      <Input
                        color="blue_gray_100"
                        size="xl"
                        variant="outline"
                        shape="square"
                        type="email"
                        name="email"
                        placeholder="Write your email here...."
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      Your Comment
                    </Heading>
                    <TextArea
                      shape="square"
                      name="frame48096017"
                      placeholder="Write your review here...."
                      className="w-full sm:pr-5 sm:py-5 text-gray-500 tracking-[-0.50px]"
                    />
                  </div>
                </div>
                <Button
                  size="6xl"
                  shape="square"
                  className="sm:px-5 tracking-[-0.50px] font-poppins font-medium border-blue_gray-900_01 border-2 border-solid min-w-[140px] sm:min-w-full"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-start w-full pl-[46px] gap-11 py-[46px] md:gap-5 md:p-5 bg-gradient max-w-[1291px]">
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
