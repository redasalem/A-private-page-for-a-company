function scrollfunction(){
    if(document.documentElement.scrollTop>200){
        document.getElementById("navbar").classList.add("notransparrent");
    }else{
        document.getElementById("navbar").classList.remove("notransparrent");

    }
}
window.onscroll = function() {
    scrollfunction();
}

window.onload = function(){
    let wbsite=new CountUp('website-count',0,250,0,2.5);
    wbsite.start();

    let app =new CountUp('app-count',0,100,0,2.5);
    app.start();

    let user =new CountUp('user-count',0,10000,0,2.5);
    user.start();


    let video =new CountUp('video-count',0,30,0,2.5);
    video.start();

};


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();
  document.getElementById("fullyear").innerHTML=new Date().getFullYear();