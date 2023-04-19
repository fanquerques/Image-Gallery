var currentIndex = 0;
var imageList = [];
var intervalId;

$.get("images1.txt", function(data) {
  imageList = data.split("\n");
  showImage(currentIndex);
});

function showImage(index) {
  if (index < 0) {
    index = imageList.length - 1;
  } else if (index >= imageList.length) {
    index = 0;
  }

  var imageInfo = imageList[index].split(",");
  var imageName = imageInfo[0];
  var duration = parseInt(imageInfo[1]);

  $("#current-image").attr("src", "images/" + imageName);
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    showImage(currentIndex + 1);
  }, duration * 1000);

  currentIndex = index;
}

$("#previous-button").click(function() {
  showImage(currentIndex - 1);
});

$("#next-button").click(function() {
  showImage(currentIndex + 1);
});

$("#update-button").click(function() {
  $.get("images2.txt", function(data) {
    imageList = data.split("\n");
    showImage(0);
  });
});

var footer = document.createElement("footer");
footer.innerHTML = "<p>&#169 Copyright Fan Yang (#301295721) - COMP125 - Winter 2023</p>";
document.body.appendChild(footer);
