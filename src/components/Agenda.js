import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const submit = () => {
  console.log("Submited Successfully");
};
function Agenda() {
  return (
    <>
      <div className="p-2">
        <h1 className="font-bold hover:cursor-pointer hover:text-slate-600 active:text-black">
          Agenda
        </h1>

        <div className="text-left px-4 text-sm font-semibold pt-8 leading-8 pb-6 ">
          <span>UX/UI Decision Making</span> <br />
          <span>UX/UI Products Edit</span>
        </div>

        {/* Notes Section */}
        <div>
          <h1 className="font-bold">Notes</h1>
          <div className="pl-4 font-semibold leading-8 text-sm">
            <span>Decision Point 1, Points- add actions here</span> <br />
            <span>Insight, Points- add actions here</span> <br />
            <span>Discussion, Points- add actions here</span>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <div className="flex flex-row pt-6 items-baseline">
            <h1 className="font-bold ">Resources </h1>
            <span className="pl-2 text-xs text-slate-500">
              {" "}
              (Download links)
            </span>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-row gap-6 p-2">
            <button className="hover:text-slate-600">
              Sales.pptx{" "}
              <DownloadIcon className="text-sky-500 hover:text-sky-400  " />
            </button>
            <button className="hover:text-slate-600">
              Sales.pptx{" "}
              <DownloadIcon className="text-sky-500 hover:text-sky-400" />
            </button>
          </div>
        </div>

        {/* condition section */}
        <div className="pt-16 jusitfy-end text-sm">
          <span>
            <Checkbox {...label} />I agree to the Meetings Minutes
          </span>
          <br />
          <span>
            <Checkbox {...label} />I Don't Agree to the Meeting Minutes
          </span>
          <div className="flex flex-row gap-6 py-6 md:justify-end ">
            <span>
              <Button variant="outlined">Close</Button>
            </span>
            <span>
              <Button variant="contained" onClick={submit}>
                Submit
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agenda;
