const initialState = {
  list: [],
  status: "all",
};
export default function reducer(
  state: { list: any; status: string } = initialState,
  action: { type: any; value: any }
) {
  var copylist = state.list.concat();
  switch (action.type) {
    case "ADD":
      var obj: { body: any; status: string; id: number };
      obj = {
        body: action.value,
        status: "all",
        id: Math.round(Math.random() * 100),
      };
      copylist.push(obj);
      if (action.value === "" || action.value === undefined) {
        return state;
      } else {
        return {
          list: copylist,
          status: state.status,
        };
      }

    case "IMP":
      copylist.map((element: any) =>
        element.id === action.value.id ? (element.status = "imp") : element
      );
      return {
        list: copylist,
        status: state.status,
      };

    case "STATUSIMP":
      return {
        list: copylist,
        status: "imp",
      };

    case "ALL":
      return {
        list: copylist,
        status: "all",
      };

    case "STATUSDONE":
      return {
        list: copylist,
        status: "done",
      };

    case "DONE":
      copylist.map((element: any) =>
        element.id === action.value.id ? (element.status = "done") : element
      );
      return {
        list: copylist,
        status: state.status,
      };
    case "DELETE":
      return {
        list: copylist.filter((element: any) => element.id !== action.value.id),
        status: state.status,
      };
    case "ONALL":
      copylist.map((element: any) =>
        element.id === action.value.id ? (element.status = "all") : element
      );
      return {
        list: copylist,
        status: state.status,
      };

    default:
      return state;
  }
}
