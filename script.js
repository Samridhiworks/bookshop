let gallery = document.getElementById("gallery")
      let backbtn = document.getElementById("back-btn")
      let forwardbtn = document.getElementById("forward-btn")

      function scrollleft(){
        gallery.scrollLeft-= 300
      }

      function scrollright(){
        gallery.scrollLeft+= 300
      }

      let showform = document.getElementById("show-form")
  function displayform(){
      document.getElementById("bg-5").style.display="block"
      showform.classList.add("open-popup")
      document.body.classList.add('body-fixed')
  }

  function closeform(event) {
  event.preventDefault();
  document.getElementById('bg-5').style.display = 'none';
  document.body.classList.remove('body-fixed')
}


let gallery2 = document.getElementById("gallery2")
      let backbtn2 = document.getElementById("back-btn2")
      let forwardbtn2 = document.getElementById("forward-btn2")

    
        function scrollleft2(){
          gallery2.scrollLeft-= 300
        }
  
       
      function scrollright2(){
        gallery2.scrollLeft+= 300
      }

      setInterval(scrollright2, 5000);


      $(document).ready(function() {
        $('#bars').click( function() {
          $('#sidebar').toggleClass('visible');
        });
      });