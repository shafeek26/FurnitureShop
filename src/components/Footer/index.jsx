import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className="flex justify-center items-center w-full p-12 md:p-5 bg-black-900 mt-16">
    <div className="flex flex-col items-center justify-center w-full gap-[148px] mx-auto max-w-[1302px]">
      <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
        <div className="flex flex-col items-start justify-start w-[28%] md:w-full gap-4">
          <Heading size="2xl" as="h2" className="!text-gray-50_01 tracking-[-0.50px]">
            Furnit.
          </Heading>
          <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81 leading-[35px]">
            Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet
            phasel alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-6">
          <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
            Customer
          </Heading>
          <div className="flex flex-col items-start justify-start gap-6">
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              Order Status
            </Text>
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              Collections
            </Text>
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              Our Story
            </Text>
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              Affiliates
            </Text>
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              Security
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-6">
          <Heading as="h5" className="mt-[5px] !text-gray-50_01 tracking-[-0.50px]">
            Information
          </Heading>
          <div className="flex flex-col items-start justify-start gap-6">
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              Customer Service
            </Text>
            <a href="#" className="opacity-0.81">
              <Text as="p" className="tracking-[-0.50px]">
                Careers
              </Text>
            </a>
            <Text as="p" className="tracking-[-0.50px] opacity-0.81">
              FAQ
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-[25px]">
          <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
            Follow Us
          </Heading>
          <div className="flex flex-row justify-between w-full">
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
      </div>
      <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
        <Text size="md" as="p" className="tracking-[-0.50px] opacity-0.81">
          © Copyright 2022. All Rights Reserved.
        </Text>
        <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
          <Text size="md" as="p" className="mb-px tracking-[-0.50px] opacity-0.81">
            Terms of condition
          </Text>
          <a href="#" className="opacity-0.81">
            <Text size="md" as="p" className="tracking-[-0.50px]">
              Privacy Policy
            </Text>
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}
