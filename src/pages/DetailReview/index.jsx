import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, Slider, CheckBox, TextArea, RatingBar } from "../../components";

export default function DetailReviewPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full pt-[75px] px-14 md:pt-5 md:px-5">
            <div className="flex flex-row md:flex-col justify-start w-full gap-[47px] md:gap-5 max-w-[1290px]">
              <Img
                src="images/img_rectangle_1475.png"
                alt="image_one"
                className="w-[49%] md:w-full md:h-[595px] object-cover"
              />
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[30px]">
                <div className="flex flex-col items-start justify-start w-full gap-8">
                  <Heading size="2xl" as="h1" className="tracking-[-0.50px]">
                    Complete set of sofa, pillows and bed sheets
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-[15px]">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#ff9432"
                      size={20}
                      className="flex justify-between w-[140px]"
                    />
                    <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                      ( 1 review )
                    </Text>
                  </div>
                  <Heading size="3xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                    $ 75.00
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                    <Heading size="md" as="h3" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">Stok :</span>
                      <span className="text-black-900 font-normal">18</span>
                    </Heading>
                    <Heading size="md" as="h4" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">SKU :</span>
                      <span className="text-black-900 font-normal">BA65</span>
                      <span className="text-black-900"></span>
                    </Heading>
                    <Heading size="md" as="h5" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">Categories :</span>
                      <span className="text-black-900 font-normal">Chair, New Arrivals, Special</span>
                    </Heading>
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      <span className="text-gray-500 font-normal">Tags :</span>
                      <span className="text-black-900 font-normal">Black, Chair</span>
                    </Heading>
                  </div>
                  <Text size="lg" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                    In order to sit comfortably for long periods, people need freedom of movement. The Form rocking
                    chair has a molded plastic shell with a wide, curved seat, which gives plenty of opportunity for
                    changing one’s sitting position.
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-between items-center w-[55%]">
                    <div className="flex flex-row justify-start items-center gap-[15px] p-[9px] border-black-900 border border-solid">
                      <Img src="images/img_bx_minus_circle.svg" alt="image_two" className="h-[24px] w-[24px] ml-1" />
                      <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                        1
                      </Text>
                      <Img
                        src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                        alt="image_three"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                    <Button
                      color="black_900"
                      size="4xl"
                      shape="square"
                      className="sm:pl-5 tracking-[-0.50px] min-w-[128px]"
                    >
                      Add to Cart
                    </Button>
                    <Button color="blue_gray_100" size="3xl" variant="outline" shape="square" className="w-[43px]">
                      <Img src="images/img_frame_48095996.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[50px] md:gap-5 md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[50px]">
              <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                <div className="flex flex-row justify-between items-start w-full pr-[369px] md:pr-5">
                  <Heading size="xl" as="h2" className="mt-0.5 !text-gray-500 tracking-[-0.50px] !font-josefinsans">
                    Description
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-[31%] gap-2.5">
                    <Heading size="xl" as="h3" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-josefinsans">
                      Review
                    </Heading>
                    <div className="h-[6px] w-full bg-blue_gray-900_01" />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-col items-end justify-start w-full gap-2.5">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[26%] gap-[15px]">
                        <Img
                          src="images/img_image_54x54.png"
                          alt="ralph_edwards"
                          className="h-[54px] w-[54px] md:h-auto rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[57%] gap-1">
                          <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                            Ralph Edwards
                          </Text>
                          <Text size="xs" as="p" className="!text-blue_gray-400 tracking-[-0.50px]">
                            2 minutes ago
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#d9d9d9"
                        activeColor="#ff9432"
                        size={16}
                        className="flex justify-between w-[128px]"
                      />
                    </div>
                    <Text as="p" className="w-[92%] !text-black-900 tracking-[-0.50px] leading-[35px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue
                      dignissim volutpat. Quis ultricies eu libero tortor dictumst.
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full gap-2.5">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[26%] gap-[15px]">
                        <Img
                          src="images/img_image_54x54.png"
                          alt="image_one"
                          className="h-[54px] w-[54px] md:h-auto rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[57%] gap-1">
                          <Text as="p" className="!text-black-900 tracking-[-0.50px]">
                            Ralph Edwards
                          </Text>
                          <Text size="xs" as="p" className="!text-blue_gray-400 tracking-[-0.50px]">
                            2 minutes ago
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#d9d9d9"
                        activeColor="#ff9432"
                        size={16}
                        className="flex justify-between w-[128px]"
                      />
                    </div>
                    <Text as="p" className="w-[92%] !text-black-900 tracking-[-0.50px] leading-[35px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue
                      dignissim volutpat. Quis ultricies eu libero tortor dictumst.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[21px]">
                <Heading size="xl" as="h4" className="tracking-[-0.50px] text-center">
                  Write your review
                </Heading>
                <div className="flex flex-col items-center justify-start h-[621px] w-[620px] md:w-full gap-8">
                  <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                    <div className="flex flex-col items-start justify-start w-full gap-3.5">
                      <Heading size="md" as="h5" className="tracking-[-0.50px]">
                        Your Rating
                      </Heading>
                      <RatingBar
                        value={2}
                        isEditable={true}
                        color="#d9d9d9"
                        activeColor="#ff9432"
                        size={16}
                        className="flex justify-between w-[128px]"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                      <div className="flex flex-row md:flex-col justify-start w-full gap-4 md:gap-5">
                        <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-4">
                          <Heading size="md" as="h6" className="tracking-[-0.50px]">
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
                        <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-4">
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
                          Your Review
                        </Heading>
                        <TextArea
                          shape="square"
                          name="frame48096017"
                          placeholder="Write your review here...."
                          className="w-full sm:pr-5 sm:py-5 text-gray-500 tracking-[-0.50px]"
                        />
                      </div>
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
            <div className="flex flex-col items-center justify-start w-[49%] md:w-full mt-0.5 gap-[21px] md:mt-0">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                renderDotsItem={(props) => {
                  return props?.isActive ? (
                    <div className="h-[15px] w-[15px] mr-[15px] bg-blue_gray-900_01" />
                  ) : (
                    <div className="h-[15px] w-[15px] mr-[15px] bg-gray_200" />
                  );
                }}
                activeIndex={sliderState1}
                onSlideChanged={(e) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-full"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-row sm:flex-col justify-between items-start p-6 mx-auto sm:gap-10 sm:p-5 bg-gray-50_01">
                      <div className="flex flex-col items-start justify-start w-[55%] sm:w-full ml-[19px] gap-[23px]">
                        <div className="flex flex-col items-start justify-start w-full gap-7">
                          <Text size="lg" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                            Living Room
                          </Text>
                          <Heading size="3xl" as="h1" className="tracking-[-0.50px]">
                            The best foam padded chair
                          </Heading>
                        </div>
                        <Button
                          size="6xl"
                          variant="outline"
                          shape="square"
                          className="sm:px-5 tracking-[-0.50px] font-poppins font-medium min-w-[155px] sm:min-w-full"
                        >
                          Shop Now
                        </Button>
                      </div>
                      <Img
                        src="images/img_sam_moghadam_kh.png"
                        alt="sammoghadamkh"
                        className="w-[32%] md:h-auto sm:w-full mr-[19px] object-cover"
                      />
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[42px] md:px-5 max-w-[1290px]">
            <Heading size="4xl" as="h2" className="tracking-[-0.50px] text-center">
              Related Products
            </Heading>
            <div className="flex flex-col items-center justify-start w-full gap-[42px]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 4 } }}
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
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-start gap-[15px] mx-2.5">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[400px] w-full relative">
                          <Img
                            src="images/img_image_10.png"
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
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <Heading as="h3" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text size="lg" as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
                          $24
                        </Text>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
