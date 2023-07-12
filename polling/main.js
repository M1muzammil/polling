// const firebaseConfig = {
//   apiKey: "AIzaSyCgJ6TQng80sckOz8ZJa0m6linNJchBMxc",
//   authDomain: "polling-app-93fd8.firebaseapp.com",
//   databaseURL: "https://polling-app-93fd8-default-rtdb.firebaseio.com",
//   projectId: "polling-app-93fd8",
//   storageBucket: "polling-app-93fd8.appspot.com",
//   messagingSenderId: "106198135913",
//   appId: "1:106198135913:web:c025dc5e65dfa40fab9ef8",
//   measurementId: "G-T82387CZRT"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCgJ6TQng80sckOz8ZJa0m6linNJchBMxc",
  authDomain: "polling-app-93fd8.firebaseapp.com",
  databaseURL: "https://polling-app-93fd8-default-rtdb.firebaseio.com",
  projectId: "polling-app-93fd8",
  storageBucket: "polling-app-93fd8.appspot.com",
  messagingSenderId: "106198135913",
  appId: "1:106198135913:web:c025dc5e65dfa40fab9ef8",
  measurementId: "G-T82387CZRT"

};



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



function createPoll() {
  // Get the current timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
  // Get input values
  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;

  db.collection("poll").add({
    timestamp: timestamp,
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      renderPolls();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  // Clear input fields
  document.getElementById("question").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
}

function renderPolls() {
  const container = document.querySelector(".container");

  db.collection("poll")
    .orderBy("timestamp", "desc")
    .get()
    .then((querySnapshot) => {
      container.innerHTML = ""; // Clear previous poll list
      
      if (querySnapshot.empty) {
        container.innerText = "No Polls Found";
      } else {
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          const newlist = document.createElement("div");
          newlist.className = "list";

          const h1 = document.createElement("h1");
          h1.className = "apph1";
          h1.innerText = data.question;
          newlist.appendChild(h1);

          const box = document.createElement("div");
          box.className = "llist";
          newlist.appendChild(box);

          const row1 = document.createElement("div");
          row1.className = "row1";
          box.appendChild(row1);

          const rowinrow1 = document.createElement("div");
          row1.appendChild(rowinrow1);
          rowinrow1.className = "rowinrow";

          const option1Label = document.createElement("label");
          const opp1 = document.createElement("input");
          opp1.type = "radio";
          opp1.name = "options";
          opp1.value = data.option1;
          option1Label.appendChild(opp1);
          option1Label.appendChild(document.createTextNode(data.option1));
          rowinrow1.appendChild(option1Label);

          const row2 = document.createElement("div");
          row2.className = "row1";
          box.appendChild(row2);

          const rowinrow2 = document.createElement("div");
          row2.appendChild(rowinrow2);
          rowinrow2.className = "rowinrow";

          const option2Label = document.createElement("label");
          const opp2 = document.createElement("input");
          opp2.type = "radio";
          opp2.name = "options";
          opp2.value = data.option2;
          option2Label.appendChild(opp2);
          option2Label.appendChild(document.createTextNode(data.option2));
          rowinrow2.appendChild( option2Label);

          const row3 = document.createElement("div");
          row3.className = "row1";
          box.appendChild(row3);

          const rowinrow3 = document.createElement("div");
          row3.appendChild(rowinrow3);
          rowinrow3.className = "rowinrow";

          const option3Label = document.createElement("label");
          const opp3 = document.createElement("input");
          opp3.type = "radio";
          opp3.name = "options";
          opp3.value = data.option3;
          option3Label.appendChild(opp3);
          option3Label.appendChild(document.createTextNode(data.option3));
          rowinrow3.appendChild(option3Label);

          const deleteCell = document.createElement("button");
          deleteCell.className = "delete";
          newlist.appendChild(deleteCell);
          deleteCell.name = "delete";
          deleteCell.addEventListener("click", () => deletePoll(doc.id));
          deleteCell.textContent = "Delete";

          container.appendChild(newlist);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching polls: ", error);
    });
}

function deletePoll(docId) {
  const password = prompt("Enter password to delete the poll:");

  if (password === "12345678") {
    return db
      .collection("poll")
      .doc(docId)
      .delete()
      .then(() => {
        renderPolls();
      })
      .catch((error) => {
        console.error("Error deleting poll: ", error);
      });
  } else {
    alert("Incorrect password. Poll not deleted.");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  renderPolls();
});


