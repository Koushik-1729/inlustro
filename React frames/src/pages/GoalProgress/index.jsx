import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const GoalProgressPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: (
        <div className="bg-amber-A200 flex flex-col h-[63px] items-center justify-end pt-[7px] px-[5px] rounded-[9px] w-[63px]">
          <Img
            className="h-[49px] md:h-auto object-cover w-[99%]"
            src="images/img_image11.png"
            alt="imageEleven_One"
          />
        </div>
      ),
    },
    {
      label: (
        <Img
          className="h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_crown.png"
          alt="crown"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_people.png"
          alt="people"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_add.png"
          alt="add"
        />
      ),
    },
  ];

  return (
    <>
      <div className="bg-black-900 font-poppins h-[982px] mx-auto md:pr-10 sm:pr-5 pr-[89px] relative w-full">
        <div className="absolute bottom-[4%] md:h-[3453px] h-[677px] right-[13%] w-[69%] md:w-full">
          <div className="absolute bottom-[1%] flex flex-col items-center justify-start left-[0] w-[53%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-[99%] md:w-full">
                <Text
                  className="mb-[-670px] sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  Improve the conversion rate of the website.
                </Text>
                <Text
                  className="mb-[-650px] sm:text-[19px] md:text-[21px] text-[23px] text-amber-A200"
                  size="txtPoppinsRegular23AmberA200"
                >
                  January 21 - 2023
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[46px] w-full">
                <div className="flex flex-col relative w-[59%] sm:w-full">
                  <Text
                    className="mx-auto opacity-0 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                    size="txtPoppinsRegular23"
                  >
                    Develop a content marketing strategy.
                  </Text>
                  <Img
                    className="h-[34px] ml-auto mr-[26px] mt-[-7px] object-cover opacity-0 w-[34px] z-[1]"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-0.5 opacity-0 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  January 24 - 2023
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[26px] w-[99%] md:w-full">
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  Increase social media engagement by 20%.
                </Text>
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-amber-A200"
                  size="txtPoppinsRegular23AmberA200"
                >
                  January 18 - 2023
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[42px] opacity-0 w-[99%] md:w-full">
                <div className="flex flex-col opacity-0 relative w-3/5 sm:w-full">
                  <Text
                    className="mx-auto opacity-0 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                    size="txtPoppinsRegular23"
                  >
                    Increase website traffic by 10%.
                  </Text>
                  <Img
                    className="h-[34px] ml-[119px] mt-[-6px] object-cover w-[34px] z-[1]"
                    src="images/img_image12.png"
                    alt="imageThirteen"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-0.5 sm:text-[19px] md:text-[21px] text-[23px] text-red-500"
                  size="txtPoppinsRegular23Red500"
                >
                  January 14 - 2023
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[15px] w-[99%] md:w-full">
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  Improve the conversion rate of the website.
                </Text>
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-amber-A200"
                  size="txtPoppinsRegular23AmberA200"
                >
                  January 21 - 2023
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-12 w-full">
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  Develop a content marketing strategy.
                </Text>
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  January 27 - 2023
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[41px] w-full">
                <div className="flex flex-col relative w-[59%] sm:w-full">
                  <Text
                    className="mx-auto sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-full"
                    size="txtPoppinsRegular23"
                  >
                    Increase social media engagement by 20%.
                  </Text>
                  <Img
                    className="h-[34px] ml-auto mt-[-6px] object-cover opacity-0 w-[34px] z-[1]"
                    src="images/img_image12.png"
                    alt="imageFifteen"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-0.5 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtPoppinsRegular23"
                >
                  Febuary 03 - 2023
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-kollektif md:gap-5 h-full items-start justify-start ml-auto mr-[22px] mt-[7px] w-[87%]">
            <Text
              className="mb-[3px] sm:text-4xl md:text-[38px] text-[40px] text-purple-100"
              size="txtKollektifBold40Purple100"
            >
              Task
            </Text>
            <Text
              className="mb-[3px] md:ml-[0] ml-[161px] sm:text-4xl md:text-[38px] text-[40px] text-purple-100"
              size="txtKollektifBold40Purple100"
            >
              Deadline
            </Text>
            <Text
              className="md:ml-[0] ml-[74px] md:mt-0 mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-purple-100 w-[400px]"
              size="txtKollektifBold40Purple100"
            >
              Assigned to
            </Text>
            <Text
              className="mb-[3px] md:ml-[0] ml-[75px] sm:text-4xl md:text-[38px] text-[40px] text-purple-100"
              size="txtKollektifBold40Purple100"
            >
              Status
            </Text>
          </div>
          <div className="absolute font-kollektif md:h-[3453px] h-[677px] inset-[0] justify-center m-auto w-full">
            <Line className="absolute bg-white-A700 h-px inset-x-[0] mx-auto top-[11%] w-full" />
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-start justify-start my-auto right-[0] w-[76%]">
              <Img
                className="h-[34px] md:h-auto md:mt-0 mt-[499px] object-cover w-[34px]"
                src="images/img_image12.png"
                alt="imageFourteen"
              />
              <Line className="bg-white-A700 md:h-0.5 h-[677px] md:ml-[0] ml-[26px] w-0.5 md:w-full" />
              <Line className="bg-white-A700 h-[677px] md:h-px md:ml-[0] ml-[242px] md:w-full w-px" />
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] md:mt-0 mt-[86px] w-[32%] md:w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[246px] mt-[50px] text-center text-xl"
                  shape="round"
                >
                  Sarah Brown, Tim Kil +3
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[220px] mt-10 opacity-0 text-center text-xl"
                  shape="round"
                >
                  Genevieve, Tim Kil +1
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[246px] text-center text-xl"
                  shape="round"
                >
                  Miguel, Trudy, Sarah
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[220px] mt-[70px] text-center text-xl"
                  shape="round"
                >
                  Genevieve, Tim Kil +1
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[246px] mt-[87px] opacity-0 text-center text-xl"
                  shape="round"
                >
                  Sarah Brown, Tim Kil +3
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[220px] mt-[-70px] text-center text-xl"
                  shape="round"
                >
                  Genevieve, Tim Kil +1
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[246px] mt-[90px] text-center text-xl"
                  shape="round"
                >
                  Miguel, Trudy, Sarah
                </Button>
              </div>
              <Line className="bg-white-A700 h-[677px] md:h-px md:ml-[0] ml-[19px] md:w-full w-px" />
              <div className="flex flex-col font-poppins items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-[84px] w-[21%] md:w-full">
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[162px] mt-[50px] text-center text-xl"
                  shape="round"
                  color="amber_A200_7f"
                >
                  In-Progress
                </Button>
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[119px] mt-[43px] opacity-0 text-center text-xl"
                  shape="round"
                  color="green_300_7f"
                >
                  Done
                </Button>
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[119px] text-center text-xl"
                  shape="round"
                  color="green_300_7f"
                >
                  Done
                </Button>
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[162px] mt-[77px] text-center text-xl"
                  shape="round"
                  color="amber_A200_7f"
                >
                  In-Progress
                </Button>
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[160px] mt-[70px] text-center text-xl"
                  shape="round"
                  color="red_500_7f"
                >
                  Incomplete
                </Button>
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[162px] mt-[90px] text-center text-xl"
                  shape="round"
                  color="amber_A200_7f"
                >
                  In-Progress
                </Button>
                <Button
                  className="!rounded-[24px] cursor-pointer leading-[normal] min-w-[160px] mt-[33px] opacity-0 text-center text-xl"
                  shape="round"
                  color="red_500_7f"
                >
                  Incomplete
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row font-kollektif md:gap-10 gap-[72px] items-start justify-center right-[9%] top-[7%] w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[70%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-[51%] md:w-full">
              <Img
                className="common-pointer h-[50px] md:h-auto sm:mt-0 mt-[3px] object-cover w-[50px]"
                src="images/img_arrow1.png"
                alt="arrowOne"
                onClick={() => navigate("/teamdashboard")}
              />
              <Text
                className="sm:ml-[0] ml-[300px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtKollektifBold50"
              >
                Goal Progress
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[600px] mt-[-100px] w-[90%] md:w-full">
              <Text
                className="md:text-5xl text-[70px] text-yellow-100"
                size="txtKollektif70"
              >
                05/08
              </Text>
              <div className="bg-deep_purple-200 flex flex-row gap-3 items-center justify-start mb-[0] mr-[180px] sm:mt-0 mt-[-61px] p-[15px] rounded-[10px]">
                <Text
                  className="sm:text-[21.15px] md:text-[23.15px] text-[25.15px] text-white-A700"
                  size="txtKollektifBold2515"
                >
                  Create a new task
                </Text>
                <Img
                  className="h-[33px] md:h-auto my-[3px] object-cover w-[33px]"
                  src="images/img_tab1.png"
                  alt="tabOne"
                />
              </div>
            </div>
            <Line className="bg-white-A700 h-px md:ml-[0] ml-[380px] mt-10 w-[54%]" />
          </div>
          <div className="flex md:flex-1 flex-col gap-4 items-center justify-start md:mt-0 mt-[50px] w-[24%] md:w-full">
            <Text
              className="sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700"
              size="txtKollektif3262"
            >
              Showing 7 out of 8
            </Text>
            <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
              <Text
                className="mt-[3px] sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700_7f underline"
                size="txtKollektif3262WhiteA7007f"
              >
                <>&lt; Previous</>
              </Text>
              <Text
                className="mb-[3px] sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700"
                size="txtKollektif3262"
              >
                |
              </Text>
              <Text
                className="mt-[3px] sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-white-A700 underline"
                size="txtKollektif3262"
              >
                <>Next &gt;</>
              </Text>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[185px] bg-gray-900_3d border border-gray-800 border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 rounded-[40px] top-[0]" />
      </div>
    </>
  );
};

export default GoalProgressPage;
