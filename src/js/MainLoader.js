var progressImage = document.getElementById("loading-image");
loadMatch();
function loadMatch() {
	progressImage.dataset.progress = 0;
	progressImage.style.clipPath = "inset(100% 0 0 0)";
	progressImage.style.webkitClipPath = "inset(100% 0 0 0)";
	var progressInterval = setInterval(function () {
		let oldProgress = parseInt(progressImage.dataset.progress);
		let newProgress = Math.floor(Math.random() * 5 + 1) / 5;
		let progress = oldProgress + newProgress;
		progressImage.dataset.progress = progress;
		progressImage.style.clipPath = "inset(" + (100 - progress) + "% 0 0 0)";
		progressImage.style.webkitClipPath = "inset(" + (100 - progress) + "% 0 0 0)";
		if (progress >= 100) {
			progressImage.style.clipPath = "inset(0 0 0 0)";
			progressImage.style.webkitClipPath = "inset(0 0 0 0)";
			clearInterval(progressInterval);
		}
	}, 50);
}

// Update the clock.
setInterval(updateClock, 5000);
updateClock();
function updateClock() {
	let date = new Date();
	document.getElementById("time-display").innerHTML =
		date.getHours() + ":" + date.getMinutes();

	let dayOfWeek = "";
	switch (date.getDay()) {
		case 0:
			dayOfWeek = "Sunday";
			break;
		case 1:
			dayOfWeek = "Monday";
			break;
		case 2:
			dayOfWeek = "Tuesday";
			break;
		case 3:
			dayOfWeek = "Wednesday";
			break;
		case 4:
			dayOfWeek = "Thursday";
			break;
		case 5:
			dayOfWeek = "Friday";
			break;
		case 6:
			dayOfWeek = "Saturday";
			break;
	}
	document.getElementById("day-display").innerHTML = dayOfWeek;
}

// Used for visual effects on mouse movement.
document.body.addEventListener("mousemove", updateMouseCoordinates);
var mouseX = 0;
var mouseY = 0;
function updateMouseCoordinates(event) {
	var x = event.clientX;
	var y = event.clientY;
	updateBackgroundPosition(mouseX - x, mouseY - y);
	mouseX = x;
	mouseY = y;
}
function updateBackgroundPosition(offsetX, offsetY) {
	var newX = 50 - offsetX;
	var newY = 50 - offsetY;
	if (newX > 52) newX = 52;
	else if (newX < 48) newX = 48;

	if (newY > 54) newY = 54;
	else if (newY < 46) newY = 46;
	var position = newX + "% " + newY + "%";
	document.getElementById(
		"sf-background-fog"
	).style.backgroundPosition = position;
}
var driftX = 0;
var driftY = 0;
var driftDirection = "right";
setInterval(function () {
	if (driftDirection == "right") {
		driftX += 0.1;
		driftY += 0.13;

		if (driftX >= 2 || driftY >= 2) driftDirection = "left";
	} else if (driftDirection == "left") {
		driftX -= 0.1;
		driftY -= 0.13;

		if (driftX <= -2 || driftY <= -2) driftDirection = "right";
	}
	updateBackgroundPosition(driftX, driftY);
}, 150);
function restart() {
	loadMatch();
}

var activeModal = "";
function openSFModal(id) {
	activeModal = id;
	document.getElementById("main-modal").classList.add("active");
	document.getElementById(activeModal).classList.add("active");
}
function closeSFModal() {
	document.getElementById("main-modal").classList.remove("active");
	document.getElementById(activeModal).classList.remove("active");
}

var playerData = [
	{
		username: "NIOMEEEE",
		kills: 1590,
		deaths: 518,
		playHours: 23,
		playMinutes: 52,
		image: "U3.jpg"
	},
	{
		username: "TACOSONTITAN",
		kills: 19308,
		deaths: 8159,
		playHours: 182,
		playMinutes: 11,
		image: "image-4.png"
	},
	{
		username: "TICOTACO",
		kills: 23091,
		deaths: 8331,
		playHours: 189,
		playMinutes: 43,
		image: "U4.jpg"
	},
	{
		username: "NICE_GUNS",
		kills: 431,
		deaths: 295,
		playHours: 6,
		playMinutes: 59,
		image: "DefaultUser.jpg"
	},
	{
		username: "LIMANOT",
		kills: 145,
		deaths: 140,
		playHours: 3,
		playMinutes: 19,
		image: "DefaultUser.jpg"
	},
	{
		username: "RAGEQUITTER",
		kills: 1892,
		deaths: 831,
		playHours: 5,
		playMinutes: 31,
		image: "U6.jpg"
	},
	{
		username: "MONSTER_SANDWICH",
		kills: 9839,
		deaths: 958,
		playHours: 8,
		playMinutes: 22,
		image: "U5.jpg"
	},
	{
		username: "ALI_NUMNUMS",
		kills: 12,
		deaths: 72,
		playHours: 1,
		playMinutes: 28,
		image: "DefaultUser.jpg"
	},
	{
		username: "RAVENHATER",
		kills: 15301,
		deaths: 9851,
		playHours: 201,
		playMinutes: 45,
		image: "U1.jpg"
	},
	{
		username: "MARSMALLOS",
		kills: 14998,
		deaths: 7590,
		playHours: 150,
		playMinutes: 34,
		image: "U2.png"
	},
	{
		username: "CURBSTOMP",
		kills: 15,
		deaths: 5,
		playHours: 3,
		playMinutes: 51,
		image: "DefaultUser.jpg"
	},
	{
		username: "FANSONFANS",
		kills: 108,
		deaths: 98,
		playHours: 5,
		playMinutes: 17,
		image: "DefaultUser.jpg"
	},
	{
		username: "SWIPE_RIGHT",
		kills: 905,
		deaths: 309,
		playHours: 12,
		playMinutes: 35,
		image: "U9.jpg"
	},
	{
		username: "SK1TTL3S",
		kills: 99,
		deaths: 56,
		playHours: 13,
		playMinutes: 32,
		image: "U7.jpg"
	},
	{
		username: "HURLEY_GIRL",
		kills: 3,
		deaths: 32,
		playHours: 0,
		playMinutes: 25,
		image: "DefaultUser.jpg"
	},
	{
		username: "R4MP4G3",
		kills: 52938,
		deaths: 14921,
		playHours: 205,
		playMinutes: 13,
		image: "U8.png"
	}
];
var userImages = document.querySelectorAll("[data-userid]");
var imageUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2940219/";
for (let i = 0; i < userImages.length; i++) {
	userImages[i].src = imageUrl + playerData[i].image;
	userImages[i].addEventListener("click", function () {
		document.getElementById("user-username").innerHTML = playerData[i].username;
		document.getElementById("user-kills").innerHTML = playerData[i].kills;
		document.getElementById("user-deaths").innerHTML = playerData[i].deaths;
		document.getElementById("user-kdr").innerHTML = (
			playerData[i].kills / playerData[i].deaths
		).toFixed(2);
		document.getElementById("user-time").innerHTML =
			playerData[i].playHours + "h " + playerData[i].playMinutes + "m";
		document.getElementById("user-usericon").src = imageUrl + playerData[i].image;
		openSFModal("user-modal");
	});
}
