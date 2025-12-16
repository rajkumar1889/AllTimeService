import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const nameInput = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("list");

// 🔥 LIVE LISTENER (PAGE LOAD PE)
onSnapshot(collection(db, "users"), (snapshot) => {
  list.innerHTML = "";
  snapshot.forEach((doc) => {
    list.innerHTML += `<li>${doc.data().name}</li>`;
  });
});

// SAVE DATA
saveBtn.addEventListener("click", async () => {
  if (nameInput.value === "") return;

  await addDoc(collection(db, "users"), {
    name: nameInput.value
  });

  nameInput.value = "";
});
