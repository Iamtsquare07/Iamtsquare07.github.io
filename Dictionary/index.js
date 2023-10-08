const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");
let meaning;

const fetchMeaning = async (wordQuery) => {
  const endpoint = url + wordQuery;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error("Request failed!");
    }
  } catch (error) {
    console.log(error);
  }
};

async function displayDictionary(call) {
  const wordQuery = inputField.value;
  meaning = await fetchMeaning(wordQuery);

  if (meaning) {
    renderResponse(meaning);
  }
  return call = true;
}

// Clear previous results and display results to webpage
const renderDictionery = (event) => {
  event.preventDefault();
  responseField.innerHTML = "";
  responseField.innerHTML = `
  <h4>Pronunciation</h4>
  <div id="audio-player">
    <div id="play"></div>
  </div>
  <div id="pronunciation">

  </div>
  
  <ol id="definition"></ol>
  <ul id="pos"></ul>
  `
  displayDictionary();
};

submit.addEventListener("click", renderDictionery);
inputField.addEventListener("keypress", function (event) {
  if (event.keyCode == "Enter") {
    renderDictionery();
  }
});

// Formats response to look presentable on webpage
const renderResponse = (res) => {
  if (res.length === 0) {
    responseField.innerHTML =
      "<p>Try again! Word not found! or does not exist</p>";
    return;
  }

  // Get the definitions for the word "knowledge"
  const meanings = res[0].meanings;
  const word = res[0].word;
  const phonetics = res[0].phonetics[1];
  responseField.style.visibility = "visible";
  const defList = document.getElementById("definition");
  const posList = document.getElementById("pos");
  defList.innerHTML = "";
  posList.innerHTML = "";

  if (meanings && meanings.length > 0) {
    const defHeading = document.createElement("h4");
    defHeading.textContent = `Definitions for the word "${word}":`;
    defList.appendChild(defHeading);
    let displayedDefinitions = 0; // Track the number of displayed definitions
    meanings[0].definitions.forEach((definitionObj, defIndex) => {
      if (displayedDefinitions < 5) {
        const definition = definitionObj.definition;

        const defListElement = document.createElement("li");
        defListElement.textContent = `${definition}`;
        defList.appendChild(defListElement);

        displayedDefinitions++;
      }
    });
    const partOfSpeech = meanings[0].partOfSpeech;
    const posListElement = document.createElement("li");
    posListElement.innerHTML = `<b>Part of Speech:</b> ${partOfSpeech}`;
    posList.appendChild(posListElement);
  } else {
    console.log(`No definitions found for the word "${word}".`);
  }

  if (phonetics) {
    const text = phonetics.text;
    const audio = phonetics.audio;
    if (text) {
      document.getElementById("pronunciation").innerHTML = `
      ${word}: ${text}<br>
      `;
    }

    if (audio) {
       playAudio(audio);
    }
  } else {
    console.log(`No phonetics found for the word "${word}".`);
  }

  inputField.value = "";
};

async function playAudio(audio) {
  const audioPlayer = document.getElementById("audio-player");
  const audioBlock = document.getElementsByTagName("audio");
  if (audioBlock.length > 0) {
    console.log(audioBlock[0]);
    audioBlock[0].remove();
    console.log(audioBlock[0]);
  }
  const playButton = document.getElementById("play");
  const audioElement = new Audio(audio);
  audioPlayer.appendChild(audioElement);
  playButton.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;

  playButton.addEventListener("click", () => {
    if (audioElement.paused) {
      audioElement.play();
      playButton.innerHTML = `<i class="fa-solid fa-volume-high fa-beat-fade"></i>`;
    } else {
      audioElement.pause();
      playButton.innerHTML = `<i class="fa-solid fa-volume-low"></i`;
    }
  });

  audioElement.addEventListener("ended", () => {
    // Audio playback has ended
    playButton.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
  });
}
