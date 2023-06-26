var input = document.querySelector('input[type="file"]');

input.addEventListener('change', function() {
  var file = this.files[0];
  var reader = new FileReader();

  reader.addEventListener('load', function() {
    var article = document.querySelector('article.pf');
    // article.style.backgroundImage = 'url(' + window.webkitURL.createObjectURL(file) + ')';
    article.style.backgroundSize = 'cover';
    article.style.backgroundRepeat = 'no-repeat';

    var txtImg = document.getElementsByTagName('span')
    var icon = document.getElementsByTagName('i')
    txtImg[0].style.display = 'none';
    icon[1].style.display = 'none';

  });

  reader.readAsDataURL(file);
});