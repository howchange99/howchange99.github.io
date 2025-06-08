
const organData = {
  heart: {
    title: "心臟",
    desc: "這是人體的心臟，是血液循環的核心器官。透過有節奏的跳動，心臟將氧氣豐富的血液輸送到全身，再將代謝後的血液送回肺部進行氣體交換，是維持生命的動力來源。",
    model: "assets/heart.glb",
    audio: "audio/heart.mp3"
  },
  lungs: {
    title: "肺",
    desc: "這是人體的肺部，位於胸腔內。當我們呼吸時，肺部將氧氣帶入血液，並排出二氧化碳，是進行氣體交換的重要器官，對維持細胞運作至關重要。",
    model: "assets/lungs.glb",
    audio: "audio/lungs.mp3"
  }
};

let currentOrgan = 'heart';
let currentAudio = null;

const marker = document.getElementById('marker');
const organTitle = document.getElementById('organTitle');
const organDesc = document.getElementById('organDesc');

function switchOrgan(name) {
  const data = organData[name];
  currentOrgan = name;

  const oldModel = document.getElementById('organModel');
  if (oldModel) oldModel.remove();

  const newModel = document.createElement('a-entity');
  newModel.setAttribute('id', 'organModel');
  newModel.setAttribute('gltf-model', data.model);
  newModel.setAttribute('position', '0 1 0');
  newModel.setAttribute('scale', '2 2 2');
  newModel.setAttribute('animation__spin', 'property: rotation; to: 0 360 0; loop: true; dur: 4000');
  newModel.setAttribute('animation__pulse', 'property: scale; dir: alternate; dur: 1200; loop: true; to: 2.4 2.4 2.4');

  marker.appendChild(newModel);

  organTitle.textContent = data.title;
  organDesc.textContent = data.desc;
}

marker.addEventListener('markerFound', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(organData[currentOrgan].audio);
  currentAudio.play();
});

function playAudio() {
  if (currentAudio) currentAudio.play();
}

function pauseAudio() {
  if (currentAudio) currentAudio.pause();
}
