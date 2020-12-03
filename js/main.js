const projects =
	[
    {
      id: '1',
      project_name: 'School Course Manager',
      description: `Diese MPA verbindet eine REST API mit einem React-Frontend um eine Art Kurs-Manager bspw. für ein
			Fortbildungsinstitut darzustellen. Ein nicht-registrierter Nutzer kann sich die einzelnen Kurse im Detail anschauen, jedoch
			nicht bearbeiten oder löschen. Er kann sich registrieren und anschließend einen neuen Kurs anlegen, der ihm zugeordnet wird.
			Die Nutzerdaten werden mit dem gehashten Passwort in der Datenbank gespeichert. Jeder Kurs ist einem bestimmten Nutzer zugeordnet und kann nur von diesem bearbeitet oder gelöscht werden, sobald er eingelogged ist.
			Die Anwendung benutzt einen Cookie um angemeldete Nutzer zu registrieren, während sie durch die verschiedenen Routen navigieren. `,
      technologies: [
        'React / React Router',
        'Node / Express',
				'SQLite mit Sequelize',
				'CSS'
      ],
      live_link: 'https://school-course-app.herokuapp.com/',
			image_urls: {
				main: './img/School Course Manager main.jpg',
				large:'./img/School Course Manager 1.jpg'
			}
    },
    {
      id: '2',
      project_name: 'Library Manager',
      description: `Dieses Programm stellt einen Manager für ein einfaches Büchereiinventar auf Basis einer SQLite-Datenbank dar.
			Der Nutzer bekommt einen Ausschnitt der Gesamtliste aller vorhandenen Bücher angezeigt und kann zwischen den einzelnen Ausschnitten
			per Link hin und her navigieren. Er kann entscheiden, wie viele Einträge ihm pro Seite angezeigt werden. Außerdem besteht die Möglichkeit,
			nach bestimmten Büchern oder Autoren per Suchleiste zu filtern. Der Nutzer kann auch neue Bücher anlegen. Seine Angaben werden validiert,
			bevor sie an die Datenbank übermittelt werden.`,
      technologies: [
				'Node / Express',
				'Pug',
				'SQLite mit Sequelize',
				'CSS'
      ],
      live_link: 'https://library-manager-sql.herokuapp.com/books',
			image_urls: {
				main: './img/Library Manager main.jpg',
				large:'./img/Library Manager 1.jpg'
			}
    },
    {
      id: '3',
      project_name: 'Interactive form',
      description: `Ein Anmeldeformular für eine fiktive JavaScript Konferenz. Es evaluiert die Nutzereingaben sowohl dynamisch
			als auch beim Versuch, das Formular abzuschicken. Sollten eine oder mehrere Eingaben ungültig sein,
			wird ein übermitteln der Daten verhindert und der Nutzer wird an der entsprechenden Stelle
			darüber informiert, welche Eingaben ergänzt / korrigert werden müssen. So soll eine gute user experience gewährleistet werden.`,
      technologies: [
        'JavaScript mit jQuery',
        'CSS'
      ],
      live_link: 'https://develooper-dan.github.io/interactive-form/',
			image_urls: {
				main: './img/Interactive form main.jpg',
				large:'./img/Interactive form 1.jpg'
			}
    },
    {
      id: '4',
      project_name: 'Metalsong Hunter',
      description: `Ein web-basiertes Spiel, bei dem der Spieler einen zufällig ausgewählten Metal-Song erraten muss.
			Er gibt hierzu einzelne Buchstaben entweder über seine physische oder die digitale Tastatur ein und bekommt ein optisches
			Feedback, ob der Buchstabe in dem gesuchten Song enthalten ist. Falls nicht, wird einer seiner Bierkrüge geleert. Errät der Spieler
			den Song oder werden alle seine Bierkrüge geleert, ist das Spiel vorbei und ein entsprechender Game-Over Bildschirm wird angezeigt.`,
      technologies: [
        'Objekt-orientiertes JavaScript',
        'CSS'
      ],
      live_link: 'https://develooper-dan.github.io/phrase-hunter-game/',
			image_urls: {
				main: './img/Phrase Hunter main.jpg',
				large:'./img/Phrase Hunter 1.jpg'
			}
    },
    {
      id: '5',
      project_name: 'Public API request',
      description: `Diese SPA benutzt asynchrones JavaScript um zufällige (fiktive) Personendaten
			von der randomuser.me API anzufragen und diese dann in einer Art Angestelltenregister visitenkartenartig darzustellen.
			Eine Suchleiste fügt die Möglichkeit hinzu, nach einer oder mehreren Personen über den Vor-/ Nachnamen zu filtern.
		 	Der Nutzer kann durch Klick auf eine der "Karten" detailierte Infos zu einer Person anzeigen lassen,
			die dann in einem Pop-up Fenster dargestellt wird.`,
      technologies: [
        'AJAX',
        'JSON',
        'CSS'
      ],
      live_link: 'https://develooper-dan.github.io/public-api-request/',
      image_urls: {
				main: './img/Public API request main.jpg',
				large:'./img/Public API request 1.jpg'
			}
    },
		{
		id: '6',
		project_name: 'Random Quote Generator',
		description: `Diese App unerstützt den nach Inspiration und Weisheit (oder einfach nur Ablenkung) suchenden Nutzer, indem sie aus einer Auswahl von rund 200 Zitaten
		eines zufällig auswählt und auf einer statischen Webseite darstellt. Die Zitate stammen aus einer Sammlung von STANDS4 APIs (https://www.quotes.net/api.php) und werden vorselektiert als JSON über meinen Github-Account zur Verfügung gestellt. Der asynchrone Fetch-Aufruf erfolgt dabei nur einmalig, sobald die Seite geladen wurde; die Zitate werden sodann im lokalen State der Hauptkomponente zwischengespeichert. Durch einen Knopfdruck wird ein neues Zitat eingeblendet und die Hintergrundfarbe wechselt ebenfalls nach dem Zufallsprinzip, um die Seite etwas weniger monoton zu gestalten. Der Nutzer hat die Möglichkeit, über die Social-Buttons ein Zitat bei Twitter oder Facebook zu posten.`,
		technologies: [
			'React',
			'AJAX',
			'CSS'
		],
		github_repo: 'https://develooper-dan.github.io/random-quote-generator/' ,
		image_urls: {
			main: './img/Random Quotes main.jpg',
			large:'./img/Random Quotes 1.jpg'
		}
	}
  ]

projects.forEach(project => {
	$(".row.projects-holder").append(
		`<div class="col-md-6 col-sm-6">
				<div class="project-item" id=${project.id}>
						<img src="${project.image_urls.main}" alt="${project.project_name}">
						<div class="project-hover">
								<h5>Klick mich!</h5>
						</div>
				</div>
				<h5 class="project-title">${project.project_name}</h5>
		</div>`
	);
})


$(".project-item").on("click", (e) =>{
	const clickedProject = projects.find(project => project.id === e.currentTarget.id);
	let link="";
	let technologies = clickedProject.technologies.join(', ');
	if(clickedProject.live_link){
		link = `<a href="${clickedProject.live_link}" target="_blank">&#10144; Live demo</a>`
	}
	if(clickedProject.github_repo){
		link = `<a href="${clickedProject.github_repo}" target="_blank">&#10144; Github repo</a>`
	}
	$(".row.projects-holder").hide();
	$("#projects").append(
		`<div class ="project-large">
				<div class="project-nav">
		      <button class="back"> ← Zurück </button>
					${link}
				</div>
			<div class="project-inside">
	      <img src="${clickedProject.image_urls.large}" alt="${clickedProject.project_name}" class="project-large-image">
				<div class="project-hover">
					<p>${clickedProject.description}</p>
					<p>Technologien:
						<br>
						<br>
						${technologies}
					</p>
				</div>
			</div>
    </div>`
	);

	$(".back").on("click", (e) =>{
		$(".project-large").addClass("slideout");
		setTimeout(() => {
			$(".project-large").remove();
			$(".row.projects-holder").fadeTo(1500, 1);
		},1000);
	})

$(`a[href="#projects"]`).trigger("click");
});



(function($) {

	"use strict";


    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });

})(jQuery);
