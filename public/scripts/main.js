var isLoginOpen = false,
  isSignUpOpen = false;

const openLogin = () => {
  if (!isSignUpOpen) {
    isLoginOpen = true;
    document.getElementsByClassName("login-modal-form")[0].style.display =
      "block";
    document.getElementsByClassName("signup-modal-form")[0].style.display =
      "none";
    document.getElementById("modal-backdrop").style.display = "block";
  }
};

const openSignUp = () => {
  if (!isLoginOpen) {
    isSignUpOpen = true;
    document.getElementsByClassName("signup-modal-form")[0].style.display =
      "block";
    document.getElementsByClassName("login-modal-form")[0].style.display =
      "none";
    document.getElementById("modal-backdrop").style.display = "block";
  }
};

const closeLogin = () => {
  document.getElementById("modal-backdrop").style.display = "none";
  isLoginOpen = false;
};

const closeSignUp = () => {
  document.getElementById("modal-backdrop").style.display = "none";
  isSignUpOpen = false;
};

const handleLoginSubmit = (e) => {
  postAuthHandle();
  closeLogin();
};

const postAuthHandle = () => {
  let userName = document.getElementById("userName").value;
  if (userName.match(/@+/)) {
    userName = userName.substring(0, userName.match(/@+/).index);
  }
  // document.getElementById("request-login").style.visibility = "hidden";
  document.getElementById("greeting").innerHTML = `Hi, ${userName}!`;
  document.getElementById("calorie-statistics-view").style.visibility =
    "visible";
};

const enterMacros = () => {
  document.getElementById("modal-backdrop-calorie-visuals").style.display =
    "block";
};

const closeMacrosForm = () => {
  document.getElementById("modal-backdrop-calorie-visuals").style.display =
    "none";
};
