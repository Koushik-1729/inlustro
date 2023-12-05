import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[85px] w-full">
        <div className="flex flex-col gap-[15px] justify-start w-full">
          <Img
            className="h-[68px] md:h-auto md:ml-[0] ml-[50px] object-cover w-[23%]"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[258px] md:h-auto md:mt-0 mt-[467px] object-cover"
              src="images/img_blob1_258x137.png"
              alt="blobOne"
            />
            <div className="md:h-[670px] sm:h-[785px] h-[814px] md:px-5 relative w-[79%] md:w-full">
              <div className="absolute md:h-[450px] h-[814px] inset-y-[0] my-auto right-[0] w-[42%] sm:w-full">
                <Img
                  className="absolute bottom-[0] h-[450px] object-cover right-[0] w-[77%]"
                  src="images/img_blob4.png"
                  alt="blobFour"
                />
                <Img
                  className="h-[116px] ml-auto mr-[159px] mt-[157px] object-cover w-[24%]"
                  src="images/img_blob3_116x119.png"
                  alt="blobThree"
                />
                <Img
                  className="absolute h-[367px] left-[0] object-cover top-[0] w-[368px]"
                  src="images/img_blob2_367x368.png"
                  alt="blobTwo"
                />
              </div>
              <div className="absolute bg-gray-900_bf border border-gray-800 border-solid flex flex-col gap-[47px] justify-start left-[0] p-11 md:px-10 sm:px-5 rounded-[40px] top-[1%] w-[73%]">
                <Text
                  className="md:ml-[0] ml-[15px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtPoppinsBold50"
                >
                  Welcome Back!
                </Text>
                <div className="flex flex-col items-start justify-start mx-auto w-[81%] md:w-full">
                  <div className="bg-blue_gray-100_21 flex flex-row font-kollektif gap-[17px] items-center justify-start p-[9px] rounded-[10px] w-full">
                    <div className="bg-blue_gray-100_21 flex flex-col items-center justify-end p-2.5 rounded-[10px] w-[11%]">
                      <Img
                        className="h-10 md:h-auto mt-0.5 object-cover w-10"
                        src="images/img_mail.png"
                        alt="mail"
                      />
                    </div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700_a5"
                      size="txtKollektif30"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="flex flex-col font-kollektif items-center justify-start mt-9 w-full">
                    <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[9px] rounded-[10px] w-full">
                      <div className="bg-blue_gray-100_21 flex sm:flex-1 flex-col items-center justify-end p-2.5 rounded-[10px] w-[11%] sm:w-full">
                        <Img
                          className="h-10 md:h-auto mt-0.5 object-cover w-10"
                          src="images/img_padlock.png"
                          alt="padlock"
                        />
                      </div>
                      <Text
                        className="sm:ml-[0] ml-[17px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700_a5"
                        size="txtKollektif30"
                      >
                        Password
                      </Text>
                      <Img
                        className="h-10 md:h-auto sm:ml-[0] ml-[331px] object-cover w-10"
                        src="images/img_hide.png"
                        alt="hide"
                      />
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[399px] mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-[300px]"
                    size="txtPoppinsRegular25"
                  >
                    Forgot Password?
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-bold font-kollektif leading-[normal] min-w-[621px] md:min-w-full mt-8 rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    onClick={() => navigate("/meetingtype")}
                    color="deep_purple_200"
                    size="sm"
                  >
                    Login
                  </Button>
                  <Text
                    className="common-pointer md:ml-[0] ml-[102px] mt-[49px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtPoppinsRegular25"
                    onClick={() => navigate("/")}
                  >
                    <span className="text-white-A700 font-poppins text-left font-normal">
                      Don’t have an account?{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-deep_purple-200 font-poppins text-left font-normal underline"
                    >
                      Sign Up
                    </a>
                  </Text>
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
