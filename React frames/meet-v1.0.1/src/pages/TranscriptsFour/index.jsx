import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const TranscriptsFourPage = () => {
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
      <div className="bg-black-900 flex flex-col font-kollektif items-start justify-start mx-auto pb-[33px] sm:pr-5 pr-[33px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-start justify-start md:px-5 w-[97%] md:w-full">
          <Sidebar11 className="!sticky !w-[185px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-[65px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="common-pointer h-[50px] md:h-auto md:mt-0 mt-[3px] object-cover w-[50px]"
                src="images/img_arrow1.png"
                alt="arrowOne"
                onClick={() => navigate("/transcriptstwo")}
              />
              <Text
                className="mb-[11px] md:ml-[0] ml-[30px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtKollektifBold50"
              >
                Transcripts
              </Text>
              <div className="bg-green-300_7f flex md:flex-1 flex-col font-poppins items-center justify-end md:ml-[0] ml-[526px] md:mt-0 mt-[13px] p-2.5 rounded-[25px] w-1/4 md:w-full">
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
            <div className="md:h-[1713px] h-[1738px] relative w-full">
              <div className="absolute bg-black-900 border border-solid border-white-A700 flex flex-col font-kollektif h-max inset-[0] items-start justify-center m-auto p-[33px] sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] w-[68%] md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtKollektif50"
                  >
                    Annual Strategy Review Meeting
                  </Text>
                  <Line className="bg-white-A700 h-px w-full" />
                </div>
                <Text
                  className="ml-3.5 md:ml-[0] mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektif30WhiteA700"
                >
                  Date: 15th September 2023
                </Text>
                <Text
                  className="ml-3.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektif30WhiteA700"
                >
                  Date: 15th September 2023, Time: 10:00 AM - 12:00 PM
                </Text>
                <Text
                  className="italic mb-[1500px] ml-3.5 md:ml-[0] mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtKollektifItalic30"
                >
                  John Doe’s Transcript
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[24.55px] md:text-[26.55px] text-[28.55px] text-white-A700"
                size="txtPoppinsLight2855"
              >
                <>
                  Good morning, everyone. Thank you all for being here today for
                  our quarterly performance review. I want to begin by
                  expressing my deep appreciation for each one of you and the
                  incredible effort you&#39;ve put into our company&#39;s
                  success.
                  <br />
                  <br />
                  This quarter has been exceptional. Our financials are stronger
                  than ever, with revenue hitting $10 million, surpassing our
                  expectations. We&#39;ve not only weathered the challenges but
                  thrived in this competitive landscape. Sarah, Mark, Lisa,
                  David, thank you for your tireless dedication to your
                  respective areas.
                  <br />
                  <br />
                  Sarah, your financial leadership has been pivotal. A 15%
                  increase in revenue and a 20% boost in profitability showcase
                  your team&#39;s effectiveness in managing our resources. Mark,
                  your operational improvements have been remarkable. A 25%
                  reduction in lead times and increased production efficiency
                  are clear signs of your team&#39;s hard work. Lisa, your sales
                  team has outperformed themselves, expanding our client base by
                  30%. And David, your marketing strategies have been spot-on,
                  doubling our social media engagement and elevating our brand.
                  <br />
                  <br />
                  But let&#39;s not rest on our laurels. As we look ahead, the
                  path to sustained growth is clear: global expansion. We must
                  seize the momentum we&#39;ve built and take our products and
                  services to international markets.
                  <br />
                  Mark, I agree with your assessment; investing in additional
                  production capacity is key. Lisa, building strong
                  relationships and exploring new channels for international
                  sales will be your focus. David, we&#39;ll rely on your
                  expertise to adapt our marketing campaigns to diverse regions
                  and cultures.
                  <br />
                  <br />
                  In closing, this is a moment to celebrate, but it&#39;s also a
                  time to set our sights higher. Let&#39;s unite our efforts,
                  set clear objectives, and embark on this exciting journey
                  towards international success. Thank you for your commitment,
                  and I look forward to our collective achievements in the next
                  quarter and beyond.
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TranscriptsFourPage;
