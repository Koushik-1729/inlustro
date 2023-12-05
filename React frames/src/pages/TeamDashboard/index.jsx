import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Duration from "components/Duration";

const TeamDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-kollektif gap-[26px] items-start mx-auto pb-[49px] md:pr-10 sm:pr-5 pr-[49px] w-full">
        <div className="bg-gray-900_3d border border-gray-800 border-solid flex flex-col items-end justify-start mb-[1336px] p-[46px] md:px-5 rounded-[40px] w-[13%] md:w-full">
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
        <div className="md:h-[1045px] sm:h-[1517px] h-[2224px] mb-[22px] md:mt-0 mt-[71px] relative w-[86%] md:w-full">
          <div className="absolute flex flex-col md:gap-10 gap-36 inset-x-[0] justify-start mx-auto top-[17%] w-full">
            <Duration className="bg-gray-900_bf border border-gray-400 border-solid flex flex-col items-start justify-end mr-[765px] mt-[50px] p-[15px] rounded-[40px] w-[39%] md:w-full" />
            <div className="bg-gray-900_bf border border-gray-400 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[460px] mt-[-70px] p-[21px] sm:px-5 rounded-[40px] w-[59%] md:w-full">
              <div className="flex flex-col gap-4 justify-start mb-[23px] w-[93%] md:w-full">
                <div className="flex flex-row items-start justify-start w-[58%] md:w-full">
                  <Text
                    className="mt-[7px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtKollektif48"
                  >
                    Meeting Roles
                  </Text>
                  <Img
                    className="h-[60px] md:h-auto mb-[5px] ml-[-10px] object-cover w-[60px]"
                    src="images/img_image12.png"
                    alt="imageThirteen"
                  />
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[15px] w-[98%] md:w-full">
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-[19px] rounded-[12px] w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[270px]"
                      size="txtPoppinsRegular30"
                    >
                      John Doe
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[164px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[200px]"
                      size="txtKollektifBold35"
                    >
                      Star Member
                    </Text>
                    <Img
                      className="h-[35px] md:h-auto ml-2.5 sm:ml-[0] mr-0.5 object-cover w-[35px]"
                      src="images/img_image14.png"
                      alt="imageFourteen"
                    />
                  </div>
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] p-[18px] rounded-[12px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[7px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsRegular30"
                    >
                      Sarah Brown
                    </Text>
                    <Text
                      className="mr-[49px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                      size="txtKollektifBold35"
                    >
                      Most Engaged
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row gap-[54px] items-center justify-start mt-4 p-[19px] rounded-[12px] w-full">
                    <Text
                      className="sm:ml-[0] ml-[5px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsRegular30"
                    >
                      Mark Johnson
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtKollektifBold32"
                    >
                      Most Contributed
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100_21 flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] p-[19px] rounded-[12px] w-full">
                    <Text
                      className="ml-1.5 sm:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsRegular30"
                    >
                      Mickael Jon
                    </Text>
                    <Text
                      className="mr-12 sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                      size="txtKollektifBold35"
                    >
                      Most Efficient
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100_21 flex flex-row sm:gap-10 items-center justify-between mt-[18px] p-[19px] rounded-[12px] w-full">
                    <Text
                      className="ml-1.5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtPoppinsRegular30"
                    >
                      Doe Swift
                    </Text>
                    <Text
                      className="mr-12 sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                      size="txtKollektifBold35"
                    >
                      Most Focused
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[1184px] sm:h-[741px] md:h-[961px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[10%] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="bg-gray-900_bf border border-gray-400 border-solid flex md:flex-1 flex-col items-center justify-end mb-[15px] md:mt-0 mt-[70px] p-[18px] rounded-[40px] w-[39%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mt-1 w-[89%] md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtKollektif48"
                    >
                      Goal Progress
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mb-[34px] md:text-5xl text-[70px] text-yellow-100"
                        size="txtKollektif70"
                      >
                        05/08
                      </Text>
                      <Text
                        className="common-pointer mt-[76px] sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                        size="txtPoppinsRegular28"
                        onClick={() => navigate("/goalprogress")}
                      >
                        <>Details &gt;</>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_bf border border-gray-400 border-solid flex md:flex-1 flex-col gap-[15px] justify-start md:mt-0 mt-[70px] p-[22px] sm:px-5 rounded-[40px] w-[59%] md:w-full">
                  <div className="flex flex-col font-kollektif gap-[13px] items-start justify-start md:ml-[0] ml-[19px] w-1/2 md:w-full">
                    <div className="h-[140px] md:h-[83px] relative w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-white-A700 top-[0] w-max"
                        size="txtKollektif48"
                      >
                        Efficiency Score
                      </Text>
                      <Text
                        className="absolute bottom-[0] left-[0] md:text-5xl text-[70px] text-yellow-100"
                        size="txtKollektif70"
                      >
                        8.2
                      </Text>
                    </div>
                    <Line className="bg-white-A700 h-px md:ml-[0] ml-[3px] w-full" />
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtKollektif48"
                    >
                      Suggestions
                    </Text>
                  </div>
                  <Text
                    className="mb-[5px] md:ml-[0] ml-[15px] mr-[19px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtPoppinsLight30"
                  >
                    <>
                      Encourage participants to prepare and submit their
                      reports, data, and insights before the meeting.
                      <br />
                      Invite only essential team members who have a direct stake
                      in the topics being discussed. <br />
                      Encourage interactive discussions by asking open-ended
                      questions and involving team members in problem-solving.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-poppins inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Text
                    className="sm:text-[38.94px] md:text-[44.94px] text-[48.94px] text-white-A700"
                    size="txtPoppinsBold4894"
                  >
                    Annual Strategy Review Meeting
                  </Text>
                  <Img
                    className="h-[60px] md:h-auto ml-2.5 md:ml-[0] object-cover w-[60px]"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="ml-24 md:ml-[0] sm:text-[28.619999999999997px] md:text-[30.619999999999997px] text-[32.62px] text-purple-100 w-[400px]"
                    size="txtPoppinsSemiBold3262"
                  >
                    15/09, 10:00 AM
                  </Text>
                </div>
                <Line className="bg-white-A700 h-px mt-1 w-full" />
                <Img
                  className="h-[60px] md:h-auto md:ml-[0] ml-[820px] mt-[55px] object-cover w-[60px]"
                  src="images/img_image12.png"
                  alt="imageThirteen_One"
                />
              </div>
            </div>
            <div className="absolute bg-gray-900_bf border border-gray-400 border-solid bottom-[0] flex flex-col items-center justify-end left-[0] mb-[-40px] p-2 rounded-[40px] w-[39%]">
              <div className="flex flex-col items-start justify-start mt-[19px] w-[89%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtKollektif40"
                >
                  Attended Participants:{" "}
                </Text>
                <div className="flex sm:flex-col flex-row font-poppins gap-[7px] items-center justify-start mt-[7px] w-[92%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[184px] rounded-[24px] text-center text-xl"
                    shape="round"
                    color="green_300_7f"
                  >
                    Online : 05/09
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[184px] rounded-[24px] text-center text-xl"
                    shape="round"
                    color="amber_A200_7f"
                  >
                    Busy : 01/09
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-poppins leading-[normal] min-w-[184px] mt-[11px] rounded-[24px] text-center text-xl"
                  shape="round"
                  color="red_500_7f"
                >
                  Offline : 02/09
                </Button>
                <div className="bg-blue_gray-100_21 flex flex-row font-kollektif items-center justify-between mt-3.5 p-3 rounded-[25px] w-full">
                  <Text
                    className="ml-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtKollektif25"
                  >
                    John Doe
                  </Text>
                  <div className="bg-green-300_7f h-[15px] mr-[17px] my-2 rounded-[7px] w-[15px]"></div>
                </div>
                <div className="bg-blue_gray-100_21 flex flex-row font-kollektif items-center justify-between mt-[17px] p-3 rounded-[25px] w-full">
                  <Text
                    className="ml-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtKollektif25"
                  >
                    Sarah Brown
                  </Text>
                  <div className="bg-amber-A200_7f h-[15px] mr-[17px] my-2 rounded-[7px] w-[15px]"></div>
                </div>
                <div className="flex flex-row font-poppins gap-[9px] items-start justify-start ml-3.5 md:ml-[0] mt-3">
                  <Text
                    className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-deep_purple-200"
                    size="txtPoppinsRegular25Deeppurple200"
                  >
                    View 3 more{" "}
                  </Text>
                  <Text
                    className="mt-0.5 rotate-[-90deg] sm:text-[21px] md:text-[23px] text-[25px] text-deep_purple-200"
                    size="txtPoppinsRegular25Deeppurple200"
                  >
                    <>&gt;</>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-900_bf border border-gray-400 border-solid bottom-[0] flex flex-col items-center justify-start p-7 sm:px-5 right-[1%] rounded-[40px] w-[58%]">
            <div className="flex flex-col gap-[5px] items-center justify-start mb-[5px] w-[95%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-[41px] items-center justify-between w-[99%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtKollektif48"
                >
                  Engagement Score : 8.7
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                  size="txtPoppinsRegular28"
                >
                  <>View &gt;</>
                </Text>
              </div>
              <Img
                className="h-[529px] md:h-auto object-cover w-full"
                src="images/img_image14_529x634.png"
                alt="imageFourteen_One"
              />
            </div>
          </div>
          <div className="absolute bg-gray-900_bf border border-gray-400 border-solid bottom-[33%] flex flex-col items-center justify-start left-[0] mb-[-40px] p-[17px] rounded-[40px] w-[39%]">
            <div className="flex flex-col gap-[13px] items-start justify-start mb-[38px] mt-[9px] w-[98%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-start w-[65%] md:w-full">
                <Text
                  className="mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtKollektif48"
                >
                  Keywords
                </Text>
                <Img
                  className="h-[60px] md:h-auto object-cover w-[60px]"
                  src="images/img_image12.png"
                  alt="imageThirteen_Two"
                />
              </div>
              <div className="flex sm:flex-col flex-row font-poppins gap-2 items-center justify-between ml-[-10px] md:ml-[0] w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[258px] rounded-[24px] text-center text-xl"
                  shape="round"
                  color="blue_300_60"
                >
                  Production efficiency
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[171px] rounded-[24px] text-center text-xl"
                  shape="round"
                  color="blue_300_60"
                >
                  Lead times
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins gap-[9px] items-center justify-start w-[92%] md:w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[222px] rounded-[24px] text-center text-xl"
                  shape="round"
                  color="blue_300_60"
                >
                  Brand awareness
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[171px] rounded-[24px] text-center text-xl"
                  shape="round"
                  color="blue_300_60"
                >
                  Commitment
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-900_bf border border-gray-400 border-solid bottom-[16%] flex flex-col items-center justify-end left-[1%] mb-[-40px] ml-[-20px] p-3.5 rounded-[40px] w-[39%]">
            <div className="flex flex-col gap-[15px] items-start justify-start mt-3.5 w-[94%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtKollektif48"
              >
                Transcripts (5)
              </Text>
              <div className="bg-blue_gray-100_21 flex flex-row items-center justify-between p-[13px] rounded-[12px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektifBold30WhiteA700"
                >
                  John Doe
                </Text>
                <Text
                  className="mr-[13px] my-[7px] sm:text-2xl md:text-[26px] text-[28px] text-yellow-100"
                  size="txtPoppinsRegular28Yellow100"
                >
                  <>View &gt;</>
                </Text>
              </div>
              <div className="bg-blue_gray-100_21 flex flex-row items-center justify-between p-[13px] rounded-[12px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektifBold30WhiteA700"
                >
                  Jane Smith
                </Text>
                <Text
                  className="mr-[13px] my-[7px] sm:text-2xl md:text-[26px] text-[28px] text-yellow-100"
                  size="txtPoppinsRegular28Yellow100"
                >
                  <>View &gt;</>
                </Text>
              </div>
              <div className="flex flex-row font-poppins items-start justify-start md:ml-[0] ml-[13px] w-[46%] md:w-full">
                <Text
                  className="common-pointer mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                  size="txtPoppinsRegular28"
                  onClick={() => navigate("/transcriptstwo")}
                >
                  View 3 more{" "}
                </Text>
                <Text
                  className="mt-0.5 rotate-[-90deg] sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-200"
                  size="txtPoppinsRegular28"
                >
                  <>&gt;</>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDashboardPage;
