/*Oggetti */
var ourTeamSolid = [
    {
        "Name": 'Boss',
        "Surname": 'Big',
        "Gender": 'male',
        "Job":  ' Founder CEO',
        "Photo": "./assets/img/founder_CEO.jpg",
    },
    {
        "Name": 'Adam',
        "Surname": 'Ocelot',
        "Gender": 'male',
        "Job":  'Founder CFO',
        "Photo": "./assets/img/founder_Cfo.jpg",
    },
    {
        "Name": 'Kazuhira Benedict',
        "Surname": 'McDonell Miller',
        "Gender": 'male',
        "Job":  'Founder Executive Assistant',
        "Photo": "./assets/img/founder_ExecutiveAssistant.jpg",
    },
    {
        "Name": 'David Solid',
        "Surname": 'Snake',
        "Gender": 'male',
        "Job": 'Office Manager',
        "Photo": "./assets/img/Office_Manager.jpg",
    },
    {
        "Name": 'Hal Otacon',
        "Surname": 'Emmerich',
        "Gender": 'male',
        "Job":  'Developer',
        "Photo": "./assets/img/Developer.png",
    },
    {
        "Name": 'Mei',
        "Surname": 'Ling',
        "Gender": 'female',
        "Job":  'Social Media Manager',
        "Photo": "./assets/img/Social_Media_Manager.png",
    },
    {
        "Name": 'Naomi',
        "Surname": 'Hunter',
        "Gender": 'female',
        "Job":  'Graphic Designer',
        "Photo": "./assets/img/Graphic_Designer.png",
    },
    {
        "Name": 'Jack',
        "Surname": 'Raiden',
        "Gender": 'male',
        "Job":  'Stagist',
        "Photo": "./assets/img/Stagist.jpg",
    },
    {
        "Name": 'Meryl',
        "Surname": 'Silverburgh',
        "Gender": 'female',
        "Job":  'Public Relations Manager',
        "Photo": "./assets/img/PublicRelationsManager.png",
    },
]

/* Variabili */
let container = document.getElementById("metalGearTeamCon")

// Eventi */
    // Milestone 1: stampare in console l'elenco dei membri del team, 
    // scrivendo separatamente i dettagli di ciascun componente.
for (i= 0; i < ourTeamSolid.length; i++){
    for (let key in ourTeamSolid[i]){
        console.log(ourTeamSolid[i][key]);
        console.log(key);
    }
    console.log(ourTeamSolid[i]);
    console.log(ourTeamSolid[i].Name);
    console.log(ourTeamSolid[i].Surname);
    console.log(ourTeamSolid[i].Gender);
    console.log(ourTeamSolid[i].Job);
}
    // Milestone 2: stampare i dati all'interno di un contenitore
    // nella pagina html in modo dinamico,     
    //creando per ciascun membro del team un elemento che conterrà i suoi dati.
for (i= 0; i < ourTeamSolid.length; i++){
    document.getElementById("metalGearTeamCon").innerHTML +=`
        <div class="card m-3 align-items-center" style="width: 18rem;">
        <img src="${(ourTeamSolid[i].Photo)}" class="card-img-top img-fluid p-5" alt="Team picture">
        <div class="card-body">
          <h3 class="card-title text-center text-secondary">${(ourTeamSolid[i].Name)}</h3>
          <h3 class="card-title text-center text-secondary">${(ourTeamSolid[i].Surname)}</h3>
          <p class="card-text text-center fst-italic">${(ourTeamSolid[i].Gender)}</p>
          <h5 class="card-title text-center text-dark fst-italic">${(ourTeamSolid[i].Job)}</h5>
        </div>
      </div>`
}
  
