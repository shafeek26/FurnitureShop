import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, Slider, RatingBar } from "../../components";
import { useParams, Link } from "react-router-dom";
import { Products_list_1 } from "utils/data";
import image_1 from "../../../public/images/img_sam_moghadam_kh.png"
import image_2 from "../../../public/images/img_image_2.png"
import minus_icon from "../../../public/images/img_bx_minus_circle.svg"
import plus_icon from "../../../public/images/img_bx_plus_circle_1_blue_gray_900_01.svg"
import wishlist from "../../../public/images/img_frame_48095996.svg"

export default function ShopDetailDescriptionPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const { id } = useParams();
  
  // function for getting particular product
  const findProductById = (id) => {
    return Products_list_1.find((product) => product.id === id)
  }

  const product = findProductById(id);
  console.log(product.price)
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
                src={product.image}
                alt="image_one"
                className="w-[49%] md:w-full md:h-[595px] object-cover"
              />
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[30px]">
                <div className="flex flex-col items-start justify-start w-full gap-8">
                  <Heading size="2xl" as="h1" className="tracking-[-0.50px]">
                    {product.tittle}
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
                    {product?.price}
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
                      <Img src={minus_icon} alt="image_two" className="h-[24px] w-[24px] ml-1" />
                      <Text size="lg" as="p" className="!text-black-900 tracking-[-0.50px]">
                        1
                      </Text>
                      <Img
                        src={plus_icon}
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
                      <Img src={wishlist} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[49px] md:gap-5 md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[42px]">
              <div className="flex flex-row justify-between items-start w-full pr-[368px] md:pr-5">
                <div className="flex flex-col items-center justify-start w-[50%] mt-0.5 gap-2">
                  <Heading size="xl" as="h2" className="!text-blue_gray-900_01 tracking-[-0.50px] !font-josefinsans">
                    Description
                  </Heading>
                  <div className="h-[6px] w-full bg-blue_gray-900_01" />
                </div>
                <Link to ="/detailreview">
                <Heading size="xl" as="h3" className="!text-gray-500 tracking-[-0.50px] !font-josefinsans">
                  Review
                </Heading>
                </Link>
              </div>
              <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] leading-[35px]">
                <>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries, <br />
                  <br />
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-[21px]">
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
                          <Heading size="3xl" as="h4" className="tracking-[-0.50px]">
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
                        src={image_1}
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
                            src={image_2}
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
