import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const TranscriptsPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-[49px] md:h-auto mt-3.5 object-cover w-[99%]"
          src="images/img_image11.png"
          alt="imageEleven"
        />
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
      <div className="bg-black-900 flex flex-col font-kollektif items-start justify-end mx-auto md:pr-10 sm:pr-5 pr-[86px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-start justify-start w-full">
          <Sidebar11 className="!sticky !w-[185px] flex h-screen md:hidden justify-start opacity-0 overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-[68px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="common-pointer h-[50px] md:h-auto object-cover w-[50px]"
                src="images/img_arrow1.png"
                alt="arrowOne"
                onClick={() => navigate("/transcriptstwo")}
              />
              <Text
                className="mb-[7px] md:ml-[0] ml-[30px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-[600px]"
                size="txtKollektifBold50"
              >
                Minutes of Meeting
              </Text>
              <Img
                className="h-[60px] md:h-auto object-cover w-[60px]"
                src="images/img_image12.png"
                alt="imageTwelve"
              />
              <div className="bg-green-300_7f flex md:flex-1 flex-col font-poppins items-center justify-end md:ml-[0] ml-[262px] md:mt-0 mt-[11px] p-2.5 rounded-[25px] w-1/4 md:w-full">
                <div className="flex flex-row gap-[11px] items-center justify-start w-[95%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtPoppinsSemiBold25"
                  >
                    Download as PDF
                  </Text>
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_arrow2.png"
                    alt="arrowTwo"
                  />
                </div>
              </div>
            </div>
            <div className="h-[1699px] md:h-[1973px] relative w-full">
              <div className="absolute bg-black-900 border border-solid border-white-A700 flex flex-col font-kollektif inset-x-[0] items-start justify-start mx-auto p-[33px] sm:px-5 top-[0] w-full">
                <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] w-[68%] md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-[700px]"
                    size="txtKollektif50"
                  >
                    Annual Strategy Review Meeting
                  </Text>
                  <Line className="bg-white-A700 h-px w-full" />
                </div>
                <Text
                  className="ml-3.5 md:ml-[0] mt-1.5 opacity-0 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektif30WhiteA700"
                >
                  Date: 15th September 2023
                </Text>
                <Text
                  className="mb-[1166px] ml-3.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektif30WhiteA700"
                >
                  Date: 15th September 2023, Time: 10:00 AM - 12:00 PM
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] inset-x-[0] mb-[450px] ml-10 mr-auto sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                size="txtPoppinsLight2855"
              >
                <>
                  Positive Financial Results: The meeting kicked off with Sarah,
                  the CFO, presenting impressive financial results. Revenue for
                  the quarter reached $10 million, surpassing projections by
                  15%, and profitability increased by 20%.
                  <br />
                  Operational Success: Mark, the COO, highlighted significant
                  operational achievements. The supply chain was streamlined,
                  resulting in a 25% reduction in lead times. Production
                  efficiency improvements were well-received.
                  <br />
                  Sales Triumph: Lisa, the VP of Sales, reported on the success
                  of the sales team. They expanded the client base by 30% and
                  achieved notable sales results. The new product line also
                  received positive attention.
                  <br />
                  Marketing Wins: David, the VP of Marketing, shared impressive
                  marketing accomplishments. Brand awareness increased by 50%,
                  and social media engagement doubled, thanks to effective
                  marketing strategies.
                  <br />
                  Global Expansion Strategy: John, the CEO, emphasized the
                  importance of global expansion for the next quarter. The team
                  discussed the need for increased production capacity, building
                  international relationships, and adapting marketing campaigns
                  for different regions.
                  <br />
                  Acknowledgment and Appreciation: John expressed deep
                  appreciation for the team&#39;s dedication and hard work. He
                  recognized their resilience and commitment in the face of
                  challenges.
                  <br />
                  Call to Action: John motivated the team to use the current
                  success as a launchpad for international growth, setting the
                  stage for the company&#39;s exciting journey into global
                  markets.
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranscriptsPage;
