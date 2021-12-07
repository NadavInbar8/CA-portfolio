//onload
$(document).ready(onInit);

function onInit() {
  renderProjs();
  renderProjsModal();
  $('.submit').click(sendMail);
}

function renderProjs() {
  const projs = getProjs();
  const strHTML = projs.map((proj) => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal${proj.id}"
    >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="" />
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>`;
  });

  $('#portfolio .row').html(strHTML);
}

function renderProjsModal() {
  const projs = getProjs();
  const strHTML = projs.map((proj) => {
    return ` <div
    class="portfolio-modal modal fade"
    id="portfolioModal${proj.id}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">The Library Project!</p>
                <img
                  class="img-fluid d-block mx-auto"
                  src="img/portfolio/${proj.id}.png"
                  alt=""
                />
                <p>
                  ${proj.desc}
                </p>
                <ul class="list-inline">
                  <li>Date: ${new Date(proj.publish)}</li>
                  <li>Category: ${proj.labels}</li>
                  <li><a href="${
                    proj.url
                  }" target="_blank">for the project </a></li>
                </ul>
                <button
                  class="btn btn-primary"
                  data-dismiss="modal"
                  type="button"
                >
                  <i class="fa fa-times"></i>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  console.log(projs);
  $('.Modals-Div').html(strHTML);
}

function sendMail() {
  let email = $('.email').val();
  let subject = $('.subject').val();
  let text = $('.txt').val();

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${text}`
  );
}
