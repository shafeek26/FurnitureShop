import { Heading, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
    const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-5">
        <div className="flex flex-col justify-center items-center w-full mx-auto max-w-[90%] gap-4 sm:gap-5">
          <div className="flex flex-col items-start justify-start w-[49%] sm:w-full gap-4">
            <Heading size="md" as="h4" className="tracking-[-0.50px]">
              Your Name
            </Heading>
            <Input
              color="blue_gray_100"
              size="md"
              variant="outline"
              shape="square"
              type="text"
              name="name"
              placeholder="Write your name here...."
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[49%] sm:w-full gap-4">
            <Heading size="md" as="h4" className="tracking-[-0.50px]">
              Your Email
            </Heading>
            <Input
              color="blue_gray_100"
              size="md"
              variant="outline"
              shape="square"
              type="email"
              name="email"
              placeholder="Write your email here...."
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[49%] sm:w-full gap-4">
            <Heading size="md" as="h5" className="tracking-[-0.50px]">
              Your Password
            </Heading>
            <Input
              color="blue_gray_100"
              size="md"
              variant="outline"
              shape="square"
              type="password"
              name="password"
              placeholder="Write your password here...."
              className="w-full"
            />
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Already have account?
            <span onClick={() => navigate("/login")} to="signup" className="hover:underline dark:text-violet-400">
              Login
            </span>
          </p>
        </div>
        <Button
          size="6xl"
          shape="square"
          className="sm:px-5 tracking-[-0.50px] font-poppins font-medium border-blue_gray-900_01 border-2 border-solid min-w-[140px] sm:min-w-[90%] mt-10"
        >
          Create Account
        </Button>
      </div>
    </>
  );
}
