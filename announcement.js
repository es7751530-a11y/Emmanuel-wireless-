import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const ADMIN_EMAIL = "es7751530@gmail.com";

const saveBtn = document.getElementById("saveAnnouncementBtn");
const announcement = document.getElementById("announcement");

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    if (user.email !== ADMIN_EMAIL) {
        alert("Access Denied!");
        window.location.href = "dashboard.html";
        return;
    }

});

saveBtn.addEventListener("click", async () => {

    if (announcement.value.trim() === "") {
        alert("Please enter an announcement.");
        return;
    }

    try {

        await setDoc(doc(db, "settings", "announcement"), {
            message: announcement.value
        });

        alert("Announcement saved successfully!");

    } catch (error) {

        alert(error.message);

    }

});