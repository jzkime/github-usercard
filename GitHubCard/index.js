import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tim-sansone", "ashurik522", "gretchyn-hickman", "christinebussingerdev", "Abargallo19", "RealSadLemon", "FytaiLynch"];

function getGitHub(obj){
  const divCard = document.createElement("div");
  const imgIcon = document.createElement("img");
  const divInfo = document.createElement("div");
  const nameH = document.createElement("h3");
  const userP = document.createElement("p");
  const locaP = document.createElement("p");
  const profileP = document.createElement("p");
  const profileA = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");


  divCard.classList.add("card");
  imgIcon.src = obj.avatar_url;
  divInfo.classList.add("card-info");
  nameH.classList.add("name");
  nameH.textContent = obj.name
  userP.classList.add("username");
  userP.textContent = obj.login;
  locaP.textContent = `Location: ${obj.location}`;
  profileP.textContent = `Profile: `;
  profileA.href = obj.html_url;
  profileA.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;

  divCard.appendChild(imgIcon);
  divCard.appendChild(divInfo);
  divInfo.appendChild(nameH);
  divInfo.appendChild(userP);
  divInfo.appendChild(locaP);
  divInfo.appendChild(profileP);
  profileP.appendChild(profileA);
  divInfo.appendChild(followers);
  divInfo.appendChild(following);
  divInfo.appendChild(bio);

  return divCard;
}

const cards = document.querySelector(".cards")

// api is able to get all the data needed = own function, can put any username through;
function cardMaker(user) {
  axios.get(`https://api.github.com/users/${user}`)
  .then((res) => {
  const finalCard = getGitHub(res.data);
  cards.appendChild(finalCard);
})
.catch((err) => {
  console.log(err)
})
}

cardMaker("jzkime")
followersArray.forEach(user => {
  cardMaker(user);
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
