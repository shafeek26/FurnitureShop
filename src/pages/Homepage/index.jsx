import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Slider } from "../../components";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full px-14 py-[75px] md:p-5 bg-orange-50">
            <div className="flex flex-row md:flex-col justify-between items-center w-full my-[5px] md:gap-10 max-w-[1290px]">
              <div className="flex flex-col items-start justify-start w-[48%] md:w-full gap-[30px]">
                <div className="flex flex-col items-start justify-start w-full gap-[26px]">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-black-900 tracking-[-0.50px]"
                  >
                    Interior Needs
                  </Text>
                  <Text
                    size="3xl"
                    as="p"
                    className="!text-black-900 tracking-[-0.50px] !font-pollerone"
                  >
                    <span className="text-black-900 font-raleway font-bold">
                      Various{" "}
                    </span>
                    <span className="text-blue_gray-900_01 font-raleway font-bold">
                      new collections
                    </span>
                    <span className="text-black-900 font-raleway font-bold">
                      of furniture to decorate the corner of your house.
                    </span>
                  </Text>
                </div>
                <Button
                  size="9xl"
                  shape="square"
                  className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-medium border-blue_gray-900_01 border-2 border-solid min-w-[218px] sm:min-w-full"
                >
                  Shop Now
                </Button>
              </div>
              <Img
                src="images/img_nathan_oakley_o.png"
                alt="nathanoakleyo"
                className="w-[48%] md:w-full md:h-[566px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-11 p-[41px] md:p-5 bg-black-900">
          <Text
            size="xl"
            as="p"
            className="!text-gray-50_01 tracking-[-0.50px] text-center"
          >
            Various brands have used our products
          </Text>
          <div className="flex flex-row md:flex-col justify-start w-full gap-[50px] md:gap-5 max-w-[1094px]">
            <Img
              src="images/img_search_gray_50_01.svg"
              alt="search_three"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109.svg"
              alt="companylogo_one"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01.svg"
              alt="companylogo"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x141.svg"
              alt="companylogo"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x134.svg"
              alt="companylogo"
              className="h-[48px]"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x132.svg"
              alt="companylogo"
              className="h-[48px]"
            />
          </div>
        </div>
        <div className="flex flex-row md:flex-col w-full gap-5 md:px-5 max-w-[1290px]">
          <div className="flex flex-row sm:flex-col justify-between items-center w-[50%] md:w-full p-6 sm:gap-10 sm:p-5 bg-gradient">
            <div className="flex flex-col items-start justify-start w-[55%] sm:w-full ml-1.5 gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <Text
                  size="lg"
                  as="p"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Living Room
                </Text>
                <Heading
                  size="3xl"
                  as="h1"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  The best foam padded chair
                </Heading>
              </div>
              <Button
                color="gray_50"
                size="6xl"
                variant="outline"
                shape="square"
                className="sm:px-5 tracking-[-0.50px] font-medium min-w-[155px] sm:min-w-full"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_sam_moghadam_kh.png"
              alt="image"
              className="w-[31%] md:h-auto sm:w-full mr-1.5 object-cover"
            />
          </div>
          <div className="flex flex-row sm:flex-col justify-between items-center w-[50%] md:w-full p-[30px] sm:gap-10 sm:p-5 bg-gradient">
            <div className="flex flex-col items-start justify-start w-[54%] sm:w-full gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <Text
                  size="lg"
                  as="p"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Living Room
                </Text>
                <Heading
                  size="3xl"
                  as="h2"
                  className="!text-gray-50_01 tracking-[-0.50px]"
                >
                  Latest model chandelier
                </Heading>
              </div>
              <Button
                color="gray_50"
                size="6xl"
                variant="outline"
                shape="square"
                className="sm:px-5 tracking-[-0.50px] font-medium min-w-[155px] sm:min-w-full"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_phil_desforges.png"
              alt="phildesforges"
              className="w-[34%] md:h-auto sm:w-full my-[22px] sm:my-0 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[45px] md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-center w-full gap-[21px]">
              <Heading
                size="4xl"
                as="h2"
                className="tracking-[-0.50px] text-center"
              >
                <span className="text-black-900">Our </span>
                <span className="text-black-900">Newest</span>
                <span className="text-black-900">Product</span>
              </Heading>
              <Text
                size="lg"
                as="p"
                className="mb-1 !text-gray-500 tracking-[-0.50px] text-center"
              >
                Made of the best materials and with a design that follows the
                times
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              renderDotsItem={(props) => {
                return props?.isActive ? (
                  <div className="h-[15px] w-[15px] mr-[15px] bg-blue_gray-900_01" />
                ) : (
                  <div className="h-[15px] w-[15px] mr-[15px] bg-gray_200" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col gap-[47px] mx-auto">
                    <div className="flex flex-row md:flex-col justify-start w-full gap-[19px] md:gap-5">
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image.png"
                              alt="image_one"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-5">
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h3" className="tracking-[-0.50px]">
                            Teak wood chair
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
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image_400x308.png"
                              alt="image_three"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h4" className="tracking-[-0.50px]">
                            Teak wood chair
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
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image_1.png"
                              alt="image_five"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h5" className="tracking-[-0.50px]">
                            Teak wood chair
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
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image_2.png"
                              alt="image_seven"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h6" className="tracking-[-0.50px]">
                            Teak wood chair
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
                    </div>
                    <div className="flex flex-row md:flex-col justify-start w-full gap-[19px] md:gap-5">
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image_3.png"
                              alt="image_one"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h5" className="tracking-[-0.50px]">
                            Teak wood chair
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
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image_4.png"
                              alt="image_three"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h5" className="tracking-[-0.50px]">
                            Teak wood chair
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
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="h-[400px] w-full relative">
                          <Img
                            src="images/img_image_5.png"
                            alt="image_five"
                            className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <Button
                            size="lg"
                            shape="square"
                            className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                          >
                            Living Room
                          </Button>
                          <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                            <Text
                              as="p"
                              className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                            >
                              New
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h5" className="tracking-[-0.50px]">
                            Teak wood chair
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
                      <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[400px] w-full relative">
                            <Img
                              src="images/img_image_6.png"
                              alt="image_seven"
                              className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Button
                              size="lg"
                              shape="square"
                              className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                            >
                              Living Room
                            </Button>
                            <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                              <Text
                                as="p"
                                className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                              >
                                New
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h5" className="tracking-[-0.50px]">
                            Teak wood chair
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
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
        <div className="h-[535px] w-full relative">
          <div className="flex flex-col items-center justify-start h-full w-[535px] sm:h-auto right-0 bottom-0 top-0 m-auto absolute">
            <Img
              src="images/img_inside_weather.png"
              alt="insideweather"
              className="w-[535px] md:h-auto object-cover"
            />
          </div>
          <div className="flex flex-row justify-start w-full bottom-0 right-0 left-0 p-[13px] m-auto bg-yellow-100 absolute">
            <div className="flex flex-col items-start justify-start w-[38%] mb-[95px] ml-[61px] gap-[30px] md:ml-5">
              <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                <Text
                  size="2xl"
                  as="p"
                  className="!text-blue_gray-900_01 tracking-[-0.50px]"
                >
                  Interior Modern
                </Text>
                <Heading size="4xl" as="h2" className="tracking-[-0.50px]">
                  Arrange your home in such a way with our modern interiors
                </Heading>
              </div>
              <Button
                size="9xl"
                variant="outline"
                shape="square"
                className="sm:px-5 tracking-[-0.50px] font-medium min-w-[218px] sm:min-w-full"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[67px] md:px-5 max-w-[1290px]">
            <Heading
              size="2xl"
              as="h2"
              className="!text-blue_gray-900_01 tracking-[-0.50px] text-center"
            >
              New Arrival
            </Heading>
            <div className="flex flex-col w-full gap-[47px]">
              <div className="flex flex-row md:flex-col justify-start w-full gap-[19px] md:gap-5">
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image.png"
                        alt="teak_wood_chair"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-col items-center justify-start w-[14%] gap-[106px] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                        <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-5">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h3" className="tracking-[-0.50px]">
                      Teak wood chair
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
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_7.png"
                        alt="new_one"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h4" className="tracking-[-0.50px]">
                      Teak wood chair
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
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_8.png"
                        alt="new_three"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Teak wood chair
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
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_9.png"
                        alt="new_five"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Teak wood chair
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
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[19px]">
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_10.png"
                        alt="teak_wood_chair"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Teak wood chair
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
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_11.png"
                        alt="image_one"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Teak wood chair
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
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_12.png"
                        alt="image_one"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Teak wood chair
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
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-[15px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[400px] w-full relative">
                      <Img
                        src="images/img_image_13.png"
                        alt="image_one"
                        className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Button
                        size="lg"
                        shape="square"
                        className="bottom-[4%] left-[5%] m-auto tracking-[-0.50px] min-w-[106px] absolute"
                      >
                        Living Room
                      </Button>
                      <div className="flex flex-row justify-end w-[14%] right-[5%] top-[4%] m-auto absolute">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[42px] h-[21px] px-[7px] py-0.5 !text-white-A700 tracking-[-0.50px] bg-red-A200"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Teak wood chair
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-between w-full md:gap-10 md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-[50px]">
              <Heading size="4xl" as="h2" className="tracking-[-0.50px]">
                We guarantee the safety of your shopping
              </Heading>
              <div className="justify-center w-full gap-[50px] grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon.svg"
                    alt="fast_shipping"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading as="h3" className="tracking-[-0.50px]">
                      Fast Shipping
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon_gray_50_01.svg"
                    alt="icon_one"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                    <Heading as="h4" className="tracking-[-0.50px]">
                      Safe Delivery
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon_gray_50_01_60x63.svg"
                    alt="icon_one"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      365 Days Return
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-10">
                  <Img
                    src="images/img_icon_60x63.svg"
                    alt="icon_one"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      24 hours CS
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-500 tracking-[-0.50px] leading-[25px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_16.png"
              alt="image_one"
              className="w-[47%] md:w-full md:h-[640px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading
                size="4xl"
                as="h2"
                className="tracking-[-0.50px] text-center !font-semibold"
              >
                Read Our Latest Blog
              </Heading>
              <Text
                size="lg"
                as="p"
                className="!text-gray-500 tracking-[-0.50px] text-center"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
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
                        <Text
                          as="p"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
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
                        <Text
                          as="p"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] leading-[35px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
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
                      <div className="flex flex-row justify-start items-center gap-1">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bxeditaltone"
                          className="h-[18px] w-[18px] mb-px"
                        />
                        <Text
                          as="p"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
                          By Admin
                        </Text>
                      </div>
                      <div className="h-[15px] w-px bg-gray-500" />
                      <div className="flex flex-row justify-start items-center gap-[5px]">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bxcalendarone"
                          className="h-[18px] w-[18px]"
                        />
                        <Text
                          as="p"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] leading-[35px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
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
                        <Text
                          as="p"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
                          By Admin
                        </Text>
                      </div>
                      <div className="h-[15px] w-px bg-gray-500" />
                      <div className="flex flex-row justify-start items-center gap-[5px]">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bxcalendarone"
                          className="h-[18px] w-[18px]"
                        />
                        <Text
                          as="p"
                          className="!text-black-900 tracking-[-0.50px]"
                        >
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px] leading-[35px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
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
    </>
  );
}
