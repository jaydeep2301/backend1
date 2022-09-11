let node = {
  Black: {
    Blue: {
      Red: "red",
      Green: {
        Purple: {
          Brown: {
            crimson: "crimson",
          },
          Pink: "pink",
        },
      },
    },
  },
};

function root() {
  let ans = Object.keys(this);
  return ans[0];
}
function child() {
  let ans = Object.keys(this);
  return ans;
}
function hasCHildren(value) {
  let ans = Object.keys(this);
  if (ans.includes(value)) {
    return true;
  } else {
    false;
  }
}
function child(value) {
  let ans = Object.keys(this);
  if (ans.includes(value)) {
    return this[value];
  } else {
    false;
  }
}
function isRoot(value) {
  let ans = Object.keys(this);
  if (ans.includes(value) && ans.length == 1) {
    return true;
  } else {
    false;
  }
}
