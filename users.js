import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const ADMIN_EMAIL = "es7751530@gmail.com";
const usersList = document.getElementById("usersList");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    if (user.email !== ADMIN_EMAIL) {
        alert("Access Denied!");
        window.location.href = "home.html";
        return;
    }

    try {
        const snapshot = await getDocs(collection(db, "users"));

        usersList.innerHTML = "";

        snapshot.forEach((doc) => {
            const data = doc.data();

            usersList.innerHTML += `
                <div class="price-card">
                    <h3>${data.fullName}</h3>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Joined:</strong> ${data.createdAt}</p>
                </div>
            `;
        });

        if (snapshot.empty) {
            usersList.innerHTML = "<p>No users found.</p>";
        }

    } catch (error) {
        usersList.innerHTML = "<p>Error loading users.</p>";
        console.error(error);
    }

});