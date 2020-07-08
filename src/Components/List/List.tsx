import React from "react";

import "./List.css";

export default function List(props: any) {
  if (props.information.status === "all") {
    return (
      <div>
        {props.information.list.map((element: any, index: number) => {
          return (
            <div key={index} className="list">
              <div
                className={element.status}
                onClick={() =>
                  element.status === "done"
                    ? props.onAll(element)
                    : props.onDone(element)
                }
              >
                {element.body}
              </div>
              <div>
                <button
                  onClick={() =>
                    element.status === "imp"
                      ? props.onAll(element)
                      : props.onImp(element)
                  }
                  className="toimp"
                >
                  {element.status === "imp" ? "unimportant" : "important"}
                </button>
                <button
                  onClick={() => props.onDelete(element)}
                  className="todelete"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {props.information.list
          .filter((element: any) =>
            element.status === props.information.status ? element : null
          )
          .map((element: any, index: number) => {
            return (
              <div key={index} className="list">
                <div
                  className={element.status}
                  onClick={() =>
                    element.status === "done"
                      ? props.onAll(element)
                      : props.onDone(element)
                  }
                >
                  {element.body}
                </div>
                <div>
                  <button
                    onClick={() =>
                      element.status === "imp"
                        ? props.onAll(element)
                        : props.onImp(element)
                    }
                    className="toimp"
                  >
                    {element.status === "imp" ? "unimportant" : "important"}
                  </button>
                  <button
                    onClick={() => props.onDelete(element)}
                    className="todelete"
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
