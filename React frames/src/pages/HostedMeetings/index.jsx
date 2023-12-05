import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const HostedMeetingsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins gap-[23px] justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[1089px] md:h-[NaNpx] ml-auto mt-[-NaNpx] w-[86%] md:w-full z-[1]">
              <div className="flex flex-col md:gap-10 gap-[647px] h-full justify-start m-auto w-full">
                <Img
                  className="h-[184px] md:h-auto mr-[930px] object-cover w-[29%]"
                  src="images/img_blob2_184x368.png"
                  alt="blobTwo"
                />
                <Img
                  className="h-[258px] md:h-auto md:ml-[0] ml-[1162px] object-cover w-[11%]"
                  src="images/img_blob1_1.png"
                  alt="blobOne"
                />
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start mb-[550px] mr-[100px] mt-auto right-[8%] w-[74%]">
                <Text
                  className="md:ml-[0] ml-[250px] sm:text-[38.94px] md:text-[44.94px] text-[48.94px] text-white-A700"
                  size="txtPoppinsBold4894"
                >
                  Hosted Meetings
                </Text>
                <Line className="bg-white-A700 h-px md:ml-[0] ml-[250px] mt-[7px] w-full" />
                <div className="sm:h-[867px] md:h-[936px] h-[93px] mt-[774px] opacity-0 relative w-full">
                  <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[47px] h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                    <Text
                      className="md:mt-0 mt-2 opacity-0 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                      size="txtKollektif2855"
                    >
                      Excel Excellence: Unlocking the Mysteries of Spr...
                    </Text>
                    <Img
                      className="h-8 md:h-auto mr-2.5 md:mt-0 mt-[11px] object-cover opacity-0 w-8"
                      src="images/img_arrowdownsigntonavigate_32x32.png"
                      alt="arrowdownsignto"
                    />
                  </div>
                  <Button
                    className="absolute cursor-pointer font-poppins h-full inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto opacity-0 rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                    size="sm"
                  >
                    04 July
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mb-[100px] ml-auto mr-[103px] mt-[-1000px] w-[64%] z-[1]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                <Text
                  className="opacity-0 sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700"
                  size="txtPoppinsRegular3262"
                >
                  August 2023
                </Text>
                <Img
                  className="h-[47px] md:h-auto md:ml-[0] ml-[623px] object-cover opacity-0 w-[47px]"
                  src="images/img_sort1.png"
                  alt="sortOne"
                />
                <Text
                  className="md:ml-[0] ml-[11px] md:mt-0 mt-[3px] opacity-0 sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700"
                  size="txtKollektif3262"
                >
                  Sort
                </Text>
              </div>
              <List
                className="flex flex-col gap-[22px] items-center mt-[27px] w-full"
                orientation="vertical"
              >
                <div
                  className="common-pointer md:h-36 h-[93px] relative w-full"
                  onClick={() => navigate("/teamdashboard")}
                >
                  <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[25px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                    <Text
                      className="md:ml-[0] ml-[196px] md:mt-0 my-1 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700 w-[600px]"
                      size="txtKollektif2855"
                    >
                      The Annual Conference on How to Schedule More...
                    </Text>
                    <Img
                      className="h-8 md:h-auto mr-2.5 object-cover w-8"
                      src="images/img_arrowdownsigntonavigate_32x32.png"
                      alt="arrowdownsignto"
                    />
                  </div>
                  <Button
                    className="absolute cursor-pointer font-poppins h-full inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                    size="sm"
                  >
                    28 Aug
                  </Button>
                </div>
                <div className="md:h-[136px] sm:h-[93px] h-[94px] relative w-full">
                  <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[17px] h-max inset-[0] items-start justify-center m-auto p-[26px] sm:px-5 rounded-[12px] w-full">
                    <Text
                      className="mr-[100px] md:mt-0 mt-[5px] opacity-0 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                      size="txtKollektif2855"
                    >
                      Innovative Solutions for Running Out of Office Sup...
                    </Text>
                    <Img
                      className="h-8 md:h-auto mr-2 md:mt-0 mt-[7px] object-cover w-8"
                      src="images/img_arrowdownsigntonavigate_32x32.png"
                      alt="arrowdownsignto"
                    />
                  </div>
                  <Button
                    className="absolute cursor-pointer font-poppins h-max inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                    size="sm"
                  >
                    20 Aug
                  </Button>
                </div>
              </List>
              <div className="sm:h-[116px] md:h-[409px] h-[93px] mt-[23px] relative w-full">
                <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[39px] h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="mb-[230px] md:ml-[0] ml-[151px] md:mt-0 mt-[7px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700 w-[500px]"
                    size="txtKollektif2855"
                  >
                    Mission Impossible: Finding the Office Coffee Thief
                  </Text>
                  <Img
                    className="h-8 md:h-auto mr-[9px] object-cover w-8"
                    src="images/img_arrowdownsigntonavigate_32x32.png"
                    alt="arrowdownsignto_One"
                  />
                </div>
                <Text
                  className="absolute bg-blue_gray-100_21 h-full inset-y-[0] justify-center left-[0] my-auto pl-[55px] pr-[35px] sm:px-5 py-[25px] rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700 w-[200px]"
                  size="txtPoppinsRegular2855"
                >
                  12 Aug
                </Text>
              </div>
              <Text
                className="mt-[42px] sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700"
                size="txtPoppinsRegular3262"
              >
                July 2023
              </Text>
              <div className="sm:h-[111px] md:h-[182px] h-[93px] mt-[18px] relative w-full">
                <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[45px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="md:ml-[0] ml-[200px] md:mt-0 my-1 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                    size="txtKollektif2855"
                  >
                    Secrets of the Universe Unveiled in the Breakroom
                  </Text>
                  <Img
                    className="h-8 md:h-auto mr-2.5 object-cover w-8"
                    src="images/img_arrowdownsigntonavigate_32x32.png"
                    alt="arrowdownsignto_Two"
                  />
                </div>
                <Text
                  className="absolute bg-blue_gray-100_21 h-full inset-y-[0] justify-center left-[0] my-auto pb-[23px] pl-[55px] pr-[35px] pt-[27px] sm:px-5 rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700 w-[200px]"
                  size="txtPoppinsRegular2855"
                >
                  11 July
                </Text>
              </div>
              <div className="sm:h-[116px] md:h-[182px] h-[93px] mt-[23px] relative w-full">
                <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-10 h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="md:ml-[0] ml-[200px] md:mt-0 my-1 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                    size="txtKollektif2855"
                  >
                    The Art of Procrastination: A Masterclass for the...
                  </Text>
                  <Img
                    className="h-8 md:h-auto mr-2.5 object-cover w-8"
                    src="images/img_arrowdownsigntonavigate_32x32.png"
                    alt="arrowdownsignto_Three"
                  />
                </div>
                <Button
                  className="absolute cursor-pointer font-poppins h-full inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                  size="sm"
                >
                  09 July
                </Button>
              </div>
            </div>
            <div className="md:h-[114px] sm:h-[47px] h-[93px] ml-auto mr-[103px] mt-[-46px] w-[64%] md:w-full z-[1]">
              <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[45px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="common-pointer md:ml-[0] ml-[520px] md:mt-0 mt-[-625px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                  size="txtKollektif2855"
                  onClick={() => navigate("/teamdashboard")}
                >
                  Secrets of the Universe Unveiled in the Breakroom
                </Text>
                <Img
                  className="h-8 md:h-auto mr-2.5 object-cover opacity-0 w-8"
                  src="images/img_arrowdownsigntonavigate_32x32.png"
                  alt="arrowdownsignto_Four"
                />
              </div>
              <Text
                className="absolute bg-blue_gray-100_21 h-full inset-y-[0] justify-center left-[0] my-auto opacity-0 pb-[23px] pt-[27px] sm:px-5 px-[35px] rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700 w-[200px]"
                size="txtPoppinsRegular2855"
              >
                11 July
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-kollektif md:gap-10 items-start justify-between mt-[-NaNpx] mx-auto w-full z-[1]">
              <div className="bg-gray-900_3d block border border-gray-800 border-solid flex-col items-center justify-start md:mt-0 mt-[-875px] p-[11px] rounded-[40px]">
                <Img
                  className="h-[68px] sm:h-auto mt-[11px] object-cover w-[96%] md:w-full"
                  src="images/img_logo.png"
                  alt="logo"
                />
                <div className="bg-amber-A200 flex flex-col items-center justify-start mt-[120px] pt-[9px] px-[9px] rounded-[10px] w-[30%] md:w-full">
                  <Img
                    className="h-[94px] md:h-auto mt-[15px] object-cover w-[99%]"
                    src="images/img_image11.png"
                    alt="imageEleven"
                  />
                </div>
                <div className="flex flex-col gap-[15px] justify-start mt-[19px] w-[83%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                    size="txtKollektifBold35"
                  >
                    Gayatri
                  </Text>
                  <Line className="bg-white-A700 h-px w-full" />
                </div>
                <div className="flex flex-col items-start justify-start mb-[95px] mt-[35px]">
                  <Text
                    className="common-pointer ml-0.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektif30WhiteA700"
                    onClick={() => navigate("/meetingtype")}
                  >
                    Home
                  </Text>
                  <Text
                    className="mt-11 text-3xl sm:text-[26px] md:text-[28px] text-purple-100"
                    size="txtKollektifBold30"
                  >
                    Hosted Meetings
                  </Text>
                  <Text
                    className="mt-[42px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektif30WhiteA700"
                  >
                    Attended Meetings
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-10 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektif30WhiteA700"
                  >
                    Add a Team
                  </Text>
                  <Text
                    className="mt-[45px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektif30WhiteA700"
                  >
                    Settings
                  </Text>
                  <Text
                    className="mt-[42px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektif30WhiteA700"
                  >
                    Help
                  </Text>
                </div>
              </div>
              <Img
                className="h-[607px] md:h-auto object-cover"
                src="images/img_blob4_607x355.png"
                alt="blobFour"
              />
            </div>
          </div>
        </div>
        <div className="block flex-col items-end opacity-0 md:px-10 sm:px-5 px-[103px] w-[0] md:w-full">
          <List
            className="flex flex-col gap-[23px] w-[74%]"
            orientation="vertical"
          >
            <div className="md:h-[159px] h-[93px] my-0 relative w-full">
              <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-10 h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:mt-0 my-1 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                  size="txtKollektif2855"
                >
                  The Art of Procrastination: A Masterclass for the...
                </Text>
                <Img
                  className="h-8 md:h-auto mr-2.5 object-cover w-8"
                  src="images/img_arrowdownsigntonavigate_32x32.png"
                  alt="arrowdownsignto"
                />
              </div>
              <Button
                className="absolute cursor-pointer font-poppins h-full inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                size="sm"
              >
                09 July
              </Button>
            </div>
            <div className="md:h-[162px] h-[93px] my-0 relative w-full">
              <div className="absolute bg-blue_gray-100_21 flex md:flex-col flex-row font-kollektif gap-[47px] h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="md:mt-0 mt-2 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                  size="txtKollektif2855"
                >
                  Excel Excellence: Unlocking the Mysteries of Spr...
                </Text>
                <Img
                  className="h-8 md:h-auto mr-2.5 md:mt-0 mt-[11px] object-cover w-8"
                  src="images/img_arrowdownsigntonavigate_32x32.png"
                  alt="arrowdownsignto"
                />
              </div>
              <Button
                className="absolute cursor-pointer font-poppins h-full inset-y-[0] leading-[normal] left-[0] min-w-[200px] my-auto rounded-bl-[12px] rounded-tl-[12px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-center"
                size="sm"
              >
                04 July
              </Button>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default HostedMeetingsPage;
