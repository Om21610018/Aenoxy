import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AdminManagement from "./AdminManagement";

function SubHeader() {
  const [tab, setTab] = useState(0);
  return (
    <Tabs>
      <div className=" bg-white pt-4 shadow-gray-600 shadow-xl">
        <div className=" bg-white py-2  z-20  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center  mb-6">
            <h2 className="text-2xl font-bold">Admin Management</h2>
            <button className="hover:bg-blue-500 hover:text-white  text-blue-600 font-semibold border-2 transition-all duration-200 border-blue-500 rounded-3xl px-4 py-2 ">
              + New User
            </button>
          </div>
          <div className="">
            <TabList className="flex space-x-4">
              <Tab
                onClick={() => {
                  setTab(0);
                }}
                className={` ${
                  tab == 0 ? " pb-2 border-b-4 border-blue-600" : " border-none"
                }  cursor-pointer`}
              >
                All people
              </Tab>
              <Tab
                onClick={() => {
                  setTab(1);
                }}
                className={`${
                  tab == 1 ? " pb-2 border-b-4 border-blue-600" : " border-none"
                } cursor-pointer`}
              >
                Groups
              </Tab>

              <Tab
                onClick={() => {
                  setTab(2);
                }}
                className={`${
                  tab == 2 ? " pb-2 border-b-4 border-blue-600" : " border-none"
                } cursor-pointer`}
              >
                Managed events
              </Tab>
              <span className=" h-7 text-sm text-white  font-semibold  px-2 rounded-lg  py-[2px] bg-blue-500">
                BETA
              </span>
            </TabList>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-start h-screen bg-gray-100">
        <TabPanel>
          <AdminManagement></AdminManagement>
        </TabPanel>
        <TabPanel>Groups tab</TabPanel>
        <TabPanel>Managed events tab</TabPanel>
      </div>
    </Tabs>
  );
}

export default SubHeader;
