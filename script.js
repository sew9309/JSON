let contentGridElement = document.getElementById('contentGrid');
let jsonDatabase = [
  {
    "name" : "Spongebob Squarepants",
    "picture_url" : "https://static.wikia.nocookie.net/characters/images/d/db/E0BE5AED-A4D6-48DB-BA0A-F95C302D7286-379-0000003D6305009F.png/revision/latest/top-crop/width/360/height/450?cb=20200417170741",
    "blurb" : "Aye-aye, captain!",
    "voice actor" : "Tom Kenny",
    "color" : "#f7e948"
  },
{
  "name" : "Patrick Star",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png",
  "blurb" : "Is mayonnaise an instrument?",
  "voice actor" : "Bill Fagerbakke",
  "color" : "#ff808b"
},
{
  "name" : "Squidward Tentacles",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png",
  "blurb" : "Oh, puh-lease.",
  "voice actor" : "Rodger Bumpass",
  "color" : "#a3d3c3"
},
{
  "name" : "Sandy Cheeks",
  "picture_url" : "https://static.wikia.nocookie.net/heroes-and-villians/images/9/9c/343px-Sandy_Cheeks.svg.png/revision/latest?cb=20180319193945",
  "blurb" : "Howdy, y'all!",
  "voice actor" : "Carolyn Lawrence",
  "color" : "#ce6bdb"
},
{
  "name" : "Mrs. Puff",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png",
  "blurb" : "You need six hundred to pass, you got six.",
  "voice actor" : "Mary Jo Catlett",
  "color" : "#ffdab9"
},
{
  "name" : "Mr. Krabs",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png",
  "blurb" : "Sweet mother of Pearl!",
  "voice actor" : "Clancy Brown",
  "color" : "#C82316"
}
];

// createElementProper(jsonDatabase[0]);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper (incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newImage = document.createElement("IMG");
  newImage.classList.add("characterImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentCharacter = document.createElement("H1");
  newContentCharacter.classList.add('contentTitle');
  newContentCharacter.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentCharacter);

  let newContentCatchphrase = document.createElement("H2");
  newContentCatchphrase.classList.add('contentBlurb');
  newContentCatchphrase.innerText = incomingJSON['blurb'];
  newContentElement.appendChild(newContentCatchphrase);

  let newContentActor = document.createElement("H3");
  newContentActor.classList.add('contentActor');
  newContentActor.innerText = "Voice Actor: " + incomingJSON['voice actor'];
  newContentElement.appendChild(newContentActor);

  contentGridElement.appendChild(newContentElement);
}
