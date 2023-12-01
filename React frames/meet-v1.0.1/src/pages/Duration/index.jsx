import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";

const DurationPage = () => {
  const table2Data = React.useRef([
    {
      fullname: "John Doe",
      joiningtime: "10:00 AM",
      leavingtime: "12:00 PM",
      totaltime: "02h 00m",
    },
    {
      fullname: "Sarah Brown",
      joiningtime: "10:02 AM",
      leavingtime: "11:59 AM",
      totaltime: "02h 00m",
    },
    {
      fullname: "Jane Smith",
      joiningtime: "10:02 AM",
      leavingtime: "11:57 AM",
      totaltime: "01h 54m",
    },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("fullname", {
        cell: (info) => (
          <Text
            className="pb-[22px] sm:pl-5 pl-[35px] pt-[31px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtKollektifBold30WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[295px] pb-[3px] sm:pl-5 pl-8 sm:text-4xl md:text-[38px] text-[40px] text-deep_purple-200"
            size="txtKollektif40Deeppurple200"
          >
            Full Name
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("joiningtime", {
        cell: (info) => (
          <Text
            className="pb-3.5 sm:pl-5 pl-[35px] pt-8 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
            size="txtPoppinsRegular2855"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[305px] pt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-deep_purple-200"
            size="txtKollektif40Deeppurple200"
          >
            Joining Time
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("leavingtime", {
        cell: (info) => (
          <Text
            className="pb-3.5 sm:pl-5 pl-[35px] pt-8 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
            size="txtPoppinsRegular2855"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[319px] pt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-deep_purple-200"
            size="txtKollektif40Deeppurple200"
          >
            Leaving Time
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("totaltime", {
        cell: (info) => (
          <Text
            className="pb-3.5 pl-[17px] pt-8 sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-purple-100"
            size="txtPoppinsRegular2855Purple100"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[239px] py-0.5 sm:text-4xl md:text-[38px] text-[40px] text-deep_purple-200"
            size="txtKollektif40Deeppurple200"
          >
            Total Time
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-kollektif items-start justify-start mx-auto pb-[51px] md:pr-10 sm:pr-5 pr-[51px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-start justify-start w-[97%] md:w-full">
          <div className="bg-gray-900_3d border border-gray-800 border-solid flex flex-col items-end justify-start mb-[87px] p-[46px] md:px-10 sm:px-5 rounded-[40px] w-[14%] md:w-full">
            <Img
              className="h-[72px] md:h-auto mt-[13px] object-cover w-[72px]"
              src="images/img_logo_72x72.png"
              alt="logo"
            />
            <div className="bg-amber-A200 flex flex-col h-[63px] items-center justify-start mr-1 mt-[37px] pt-[5px] px-[5px] rounded-[9px] w-[63px]">
              <Img
                className="h-[49px] md:h-auto mt-[7px] object-cover w-[99%]"
                src="images/img_image11.png"
                alt="imageEleven"
              />
            </div>
            <Line className="bg-white-A700 h-px mt-[29px] w-[78%]" />
            <Img
              className="common-pointer h-[63px] md:h-auto mt-9 object-cover w-[63px]"
              src="images/img_home1.png"
              alt="homeOne"
              onClick={() => navigate("/meetingtype")}
            />
            <Img
              className="common-pointer h-[63px] md:h-auto mt-[33px] object-cover w-[63px]"
              src="images/img_crown.png"
              alt="crown"
              onClick={() => navigate("/hostedmeetings")}
            />
            <Img
              className="h-[63px] md:h-auto mt-9 object-cover w-[63px]"
              src="images/img_people.png"
              alt="people"
            />
            <Img
              className="h-[63px] md:h-auto mt-[30px] object-cover w-[63px]"
              src="images/img_add.png"
              alt="add"
            />
            <Img
              className="h-[63px] md:h-auto mt-[50px] object-cover w-[63px]"
              src="images/img_setting.png"
              alt="setting"
            />
            <Img
              className="h-[63px] md:h-auto mb-[52px] mt-[58px] object-cover w-[63px]"
              src="images/img_question.png"
              alt="question"
            />
          </div>
          <div className="flex flex-col items-center justify-start md:mt-0 mt-[61px] w-[83%] md:w-full">
            <div className="flex flex-col items-start justify-start pb-16 w-[95%] md:w-full">
              <div className="flex flex-row gap-[30px] items-end justify-start w-[26%] md:w-full">
                <Img
                  className="common-pointer h-[50px] md:h-auto mb-[3px] mt-[7px] object-cover w-[50px]"
                  src="images/img_arrow1.png"
                  alt="arrowOne"
                  onClick={() => navigate("/teamdashboard")}
                />
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtKollektifBold50"
                >
                  Duration
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[81px] mt-5 md:text-5xl text-[70px] text-yellow-100"
                size="txtKollektif70"
              >
                Annual Strategy Review Meeting
              </Text>
              <Line className="bg-white-A700 h-px mt-1.5 w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table2Columns}
                  data={table2Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <div className="flex flex-col font-poppins mt-[26px] relative w-full">
                <div className="bg-blue_gray-100_21 flex md:flex-col flex-row md:gap-5 items-center justify-end mx-auto p-[17px] rounded-[12px] w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtKollektifBold30WhiteA700"
                  >
                    Mark Johnson
                  </Text>
                  <Text
                    className="ml-24 md:ml-[0] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                    size="txtPoppinsRegular2855"
                  >
                    10:05 AM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[181px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                    size="txtPoppinsRegular2855"
                  >
                    11:59 AM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[181px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-purple-100"
                    size="txtPoppinsRegular2855Purple100"
                  >
                    01h 49m
                  </Text>
                  <Img
                    className="common-pointer h-[50px] md:h-auto md:ml-[0] ml-[25px] mr-3 object-cover w-[50px]"
                    src="images/img_arrowdownsigntonavigate_50x50.png"
                    alt="arrowdownsignto_One"
                    onClick={() => navigate("/durationtwo")}
                  />
                </div>
                <div className="bg-gray-900_bf border border-gray-400 border-solid flex flex-col items-center justify-start mt-[-4px] mx-auto p-7 sm:px-5 rounded-bl-[40px] rounded-br-[40px] w-full z-[1]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-1 w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-green-300_c1"
                          size="txtPoppinsSemiBold2855"
                        >
                          Joined
                        </Text>
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                          size="txtPoppinsRegular2855"
                        >
                          10:02:46 AM
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-red-500"
                          size="txtPoppinsSemiBold2855Red500"
                        >
                          Left
                        </Text>
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                          size="txtPoppinsRegular2855"
                        >
                          10:42:14 AM
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-white-A700 h-20 md:h-px mb-1.5 md:w-full w-px" />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-green-300_c1"
                          size="txtPoppinsSemiBold2855"
                        >
                          Joined
                        </Text>
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                          size="txtPoppinsRegular2855"
                        >
                          10:42:17 AM
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-red-500"
                          size="txtPoppinsSemiBold2855Red500"
                        >
                          Left
                        </Text>
                        <Text
                          className="sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                          size="txtPoppinsRegular2855"
                        >
                          11:59:13 AM
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[27px] p-[19px] rounded-[12px] w-full">
                <Text
                  className="sm:ml-[0] ml-[30px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektifBold30WhiteA700"
                >
                  Jane Smith
                </Text>
                <Text
                  className="sm:ml-[0] ml-[133px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                  size="txtPoppinsRegular2855"
                >
                  10:02 AM
                </Text>
                <Text
                  className="sm:ml-[0] ml-[183px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                  size="txtPoppinsRegular2855"
                >
                  11:57 AM
                </Text>
                <Text
                  className="sm:ml-[0] ml-[184px] sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-purple-100"
                  size="txtPoppinsRegular2855Purple100"
                >
                  01h 54m
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-kollektif md:gap-10 items-end justify-between mt-9 w-full">
                <Text
                  className="md:mt-0 mt-3 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtKollektifBold40"
                >
                  Total Meeting Time: 02h 00m
                </Text>
                <div className="bg-green-300_7f flex flex-row font-poppins gap-2 items-center justify-center p-2.5 rounded-[25px]">
                  <Text
                    className="ml-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtPoppinsSemiBold25"
                  >
                    Download Data
                  </Text>
                  <Img
                    className="h-5 md:h-auto mr-4 object-cover w-5"
                    src="images/img_arrow2.png"
                    alt="arrowTwo"
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

export default DurationPage;
