ajax.get(apiUrl + '/exploding_dots/chapters.json', {}, function(data) {
  renderLessons(JSON.parse(data));
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
          <h1>${lesson.name}</h1>\
          <h3>Chapter ${lesson.number}</h3>\
        </div>\
        <div class="card-body">\
          <div class="row between-xs">\
            <div class="col">\
              <a href="${lesson.teaching_guide_url}" class="lesson-resource-button">\
                Teaching Guide\
              </a>\
            </div>\
            <div class="col">\
              <a href="${lesson.handout_url}" class="lesson-resource-button">\
                Handout\
              </a>\
            </div>\
          </div>\
        </div>\
        <div class="card-footer">\
        </div>\
      </div>\
    </div>`;
    if (index % 3 == 2) {
      content += '</div>';
    }
  });

  lessonList.innerHTML = content;
}
