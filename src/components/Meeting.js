import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";
import { useState } from "react";

function Meeting() {
  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(true);
  return (
    <>
      <div
        className="flex
      flex-col"
      >
        <div className="bg-green text-white text-left p-8 rounded-l-lg ">
          <div className="p-4 font-semibold">
            <span className="text-lg ">Daily Scrum Meeting</span> <br />
            <span>Date</span> <br />
            <span className="text-sm">
              Daily Stand up for Aled team working on PRD 1Project
            </span>
          </div>

          <hr className="mt-4" />

          {/* Total Participants */}

          <div className="flex flex-row gap-8 py-2">
            {/* Owner section */}
            <span
              className="flex flex-col items-center
        "
            >
              Owner
              <span>
                <AccountCircleIcon />
              </span>
            </span>

            {/* watcher section */}
            <span
              className="flex flex-col items-center 
        "
            >
              Watcher
              <span className="border-r-2 border-l-2 border-white px-8">
                <span>
                  <AccountCircleIcon />
                </span>
                <span>
                  <AccountCircleIcon />
                </span>
                <span>
                  <AccountCircleIcon />
                </span>
              </span>
            </span>

            {/* participants section */}
            <span
              className="flex flex-col items-center 
        "
            >
              Participants
              <span>
                <span>
                  <AccountCircleIcon />
                </span>
                <span>
                  <AccountCircleIcon />
                </span>
                <span>
                  <AccountCircleIcon />
                </span>
                <span>
                  <AccountCircleIcon />
                </span>
              </span>
            </span>
          </div>

          <hr className="mt-4" />

          <div className="mt-8 flex flex-row gap-4">
            <span className="font-semibold">Meeting Hour</span> <br />
            <span>00:00</span>
            <Button variant="contained" color="success">
              Start
            </Button>
            <Button variant="contained">Complete</Button>
          </div>
        </div>

        {/* Section 2 */}

        <div className=" p-6 flex flex-row gap-6 font-semibold items-center ">
          <span className="hover:cursor-pointer hover:text-slate-500">
            Create Follow up Meeting
          </span>
          <span className="hover:cursor-pointer hover:text-slate-500">
            Follow up Meeting
          </span>
          <span className="hover:cursor-pointer hover:text-slate-500 ">
            Date
          </span>
          <span className="text-sky-500 hover:cursor-pointer hover:text-sky-600">
            <CalendarTodayIcon />
          </span>
        </div>

        {/* Feedback Section */}
        <div className="flex flex-row gap-12 p-2 justify-between">
          {/* Star section */}
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Meeting Feedback</span>
            <span className="hover:cursor-pointer text-yellow-400">
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </span>
          </div>

          {/* Writtern feedback */}
          <span>
            <input
              className="p-2 rounded-lg "
              type="text"
              name="textarea"
              id=""
              placeholder="Leave Comment"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Meeting;
