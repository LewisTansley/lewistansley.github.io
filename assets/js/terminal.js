
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
        viewportEnabled = false;
  
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

        if($(this).val().substring(0) === 'VIEW' && viewportEnabled === true){

            if(pathText === 'MAINFRAME:\\\\SUPERUSER\\D\\21031984\\N\\01.img'){
            }
            $('#textContainer').val('D\\21031984\\N\\01.img');
            $('#imgContainer').val('<img id="imgContainer" src="fullscreenImages/images/BG.png" class="center">');
            valFunc = 1;
        }
        if($(this).val().substring(0) === 'ENABLE VIEWPORT'){
          
          $(function(){
            $("#viewport").load("viewport.html");
          });

          $('#history').append('VIEWPORT SUCCESSFULLY ENABLED'+'<br/>');
          valFunc = 1;
          viewportEnabled = true;
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
  