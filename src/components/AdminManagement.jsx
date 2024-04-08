// components/AdminManagement.js
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function AdminManagement() {
  return (
    <div className="max-w-7xl relative overflow-y-hidden   mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-100 overflow-y-hidden  rounded-lg p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center h-[250px]"
        >
          <h3 className="text-xl font-bold mb-4">
            Start building your organization
          </h3>
          <p className="text-gray-600 mb-6">
            Invite users to unlock unique team scheduling features starting as
            low as $15 per user/mo.
          </p>
          <button className=" bg-blue-500 text-white px-4 py-2 rounded-3xl font-semibold hover:bg-blue-600">
            Invite Users
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 3, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className=" overflow-y-hidden"
        >
          <h2 className=" ">What can i do as a team?</h2>
          <div className=" flex gap-x-2 justify-center lg:flex-row flex-col items-start ">
            <div className="flex   gap-4 justify-center  lg:flex-row flex-col lg:items-stretch sm:items-center  mt-8">
              <Card
                title={"Round Robin Scheduling"}
                desc={
                  "Automatically assign meetings based on what makes the most sense for your team's goals — whether by availability, priority or equity."
                }
              ></Card>
              <Card
                title={"Access Powerful Management Tools"}
                desc={
                  "Get new and existing users up to speed and engaged with event type templates to make sure everyone's set up for efficient scheduling, allmanaged through one centralized billing solution."
                }
              ></Card>
            </div>
            <div className=" relative w-[31%] ">
              <div className="text-center  cursor-pointer mt-10 object-center bg-slate-700 text-white py-2 px-3 rounded-lg">
                Getting Started
              </div>
              <span className="absolute text-[10px] font-semibold top-7 right-0 rounded-full py-1 px-2 bg-red-500">
                3
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminManagement;
