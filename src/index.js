"use strict";
import style from "./styles.css";
const shortid = require("shortid");
const notyf = new Notyf();

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const signUpDiv = document.getElementById("signup-div");
const loginDiv = document.getElementById("login-div");
const overlayDiv = document.getElementById("overlay-div");
const userInDiv = document.getElementById("user-in");
const guestButton = document.getElementById("guest");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function showUserPanel(username) {
  signUpDiv.style.display = "none";
  loginDiv.style.display = "none";
  overlayDiv.style.display = "none";
  userInDiv.style.display = "block";
  document.getElementById("guestName").textContent = username;
  showUserPanerlButtons();
}
function showUserPanerlButtons() {
  document.getElementById("sign-up-user-in").style.display = "none";
  document.getElementById("show-list-user-in").style.display = "block";
  document.getElementById("logout-user-in").style.display = "block";
  document.getElementById("logout-user-in").addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    resetInputFields();
    hideUserPanel();
    hideUserPanerlButtons();
    notyf.success("Logged Out Successfully!");
  });
}

function hideUserPanel() {
  signUpDiv.style.display = "block";
  loginDiv.style.display = "block";
  overlayDiv.style.display = "block";
  userInDiv.style.display = "none";
}

function hideUserPanerlButtons() {
  document.getElementById("sign-up-user-in").style.display = "block";
  document.getElementById("show-list-user-in").style.display = "none";
  document.getElementById("logout-user-in").style.display = "none";
  document.getElementById("sign-up-user-in").addEventListener("click", (e) => {
    e.preventDefault();
    resetInputFields();
    hideUserPanel();
    hideUserPanerlButtons();
    container.classList.add("right-panel-active");
    notyf.success("Logged out to Sign-up Area");
  });
}

function resetInputFields() {
  document.getElementById("shortenUrl").value = "";
  document.getElementById("originalUrl").value = "";
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}

guestButton.addEventListener("click", (e) => {
  e.preventDefault();
  showUserPanel("Guest");
  hideUserPanerlButtons();
  notyf.success("Welcome, New Guest!");
});

/*
  minimum functionality requirement - Geust Page will be able to shorten a url
*/
// ids: convert, originalUrl, shortenUrl
document.getElementById("convert").addEventListener("click", async (e) => {
  e.preventDefault();
  const currentUser = document.getElementById("guestName").textContent;
  const originalUrl = document.getElementById("originalUrl");
  const shortenUrl = "/api/shorturl ";
  try {
    const shortenOriginalUrl = await axios({
      method: "POST",
      url: shortenUrl,
      data: {
        url: originalUrl.value,
        shortid: shortid.generate(),
        username: currentUser,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    showShortUrl(shortenOriginalUrl);
    notyf.success("Converted Successfully!");
  } catch (err) {
    notyf.error(err.response.data.message);
  }
});

function showShortUrl(ResponseJson) {
  document.getElementById(
    "shortenUrl"
  ).value = `/cybr/${ResponseJson.data.shorturl}`;
}

/*
  Login a user
*/

document.getElementById("login").addEventListener("click", async (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;
  const loginUrl = "/user/login";
  if (loginEmail.length > 6 && loginPassword.length > 0) {
    try {
      const loginAttempt = await axios({
        method: "POST",
        url: loginUrl,
        data: {
          email: loginEmail,
          password: loginPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (loginAttempt.status === 200) {
        showUserPanel(loginAttempt.data.username);
        notyf.success("Successful Login!");
      }
    } catch (err) {
      notyf.error(err.response.data.message);
    }
  } else {
    notyf.error("please enter a valid email");
  }
});

/*
  sign up a user
*/
document.getElementById("sign-up").addEventListener("click", async (e) => {
  const signUpName = document.getElementById("sign-up-name").value;
  const signUpEmail = document.getElementById("sign-up-email").value;
  const signUpPassword = document.getElementById("sign-up-password").value;
  const signUpUrl = "/user/sign-up";
  if (signUpName.length > 0) {
    try {
      const signUpAttempt = await axios({
        method: "POST",
        url: signUpUrl,
        data: {
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (signUpAttempt.status === 200) {
        notyf.success(signUpAttempt.data.message);
        container.classList.remove("right-panel-active");
      }
    } catch (err) {
      notyf.error(err.response.data.message);
    }
  } else {
    notyf.error("please enter valid information");
  }
});

/*
  user is able to see all his shorten urls
*/

function createRow(link) {
  const parentDivBottom = document.getElementById("bottom");
  // create the row
  const row = document.createElement("div");
  row.classList.add("row");
  const rowLink = document.createElement("div");
  rowLink.classList.add("link");
  const newlink = document.createElement("a");
  newlink.setAttribute("href", link);
  newlink.setAttribute("target", "_blank");
  newlink.textContent = link;

  // append all together
  rowLink.append(newlink);
  row.append(rowLink);
  parentDivBottom.append(row);
}

document
  .querySelector(".second-container")
  .addEventListener("click", async (e) => {
    const currentUser = document.getElementById("guestName").textContent;
    const allShortUrls = "/user/all-short-urls";
    const getUserData = await axios({
      method: "GET",
      url: allShortUrls,
      data: {},
      headers: {
        "Content-Type": "application/json",
        username: currentUser,
      },
    });
    if (getUserData.data.length > 0) {
      for (let url of getUserData.data) {
        createRow(`/cybr/${url.shorturl}`);
      }
      notyf.success("Success!");
    } else {
      notyf.error("no previous links");
    }
  });
