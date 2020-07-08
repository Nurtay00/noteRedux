import React from "react";

import "./App.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import { connect } from "react-redux";
// import information from "./Store/Reducer/information";
import {
  add,
  imp,
  allimp,
  all,
  done,
  alldone,
  ondelete,
  onall,
} from "./Store/action/action";
function App(props: any) {
  return (
    <div className="App">
      <Mainpage {...props} />
    </div>
  );
}
function mapStateToProps(state: {
  information: { list: string; status: string };
}) {
  return {
    information: state,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    onAdd: (value: any) => dispatch(add(value)),
    onImp: (value: any) => dispatch(imp(value)),
    onDone: (value: any) => dispatch(done(value)),
    onAll: (value: any) => dispatch(onall(value)),
    onDelete: (value: any) => dispatch(ondelete(value)),
    statusImp: () => dispatch(allimp()),
    statusAll: () => dispatch(all()),
    statusDone: () => dispatch(alldone()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
