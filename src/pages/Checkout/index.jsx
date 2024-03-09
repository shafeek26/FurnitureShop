import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, TextArea, SelectBox } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Furniture-store</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-12 md:px-5 max-w-[1290px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.50px] text-center">
                Checkout
              </Heading>
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[19px] md:gap-5">
                <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-[53px]">
                  <div className="flex flex-col items-start justify-start w-full gap-9">
                    <Heading size="xl" as="h2" className="tracking-[-0.50px]">
                      Contact Information
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                      <div className="flex flex-row md:flex-col justify-start w-full gap-5">
                        <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[11px]">
                          <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] !font-raleway">
                            First Name
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            shape="square"
                            type="text"
                            name="firstName"
                            placeholder="Your first name here.."
                            className="w-full"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[11px]">
                          <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] !font-raleway">
                            Last Name
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            shape="square"
                            type="text"
                            name="lastName"
                            placeholder="Your last name here.."
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col justify-start w-full gap-5">
                        <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[11px]">
                          <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] !font-raleway">
                            Phone
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            shape="square"
                            type="number"
                            name="phone"
                            placeholder="Your phone here.."
                            className="w-full"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-[11px]">
                          <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] !font-raleway">
                            Email
                          </Text>
                          <Input
                            color="blue_gray_100"
                            size="lg"
                            variant="outline"
                            shape="square"
                            type="email"
                            name="email"
                            placeholder="Your email here.."
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[29px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[33px]">
                      <Heading size="xl" as="h3" className="tracking-[-0.50px]">
                        Shipping Method
                      </Heading>
                      <div className="flex flex-row justify-start gap-[21px]">
                        <Button
                          color="blue_gray_100"
                          size="10xl"
                          variant="outline"
                          shape="square"
                          leftIcon={<Img src="images/img_bxstore_1.svg" alt="bx-store 1" />}
                          className="gap-2.5 sm:px-5 tracking-[-0.50px] min-w-[154px]"
                        >
                          Store
                        </Button>
                        <Button
                          color="gray_100"
                          size="10xl"
                          shape="square"
                          leftIcon={<Img src="images/img_bxpackage_1.svg" alt="bx-package 1" />}
                          className="gap-2.5 sm:px-5 tracking-[-0.50px] border-blue_gray-900_01 border border-solid min-w-[175px]"
                        >
                          Delivery
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                      <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] !font-raleway">
                        Country / Region{" "}
                      </Text>
                      <SelectBox
                        size="sm"
                        variant="outline"
                        shape="square"
                        indicator={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
                        name="country"
                        placeholder="United States (US)"
                        options={dropDownOptions}
                        className="w-full gap-px tracking-[-0.50px]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                      <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px] !font-raleway">
                        Street address{" "}
                      </Text>
                      <TextArea
                        size="xs"
                        shape="square"
                        name="frame48096064"
                        placeholder="Write your full address"
                        className="w-full sm:pb-5 sm:px-5 text-gray-500 tracking-[-0.50px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[33px]">
                    <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                      Payment Method
                    </Heading>
                    <div className="flex flex-row sm:flex-col justify-start w-[60%] md:w-full gap-5 sm:gap-5">
                      <div className="flex flex-row justify-center w-[31%] md:w-full md:h-auto p-[26px] sm:p-5 border-blue_gray-100 border border-solid">
                        <Img
                          src="images/img_vector.png"
                          alt="vector_one"
                          className="w-[59%] md:h-auto sm:w-full mx-5 object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[31%] md:w-full md:h-auto p-6 sm:p-5 border-blue_gray-100 border border-solid">
                        <Img
                          src="images/img_google_pay.svg"
                          alt="googlepay_one"
                          className="h-[23px] mx-[22px] sm:mx-5"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[31%] md:w-full md:h-auto p-[26px] sm:p-5 border-blue_gray-100 border border-solid">
                        <Img src="images/img_paypal.svg" alt="paypal_one" className="h-[19px] mx-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[33%] md:w-full p-[27px] sm:p-5 bg-gray-50_01">
                  <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[35px] my-[7px]">
                    <Heading as="h5" className="tracking-[-0.50px] !font-bold">
                      Your Order
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-6">
                      <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                        <div className="flex flex-row justify-between items-center w-full py-0.5">
                          <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                            Complete set of sofa... 1x
                          </Text>
                          <Heading as="h6" className="tracking-[-0.50px] !font-poppins">
                            $ 75.00
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full py-0.5">
                          <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                            Teak wood chair 1x
                          </Text>
                          <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                            $ 24.00
                          </Heading>
                        </div>
                        <div className="h-px w-full bg-black-900" />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                        <div className="flex flex-row justify-between items-center w-full py-0.5">
                          <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                            Subtotal
                          </Text>
                          <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                            $ 99.00
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full py-0.5">
                          <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                            Discount (30%)
                          </Text>
                          <Heading as="h5" className="!text-deep_orange-A400 tracking-[-0.50px] !font-poppins">
                            - $ 29.70
                          </Heading>
                        </div>
                      </div>
                      <div className="h-px w-full bg-black-900" />
                      <div className="flex flex-row justify-between items-center w-full py-0.5">
                        <Text size="xl" as="p" className="!text-gray-500 tracking-[-0.50px] !font-raleway">
                          Total
                        </Text>
                        <Heading as="h5" className="tracking-[-0.50px] !font-poppins">
                          $ 69.30
                        </Heading>
                      </div>
                      <Button
                        size="8xl"
                        shape="square"
                        className="w-full sm:px-5 !text-yellow-100 tracking-[-0.50px] font-semibold"
                      >
                        Place Order
                      </Button>
                    </div>
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
