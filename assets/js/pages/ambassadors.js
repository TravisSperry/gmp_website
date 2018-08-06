ajax.get(apiUrl + '/ambassadors.json?active_ambassadors=true', {}, function(data) {
  renderAmbassadors(JSON.parse(data));
});

renderAmbassadors = function (ambassadors) {
  var ambassadors = ambassadors,
      count = ambassadors.length,
      ambassadorList = document.getElementById('ambassador-page-list'),
      content = ''

  ambassadors.forEach(function (ambassador, index) {
    if (index % 3 == 0) {
      content += '<div class="row ambassador-profile-row">'
    }
    content +=
    `<div class="col-md-4 col-sm-12 col-xs-12">\
      <div class="ambassador-page-profile">\
        <div class="text-center ambassador-profile-photo">\
          <img src="${ambassador.profile_photo_url ||  '/assets/img/gmp-balloon.svg'}" alt="ambassador photo">\
        </div>\
        <div class="text-center text-light ambassador-name">\
          ${ambassador.first_name} ${ambassador.last_name}\
        </div>\
        <div class="text-center ambassador-country">\
          <span class="fas fa-globe"></span> ${ambassador.country}\
        </div>\
        <div class="text-center text-light ambassador-gmp-statement">\
          ${ambassador.gmp_statement || ''}
        </div>\
        <div class="ambassador-info">
          <div class="ambassador-bio">
            <h3 class="text-center">${ambassador.job_title || ''}</h3>
            ${ ambassador.bio }
          </div>
          <hr>
          <div class="ambassador-links">
            <div class="row">`
            if (ambassador.email_publishable) {
              content += `<div class="col-xs-4 text-center">
                <a href="mailto:${ ambassador.email }">
                  <i class="far fa-envelope"></i>
                </a>
              </div>`
            }
            if (ambassador.website) {
              content += `<div class="col-xs-4 text-center">
                <a href="${ ambassador.website || ''  }">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>`
            }
            if (ambassador.twitter) {
              content += `<div class="col-xs-4 text-center">
                <a href="https://twitter.com/${ ambassador.twitter || '' }">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>`
            }



            content += `</div>
                      </div>
                    </div>
                  </div>
                </div>`;
    if (index % 3 == 2) content += '</div>';
  });

  ambassadorList.innerHTML = content
};
