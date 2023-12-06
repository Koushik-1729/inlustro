import React from "react";
import "./goal.css";

import profile from '../Assessts/profile.png'
import arrow1 from '../Assessts/arrow1.png'
import tab from '../Assessts/tab.png'
import logo1 from '../Assessts/logo1.png'
import home from '../Assessts/home.png'
import add from '../Assessts/add.png'
import crown from '../Assessts/crown.png'
import people from '../Assessts/people.png'
import setting from '../Assessts/setting.png'
import question from '../Assessts/question.png'

export const Goal = () => {
    return (
        <div className="goal-progress">
            <div className="div">
                <div className="overlap">
                    <div className="overlap-group">
                        <p className="text-wrapper">Increase social media engagement by 20%.</p>
                        <div className="line" > </div>
                        <div className="img"></div>
                        <div className="line-2" ></div>
                        <div className="line-3" ></div>
                    </div>
                    <div className="text-wrapper-2">Febuary 03 - 2023</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">Miguel, Trudy, Sarah</div>
                    </div>
                    <div className="overlap-2">
                        <div className="text-wrapper-4">Incomplete</div>
                    </div>
                    <div className="text-wrapper-5">Task</div>
                    <div className="text-wrapper-6">Deadline</div>
                    <div className="text-wrapper-7">Assigned to</div>
                    <div className="text-wrapper-8">Status</div>
                </div>
                <p className="p">Showing 8 out of 8</p>
                <div className="previous">&lt; Previous</div>
                <div className="next">Next &gt;</div>
                <div className="text-wrapper-9">|</div>
                <div className="overlap-3">
                    <div className="rectangle" />
                    <div className="text-wrapper-10">Create a new task</div>
                    <a href=""><img className="tab" alt="Tab" src={tab} /></a>
                </div>
                <div className="line-4"></div>
                <div className="text-wrapper-11">05/08</div>
                <div className="text-wrapper-12">Goal Progress</div>
                <img className="arrow" alt="Arrow" src={arrow1} />
                <div className="navigation-bar">
                    <a href=""><img className="home" alt="Home" src={home} /></a>
                    <a href=""><img className="crown" alt="Crown" src={crown} /></a>
                    <a href=""><img className="people" alt="People" src={people} /></a>
                    <a href=""><img className="add" alt="Add" src={add} /></a>
                    <a href=""><img className="setting" alt="Setting" src={setting} /></a>
                    <a href=""><img className="question" alt="Question" src={question} /></a>
                    <div className="profile-picture">
                        <img className="image" alt="Image" src={profile} />
                    </div>
                    <img className="logo" alt="Logo" src={logo1} />
                    <div className="line-5"> </div>
                </div>
            </div>
        </div >
    );
};

export default Goal;
