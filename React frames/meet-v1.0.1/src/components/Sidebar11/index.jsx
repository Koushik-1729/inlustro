import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line } from "components";

const Sidebar11 = (props) => {
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
          className="common-pointer h-[63px] md:h-auto object-cover w-[63px]"
          src="images/img_crown.png"
          alt="crown"
          onClick={() => navigate("/hostedmeetings")}
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
      <Sidebar className={props.className}>
        <Img
          className="h-[72px] md:h-auto mb-[849px] ml-[66px] mr-[47px] mt-[59px] object-cover w-[72px]"
          src="images/img_logo_72x72.png"
          alt="logo"
        />
        <Line className="bg-white-A700 h-px mb-[719px] ml-[67px] mr-[46px] mt-[262px] w-[39%]" />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              height: "63px !important",
              paddingTop: "6px",
              flexDirection: "column",
              borderRadius: "9px",
              [`&:hover, &.ps-active`]: {
                backgroundColor: "#fdd33eff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[104px] mt-[163px] pl-[72px] pr-[50px] pt-1.5 md:px-10 sm:px-5 w-[35%]"
        >
          <div className="flex flex-col gap-[30.01px] items-center justify-start pb-1.5 w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col gap-[58px] items-center justify-start mt-[50px] pb-1.5 w-full">
            <MenuItem>
              <div className="flex items-center justify-start">
                <Img
                  className="h-[63px] md:h-auto object-cover w-[63px]"
                  src="images/img_setting.png"
                  alt="setting"
                />
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex items-center justify-end">
                <Img
                  className="h-[63px] md:h-auto object-cover w-[63px]"
                  src="images/img_question.png"
                  alt="question"
                />
              </div>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
