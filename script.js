const backgroundcolorInput = document.querySelector('#backgroundcolorInput');
const colorInput = document.querySelector('#colorInput');
const hideButton = document.querySelector('#hide');
const inputContainer = document.querySelector('#input');
const body = document.body;

colorInput.addEventListener('input', () => {
    let value = colorInput.value;
    body.style.color = value;
});

backgroundcolorInput.addEventListener('input', () => {
    let value = backgroundcolorInput.value;
    body.style.backgroundColor = value;
});

let baseTitle = `It's: `

function updateClock() {
    const now = moment().format("HH:mm:ss");
    document.getElementById("clock").innerHTML = `${now}`;
    document.title = `${baseTitle} ${now}`;
};

function hide(element) {
    element.style.display = "none";
};

function hideAll() {
    alert('Hiding the input container! If you want it back, just refresh the page.');
    hide(hideButton);
    hide(inputContainer);
};

hideButton.addEventListener('click', hideAll);

setInterval(updateClock, 150);

GITHUB_REPOSITORY_URL = 'https://github.com/8xu/clock';
GITHUB_USER = GITHUB_REPOSITORY_URL.split('/')[3];
const githubUrl = document.querySelector('#github');
const githubName = document.querySelector('#name');
githubName.innerHTML = GITHUB_USER;
githubUrl.href = GITHUB_REPOSITORY_URL;
github.target = '_blank';