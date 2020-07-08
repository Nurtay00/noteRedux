import React from "react";

import List from "../../Components/List/List";
import InputBar from "../../Components/InputBar/InputBar";
import "./Mainpage.css";

export default function Mainpage(props: any) {
  return (
    <div className="warp">
      <div>TODO APP</div>
      <InputBar {...props} />
      <div className="btnstyle">
        <button onClick={() => props.statusAll()} className="importantbtn">
          all
        </button>
        <button onClick={() => props.statusImp()} className="primary">
          important
        </button>
        <button onClick={() => props.statusDone()} className="donebtn">
          done
        </button>
      </div>
      <List {...props} />
    </div>
  );
}
