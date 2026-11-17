import axios from 'https://cdn.jsdelivr.net/npm/axios@1.7.9/+esm';
axios.get("http://localhost:3000/api/activites")
    .then((reponse) => {
        console.log(reponse.data);
        affichage(reponse.data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Request completed")
    })
const divActivities = document.getElementById("activities")
function affichage(data) {
    data.forEach(element => {
        console.log(element)
        divActivities.innerHTML += `<article class="bg-white rounded-xl border border-slate-200 p-4 flex flex-col gap-2">
                        <div class="flex items-start justify-between gap-2">
                            <h3 class="font-semibold">${element.titre}</h3>
                            <span class="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-md">${element.theme}</span>
                        </div>
                        <p class="text-sm text-slate-600">${element.description}</p>
                        <p class="text-sm"><span class="font-medium">Objectifs :</span> ${element.objectifs}</p>
                        <span class="w-fit text-sm px-3 py-1 rounded-full"
                            style="background-color:#dcfce7;color:#166534">${element.duree} min</span>
                        <p class="text-xs text-slate-500">Par ${element.auteur}</p>
                        <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                            <button
                                class="text-sm px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200">Modifier</button>
                            <button class="text-sm px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200">Durée</button>
                            <button
                                class="text-sm px-3 py-1 rounded-lg text-red-600 hover:bg-red-50 ml-auto">Supprimer</button>
                        </div>
                    </article>`

    });

}
function affichageCrete(){

}
