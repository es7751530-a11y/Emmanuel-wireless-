import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const ADMIN_EMAIL = "es7751530@gmail.com";

const totalUsers = document.getElementById("totalUsers");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    if (user.email !== ADMIN_EMAIL) {
        alert("Access Denied! You are not an administrator.");
        window.location.href = "home.html";
        return;
    }

    try {
        const snapshot = await getDocs(collection(db, "users"));
        totalUsers.innerText = snapshot.size;
    } catch (error) {
        console.error(error);
        totalUsers.innerText = "Error";
    }

});

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    alert("Logged out successfully.");
    window.location.href = "index.html";
});