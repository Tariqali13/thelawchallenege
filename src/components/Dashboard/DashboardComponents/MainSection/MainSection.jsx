import React, { Component } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardCards from '../DashboardCard/DashboardCard';
import DashboardFooter from '../DashboardFooter/Dashboardfooter';

class MainSection extends Component {
 
    render() {
        return (
            <div className="main_section">
               <DashboardHeader/>
               <DashboardCards/>
            <DashboardFooter/>         
              
            </div>
        );
    }
}

export default MainSection;