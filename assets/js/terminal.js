$(function() {

    // console.log(span_Text)
  
      $('.terminal').on('click', function(){
         $('#input').focus();
    });
  
    $('#input').on('keydown',function search(e) {
          if(e.keyCode == 13) {
  
        var pathText = document.getElementById("path").innerText; // Get path
        var pointerText = document.getElementById("pointer").innerText; // Get pointer
        console.log(pathText+' '+pointerText);

        valFunc = null;
        
  
          $('#history').append(pathText+pointerText+$(this).val()+'<br/>'); // append history
        
        if($(this).val().substring(0, 3) === 'CD '){
          $('#path').html(pathText+'\\'+$(this).val().substring(3)); // change path
          valFunc = 1;
        }
  
        if($(this).val().substring(0) === 'ROOT'){ 
          $('#path').html('MAINFRAME:\\\\SUPERUSER'); // go to root
          valFunc = 1;
        }
        
        if($(this).val().substring(0) === 'CLEARFRAME'){
            document.getElementById("history").innerHTML = "";
            valFunc = 1;
        }

        if($(this).val().substring(0) === 'EXIT'){
            location.replace("\\");
            valFunc = 1;
        }

        if($(this).val().substring(0) === 'ENABLE VIEWPORT'){
          
          /* $(function(){
             $("#viewport").load("viewport.html");
           });*/
 
           $('#history').append('VIEWPORT SUCCESSFULLY ENABLED'+'<br/>');
           valFunc = 1;
           $('#viewportBool').html('TRUE');
         }

        if($(this).val().substring(0) === 'VIEW' && document.getElementById("viewportBool").innerHTML === 'TRUE'){

            if(pathText === 'MAINFRAME:\\\\SUPERUSER\\D\\21031984\\N\\01.img'){
              $('#imgContainer').html('<img src=\"fullscreenImages/images/BG.png\" class=\"center\">');  
              $('#textContainer').html('<p>D\\21031984\\N\\01.img</p>');  

            }

            if(pathText === 'MAINFRAME:\\\\SUPERUSER\\me.img'){
              $('#imgContainer').html('<video width="640" height="480" autoplay><source src="me.mp4" type="video/mp4"></video>');  
              $('#textContainer').html('<p>me.img</p>');  

            }
            valFunc = 1;
        }

  
        if(valFunc !== 1) {
          $('#history').append('UNKNOWN COMMAND'+'<br/>');
        }
  
        $('#input').val(''); // clear the input
        var objDiv = document.getElementById("Scroller");
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    });
  });
  