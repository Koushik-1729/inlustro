import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";

const TeamsPage = () => {
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
          <div className="bg-gray-900_bf border border-gray-800 border-solid flex flex-col items-end justify-start mb-[undefinedpx] mt-auto mx-auto pl-[19px] py-[19px] rounded-[40px] w-4/5 z-[1]">
            <div className="flex flex-col md:gap-10 gap-16 justify-start mb-24 w-[96%] md:w-full">
              <Text
                className="md:ml-[0] ml-[358px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtPoppinsBold50"
              >
                Your Teams
              </Text>
              <div className="flex md:flex-col flex-row font-kollektif md:gap-5 items-start justify-evenly w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[94%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-purple-100_3f border border-gray-800 border-solid flex flex-col gap-[17px] items-center justify-end sm:ml-[0] p-[29px] sm:px-5 rounded-[40px] w-full">
                    <div className="bg-blue-300 flex flex-col h-[210px] items-center justify-start mt-[7px] p-[35px] sm:px-5 rounded-md w-[210px]">
                      <Img
                        className="h-[139px] md:h-auto object-cover w-[139px]"
                        src="images/img_image19.png"
                        alt="imageNineteen"
                      />
                    </div>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtKollektif40"
                    >
                      CorpConnect
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-purple-100_3f border border-gray-800 border-solid flex flex-col gap-[13px] items-center justify-end sm:ml-[0] p-[33px] sm:px-5 rounded-[40px] w-full"
                    onClick={() => navigate("/hostedmeetings")}
                  >
                    <div className="bg-light_green-A200 flex flex-col h-[210px] items-center justify-start mt-[3px] p-[35px] sm:px-5 rounded-md w-[210px]">
                      <Img
                        className="h-[139px] md:h-auto object-cover w-[139px]"
                        src="images/img_image20.png"
                        alt="imageTwenty"
                      />
                    </div>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtKollektif40"
                    >
                      BizFlow
                    </Text>
                  </div>
                  <div className="bg-purple-100_3f border border-gray-800 border-solid flex flex-col gap-3.5 items-center justify-end sm:ml-[0] p-8 sm:px-5 rounded-[40px] w-full">
                    <div className="bg-red-300 flex flex-col h-[210px] items-center justify-start mt-1 p-[35px] sm:px-5 rounded-md w-[210px]">
                      <Img
                        className="h-[139px] md:h-auto object-cover w-[139px]"
                        src="images/img_image21.png"
                        alt="imageTwentyOne"
                      />
                    </div>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtKollektif40"
                    >
                      InnovateNow
                    </Text>
                  </div>
                </List>
                <Img
                  className="common-pointer h-[70px] md:h-auto md:mt-0 mt-[115px] object-cover w-[70px]"
                  src="images/img_arrowdownsigntonavigate.png"
                  alt="arrowdownsignto"
                  onClick={() => navigate("/team")}
                />
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
              className="common-pointer md:ml-[0] ml-[21px] md:mt-0 mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
              size="txtKollektif35"
              onClick={() => navigate("/hostedmeetings")}
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

export default TeamsPage;
