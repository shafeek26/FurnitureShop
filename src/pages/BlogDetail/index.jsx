import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, CheckBox, TextArea } from "../../components";

export default function BlogDetailPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[83px] md:px-5 max-w-[1291px]">
              <div className="flex flex-col items-center justify-start w-full gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full pb-1.5 gap-[39px]">
                  <div className="flex flex-col items-center justify-center w-full gap-[11px]">
                    <Heading size="4xl" as="h1" className="mt-[3px] tracking-[-0.50px] text-center">
                      Why should you choose good wood
                    </Heading>
                    <div className="flex flex-row justify-start items-start w-full pl-[478px] pr-14 gap-[18px] md:px-5">
                      <div className="flex flex-row justify-start items-center w-[15%] gap-2.5">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bxeditaltone"
                          className="h-[24px] w-[24px] mb-px"
                        />
                        <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="h-[15px] w-px mt-1 bg-gray-500" />
                      <div className="flex flex-row justify-start items-center w-[25%] gap-2.5">
                        <Img src="images/img_bx_calendar_1.svg" alt="bxcalendarone" className="h-[24px] w-[24px]" />
                        <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                </div>
                <Img
                  src="images/img_rectangle_1488.png"
                  alt="image_one"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
              </div>
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-[50px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                      <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                        How to choose the best chair
                      </Heading>
                      <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula
                        augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo
                        est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque, felis fringilla
                        aenean hac eleifend tellus pellentesque quis suspendisse. Sociosqu suscipit sodales taciti
                        rutrum condimentum conubia volutpat cubilia mi, velit curabitur consequat proin neque commodo
                        interdum eleifend dui, ac magna leo ridiculus facilisi duis sapien etiam.
                      </Text>
                      <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula
                        augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo
                        est aliquam, facilisi consequat ligula vivamus faucibus ac sociis cubilia neque.
                      </Text>
                    </div>
                    <Img
                      src="images/img_rectangle_1489.png"
                      alt="image_two"
                      className="w-full md:h-[500px] object-cover"
                    />
                    <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                      Massa mus mattis natoque ante sapien venenatis nisl, mauris malesuada parturient fringilla
                      dignissim tortor morbi, imperdiet quam faucibus id nunc cum. Suscipit lectus curae cum in taciti
                      ullamcorper accumsan luctus, euismod ornare fames aenean ultrices odio ultricies et mus, gravida
                      condimentum senectus hendrerit lobortis sociis quam. Blandit placerat cras suscipit egestas arcu
                      nam ligula rhoncus, tortor purus proin nulla faucibus odio molestie semper, venenatis urna mollis
                      libero praesent cum nec.
                    </Text>
                    <div className="flex flex-row sm:flex-col w-full gap-[19px]">
                      <Img
                        src="images/img_rectangle_1490.png"
                        alt="rectangle"
                        className="w-[49%] md:h-auto sm:w-full object-cover"
                      />
                      <Img
                        src="images/img_rectangle_1491.png"
                        alt="rectangle"
                        className="w-[49%] md:h-auto sm:w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                    <div className="flex flex-row justify-start items-center w-full gap-[15px] sm:gap-[15px]">
                      <Heading size="xl" as="h3" className="tracking-[-0.50px] !font-semibold">
                        Tag :
                      </Heading>
                      <div className="flex flex-row justify-start w-[29%] gap-2.5">
                        <Button
                          size="sm"
                          shape="round"
                          className="!text-yellow-100 tracking-[-0.50px] border-blue_gray-900_01 border border-solid min-w-[62px]"
                        >
                          Chair
                        </Button>
                        <Button
                          color="gray_500"
                          size="sm"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] min-w-[65px]"
                        >
                          Lamp
                        </Button>
                        <Button
                          color="gray_500"
                          size="sm"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] min-w-[96px]"
                        >
                          Minimalist
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                        Leave a Comment
                      </Heading>
                      <div className="flex flex-col items-center justify-start w-full gap-8">
                        <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                          <div className="flex flex-row md:flex-col justify-start w-full gap-4 md:gap-5">
                            <div className="flex flex-col items-start justify-start w-[50%] md:w-full gap-4">
                              <Heading size="md" as="h5" className="tracking-[-0.50px]">
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
                            <div className="flex flex-col items-start justify-start w-[50%] md:w-full gap-4">
                              <Heading size="md" as="h6" className="tracking-[-0.50px]">
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
                        <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                          <CheckBox
                            shape="square"
                            name="savemynameemail"
                            label="Save my name, email, and website in this browser for the next time I comment."
                            className="gap-2.5 tracking-[-0.50px] font-poppins text-left italic"
                          />
                          <Button
                            size="6xl"
                            shape="square"
                            className="sm:px-5 tracking-[-0.50px] font-poppins font-medium border-blue_gray-900_01 border-2 border-solid min-w-[155px] sm:min-w-full"
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[26%] md:w-full gap-[49px]">
                  <div className="flex flex-row justify-center w-full">
                    <Input
                      color="gray_50_01"
                      size="md"
                      shape="square"
                      name="find_something"
                      placeholder="Find Something..."
                      className="w-[68%] md:h-auto sm:w-full"
                    />
                    <Button
                      size="6xl"
                      shape="square"
                      className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold min-w-[107px]"
                    >
                      Search
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-5">
                    <Heading as="h5" className="!text-gray-900">
                      Recent Post
                    </Heading>
                    <div className="flex flex-col w-full gap-5">
                      <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                        <Img
                          src="images/img_rectangle_1480_120x120.png"
                          alt="image"
                          className="w-[70px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[75%] pt-0.5 gap-2.5">
                          <Heading size="s" as="h6">
                            How to choose a chair at home
                          </Heading>
                          <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                        <Img
                          src="images/img_image_70x70.png"
                          alt="image_one"
                          className="w-[70px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[75%] pt-0.5 gap-2.5">
                          <Heading size="s" as="h6">
                            How to choose a chair at home
                          </Heading>
                          <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                        <Img
                          src="images/img_image_14.png"
                          alt="image_one"
                          className="w-[70px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[75%] pt-0.5 gap-2.5">
                          <Heading size="s" as="h6">
                            How to choose a chair at home
                          </Heading>
                          <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                        <Img
                          src="images/img_image_15.png"
                          alt="image_one"
                          className="w-[70px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-start w-[75%] pt-0.5 gap-2.5">
                          <Heading size="s" as="h6">
                            How to choose a chair at home
                          </Heading>
                          <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                            December 27, 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-6">
                    <Heading as="h5" className="!text-gray-900 !font-josefinsans">
                      Follow Us
                    </Heading>
                    <div className="flex flex-row justify-between w-full pr-[108px] md:pr-5">
                      <Button color="yellow_100" shape="circle" className="w-[40px]">
                        <Img src="images/img_bxl_instagram.svg" />
                      </Button>
                      <Button color="yellow_100" shape="circle" className="w-[40px]">
                        <Img src="images/img_bxl_facebook.svg" />
                      </Button>
                      <Button color="yellow_100" shape="circle" className="w-[40px]">
                        <Img src="images/img_bxl_twitter.svg" />
                      </Button>
                      <Button color="yellow_100" shape="circle" className="w-[40px]">
                        <Img src="images/img_bxl_tiktok.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                    <Heading as="h5" className="!text-gray-900 !font-josefinsans">
                      Our Gallery
                    </Heading>
                    <div className="w-full gap-3.5 grid-cols-3 grid">
                      <Img
                        src="images/img_rectangle_21.png"
                        alt="rectangle"
                        className="w-full md:h-auto object-cover"
                      />
                      <Img src="images/img_image_14.png" alt="image_one" className="w-full md:h-auto object-cover" />
                      <Img
                        src="images/img_image_100x100.png"
                        alt="image_one"
                        className="w-full md:h-auto object-cover"
                      />
                      <div className="flex flex-row justify-start w-full gap-3.5">
                        <Img
                          src="images/img_image_16.png"
                          alt="image_one"
                          className="w-[100px] md:h-auto object-cover"
                        />
                        <Img
                          src="images/img_image_17.png"
                          alt="image_three"
                          className="w-[100px] md:h-auto object-cover"
                        />
                      </div>
                      <Img src="images/img_image_15.png" alt="image_one" className="w-full md:h-auto object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                    <Heading as="h5" className="!text-gray-900 !font-josefinsans">
                      Tags
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                      <div className="flex flex-row justify-start w-full gap-2.5">
                        <Button
                          size="lg"
                          shape="round"
                          className="!text-yellow-100 tracking-[-0.50px] font-poppins border-blue_gray-900_01 border border-solid min-w-[66px]"
                        >
                          Chair
                        </Button>
                        <Button
                          color="gray_500"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] font-poppins min-w-[68px]"
                        >
                          Lamp
                        </Button>
                        <Button
                          color="gray_500"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] font-poppins min-w-[101px]"
                        >
                          Minimalist
                        </Button>
                      </div>
                      <div className="flex flex-row justify-start w-full gap-2.5">
                        <Button
                          color="gray_500"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] font-poppins min-w-[59px]"
                        >
                          Sofa
                        </Button>
                        <Button
                          color="gray_500"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] font-poppins min-w-[58px]"
                        >
                          New
                        </Button>
                        <Button
                          color="gray_500"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] font-poppins min-w-[67px]"
                        >
                          Clock
                        </Button>
                      </div>
                      <div className="flex flex-row justify-start w-full px-2">
                        <Button
                          color="gray_500"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="tracking-[-0.50px] font-poppins min-w-[66px]"
                        >
                          Pillow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-[1291px]">
              <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
                <Heading size="4xl" as="h2" className="tracking-[-0.50px] text-center !font-semibold">
                  Other blogs
                </Heading>
                <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                  We write various things related to furniture, from tips and what things I need to pay attention to
                  when choosing furniture
                </Text>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-5">
                <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6">
                  <Img
                    src="images/img_rectangle_18.png"
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
                            alt="by_admin_one"
                            className="h-[18px] w-[18px] mb-px"
                          />
                          <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                            By Admin
                          </Text>
                        </div>
                        <div className="h-[15px] w-px bg-gray-500" />
                        <div className="flex flex-row justify-start items-center gap-[5px]">
                          <Img src="images/img_bx_calendar_1.svg" alt="december_102022" className="h-[18px] w-[18px]" />
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
                <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6">
                  <Img
                    src="images/img_rectangle_18_400x416.png"
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
                <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6">
                  <Img
                    src="images/img_rectangle_18_1.png"
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
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}
