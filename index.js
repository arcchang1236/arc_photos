
$(document).ready(function(){
    var Glist = {
        1: {
            'name': 'Travel',
            'class': 'col-6 col-md-6 col-lg-8',
            'num': 100,
        },
        2: {
            'name': 'Yu-ting Wang',
            'class': 'col-6 col-md-6 col-lg-4',
            'num': 6766,
        },
        3: 'Food'
    };
    $('#subtitle').text("Gallery");

    var i;
    var line = '';
    for (i = 1; i <= 2; i++){
        var idx = i.toLocaleString('en', {minimumIntegerDigits:3, useGrouping:false})
        line = line.concat('<div id="'+idx+'" class="'+Glist[i]['class']+'" data-aos="fade-up">');
        line = line.concat('<a href="single.html" class="d-block photo-item">');
        line = line.concat('<img src="images/'+idx+'.jpg" alt="Image" class="img-fluid">');
        line = line.concat('<div class="photo-text-more"><div class="photo-text-more">');
        line = line.concat('<h3 class="heading">'+Glist[i]['name']+'</h3>');
        line = line.concat('<span class="meta">'+Glist[i]['num']+'</span>');
        line = line.concat('</div></div></a></div>');
    }
    console.log(line);
    $('#photo_gallery').append(line);
});





        

{/* <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="">
<a href="single.html" class="d-block photo-item">
  <img src="images/img_8.jpg" alt="Image" class="img-fluid">
  <div class="photo-text-more">
    <div class="photo-text-more">
    <h3 class="heading">Photos Title Here</h3>
    <span class="meta">42 Photos</span>
  </div>
  </div>
</a>
</div>
<div class="col-6 col-md-6 col-lg-8" data-aos="fade-up" data-aos-delay="100">
<a href="single.html" class="d-block photo-item">
  <img src="images/img_9.jpg" alt="Image" class="img-fluid">
  <div class="photo-text-more">
    <div class="photo-text-more">
    <h3 class="heading">Photos Title Here</h3>
    <span class="meta">42 Photos</span>
  </div>
  </div>
</a>
</div>  */}