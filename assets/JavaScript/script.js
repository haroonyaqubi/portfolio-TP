// Fonction pour charger un fichier XML avec fetch
async function loadXMLDoc(filename) {
    try {
        const response = await fetch(filename);
        const text = await response.text();
        const parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
    } catch (error) {
        console.error(error);
    }
}

// Fonction d'affichage du contenu du travail(work)
function displayWork(xml) {
    const works = xml.getElementsByTagName("work");
    const workList = document.querySelector('.work-list');
    
    workList.innerHTML = "";

    for (let i = 0; i < works.length; i++) {
        const work = works[i];
        const title = work.getElementsByTagName('title')[0].textContent;
        const description = work.getElementsByTagName('description')[0].textContent;
        const link = work.getElementsByTagName('link')[0].textContent;
        const imageSrc = work.getElementsByTagName('image')[0].textContent;
 
        // Créer des éléments 
        const workItem = document.createElement('div');
        workItem.classList.add('work');

        const image = document.createElement('img');
        image.src = imageSrc;

        const h1 = document.createElement('h1');
        h1.textContent = title;

        const p = document.createElement('p');
        p.textContent = description;

        const a = document.createElement('a');
        a.href = link;
        a.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';

        // Assembler les éléments
        workItem.appendChild(image);
        workItem.appendChild(h1);
        workItem.appendChild(p);
        workItem.appendChild(a);
        workList.appendChild(workItem);
    }
}

// Charger et afficher le contenu du travail lors du chargement de la page
window.onload = function () {
    loadXMLDoc("work.xml")
        .then(displayWork)
        .catch(function (error) {
            console.error(error);
        });
};


// Menu Barger

const sidemenu = document.getElementById("sidemenu");
function openmenu (){
    sidemenu.style.right = "0"
}
function closemenu (){
    sidemenu.style.right = "-200px"
}
