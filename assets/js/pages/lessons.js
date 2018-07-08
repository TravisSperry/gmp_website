ajax.get(apiUrl + '/exploding_dots/chapters.json', {}, function(data) {
  renderLessons(JSON.parse(data));
  setTranslationToggle();
});

renderLessons = function (lessons) {
  var lessons = lessons,
      count = lessons.length,
      lessonList = document.getElementById('lessons-list'),
      content = '';

  lessons.forEach(function (lesson, index) {
    if (index % 3 == 0) {
      content += '<div class="row lesson-row">';
    }
    content +=
    `<div class="col-md-4">\
      <div class="lesson card">\
        <div class="card-header text-center">\
          <h2>${lesson.name}</h2>\
        </div>\
        <div class="card-body">\
          <div class="row between-xs">\
            <div class="col">`
    if (lesson.teaching_guide_url) {
      content += `<a href="${lesson.teaching_guide_url}" class="lesson-resource-button">\
                    Teaching Guide\
                  </a>`
    }
    content += `</div>\
            <div class="col">`
    if (lesson.handout_url) {
      content += `<a href="${lesson.handout_url}" class="lesson-resource-button">\
                    Handout\
                  </a>`
    }
    content += `</div>\
          </div>\
        </div>\
        <div class="card-footer">`
    if (lesson.translations.length > 0) {
      content += `<div class="translations text-center">\
                    <a class="toggle-translations" href="#">\
                      <span class="fas fa-caret-down"></span>\
                      Translations\
                      <span class="fas fa-caret-down"></span>\
                    </a>\
                  </div>\
                  <div class="translations-list">\
                  <dl>\
                  <dt><em class="text-danger">Translations do not include teacher annotations.</em></dt>`
                    lesson.translations.forEach(function (translation, index) {
                      content += `<dd><a href="${translation.resource.url}" target="_blank">${translation.language}</a></dd>`;
                    });
      content += `</dl></div>`;
    }
    content += `</div>\
      </div>\
    </div>`;
    if (index % 3 == 2) {
      content += '</div>';
    }
  });

  lessonList.innerHTML = content;
}

setTranslationToggle = function () {
  Array.from(document.getElementsByClassName("translations"))
    .forEach(function (element, index) {
      element.addEventListener("click", function (event) {
        showTranslations(element);
        event.preventDefault();
      });
  });
}

showTranslations = function (element) {
  var parentofSelected = element.parentNode; // gives the parent DIV

  var children = parentofSelected.childNodes;
  for (var i=0; i < children.length; i++) {
    if (children[i].className === "translations-list") {
      if (parentofSelected.childNodes[i].style.display === "none") {
        parentofSelected.childNodes[i].style.display = "block";
      } else {
        parentofSelected.childNodes[i].style.display = "none";
      }
      break;
    }
  }
}
