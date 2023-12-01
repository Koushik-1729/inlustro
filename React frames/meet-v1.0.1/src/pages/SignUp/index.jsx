import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[62px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[58px] items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[95px] items-center justify-start md:mt-0 mt-[23px] md:px-5 w-[35%] md:w-full">
            <Img
              className="h-[68px] sm:h-auto object-cover w-[66%] md:w-full"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="flex flex-col gap-[22px] items-start justify-start">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtKollektifBold40"
              >
                <>
                  Elevate Your Meetings <br />
                  to the Future
                </>
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                size="txtPoppinsLight30"
              >
                SynergyMeet AI revolutionizes collaboration by integrating
                advanced AI into video meetings, turning discussions into
                dynamic and efficient sessions that yield tangible results.
              </Text>
            </div>
            <Img
              className="h-[301px] sm:h-auto object-cover w-[77%] md:w-full"
              src="images/img_blob1.png"
              alt="blobOne"
            />
          </div>
          <div className="sm:h-[1049px] md:h-[819px] h-[840px] md:px-5 relative w-[62%] md:w-full">
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[26%]">
              <div className="flex flex-col md:gap-10 gap-[153px] justify-start w-full">
                <Img
                  className="h-[107px] md:h-auto md:ml-[0] ml-[111px] object-cover w-1/2"
                  src="images/img_blob2.png"
                  alt="blobTwo"
                />
                <Img
                  className="h-[423px] md:h-auto object-cover w-full"
                  src="images/img_blob3.png"
                  alt="blobThree"
                />
              </div>
            </div>
            <div className="absolute bg-gray-900_bf border border-gray-800 border-solid flex flex-col gap-[30px] h-max inset-y-[0] justify-end left-[0] my-auto p-[33px] sm:px-5 rounded-[40px] w-[93%]">
              <Text
                className="md:ml-[0] ml-[34px] mr-[567px] mt-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtPoppinsBold50"
              >
                Sign Up
              </Text>
              <div className="flex flex-col items-center justify-start mx-auto w-[79%] md:w-full">
                <List
                  className="flex flex-col font-kollektif gap-9 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-blue_gray-100_21 flex flex-1 flex-row gap-[17px] items-center justify-start my-0 p-[9px] rounded-[10px] w-full">
                    <div className="bg-blue_gray-100_21 flex flex-col items-center justify-end p-1 rounded-[10px] w-[11%]">
                      <Img
                        className="h-[46px] md:h-auto mt-2 object-cover w-[68%]"
                        src="images/img_user1.png"
                        alt="userOne"
                      />
                    </div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700_a5"
                      size="txtKollektif30"
                    >
                      Full Name
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100_21 flex flex-1 flex-row gap-[17px] items-center justify-start my-0 p-[9px] rounded-[10px] w-full">
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
                </List>
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
                <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row font-kollektif sm:gap-5 items-center justify-start mt-9 p-[9px] rounded-[10px] w-full">
                  <div className="bg-blue_gray-100_21 flex sm:flex-1 flex-col items-center justify-end p-2.5 rounded-[10px] w-[11%] sm:w-full">
                    <Img
                      className="h-10 md:h-auto mt-0.5 object-cover w-10"
                      src="images/img_padlock.png"
                      alt="padlock_One"
                    />
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[17px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700_a5"
                    size="txtKollektif30"
                  >
                    Confirm Password
                  </Text>
                  <Img
                    className="h-10 md:h-auto sm:ml-[0] ml-[222px] object-cover w-10"
                    src="images/img_hide.png"
                    alt="hide_One"
                  />
                </div>
                <Button
                  className="cursor-pointer font-bold font-kollektif leading-[normal] min-w-[621px] md:min-w-full mt-[55px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  color="deep_purple_200"
                  size="sm"
                >
                  Sign Up
                </Button>
                <Text
                  className="common-pointer mt-9 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtPoppinsRegular25"
                  onClick={() => navigate("/login")}
                >
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    Already have as account?{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-deep_purple-200 font-poppins text-left font-normal underline"
                  >
                    Login
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
