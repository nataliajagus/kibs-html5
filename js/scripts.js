portfolioFilter = () => {
    let portfolioItems = Array.prototype.slice.call(document.querySelectorAll(".portfolio-item"));

     $("#filter-nav button").on("click", function(e) {
        for(i=0; i<portfolioItems.length; i++) {
            if (portfolioItems[i].getAttribute('data-category') == e.target.getAttribute('data-category')) {
                portfolioItems[i].style.display = 'block';
            } else if (e.target.getAttribute('data-category') == "all") {
                portfolioItems[i].style.display = 'block';
            } else {
                portfolioItems[i].style.display = 'none';
               }
        }
     });
 }

 portfolioFilter();
 

$("#menu-open").change(function() {
    if(this.checked) {
        let menu = document.querySelector('#menu');
        menu.style.top = 0;
        this.checked = false;
    }
});

$("#menu-close").change(function() {
    if(this.checked) {
        let menu = document.querySelector('#menu');
        menu.style.top = "-2000px";
        this.checked = false;
    }
});

$('#menu a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

