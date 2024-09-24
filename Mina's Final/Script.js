
const user = [{
    name: "Shamim",
    Subject: "Happy Birthday to You",

    text: "Happy birthday to my dearest friend! You bring so much joy and laughter into my life, "
},
{
    name: "Bahareh",
    Subject: "HBD",

    text: "Today, I celebrate the person who has seen me at my best and my worst, yet loves me unconditionally. "
},
]

document.getElementById("NameinboxOne").innerHTML = user[0].name;
document.getElementById("SubjectinboxOne").innerHTML = user[0].Subject;
document.getElementById("TextinboxOne").innerHTML = user[0].text;

document.getElementById("NameinboxTwo").innerHTML = user[1].name;
document.getElementById("TextinboxTwo").innerHTML = user[1].text;



function InboxSlide() {
    if (document.getElementById("dropdown").style.display == "none")
        document.getElementById("dropdown").style.display = "block";
    else
        document.getElementById("dropdown").style.display = "none"
}

let modal = document.getElementById("Modal");
let New = document.getElementById('NewM')
New.onclick = function () {
    modal.style.display = "block";
}
let closer = document.getElementsByClassName("closer")[0];
let reset = document.getElementById("reset");
let send = document.getElementById("send");
closer.onclick = function () {
    modal.style.display = "none";
}
reset.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == document.getElementById('Modal')) {
        document.getElementById('Modal').style.display = 'none';
    }
};


document.getElementById("Sidebar").addEventListener("click", function () {
    document.getElementById("Menubar").style.display = "block";
});

document.getElementById("Xcloser").addEventListener("click", function () {
    document.getElementById("Menubar").style.display = "none";
});


const articles = document.querySelectorAll('#articless');
const inboxButton = document.querySelectorAll('.ContentDroper');

function hideAllArticles() {
    articles.forEach(article => { article.style.display = 'none'; });
}

inboxButton.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllArticles();
        articles[index].style.display = 'block';
    });
});
