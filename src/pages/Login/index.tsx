import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const LoginPage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 items-start justify-between mx-auto shadow-bs w-full">
        <Img
          className="h-[569px] md:h-auto md:mt-0 mt-[454px] object-cover"
          src="images/img_group120.png"
          alt="group120"
        />
        <div className="h-[1066px] sm:h-[1124px] md:h-[726px] md:px-5 relative w-[72%] md:w-full">
          <div className="absolute h-[1066px] sm:h-[1124px] md:h-[726px] inset-y-[0] my-auto right-[0] w-[89%] md:w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[379px] h-full inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[263px] md:h-auto md:ml-[0] ml-[783px] object-cover w-[15%]"
                src="images/img_ellipse310.png"
                alt="ellipse310"
              />
              <div className="flex h-[423px] sm:h-[482px] justify-end mr-[298px] relative w-[68%] md:w-full">
                <div className="bg-amber-500 h-1.5 mb-[87px] ml-auto mr-[262px] mt-auto rounded-[50%] w-1.5"></div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] justify-center m-auto p-[45px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group383.svg')" }}
                >
                  <div className="bg-amber-500 h-1.5 md:ml-[0] ml-[492px] mr-[26px] rounded-[50%] w-1.5"></div>
                  <div className="bg-amber-500 h-1.5 md:ml-[0] ml-[184px] mr-[334px] mt-[105px] rounded-[50%] w-1.5"></div>
                  <div className="flex sm:flex-col flex-row gap-[53px] items-start justify-end mb-[167px] md:ml-[0] ml-[421px] mr-[38px] mt-[38px] w-[13%] md:w-full">
                    <div className="bg-amber-500 h-1.5 mb-[5px] rounded-[50%] w-1.5"></div>
                    <div className="bg-amber-500 h-1.5 sm:mt-0 mt-[5px] rounded-[50%] w-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-amber-500 bottom-[32%] h-1.5 right-[14%] rounded-[50%] w-1.5"></div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[161px] h-[737px] justify-end p-[43px] md:px-10 sm:px-5 right-[0] top-[0] w-[57%]"
              style={{ backgroundImage: "url('images/img_group382.png')" }}
            >
              <div className="bg-amber-500_99 h-1.5 md:ml-[0] ml-[61px] mr-[366px] mt-[478px] rounded-[50%] w-1.5"></div>
              <div className="bg-amber-500_99 h-1.5 md:ml-[0] ml-[9px] mr-[418px] rounded-[50%] w-1.5"></div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-8 h-max inset-y-[0] items-center justify-start left-[0] my-auto shadow-bs1 w-3/5">
            <Img
              className="h-[75px] md:h-auto object-cover w-[33%]"
              src="images/img_colorlogono.png"
              alt="colorlogono"
            />
            <div className="bg-lime-800_0c flex flex-col items-start justify-end p-[54px] md:px-10 sm:px-5 w-full">
              <Text
                className="mt-[5px] sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                size="txtInterMedium23"
              >
                Sign in to your account
              </Text>
              <Input
                name="email"
                placeholder="EMAIL"
                className="font-semibold leading-[normal] p-0 placeholder:text-white-A700_7f sm:px-5 text-left text-lg text-white-A700_7f tracking-[1.71px] w-full"
                wrapClassName="bg-gray-900 mt-10 pl-[30px] pr-[35px] py-6 rounded w-full"
                type="email"
              ></Input>
              <Button className="bg-lime-800 cursor-pointer font-semibold leading-[normal] min-w-[506px] sm:min-w-full mt-[38px] py-[22px] rounded shadow-bs2 sm:text-[19px] md:text-[21px] text-[23px] text-center text-white-A700">
                LOGIN
              </Button>
              <div className="flex flex-row gap-[25px] items-start justify-center md:ml-[0] ml-[75px] mt-14 w-[71%] md:w-full">
                <Line className="bg-white-A700 h-[3px] my-[9px] w-[23%]" />
                <Text
                  className="text-lg text-white-A700"
                  size="txtInterRegular18"
                >
                  Or continue wiith
                </Text>
                <Line className="bg-white-A700 h-[3px] my-[9px] w-[23%]" />
              </div>
              <div className="flex flex-row gap-[50px] items-center justify-center md:ml-[0] ml-[89px] mt-10 w-[65%] md:w-full">
                <div
                  className="common-pointer border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[13px] rounded-[7px] w-[24%]"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    className="h-8 md:h-auto object-cover w-[31px] sm:w-full"
                    src="images/img_googleglogo.png"
                    alt="googleglogo"
                  />
                </div>
                <Img
                  className="h-[60px]"
                  src="images/img_group4.svg"
                  alt="user"
                />
                <Img
                  className="h-[60px]"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
