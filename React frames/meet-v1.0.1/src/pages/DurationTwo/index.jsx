import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DurationTwoPage = () => {
  const table1Data = React.useRef([
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
    {
      fullname: "Mark Johnson",
      joiningtime: "10:05 AM",
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
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("fullname", {
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
      table1ColumnHelper.accessor("joiningtime", {
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
      table1ColumnHelper.accessor("leavingtime", {
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
      table1ColumnHelper.accessor("totaltime", {
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
      <div className="bg-black-900 flex flex-col font-kollektif items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-start justify-start md:px-5 w-[94%] md:w-full">
          <Sidebar1 className="!sticky !w-[185px] bg-gray-900_3d border border-gray-800 border-solid flex h-screen md:hidden justify-start overflow-auto rounded-[40px] top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start w-full">
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
            <div className="flex flex-col gap-9 items-center justify-start w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <Text
                  className="md:mt-0 mt-3 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtKollektifBold40"
                >
                  Total Meeting Time: 02h 00m
                </Text>
                <div className="bg-green-300_7f flex flex-row font-poppins gap-[9px] items-center justify-center p-2.5 rounded-[25px]">
                  <Text
                    className="ml-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtPoppinsSemiBold25"
                  >
                    Download Data
                  </Text>
                  <Img
                    className="h-5 md:h-auto mr-[15px] object-cover w-5"
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

export default DurationTwoPage;
