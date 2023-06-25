const firebaseConfig = {
  apiKey: "AIzaSyBLw77-EiB-LddpIetTbHtuqieJHHKMpXM",
  authDomain: "omiefood-contactfood.firebaseapp.com",
  databaseURL: "https://omiefood-contactfood-default-rtdb.firebaseio.com",
  projectId: "omiefood-contactfood",
  storageBucket: "omiefood-contactfood.appspot.com",
  messagingSenderId: "776686573115",
  appId: "1:776686573115:web:f37007e68d59c84047ae1e",
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

//reference database
const contactFormDB = firebase.database().ref("contactForm");
document.getElementById("cta_form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //link contact info from html
  const full_name = getElementById("full-name");
  const email = getElementById("email");
  const select_where = getElementById("select_where");

  //call the saveContact function
  saveContacts(full_name, email, select_where);

  //enable alert
  document.querySelector(".alert").style.display = "block";

  //remove alert after time out
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //reset form
  document.getElementById("cta_form").reset();
}

const saveContacts = function (full_name, email, select_where) {
  const newContactForm = contactFormDB.push();

  newContactForm.set({
    full_name: full_name,
    email: email,
    select_where: select_where,
  });
};

const getElementById = (id) => {
  return document.getElementById(id).value;
};
