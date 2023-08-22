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
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-end mx-auto shadow-bs w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col gap-[38px] items-start justify-start md:mt-0 mt-[454px] md:px-5 w-[18%] md:w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="md:h-[278px] h-[304px] mb-[21px] relative w-[57%]">
                <div className="md:h-[257px] h-[304px] m-auto w-full">
                  <div className="md:h-[257px] h-[304px] m-auto w-full">
                    <div className="md:h-[257px] h-[304px] m-auto w-full">
                      <Img
                        className="absolute h-[257px] inset-x-[0] mx-auto object-cover top-[0]"
                        src="images/img_polygon20_lime_800.png"
                        alt="polygonTwenty"
                      />
                      <Img
                        className="absolute bottom-[0] h-[101px] left-[0] object-cover"
                        src="images/img_polygon20_lime_800.png"
                        alt="polygonTwentyTwo"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[16%] h-[76px] inset-x-[0] mx-auto"
                      src="images/img_polygon20.svg"
                      alt="location"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[9%] h-[45px] left-[19%]"
                    src="images/img_send.svg"
                    alt="send"
                  />
                </div>
                <div className="absolute bottom-[23%] flex flex-col gap-[45px] justify-start left-[26%] w-[39%]">
                  <div className="bg-amber-500 h-1.5 md:ml-[0] ml-[33px] mr-4 rounded-[50%] w-1.5"></div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="bg-amber-500 h-1.5 rounded-[50%] w-1.5"></div>
                    <div className="bg-amber-500 h-1.5 rounded-[50%] w-1.5"></div>
                  </div>
                </div>
              </div>
              <div className="md:h-[323px] h-[55px] mt-[271px] relative w-[24%]">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto p-[3px] w-[95%]"
                  style={{ backgroundImage: "url('images/img_polygon20.svg')" }}
                >
                  <div className="bg-amber-500 h-2 mb-[38px] ml-2 md:ml-[0] rotate-[32deg] rounded-[50%] w-2"></div>
                </div>
                <div className="absolute bg-amber-500 bottom-[38%] h-2 right-[0] rotate-[32deg] rounded-[50%] w-2"></div>
                <div className="absolute bg-amber-500 bottom-[0] h-2 right-[35%] rotate-[32deg] rounded-[50%] w-2"></div>
              </div>
            </div>
            <div className="md:h-[465px] h-[597px] relative w-[89%]">
              <div className="absolute md:h-[465px] h-[595px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bottom-[0] flex inset-x-[0] mx-auto w-[97%]">
                  <Img
                    className="h-[465px] my-auto object-cover w-[56%]"
                    src="images/img_ellipse309.png"
                    alt="ellipse309"
                  />
                  <Img
                    className="h-[142px] ml-[-42px] mt-0.5 z-[1]"
                    src="images/img_polygon23.svg"
                    alt="polygonTwentyThree"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col gap-[42px] h-[149px] items-center justify-end p-[7px] right-[0] top-[0] w-[70%]"
                  style={{ backgroundImage: "url('images/img_polygon23.svg')" }}
                >
                  <div className="bg-amber-500 h-1.5 mt-[75px] rounded-[50%] w-1.5"></div>
                  <div className="bg-amber-500 h-1.5 mb-1 rounded-[50%] w-1.5"></div>
                </div>
              </div>
              <div className="absolute bg-amber-500 h-2 right-[41%] rotate-[32deg] rounded-[50%] top-[0] w-2"></div>
            </div>
          </div>
          <div className="h-[1066px] sm:h-[1308px] md:h-[997px] mb-[349px] md:px-5 relative w-[72%] md:w-full">
            <div className="absolute h-[1066px] md:h-[475px] sm:h-[959px] inset-y-[0] my-auto right-[0] w-[89%] md:w-full">
              <div className="absolute md:h-[475px] h-[959px] right-[0] top-[0] w-[87%] md:w-full">
                <div className="md:h-[475px] h-[959px] m-auto w-full">
                  <div className="md:h-[475px] h-[959px] m-auto w-full">
                    <div className="md:h-[475px] h-[959px] m-auto w-full">
                      <div className="absolute md:h-[475px] h-[959px] inset-[0] justify-center m-auto w-full">
                        <div className="md:h-[475px] h-[959px] m-auto w-full">
                          <div className="md:h-[475px] h-[959px] m-auto w-full">
                            <div className="md:h-[475px] h-[959px] m-auto w-full">
                              <div className="md:h-[475px] h-[959px] m-auto w-full">
                                <div className="flex flex-col md:gap-10 gap-[524px] h-full justify-start m-auto w-full">
                                  <Img
                                    className="h-[263px] md:h-auto md:ml-[0] ml-[662px] object-cover w-[17%]"
                                    src="images/img_ellipse310.png"
                                    alt="ellipse310"
                                  />
                                  <div className="flex flex-row gap-[111px] items-start justify-start mr-[491px] w-[38%] md:w-full">
                                    <Img
                                      className="h-[154px] mb-[17px]"
                                      src="images/img_polygon26_lime_800.svg"
                                      alt="polygonTwentySix"
                                    />
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[94px] items-end justify-start mt-[78px] p-[3px] w-1/4"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_polygon26.svg')",
                                      }}
                                    >
                                      <div className="bg-amber-500 h-1.5 mb-[81px] mr-[30px] rounded-[50%] w-1.5"></div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-[91px] items-start justify-start left-[37%] p-5 w-[12%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_polygon35.svg')",
                                  }}
                                >
                                  <div className="bg-amber-500 h-1.5 mb-11 md:ml-[0] ml-[7px] rounded-[50%] w-1.5"></div>
                                </div>
                              </div>
                              <Img
                                className="absolute h-[159px] object-cover right-[0] top-[37%]"
                                src="images/img_polygon35_lime_800.png"
                                alt="polygonThirtyFive"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[270px] items-end justify-start p-[13px] right-[8%] top-[27%] w-[35%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group193.svg')",
                              }}
                            >
                              <div className="bg-amber-500 h-1.5 mb-[116px] mt-[119px] rounded-[50%] w-1.5"></div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[207px] right-[10%] top-[12%]"
                            src="images/img_group193.svg"
                            alt="polygonThirtySeven"
                          />
                        </div>
                        <Img
                          className="absolute h-[158px] right-[11%] top-[9%]"
                          src="images/img_group193.svg"
                          alt="polygonThirtyNine"
                        />
                      </div>
                      <Img
                        className="absolute h-64 object-cover right-[0] top-[0]"
                        src="images/img_polygon35_lime_800.png"
                        alt="polygonForty"
                      />
                      <Img
                        className="absolute h-[236px] object-cover right-[0] top-[0]"
                        src="images/img_polygon35_lime_800.png"
                        alt="polygonFortyOne"
                      />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[214px] items-start justify-start p-[37px] sm:px-5 right-[0] top-[15%] w-1/5"
                      style={{
                        backgroundImage: "url('images/img_group196.png')",
                      }}
                    >
                      <div className="bg-amber-500 h-1.5 mb-[78px] mt-14 rounded-[50%] w-1.5"></div>
                    </div>
                    <Img
                      className="absolute bottom-[8%] h-[70px] left-[43%] w-[70px]"
                      src="images/img_polygon35.svg"
                      alt="send_One"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-1/4 flex flex-col h-56 items-end justify-start p-3.5 right-[0] w-[23%]"
                    style={{
                      backgroundImage:
                        "url('images/img_polygon35_lime_800.png')",
                    }}
                  >
                    <div className="bg-amber-500 h-1.5 mb-[189px] mr-[18px] rounded-[50%] w-1.5"></div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[11%] flex flex-col h-[207px] inset-x-[0] items-start justify-end mx-auto w-[26%]"
                    style={{
                      backgroundImage: "url('images/img_group193.svg')",
                    }}
                  >
                    <div className="bg-amber-500 h-1.5 md:ml-[0] ml-[52px] mt-[199px] rounded-[50%] w-1.5"></div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[23%] flex flex-col h-[216px] items-start justify-start left-[34%] pb-[43px] md:px-10 sm:px-5 px-[43px] w-[27%]"
                  style={{ backgroundImage: "url('images/img_group195.svg')" }}
                >
                  <div className="flex flex-col md:gap-10 gap-[161px] justify-start md:ml-[0] ml-[9px] w-[76%] md:w-full">
                    <div className="bg-amber-500_99 h-1.5 md:ml-[0] ml-[52px] mr-[39px] rounded-[50%] w-1.5"></div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="bg-amber-500_99 h-1.5 rounded-[50%] w-1.5"></div>
                      <div className="bg-amber-500 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-col h-[30px] items-end justify-start left-[38%] pl-[5px] py-[5px] w-[8%]"
                style={{ backgroundImage: "url('images/img_group203.svg')" }}
              >
                <div className="bg-amber-500 h-1.5 mb-3.5 rounded-[50%] w-1.5"></div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col gap-[31px] h-44 justify-start left-[0] pl-2.5 py-2.5 w-[22%]"
                style={{ backgroundImage: "url('images/img_group198.svg')" }}
              >
                <div className="bg-amber-500 h-1.5 md:ml-[0] ml-[113px] mr-16 rounded-[50%] w-1.5"></div>
                <div className="bg-amber-500 h-1.5 mb-[113px] md:ml-[0] ml-[177px] rounded-[50%] w-1.5"></div>
              </div>
              <Img
                className="absolute h-[238px] right-[13%] top-[16%]"
                src="images/img_vector2.svg"
                alt="vectorTwo"
              />
            </div>
            <div className="absolute bottom-[8%] flex flex-col gap-[18px] items-start justify-start left-[44%] w-[1%]">
              <div className="bg-amber-500 h-1.5 rounded-[50%] w-1.5"></div>
              <div className="bg-amber-500 h-1.5 md:ml-[0] ml-[3px] rounded-[50%] w-1.5"></div>
            </div>
            <div className="absolute bg-amber-500 bottom-[12%] h-1.5 right-[45%] rounded-[50%] w-1.5"></div>
            <div className="absolute bg-amber-500 bottom-[17%] h-1.5 right-[40%] rounded-[50%] w-1.5"></div>
            <div className="absolute bg-amber-500 bottom-[20%] h-1.5 right-[37%] rounded-[50%] w-1.5"></div>
            <div className="absolute bg-amber-500 bottom-[32%] h-1.5 right-[12%] rounded-[50%] w-1.5"></div>
            <div className="absolute bg-amber-500 h-1.5 right-[32%] rounded-[50%] top-[38%] w-1.5"></div>
            <div className="absolute bg-amber-500 h-1.5 right-[26%] rounded-[50%] top-[15%] w-1.5"></div>
            <div className="absolute bg-amber-500 h-1.5 right-[11%] rounded-[50%] top-[29%] w-1.5"></div>
            <div className="absolute bg-amber-500 h-1.5 right-[22%] rounded-[50%] top-[11%] w-1.5"></div>
            <div className="absolute bg-amber-500 h-1.5 right-[19%] rounded-[50%] top-[9%] w-1.5"></div>
            <div className="absolute bg-amber-500 bottom-[24%] h-1.5 left-[33%] rounded-[50%] w-1.5"></div>
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
                    alt="groupFour"
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
      </div>
    </>
  );
};

export default LoginPage;
