import React from "react";

import { Button, CheckBox, Img, Input, Line, Switch, Text } from "components";

const LandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-end mx-auto pt-[46px] w-full">
        <div className="flex flex-col md:gap-10 gap-[99px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Img
              className="md:flex-1 h-[53px] sm:h-auto object-cover w-[11%] md:w-full"
              src="images/img_colorlogono.png"
              alt="colorlogono"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[30px] items-start justify-center md:ml-[0] ml-[272px] md:mt-0 mt-4 w-[36%] md:w-full">
              <Text className="text-base text-lime-800" size="txtInterMedium16">
                Home
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtInterMedium16WhiteA700"
              >
                About Us
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtInterMedium16WhiteA700"
              >
                How it works
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtInterMedium16WhiteA700"
              >
                Pricing
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtInterMedium16WhiteA700"
              >
                Features
              </Text>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[173px] md:mt-0 mt-[19px] text-lg text-white-A700"
            >
              <Text size="txtInterSemiBold18">Sign in</Text>
            </a>
            <Button className="bg-lime-800 cursor-pointer font-semibold leading-[normal] min-w-[161px] md:ml-[0] ml-[18px] py-[15px] rounded-[12px] text-center text-lg text-white-A700">
              Get Started
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col md:px-5 relative w-full">
              <div className="md:h-[2057px] h-[784px] sm:h-[815px] mx-auto w-full">
                <div className="md:h-[591px] h-[784px] sm:h-[815px] m-auto w-full">
                  <div className="md:h-[591px] h-[784px] sm:h-[815px] m-auto w-full">
                    <div className="md:h-[591px] h-[784px] sm:h-[815px] m-auto w-full">
                      <div className="absolute bottom-[0] md:h-[591px] h-[726px] sm:h-[815px] inset-x-[0] mx-auto w-full">
                        <div className="absolute bottom-[0] md:h-[591px] h-[633px] sm:h-[815px] inset-x-[0] mx-auto w-full">
                          <div className="absolute bottom-[0] md:h-[591px] h-[599px] sm:h-[815px] inset-x-[0] mx-auto w-full">
                            <div className="absolute h-[591px] sm:h-[815px] inset-[0] justify-center m-auto w-full">
                              <div className="h-[591px] sm:h-[815px] m-auto w-full">
                                <div className="flex sm:flex-col flex-row md:gap-10 h-full items-start justify-between m-auto w-full">
                                  <div className="flex h-[546px] md:h-[591px] justify-end mb-[45px] relative w-[32%] sm:w-full">
                                    <div className="bg-amber-500 h-1.5 mb-[88px] ml-[190px] mt-auto rounded-[50%] w-1.5"></div>
                                    <Img
                                      className="absolute h-[546px] inset-[0] justify-center m-auto object-cover"
                                      src="images/img_group111.png"
                                      alt="group111"
                                    />
                                  </div>
                                  <Img
                                    className="h-56 md:h-auto sm:mt-0 mt-[366px] object-cover"
                                    src="images/img_polygon35_lime_800.png"
                                    alt="polygonThirtyFour"
                                  />
                                </div>
                                <div className="absolute bottom-[34%] flex flex-col items-center justify-start right-[0] w-[5%]">
                                  <Img
                                    className="h-[159px] md:h-auto object-cover"
                                    src="images/img_polygon35_lime_800.png"
                                    alt="polygonThirtyFive"
                                  />
                                </div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[270px] items-end justify-start p-[13px] right-[1%] top-[21%] w-1/5"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group193.svg')",
                                }}
                              >
                                <div className="bg-amber-500 h-1.5 mb-[116px] mt-[119px] rounded-[50%] w-1.5"></div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[207px] right-[2%] top-[0]"
                              src="images/img_group193.svg"
                              alt="polygonThirtySeven"
                            />
                          </div>
                          <Img
                            className="absolute h-[158px] right-[3%] top-[0]"
                            src="images/img_group193.svg"
                            alt="polygonThirtyNine"
                          />
                        </div>
                        <Img
                          className="absolute h-[263px] object-cover right-[0] top-[0]"
                          src="images/img_polygon35_lime_800.png"
                          alt="polygonForty"
                        />
                      </div>
                      <Img
                        className="absolute h-[302px] object-cover right-[0] top-[0]"
                        src="images/img_polygon35_lime_800.png"
                        alt="polygonFortyOne"
                      />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[214px] items-start justify-start p-[37px] sm:px-5 right-[0] top-[26%] w-[8%]"
                      style={{
                        backgroundImage: "url('images/img_group196.png')",
                      }}
                    >
                      <div className="bg-amber-500 h-1.5 mb-[78px] mt-14 rounded-[50%] w-1.5"></div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[238px] right-[5%] top-[29%]"
                    src="images/img_vector2.svg"
                    alt="vectorTwo"
                  />
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[5%] top-[7%] w-[70%]">
                  <div className="h-[515px] relative w-[68%] md:w-full">
                    <div className="backdrop-opacity-[0.5] bg-lime-800 blur-[600.00px] h-[515px] m-auto rounded-[340px] w-full"></div>
                    <Button className="absolute bg-lime-800 bottom-[33%] cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[225px] mx-auto py-5 rounded-[30px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl">
                      Get Started
                    </Button>
                    <Text
                      className="absolute capitalize inset-x-[0] mx-auto md:text-5xl text-6xl text-center text-white-A700 top-[1%] w-[96%] sm:w-full"
                      size="txtInterBold60"
                    >
                      <span className="text-white-A700 font-inter font-bold">
                        Lorem ipsum{" "}
                      </span>
                      <span className="text-lime-800 font-inter font-bold">
                        dolor sit
                      </span>
                      <span className="text-white-A700 font-inter font-bold">
                        {" "}
                        amet consectetur.
                      </span>
                    </Text>
                    <Text
                      className="absolute inset-x-[0] leading-[142.52%] mx-auto text-[17px] text-center text-white-A700 top-[37%] w-[98%] sm:w-full"
                      size="txtInterMedium17"
                    >
                      Lorem ipsum dolor sit amet consectetur. Nisl sit nunc
                      convallis quam diam amet. Laoreet duis morbi ullamcorper
                      risus elementum pellentesque facilisis massa.
                    </Text>
                  </div>
                  <div className="bg-amber-500 h-1.5 mb-[98px] md:ml-[0] ml-[101px] md:mt-0 mt-[410px] rounded-[50%] w-1.5"></div>
                  <div className="bg-amber-500 h-1.5 mb-[334px] md:ml-[0] ml-[54px] md:mt-0 mt-[174px] rounded-[50%] w-1.5"></div>
                  <div className="bg-amber-500 h-1.5 mb-[385px] md:ml-[0] ml-[35px] md:mt-0 mt-[123px] rounded-[50%] w-1.5"></div>
                  <div className="bg-amber-500 h-1.5 mb-[408px] md:ml-[0] ml-[34px] md:mt-0 mt-[100px] rounded-[50%] w-1.5"></div>
                  <div className="bg-amber-500 h-1.5 mb-[187px] md:ml-[0] ml-[69px] md:mt-0 mt-[321px] rounded-[50%] w-1.5"></div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[963px] items-center justify-end mt-[-388.94px] mx-auto md:pr-10 sm:pr-5 pr-[42px] py-[42px] rounded-[54px] w-full z-[1]"
                style={{ backgroundImage: "url('images/img_group215.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mt-[151px] w-[99%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[145px] relative w-[11%]">
                      <div className="absolute bg-white-A700 h-[145px] inset-[0] justify-center m-auto rounded-[75px] w-full"></div>
                      <Img
                        className="absolute h-[66px] inset-[0] justify-center m-auto object-cover w-[38%]"
                        src="images/img_colorlogono_66x56.png"
                        alt="colorlogono_One"
                      />
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto rotate-[-89deg] w-[81%]">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="flex flex-col items-start justify-start w-[54%]">
                            <div className="flex flex-row items-start justify-evenly w-[60px] md:w-full">
                              <div className="h-14 md:h-[19px] mt-0.5 relative w-[82%]">
                                <div className="absolute bottom-[0] md:h-[17px] h-[50px] left-[0] w-4/5">
                                  <div className="absolute bottom-[0] md:h-[17px] h-[41px] left-[0] w-[70%]">
                                    <div className="absolute bottom-[0] md:h-[17px] h-[30px] left-[0] w-[71%]">
                                      <Text
                                        className="absolute bottom-[0] left-[0] rotate-[165deg] text-[13.9px] text-gray-900 uppercase"
                                        size="txtInterSemiBold139"
                                      >
                                        S
                                      </Text>
                                      <Text
                                        className="absolute right-[0] rotate-[150deg] text-[13.9px] text-gray-900 top-[0] uppercase"
                                        size="txtInterSemiBold139"
                                      >
                                        c
                                      </Text>
                                    </div>
                                    <Text
                                      className="absolute right-[0] rotate-[136deg] text-[13.9px] text-gray-900 top-[0] uppercase"
                                      size="txtInterSemiBold139"
                                    >
                                      r
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute right-[0] rotate-[121deg] text-[13.9px] text-gray-900 top-[0] uppercase"
                                    size="txtInterSemiBold139"
                                  >
                                    o
                                  </Text>
                                </div>
                                <Text
                                  className="absolute right-[0] rotate-[107deg] text-[13.9px] text-gray-900 top-[0] uppercase"
                                  size="txtInterSemiBold139"
                                >
                                  l
                                </Text>
                              </div>
                              <Text
                                className="rotate-[94deg] text-[13.9px] text-gray-900 uppercase"
                                size="txtInterSemiBold139"
                              >
                                l
                              </Text>
                            </div>
                            <Text
                              className="mt-[13px] rotate-[-164deg] text-[13.9px] text-gray-900 uppercase"
                              size="txtInterSemiBold139"
                            >
                              n
                            </Text>
                            <Text
                              className="ml-1.5 md:ml-[0] rotate-[-147deg] text-[13.9px] text-gray-900 uppercase"
                              size="txtInterSemiBold139"
                            >
                              w
                            </Text>
                            <div className="flex flex-row gap-2.5 items-end justify-end md:ml-[0] ml-[19px] w-[70%] md:w-full">
                              <div className="md:h-4 h-[22px] mb-1 relative w-3/5">
                                <Text
                                  className="absolute bottom-[0] right-[0] rotate-[-113deg] text-[13.9px] text-gray-900 uppercase"
                                  size="txtInterSemiBold139"
                                >
                                  d
                                </Text>
                                <Text
                                  className="absolute left-[0] rotate-[-129deg] text-[13.9px] text-gray-900 top-[0] uppercase"
                                  size="txtInterSemiBold139"
                                >
                                  o
                                </Text>
                              </div>
                              <Text
                                className="mt-[9px] rotate-[-92deg] text-[13.9px] text-gray-900 uppercase"
                                size="txtInterSemiBold139"
                              >
                                l
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start w-[44%]">
                            <Text
                              className="ml-0.5 md:ml-[0] rotate-[73deg] text-[13.9px] text-gray-900 uppercase"
                              size="txtInterSemiBold139"
                            >
                              d
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[15px] rotate-[58deg] text-[13.9px] text-gray-900 uppercase"
                              size="txtInterSemiBold139"
                            >
                              o
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[26px] rotate-[40deg] text-[13.9px] text-gray-900 uppercase"
                              size="txtInterSemiBold139"
                            >
                              w
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[38px] rotate-[22deg] text-[13.9px] text-gray-900 uppercase"
                              size="txtInterSemiBold139"
                            >
                              n
                            </Text>
                            <div className="flex flex-row items-end justify-evenly mt-[25px] w-[53px] md:w-full">
                              <Text
                                className="mt-[35px] rotate-[-80deg] text-[13.9px] text-gray-900 uppercase"
                                size="txtInterSemiBold139"
                              >
                                l
                              </Text>
                              <div className="md:h-[21px] h-[47px] mb-1 relative w-4/5">
                                <div className="absolute h-10 md:h-[17px] right-[0] top-[0] w-[72%]">
                                  <div className="absolute md:h-[17px] h-[29px] right-[0] top-[0] w-[70%]">
                                    <Text
                                      className="absolute right-[0] rotate-[-22deg] text-[13.9px] text-gray-900 top-[0] uppercase"
                                      size="txtInterSemiBold139"
                                    >
                                      S
                                    </Text>
                                    <Text
                                      className="absolute bottom-[0] left-[0] rotate-[-36deg] text-[13.9px] text-gray-900 uppercase"
                                      size="txtInterSemiBold139"
                                    >
                                      c
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute bottom-[0] left-[0] rotate-[-51deg] text-[13.9px] text-gray-900 uppercase"
                                    size="txtInterSemiBold139"
                                  >
                                    r
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[0] left-[0] rotate-[-66deg] text-[13.9px] text-gray-900 uppercase"
                                  size="txtInterSemiBold139"
                                >
                                  o
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[42px] sm:text-[35px] md:text-[41px] text-[45px] text-lime-800"
                      size="txtInterBold45"
                    >
                      About Us
                    </Text>
                    <Text
                      className="mt-2.5 text-[17px] text-white-A700"
                      size="txtInterMedium17"
                    >
                      Lorem ipsum dolor sit amet{" "}
                    </Text>
                    <div className="flex md:flex-col flex-row font-poppins md:gap-[54px] items-center justify-between mt-14 w-full">
                      <Img
                        className="h-[398px] md:h-auto object-cover rounded-br-[226px] rounded-tr-[226px]"
                        src="images/img_rectangle215.png"
                        alt="rectangle215"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-[57%] md:w-full">
                            <Text
                              className="border border-lime-800 border-solid flex h-6 items-center justify-center rounded-[50%] text-center text-lime-800 text-sm w-6"
                              size="txtPoppinsBlack14"
                            >
                              1
                            </Text>
                            <Text
                              className="border border-lime-800 border-solid flex h-6 items-center justify-center rounded-[50%] text-center text-lime-800 text-sm w-6"
                              size="txtPoppinsBlack14"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between mt-2.5 w-full">
                            <Text
                              className="leading-[20.00px] text-sm text-white-A700"
                              size="txtPoppinsMedium14"
                            >
                              <>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley
                              </>
                            </Text>
                            <Text
                              className="leading-[20.00px] text-sm text-white-A700"
                              size="txtPoppinsMedium14"
                            >
                              <>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between mt-10 w-[57%] md:w-full">
                            <Text
                              className="border border-lime-800 border-solid flex h-6 items-center justify-center rounded-[50%] text-center text-lime-800 text-sm w-6"
                              size="txtPoppinsBlack14"
                            >
                              3
                            </Text>
                            <Text
                              className="border border-lime-800 border-solid flex h-6 items-center justify-center rounded-[50%] text-center text-lime-800 text-sm w-6"
                              size="txtPoppinsBlack14"
                            >
                              4
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between mt-2.5 w-full">
                            <Text
                              className="leading-[20.00px] text-sm text-white-A700"
                              size="txtPoppinsMedium14"
                            >
                              <>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley
                              </>
                            </Text>
                            <Text
                              className="leading-[20.00px] text-sm text-white-A700"
                              size="txtPoppinsMedium14"
                            >
                              <>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] items-center justify-start mt-10 w-[45%] md:w-full">
                            <Button className="bg-lime-800 cursor-pointer font-bold min-w-[160px] py-3.5 rounded-[25px] text-center text-sm text-white-A700">
                              Help Me
                            </Button>
                            <Text
                              className="text-lime-800 text-sm"
                              size="txtPoppinsBold14"
                            >
                              More Information
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:h-[2482px] h-[2594px] md:h-[2631px] mt-[65px] md:px-5 relative w-full">
              <div className="absolute sm:h-[2417px] h-[2423px] md:h-[2566px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute h-[2417px] md:h-[2566px] inset-[0] justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between m-auto w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[760px] items-start justify-start w-[26%] md:w-full">
                      <div className="h-[515px] relative w-full">
                        <Img
                          className="h-[515px] m-auto object-cover w-full"
                          src="images/img_ellipse347.png"
                          alt="ellipse347"
                        />
                        <div className="absolute bg-lime-800 flex flex-col h-max inset-y-[0] items-center justify-center my-auto px-10 sm:px-5 py-5 right-[11%] rounded-[31px] w-auto">
                          <Text
                            className="text-white-A700 text-xl w-auto"
                            size="txtInterSemiBold20"
                          >
                            Why Nimbus-AI ?
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[619px] md:h-auto object-cover w-[88%]"
                        src="images/img_ellipse349.png"
                        alt="ellipse349"
                      />
                    </div>
                    <div className="flex flex-col md:mt-0 mt-[185px] relative w-[66%] md:w-full">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-col md:gap-10 gap-[516px] justify-start w-full">
                          <Img
                            className="h-[467px]"
                            src="images/img_group108.svg"
                            alt="group108"
                          />
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[846px] items-start justify-end md:ml-[0] ml-[79px] p-[91px] md:px-10 sm:px-5 w-[92%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group216.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[35px] items-center justify-start ml-3 md:ml-[0] mt-[589px] w-[32%] md:w-full">
                              <Switch
                                onColor="#ffffff"
                                offColor="#ffffff"
                                onHandleColor="#c19807"
                                offHandleColor="#c19807"
                                value={false}
                                className="rotate-[180deg] w-[42%]"
                              />
                              <Text
                                className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-500"
                                size="txtInterSemiBold30"
                              >
                                Yearly
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-[515px] ml-auto mt-[-NaNpx] object-cover w-[28%] z-[1]"
                        src="images/img_ellipse348.png"
                        alt="ellipse348"
                      />
                      <Img
                        className="h-[535px] ml-auto mt-[-133.79px] object-cover w-[32%] z-[1]"
                        src="images/img_ellipse350.png"
                        alt="ellipse350"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[41px] items-start justify-start left-[6%] top-[14%] w-3/4">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                      size="txtInterSemiBold50"
                    >
                      A more effective way to learn Cybersecurity.
                    </Text>
                    <div className="bg-blue_gray-900_cc flex flex-col items-center justify-start p-[33px] sm:px-5 rounded-[30px] w-[34%] md:w-full">
                      <Img
                        className="h-[166px] md:h-auto object-cover w-[51%] sm:w-full"
                        src="images/img_depositphotos5.png"
                        alt="depositphotosFive"
                      />
                      <Text
                        className="mt-[27px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                        size="txtInterBold22"
                      >
                        Top-quality content
                      </Text>
                      <Text
                        className="mb-8 mt-3 text-[15px] text-white-A700"
                        size="txtInterRegular15"
                      >
                        Lorem ipsum dolor sit amet
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto top-[18%] w-[92%]">
                  <Img
                    className="h-[515px] md:mt-0 mt-[342px]"
                    src="images/img_group107.svg"
                    alt="group107"
                  />
                  <div className="bg-blue_gray-900_cc flex flex-col items-center justify-start mb-[507px] md:ml-[0] ml-[142px] p-[47px] md:px-10 sm:px-5 rounded-[30px] w-[28%] md:w-full">
                    <Img
                      className="h-[180px] md:h-auto object-cover w-[74%] sm:w-full"
                      src="images/img_pngtreeyellow.png"
                      alt="pngtreeyellow"
                    />
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterBold22"
                    >
                      Engaging and gamified
                    </Text>
                    <Text
                      className="mb-[18px] mt-[11px] text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="bg-blue_gray-900_cc flex flex-col items-center justify-start mb-[507px] md:ml-[0] ml-[104px] p-[65px] md:px-10 sm:px-5 rounded-[30px] w-[28%] md:w-full">
                    <Img
                      className="h-[136px] md:h-auto object-cover rounded-[16px] w-[66%] sm:w-full"
                      src="images/img_6473515ef753275.png"
                      alt="6473515ef753275"
                    />
                    <Text
                      className="mt-[25px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterBold22"
                    >
                      Hacking Community
                    </Text>
                    <Text
                      className="mt-[11px] text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[82%]">
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[9px] items-center justify-between w-full">
                      <div className="flex relative w-[31%] md:w-full">
                        <div className="flex flex-col items-center justify-start my-auto p-[22px] sm:px-5 w-[55%]">
                          <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[31px] items-start justify-start pb-[9px] px-[9px] w-[89%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group220.svg')",
                              }}
                            >
                              <Img
                                className="h-1.5 mb-[15px]"
                                src="images/img_vector.svg"
                                alt="vector"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly mt-[3px] w-full">
                              <div className="h-[13px] relative w-[94%]">
                                <Img
                                  className="h-3 m-auto"
                                  src="images/img_vector_white_a700.svg"
                                  alt="vector_One"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-row h-full inset-[0] items-center justify-center m-auto px-[11px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group221.svg')",
                                  }}
                                >
                                  <div className="h-[13px] relative w-[23%]">
                                    <Img
                                      className="h-3 m-auto"
                                      src="images/img_save.svg"
                                      alt="save"
                                    />
                                    <Img
                                      className="absolute h-[13px] inset-[0] justify-center m-auto"
                                      src="images/img_save_white_a700.svg"
                                      alt="save_One"
                                    />
                                  </div>
                                  <div className="h-[13px] relative w-1/4">
                                    <Img
                                      className="h-3 m-auto"
                                      src="images/img_mobile.svg"
                                      alt="mobile"
                                    />
                                    <Img
                                      className="absolute h-[13px] inset-[0] justify-center m-auto"
                                      src="images/img_mobile_white_a700.svg"
                                      alt="mobile_One"
                                    />
                                  </div>
                                  <div className="h-[13px] relative w-3">
                                    <Img
                                      className="h-3 my-auto"
                                      src="images/img_arrowright.svg"
                                      alt="arrowright"
                                    />
                                    <Img
                                      className="absolute h-[13px] inset-[0] justify-center m-auto w-3"
                                      src="images/img_save_white_a700_13x12.svg"
                                      alt="save_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="h-0.5"
                                src="images/img_vector_white_a700_2x4.svg"
                                alt="vector_Two"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[92px] ml-[-31px] my-auto z-[1]"
                          src="images/img_intellogo1.svg"
                          alt="intellogoOne"
                        />
                      </div>
                      <Img
                        className="h-[92px]"
                        src="images/img_akervalogo1.svg"
                        alt="akervalogoOne"
                      />
                      <Img
                        className="h-[92px]"
                        src="images/img_deloittelogo1.svg"
                        alt="deloittelogoOne"
                      />
                      <Img
                        className="h-[92px]"
                        src="images/img_synacklogo1.svg"
                        alt="synacklogoOne"
                      />
                      <Img
                        className="h-[92px]"
                        src="images/img_boozallen1.svg"
                        alt="boozallenOne"
                      />
                    </div>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterBold22"
                    >
                      Trusted by the world’s most ambitious cybersecurity teams
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-amber-500_4c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[37px] sm:px-5 w-full">
                <div className="flex flex-col gap-[49px] items-center justify-start mt-[23px] w-[88%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtInterBold48"
                  >
                    Testimonials
                  </Text>
                  <div className="flex flex-col gap-[55px] items-center justify-start w-full">
                    <div className="font-poppins md:gap-5 gap-[46px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[40px] w-full">
                        <div className="flex flex-col gap-2.5 justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between w-full">
                            <Img
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne"
                            />
                            <div className="flex flex-col gap-2 justify-start">
                              <Text
                                className="ml-1.5 md:ml-[0] text-gray-900 text-lg"
                                size="txtPoppinsBold18"
                              >
                                Courtney Henry
                              </Text>
                              <Text
                                className="leading-[22.00px] text-blue_gray-800 text-sm w-full"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it
                                  to make a type specimen book
                                </>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[18px] md:ml-[0] ml-[94px]"
                            src="images/img_group30.svg"
                            alt="groupThirty"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[40px] w-full">
                        <div className="flex flex-col gap-2.5 justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between w-full">
                            <Img
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne"
                            />
                            <div className="flex flex-col gap-2 justify-start">
                              <Text
                                className="ml-1.5 md:ml-[0] text-gray-900 text-lg"
                                size="txtPoppinsBold18"
                              >
                                Courtney Henry
                              </Text>
                              <Text
                                className="leading-[22.00px] text-blue_gray-800 text-sm w-full"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it
                                  to make a type specimen book
                                </>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[18px] md:ml-[0] ml-[94px]"
                            src="images/img_group30.svg"
                            alt="groupThirty"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[40px] w-full">
                        <div className="flex flex-col gap-2.5 justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between w-full">
                            <Img
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne"
                            />
                            <div className="flex flex-col gap-2 justify-start">
                              <Text
                                className="ml-1.5 md:ml-[0] text-gray-900 text-lg"
                                size="txtPoppinsBold18"
                              >
                                Courtney Henry
                              </Text>
                              <Text
                                className="leading-[22.00px] text-blue_gray-800 text-sm w-full"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it
                                  to make a type specimen book
                                </>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[18px] md:ml-[0] ml-[94px]"
                            src="images/img_group30.svg"
                            alt="groupThirty"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[40px] w-full">
                        <div className="flex flex-col gap-2.5 justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between w-full">
                            <Img
                              className="h-20 md:h-auto rounded-[50%] w-20"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne"
                            />
                            <div className="flex flex-col gap-2 justify-start">
                              <Text
                                className="ml-1.5 md:ml-[0] text-gray-900 text-lg"
                                size="txtPoppinsBold18"
                              >
                                Courtney Henry
                              </Text>
                              <Text
                                className="leading-[22.00px] text-blue_gray-800 text-sm w-full"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever since the 1500s, when an unknown
                                  printer took a galley of type and scrambled it
                                  to make a type specimen book
                                </>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[18px] md:ml-[0] ml-[94px]"
                            src="images/img_group30.svg"
                            alt="groupThirty"
                          />
                        </div>
                      </div>
                    </div>
                    <Button className="bg-white-A700 cursor-pointer font-inter font-semibold min-w-[100px] py-4 rounded-[12px] text-[13px] text-center text-lime-800">
                      See More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[26%] flex flex-col gap-[35px] inset-x-[0] justify-start mx-auto">
                <Text
                  className="md:text-5xl text-6xl text-center text-white-A700"
                  size="txtInterBold60"
                >
                  Get your best deal
                </Text>
                <Text
                  className="md:ml-[0] ml-[78px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInterSemiBold30WhiteA700"
                >
                  Monthly
                </Text>
              </div>
              <div className="absolute bg-gray-900 bottom-[0] flex flex-col items-center justify-end left-[6%] p-[25px] sm:px-5 rounded-[18px] w-[28%]">
                <div className="flex flex-col items-start justify-start mt-3.5 w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtInterSemiBold30WhiteA700"
                  >
                    Personal
                  </Text>
                  <Input
                    name="language_One"
                    placeholder="Lorem ipsum dolor sit amet. "
                    className="p-0 placeholder:text-gray-500_01 sm:pr-5 text-[17px] text-gray-500_01 text-left w-full"
                    wrapClassName="border-b border-gray-400 mt-[11px] pb-[30px] pr-[35px] w-full"
                  ></Input>
                  <div className="flex flex-row items-start justify-start mt-[31px] w-[51%] md:w-full">
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                      size="txtInterBold45WhiteA700"
                    >
                      $200
                    </Text>
                    <Text
                      className="ml-[3px] mt-[27px] text-gray-200 text-sm"
                      size="txtInterRegular14"
                    >
                      /Month
                    </Text>
                  </div>
                  <CheckBox
                    className="mt-[71px] text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_Nine"
                    id="loremipsumdolor_Nine"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_Eleven"
                    id="loremipsumdolor_Eleven"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_Thirteen"
                    id="loremipsumdolor_Thirteen"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <Button className="bg-lime-800 cursor-pointer font-semibold min-w-[340px] mt-[158px] py-[15px] rounded-[25px] text-base text-center text-white-A700">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="absolute bg-lime-800 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[18px] w-[28%]">
                <div className="flex flex-col items-start justify-start mt-[17px] w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtInterSemiBold30WhiteA700"
                  >
                    Regular
                  </Text>
                  <Input
                    name="language_Two"
                    placeholder="Lorem ipsum dolor sit amet. "
                    className="p-0 placeholder:text-gray-200_01 sm:pr-5 text-[17px] text-gray-200_01 text-left w-full"
                    wrapClassName="border-b border-gray-400 mt-2 pb-[30px] pr-[35px] w-full"
                  ></Input>
                  <div className="flex flex-row items-start justify-start mt-[31px] w-[51%] md:w-full">
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                      size="txtInterBold45WhiteA700"
                    >
                      $500
                    </Text>
                    <Text
                      className="ml-0.5 mt-[27px] text-gray-200 text-sm"
                      size="txtInterRegular14"
                    >
                      /Month
                    </Text>
                  </div>
                  <CheckBox
                    className="mt-[71px] text-[17px] text-gray-200_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_Fifteen"
                    id="loremipsumdolor_Fifteen"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-200_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_Seventeen"
                    id="loremipsumdolor_Seventeen"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-200_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_Nineteen"
                    id="loremipsumdolor_Nineteen"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-200_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_TwentyOne"
                    id="loremipsumdolor_TwentyOne"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <Button className="bg-white-A700 cursor-pointer font-semibold min-w-[340px] mt-[120px] py-[15px] rounded-[25px] text-base text-center text-lime-800">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="absolute bg-gray-900 bottom-[0] flex flex-col items-center justify-end p-[25px] sm:px-5 right-[6%] rounded-[18px] w-[28%]">
                <div className="flex flex-col items-start justify-start mt-3.5 w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtInterSemiBold30WhiteA700"
                  >
                    Premium
                  </Text>
                  <Input
                    name="language_Three"
                    placeholder="Lorem ipsum dolor sit amet. "
                    className="p-0 placeholder:text-gray-500_01 sm:pr-5 text-[17px] text-gray-500_01 text-left w-full"
                    wrapClassName="border-b border-gray-400 mt-[11px] pb-[30px] pr-[35px] w-full"
                  ></Input>
                  <div className="flex flex-row items-start justify-start mt-[31px] w-[59%] md:w-full">
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                      size="txtInterBold45WhiteA700"
                    >
                      $1000
                    </Text>
                    <Text
                      className="ml-[5px] mt-[27px] text-gray-200 text-sm"
                      size="txtInterRegular14"
                    >
                      /Month
                    </Text>
                  </div>
                  <CheckBox
                    className="mt-[71px] text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_TwentyThree"
                    id="loremipsumdolor_TwentyThree"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_TwentyFive"
                    id="loremipsumdolor_TwentyFive"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_TwentySeven"
                    id="loremipsumdolor_TwentySeven"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_TwentyNine"
                    id="loremipsumdolor_TwentyNine"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <CheckBox
                    className="mt-4 text-[17px] text-gray-500_01 text-left"
                    inputClassName="mr-[5px]"
                    name="loremipsumdolor_ThirtyOne"
                    id="loremipsumdolor_ThirtyOne"
                    label="Lorem ipsum dolor sit amet. "
                  ></CheckBox>
                  <Button className="bg-lime-800 cursor-pointer font-semibold min-w-[340px] mt-[82px] py-[15px] rounded-[25px] text-base text-center text-white-A700">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="font-poppins md:h-[659px] sm:h-[672px] h-[755px] mt-[88px] md:px-5 relative w-full">
              <div className="absolute md:h-[571px] h-[641px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="absolute bottom-[0] h-[571px] left-[0] object-cover w-[22%]"
                  src="images/img_ellipse351.png"
                  alt="ellipse351"
                />
                <div className="absolute md:h-[387px] h-[397px] sm:h-[416px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="absolute bg-gradient  flex flex-col gap-6 inset-x-[0] items-start justify-end mx-auto p-[83px] md:px-10 sm:px-5 top-[0] w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[45px] mt-[45px]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        Join our Newsletter
                      </Text>
                      <Text
                        className="leading-[26.00px] text-base text-blue_gray-100_01 w-full"
                        size="txtPoppinsRegular16"
                      >
                        Subscribe to our newsletter for curated content and
                        event notifications. Stay connected and be part of our
                        vibrant community.
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start md:ml-[0] ml-[45px] w-[42%] md:w-full">
                      <Input
                        name="emailhereform"
                        placeholder="Email Here..."
                        className="p-0 placeholder:text-blue_gray-700_87 sm:pr-5 text-blue_gray-700_87 text-left text-sm w-full"
                        wrapClassName="bg-white-A700 border border-blue_gray-100_02 border-solid pl-[13px] pr-[35px] py-[9px] rounded-lg w-[77%] sm:w-full"
                        type="email"
                      ></Input>
                      <Button className="bg-white-A700 cursor-pointer font-bold min-w-[110px] py-[11px] rounded-lg shadow-bs3 text-center text-lime-800 text-xs">
                        SUBSCRIBE
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[36%]">
                    <Img
                      className="h-[387px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image_Ten"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-900 bottom-[0] flex flex-col font-inter inset-x-[0] items-center justify-end mx-auto p-2.5 w-full">
                <Img
                  className="h-[76px] md:h-auto mt-[26px] object-cover w-[14%] sm:w-full"
                  src="images/img_colorlogono.png"
                  alt="colorlogono_Two"
                />
                <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-center mt-8 w-[33%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16WhiteA700"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16WhiteA700"
                  >
                    About Us
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16WhiteA700"
                  >
                    How it works
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16WhiteA700"
                  >
                    Pricing
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16WhiteA700"
                  >
                    Features
                  </Text>
                </div>
                <div className="flex flex-row gap-[37.78px] items-start justify-start mt-[33px] w-auto">
                  <Button className="bg-lime-800 flex h-[37px] items-center justify-center rounded-[18px] w-[37px]">
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>
                  <Button className="bg-lime-800 flex h-[37px] items-center justify-center p-[7px] rounded-[18px] w-[37px]">
                    <Img src="images/img_twitter.svg" alt="twitter" />
                  </Button>
                  <Img
                    className="h-[37px] rounded-[50%] w-[37px]"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                  <Button className="bg-lime-800 flex h-[37px] items-center justify-center p-2 rounded-[18px] w-[37px]">
                    <Img
                      className="h-5"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </Button>
                  <Img
                    className="h-[37px] rounded-[50%] w-[37px]"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                </div>
                <Line className="bg-gray-500_02 h-0.5 mt-[42px] w-[82%]" />
                <div className="flex flex-row items-center justify-center mt-[34px] w-[26%] md:w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_mdicopyright.svg"
                    alt="mdicopyright"
                  />
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtInterMedium17"
                  >
                    <span className="text-white-A700 font-inter text-left font-medium">
                      2023 NIMBUS - AIUSA{" "}
                    </span>
                    <span className="text-white-A700 font-inter text-left font-bold">
                      |{" "}
                    </span>
                    <span className="text-white-A700 font-inter text-left font-medium">
                      All rights reserved.
                    </span>
                  </Text>
                </div>
                <Text
                  className="mt-[22px] text-[15px] text-white-A700"
                  size="txtInterMedium15"
                >
                  <span className="text-white-A700 font-inter text-left font-medium">
                    Powered By{" "}
                  </span>
                  <span className="text-lime-800 font-inter text-left font-medium">
                    Orglobal Tech
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
