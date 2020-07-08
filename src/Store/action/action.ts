export function add(value: any) {
  return {
    type: "ADD",
    value: value,
  };
}

export function imp(value: any) {
  return {
    type: "IMP",
    value: value,
  };
}
export function allimp() {
  return {
    type: "STATUSIMP",
  };
}
export function all() {
  return {
    type: "ALL",
  };
}
export function done(value: any) {
  return {
    type: "DONE",
    value: value,
  };
}
export function alldone() {
  return {
    type: "STATUSDONE",
  };
}

export function ondelete(value: any) {
  return {
    type: "DELETE",
    value: value,
  };
}
export function onall(value: any) {
  return {
    type: "ONALL",
    value: value,
  };
}
