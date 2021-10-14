import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ProjectCards from './ProjectCards';
// import Footer from './components/Footer';


function HomeTabs() 
{ 
  return <div className="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects</Tab>
      <Tab >Achievements</Tab>
      <Tab >Contact</Tab>
      
    </TabList>

    <TabPanel className = "panelview">
    <div> Tell about yourself here!</div>
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </TabPanel>
    <TabPanel>
      <ProjectCards />
    </TabPanel>
    <TabPanel>
      <div>Mention your achievements here!</div>
      <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </TabPanel>
    <TabPanel>
      <div>Add your Contact Details!</div>
    </TabPanel>
  </Tabs>
  </div>
  

}

export default HomeTabs;