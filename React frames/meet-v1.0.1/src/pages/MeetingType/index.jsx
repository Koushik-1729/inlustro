import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const MeetingTypePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 font-poppins h-[982px] mx-auto pt-[85px] relative w-full">
        <Img
          className="absolute bottom-[0] h-[258px] left-[37%] object-cover w-[14%]"
          src="images/img_blob3_258x210.png"
          alt="blobThree"
        />
        <div className="absolute bottom-[0] h-[897px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="bg-gray-900_bf border border-gray-800 border-solid flex flex-col items-center justify-start mb-[undefinedpx] mt-auto mx-auto p-[23px] sm:px-5 rounded-[40px] w-4/5 z-[1]">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[92px] w-[69%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtPoppinsBold50"
              >
                Meeting Type
              </Text>
              <div className="flex md:flex-col flex-row font-kollektif md:gap-10 items-center justify-between w-full">
                <div
                  className="common-pointer bg-purple-100_3f border border-gray-800 border-solid flex md:flex-1 flex-col gap-[30px] items-center justify-start p-[37px] sm:px-5 rounded-[40px] w-2/5 md:w-full"
                  onClick={() => navigate("/teams")}
                >
                  <Img
                    className="h-[174px] md:h-auto object-cover w-[174px]"
                    src="images/img_hostpic.png"
                    alt="hostpic"
                  />
                  <Text
                    className="mb-0.5 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtKollektif50"
                  >
                    Host
                  </Text>
                </div>
                <div className="bg-purple-100_3f border border-gray-800 border-solid flex md:flex-1 flex-col gap-[29px] items-center justify-start p-[37px] sm:px-5 rounded-[40px] w-2/5 md:w-full">
                  <Img
                    className="h-[174px] md:h-auto object-cover w-[174px]"
                    src="images/img_attendeepic.png"
                    alt="attendeepic"
                  />
                  <Text
                    className="mb-[3px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtKollektif50"
                  >
                    Attendee
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-kollektif md:gap-5 items-start justify-center mb-[-15px] ml-auto mr-[89px] mt-2.5 w-[62%] z-[1]">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
              size="txtKollektif35"
            >
              Home
            </Text>
            <Line className="bg-white-A700 h-12 md:h-px ml-4 md:ml-[0] md:w-full w-px" />
            <Text
              className="md:ml-[0] ml-[21px] md:mt-0 mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
              size="txtKollektif35"
            >
              Hosted Meetings
            </Text>
            <Line className="bg-white-A700 h-12 md:h-px md:ml-[0] ml-[17px] md:w-full w-px" />
            <Text
              className="md:ml-[0] ml-[21px] md:mt-0 mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
              size="txtKollektif35"
            >
              Attended Meetings
            </Text>
            <Line className="bg-white-A700 h-12 md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
            <Img
              className="h-9 md:h-auto md:ml-[0] ml-[18px] md:mt-0 mt-1.5 object-cover w-9"
              src="images/img_image10.png"
              alt="imageTen"
            />
            <Text
              className="md:ml-[0] ml-[17px] md:mt-0 mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-purple-100"
              size="txtKollektif35Purple100"
            >
              Gayatri
            </Text>
          </div>
          <Img
            className="h-[68px] mb-[-25px] ml-8 object-cover w-[23%] z-[1]"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex flex-col gap-[50px] justify-start mt-auto mx-auto w-full">
            <Img
              className="h-[367px] md:h-auto object-cover w-[23%]"
              src="images/img_blob2_367x335.png"
              alt="blobTwo"
            />
            <Img
              className="h-[437px] md:h-auto md:ml-[0] ml-[1113px] object-cover w-[27%]"
              src="images/img_blob1_437x399.png"
              alt="blobOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingTypePage;
