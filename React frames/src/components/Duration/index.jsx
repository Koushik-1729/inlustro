import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const Duration = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mt-2 w-[91%] md:w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-[400px]"
            size="txtKollektif48"
          >
            <span className="text-white-A700 font-kollektif text-left font-normal">
              Duration :{" "}
            </span>
            <span className="text-purple-100 font-kollektif text-left font-normal">
              02h 00m
            </span>
          </Text>
          <div className="bg-blue_gray-100_21 flex flex-row items-center justify-between mt-5 p-[18px] rounded-[12px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtKollektifBold30WhiteA700"
            >
              John Doe
            </Text>
            <Text
              className="mr-1.5 mt-[5px] sm:text-2xl md:text-[26px] text-[28px] text-yellow-100"
              size="txtPoppinsRegular28Yellow100"
            >
              02h 00m
            </Text>
          </div>
          <div className="bg-blue_gray-100_21 flex flex-row items-center justify-between mt-[18px] p-[18px] rounded-[12px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtKollektifBold30WhiteA700"
            >
              Mark Johnson
            </Text>
            <Text
              className="mr-[15px] mt-[5px] sm:text-2xl md:text-[26px] text-[28px] text-yellow-100"
              size="txtPoppinsRegular28Yellow100"
            >
              01h 57m
            </Text>
          </div>
          <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[18px] mt-[17px] w-1/2 md:w-full">
            <Text
              className="common-pointer mb-1 sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
              size="txtPoppinsRegular28"
              onClick={() => navigate("/duration")}
            >
              View 3 more{" "}
            </Text>
            <Text
              className="mt-1 rotate-[-90deg] sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
              size="txtPoppinsRegular28"
            >
              <>&gt;</>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Duration.defaultProps = {};

export default Duration;
