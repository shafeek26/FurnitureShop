import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input } from "../../components";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[125px] bg-gray-50">       
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[54px] md:px-5 max-w-[1291px]">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <div className="flex flex-col items-center justify-start w-full pt-1 gap-2">
                  <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
                    Read Our Latest Blog
                  </Heading>
                  <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center leading-[35px]">
                    <>
                      We write various things related to furniture, from tips and what things <br />I need to pay
                      attention to when choosing furniture
                    </>
                  </Text>
                </div>
                <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h2" className="tracking-[-0.50px]">
                        Why should you choose good wood
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
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_400x416.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h3" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_1.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_400x417.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_2.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h6" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_3.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_4.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_5.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_18_6.png"
                      alt="image"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                        Why should you choose good wood
                      </Heading>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-between items-center w-[62%]">
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img
                              src="images/img_bx_edit_alt_1.svg"
                              alt="bxeditaltone"
                              className="h-[18px] w-[18px] mb-px"
                            />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              By Admin
                            </Text>
                          </div>
                          <div className="h-[15px] w-px bg-gray-500" />
                          <div className="flex flex-row justify-start items-center gap-[5px]">
                            <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[18px] w-[18px]" />
                            <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                              December 10, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry&#39;s standard dummy text ever.
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
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full pl-[535px] pr-14 gap-2.5 md:px-5">
                <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                <div className="flex flex-row w-[18%] gap-2.5">
                  <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                    <Button
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px] sm:min-w-full"
                    >
                      1
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px] sm:min-w-full"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                    <Button
                      color="gray_100"
                      size="lg"
                      className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[17px] sm:min-w-full"
                    >
                      3
                    </Button>
                  </div>
                </div>
                <Button color="gray_100" size="md" className="w-[35px] rounded-[17px]">
                  <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                </Button>
                <Img src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" className="h-[15px] w-[15px]" />
              </div>
            </div>
          </div>
        </div>   
      </div>
    </>
  );
}
