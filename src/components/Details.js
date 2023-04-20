import React from "react";
import Agenda from "./Agenda";
import Tasks from "./Tasks";
import View from "./View";
function Details() {
  return (
    <>
      <div className="flex flex-row gap-8 text-left bg-slate-300  md:bg-white">
        <Agenda />
        <Tasks />
        <View />
      </div>
    </>
  );
}

export default Details;
