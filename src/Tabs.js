import React, { useState } from "react";
import Tab from "./Tab";
import "./App.css";
import WeatherAPI from "./WeatherAPI";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState('Singapore');

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">
            <h2>{activeTab}</h2>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.city}
                        onClick={() =>
                            handleTabClick(tab.city)
                        }
                        isActive={tab.city === activeTab}
                    />
                ))}
            </div>
            <div className="tab-content">
                <p>7-Day Forecast for {activeTab}</p>
                <WeatherAPI city={activeTab}/>
            </div>
        </div>
    );
};

export default Tabs;