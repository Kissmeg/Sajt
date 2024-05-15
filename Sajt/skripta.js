
/*------------------DropDownListVezbe--------------------*/

function prikaziPodatke() {
    // Dobijanje izabranog mišića iz dropdown liste
    var izabraniMisic = document.getElementById("DropDownList1").value;

    // Pronalaženje odgovarajućih podataka za izabrani mišić
    var podaciOMisicu = {};

    switch (izabraniMisic) {
        case "Grudi":
            podaciOMisicu = {
                imeMisica: "Grudi",
                osnovneStvari: "Mišići na prednjem dijelu gornjeg dijela tijela.",
                slikaMisica1: "galerija/grudi.png",
                slikaMisica2: "galerija/grudi.png",
               
            };
            break;
        case "Ledja":
            podaciOMisicu = {
                imeMisica: "Leđa",
                osnovneStvari: "Mišići na leđima koji omogućavaju pokrete kičme.",
                slikaMisica1: "galerija/lat.png",
                slikaMisica2: "galerija/trap.png",
                
            };
			break;
            case "Noge":
            podaciOMisicu = {
                imeMisica: "Noge",
                osnovneStvari: "Mišići na donjem dijelu tijela koji omogućavaju kretanje i stabilnost.",
                slikaMisica1: "galerija/butine.png",
                slikaMisica2: "galerija/zadnjaloza.png",
            };
            break;
        case "Ruke":
            podaciOMisicu = {
                imeMisica: "Ruke",
                osnovneStvari: "Mišići na gornjem dijelu tijela koji omogućavaju hvatanje i podizanje predmeta.",
                slikaMisica1: "galerija/biceps.png",
                slikaMisica2: "galerija/triceps.png",
                
            };
            break;
        case "Ramena":
            podaciOMisicu = {
                imeMisica: "Ramena",
                osnovneStvari: "Mišići koji omogućavaju pokrete ruku i stabilnost gornjeg dijela tijela.",
                slikaMisica1: "galerija/prednjerame.png",
                slikaMisica2: "galerija/zadnjerame.png",
                
            };
            break;
        default:
            
            return;
    }
    

    // Prikazivanje podataka u tabeli
    var tabela = document.getElementById("Table1");
    tabela.innerHTML = "<tr><th>Misic</th><th>Kratak opis</th><th>Slika misica</th></tr>" +
                       "<tr><td>" + podaciOMisicu.imeMisica + "</td><td>" + podaciOMisicu.osnovneStvari + "</td><td><img src='" + podaciOMisicu.slikaMisica1 + "' alt='" + podaciOMisicu.imeMisica + "' onclick='promeniSliku(this, \"" + podaciOMisicu.slikaMisica1 + "\", \"" + podaciOMisicu.slikaMisica2 + "\")'></tr>";
}

/*--------------------Promena slike----------------------*/
function promeniSliku(element, slika1, slika2) {
    
    if (element.src.endsWith(slika1)) {
        element.src = slika2;
    } else {
        element.src = slika1;
    }
}

/*----------------------Podmisici------------------------*/
var podmisici = {
    Grudi: [
        { ime: "Gornje grudi", opis: "Gornji deo grudnih mišića.", opisVezbe: "Incline pres", slikaVezbe: "galerija/vincline.jpg" },
        { ime: "Donje grudi", opis: "Donji deo grudnih mišića.", opisVezbe: "Sklek", slikaVezbe: "galerija/vsklek.jpg" },
        { ime: "Srednje grudi", opis: "Srednji deo grudnih mišića.", opisVezbe: "Bench press", slikaVezbe: "galerija/vbench.jpg" }
    ],
    Ledja: [
        { ime: "Latissimus dorsi", opis: "Mišići leđa koji pokrivaju veći deo leđa.", opisVezbe: "Lat pulldown", slikaVezbe: "galerija/vlat.jpg" },
        { ime: "Trapezius", opis: "Mišići koji se protežu od vratne kičme do donjeg dela leđa.", opisVezbe: "Veslanje", slikaVezbe: "galerija/vtrap.jpg" },
        { ime: "Donja leđa", opis: "Mišići donjeg dela leđa.", opisVezbe: "Deadlift", slikaVezbe: "galerija/vdeadlift.jpg" }
    ],
    Ruke: [
        { ime: "Biceps", opis: "Mišić na prednjoj strani nadlaktice koji fleksira lakat.", opisVezbe: "Hammer Curl", slikaVezbe: "galerija/vhammer.jpg" },
        { ime: "Triceps", opis: "Mišić na zadnjoj strani nadlaktice koji produžuje lakat.", opisVezbe: "Triceps ekstenzija", slikaVezbe: "galerija/vtriceps.jpg" },
        { ime: "Podlaktice", opis: "Mišići na donjoj strani nadlaktice koji pomažu u pokretanju šake.", opisVezbe: "Reverse Wrist Curl", slikaVezbe: "galerija/vpodlaktica.jpg" },
        { ime: "Nadlaktice", opis: "Mišići na gornjoj strani nadlaktice koji pomažu u podizanju ruke.", opisVezbe: "Wrist Curl", slikaVezbe: "galerija/vnadlaktica.jpg" }
    ],
    Noge: [
        { ime: "Butine", opis: "Mišići na prednjoj strani nogu.", opisVezbe: "Leg extension", slikaVezbe: "galerija/vlegextension.jpg" },
        { ime: "Zadnja loza", opis: "Mišići na zadnjoj strani donjeg dela noge.", opisVezbe: "Calve Raises", slikaVezbe: "galerija/vlistovi.jpg" },
        { ime: "Listovi", opis: "Mišići na zadnjoj strani potkolenice.", opisVezbe: "Zadnja loza", slikaVezbe: "galerija/vzadnjaloza.jpg" }
    ],
    Ramena: [
        { ime: "Prednje rame", opis: "Mišići koji omogućavaju podizanje ruku naprijed.", opisVezbe: "Prednje podizanje tega", slikaVezbe: "galerija/vprednjerame.jpg" },
        { ime: "Srednje rame", opis: "Mišići koji omogućavaju podizanje ruku na strane.", opisVezbe: "Lateralno podizanje", slikaVezbe: "galerija/vsrednjerame.jpg" },
        { ime: "Zadnje rame", opis: "Mišići koji omogućavaju pokrete ramena unazad.", opisVezbe: "Face pull", slikaVezbe: "galerija/vfacepull.jpg" }
    ]
};
function prikaziPodmisice(misic) {
    var podmisiciHtml = "<table id='PodmisicTable' class='styled-table'><tr><th>Podmisic</th><th>Veoma kratak opis</th><th>Naziv vezbe</th><th>Slika vezbe</th></tr>";
    podmisici[misic].forEach(function(podmisic, index) {
        podmisiciHtml += "<tr><td>" + podmisic.ime + "</td><td>" + podmisic.opis + "</td><td>" + podmisic.opisVezbe + "</td><td><img src='" + podmisic.slikaVezbe + "' alt='" + podmisic.ime + "'></td></tr>";
    });
    podmisiciHtml += "</table>";
    document.getElementById("Podmisic").innerHTML = podmisiciHtml;
}

/*----------------------korisnik-------------------------*/
/*checkbox i inputbox*/
function submitPT() {
   
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var telefon = document.getElementById('telefon').value;
    var pol = document.getElementById('pol').value;
    var pretrenirali = document.querySelector('input[name="pretrenirali"]:checked') ? 'Da' : 'Ne';
    var ishrana = document.querySelector('input[name="ishrana"]:checked') ? 'Da' : 'Ne';
    var zivot = document.querySelector('input[name="zivot"]:checked') ? 'Da' : 'Ne';
	var povrede = document.querySelector('input[name="povrede"]:checked') ? 'Da' : 'Ne';
    var isli = document.querySelector('input[name="isli"]:checked') ? 'Da' : 'Ne';
    var placali = document.querySelector('input[name="placali"]:checked') ? 'Da' : 'Ne';
    var zdravo = document.querySelector('input[name="zdravo"]:checked') ? 'Da' : 'Ne';
	var dostupan = document.getElementById('dostupan').value;

   
var clientInfoHTML = '<div style="text-align: center;">' +
        '<h1>Uspešno sačuvani podaci!</h1>' +
		'<h2>Podaci o klijentu:</h2>' +
        '<table style="margin: 0 auto; text-align: left;">' +
        '<tr><td><strong>Ime:</strong></td><td>' + ime + '</td></tr>' +
        '<tr><td><strong>Prezime:</strong></td><td>' + prezime + '</td></tr>' +
        '<tr><td><strong>Broj telefona:</strong></td><td>' + telefon + '</td></tr>' +
        '<tr><td><strong>Pol:</strong></td><td>' + pol + '</td></tr>' +
        '<tr><td><strong>Nekada pre trenirali:</strong></td><td>' + pretrenirali + '</td></tr>' +
        '<tr><td><strong>Da li ste spremni na promenu ishrane:</strong></td><td>' + ishrana + '</td></tr>' +
        '<tr><td><strong>Da li ste spremni na promenu načina života:</strong></td><td>' + zivot + '</td></tr>' +
        '<tr><td><strong>Da li ste nekada bili povređeni:</strong></td><td>' + povrede + '</td></tr>' +
        '<tr><td><strong>Da li se osećate zdravo:</strong></td><td>' + zdravo + '</td></tr>' +
        '<tr><td><strong>Dostupni dani za trening:</strong></td><td>' + dostupan + '</td></tr>' +
        '</table>' +
        '</div>';

    // Prikaz
    var clientInfoContainer = document.getElementById('clientInfo');
    clientInfoContainer.innerHTML = clientInfoHTML;
    clientInfoContainer.style.display = 'block';
}

/*------------------------Range--------------------------*/
document.getElementById('dostupan').addEventListener('input', function() {
    
    var days = this.value;
    
    document.getElementById('dani').textContent = days;
});

/*-------------------promena backgrounda-----------------*/
function chBackcolor(color) {
   document.body.style.background = color;
}

