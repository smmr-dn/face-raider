import NavBar from "../home-page/NavBar";
import './Account.css';
import React from "react";

const Account = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    function handleTabClick(index) {
        setActiveTab(index);
    }

    return(
        <div className="user-account-page">
        <div className="vertical-tabs">
                <ul className="tab-headers">
                    <li className={`tab-header ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}>Tab 1</li>
                    <li className={`tab-header ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}>Tab 2</li>
                    <li className={`tab-header ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}>Tab 3</li>
                </ul>
        </div>
        <div className="tab-content-box">
                <div className="tab-content">
                <div className={`tab-panel ${activeTab === 0 ? "active" : ""}`}>Content for Tab 1</div>
                <div className={`tab-panel ${activeTab === 1 ? "active" : ""}`}>Content for Tab 2</div>
                <div className={`tab-panel ${activeTab === 2 ? "active" : ""}`}>Content for Tab 3</div>
                </div>
            </div>
        </div>
    )
}

export default Account