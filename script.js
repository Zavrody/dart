
//menu code

function infoFirst(){
  var infos = document.querySelectorAll('.info');
  for (let i of infos){
    i.style.height = "0px";
  }
  var info = document.getElementById("first");
  info.style.height = "150px";
}
function infoSecond(){
  var infos = document.querySelectorAll(".info");
  for (let i of infos){
    i.style.height = "0px";
  }
  var info = document.getElementById("second");
  info.style.height = "150px";
}
function infoThird(){
  var infos = document.querySelectorAll(".info");
  for (let i of infos){
    i.style.height = "0px";
  }
  var info = document.getElementById("third");
  info.style.height = "150px";
}
function infoForth(){
  var infos = document.querySelectorAll(".info");
  for (let i of infos){
    i.style.height = "0px";
  }
  var info = document.getElementById("forth");
  info.style.height = "150px";
}
function infoFifth(){
  var infos = document.querySelectorAll(".info");
  for (let i of infos){
    i.style.height = "0px";
  }
  var info = document.getElementById("fifth");
  info.style.height = "150px";
}

//slider_1 code

feedback = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor";


function person(name = "anon", photo, feedback = "empty"){
  this.name = name;
  this.photo = photo;
  this.feedback = feedback;
}

var p1 = new person("Khalessi", "src/khalessi.png", feedback);
var p2 = new person("Jon Doe", "src/jon_doe.png", feedback);
var feedbackArray = [];
feedbackArray.push(p1);
feedbackArray.push(p2);

var slide_container = -50;
var index_of_element = 0;
var database_index = 0;
var elements = [];
slider_windows = document.querySelectorAll(".feedback-wrapper");
slider_windows.forEach(function (item, i, arr) {
          elements.push({transform: 0 });
          slider_windows[i].innerHTML = `<img src="${feedbackArray[database_index].photo}" alt="avatar"><div class="fb-text-container"><h4>${feedbackArray[database_index].name}</h4><p>${feedbackArray[database_index].feedback}</p>`;
          database_index++;
          if(database_index > feedbackArray.length - 1){
            database_index = 0;
          }
        });




function scrollUp(){
  slide_container -= 50;
  $('.feedback-slider').css("transform",`translateY(${slide_container}%)`);
  elements[index_of_element].transform += 400;
  slider_windows[index_of_element].style.transform = `translateY(${elements[index_of_element].transform}%)`;
  index_of_element++;
  if (index_of_element > 3){
    index_of_element = 0;

    }


}

function scrollDown(){
  slide_container += 50;
  index_of_element--;
  if (index_of_element < 0){
    index_of_element = 3;
  }
  $('.feedback-slider').css("transform",`translateY(${slide_container}%)`);
  elements[index_of_element].transform -= 400;
  slider_windows[index_of_element].style.transform = `translateY(${elements[index_of_element].transform}%)`;
}

//slider_2 code

function member(name = "anon", photo, info = "No Info"){
  this.name = name;
  this.photo = photo;
  this.info = info;
}
var info = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis";
var info1 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aene";
var info2 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget nean commodo ligula eget dolor. ";

var m1 = new member("Sophie Turner", "src/face_1.png", info);
var m2 = new member("Member_2", "src/face_2.png", info1);
var m3 = new member("Member_3", "src/face_3.png", info2);

var memberArray = [];
memberArray.push(m1);
memberArray.push(m2);
memberArray.push(m3);


$num = $('.team-member').length;
$even = $num / 2;
$odd = ($num + 1) / 2;
$count = 0;

if ($num % 2 == 0) {
  $('.team-member:nth-child(' + $even + ')').addClass('active');
  $('.team-member:nth-child(' + $even + ')').prev().addClass('prev');
  $('.team-member:nth-child(' + $even + ')').next().addClass('next');

} else {
  $('.team-member:nth-child(' + $odd + ')').addClass('active');
  $('.team-member:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.team-member:nth-child(' + $odd + ')').next().addClass('next');

}

$('.team-member').click(function() {
  $slide = $('.active').width();

  if ($(this).hasClass('next')) {
    $('.team-slider').stop(false, true).animate({left: '-=' + $slide});
    $count++;
    if($count > 2) $count = 0;
  } else if ($(this).hasClass('prev')) {
    $('.team-slider').stop(false, true).animate({left: '+=' + $slide});
    $count--;
    if($count < 0) $count = 2;
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');

  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
  $("#member-name").text(memberArray[$count].name);
  $("#about-me").text(memberArray[$count].info);

});



//
//
// // Keyboard nav
// // $('html body').keydown(function(e) {
// //   if (e.keyCode == 37) { // left
// //     $('.active').prev().trigger('click');
// //   }
// //   else if (e.keyCode == 39) { // right
// //     $('.active').next().trigger('click');
// //   }
// // });


//dropDown Menu
function dropDown() {
  // document.getElementById("dropdown").classList.toggle("show");
  document.getElementById("dropdown").style.height = "212px";

}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.getElementById("dropdown").style.height = "0";

  }
}
