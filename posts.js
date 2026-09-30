import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyC98CD4o8m-JLvMAY3YinyLSnJMrmQWDjc",
  authDomain: "doc-xander-media-d2775.firebaseapp.com",
  projectId: "doc-xander-media-d2775",
  storageBucket: "doc-xander-media-d2775.firebasestorage.app",
  messagingSenderId: "539361973178",
  appId: "1:539361973178:web:60b294abf4539b34c74383",
  measurementId: "G-5FPDWDC5VK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const newsSection = document.querySelector("#news .cards");


function escapeHTML(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function renderPosts(posts) {

  if (!newsSection) return;


  if (posts.length === 0) {

    newsSection.innerHTML = `
    <div class="card news-card">
      <small>DOC XANDER</small>
      <h3>No posts yet</h3>
      <p>New stories will appear here.</p>
    </div>`;

    return;
  }


  newsSection.innerHTML = posts.map(post => {

    return `

    <div class="card news-card">

      <small>${escapeHTML(post.category || "NEWS")}</small>

      <h3>${escapeHTML(post.title)}</h3>

      ${
        post.imageUrl
        ? `<img src="${escapeHTML(post.imageUrl)}" 
        style="width:100%;border-radius:10px;margin:10px 0;">`
        : ""
      }


      <p>
      ${escapeHTML(post.content)}
      </p>


      ${
        post.youtubeUrl
        ? `
        <a class="btn" 
        href="${escapeHTML(post.youtubeUrl)}"
        target="_blank">
        ▶ Watch Video
        </a>`
        : ""
      }


    </div>

    `;

  }).join("");

}



async function loadPosts(){

try{

const postsQuery = query(
collection(db,"posts"),
orderBy("createdAt","desc")
);


const snapshot = await getDocs(postsQuery);


const posts = snapshot.docs.map(doc=>({
id:doc.id,
...doc.data()
}));


renderPosts(posts);


}

catch(error){

console.log(error);

}

}



loadPosts();
