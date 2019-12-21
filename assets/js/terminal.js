
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

        if($(this).val().substring(0) === 'RUN'){

            if(pathText === 'MAINFRAME:\\\\SUPERUSER\\D\\21031984\\N\\01.img'){
            window.open("fullscreenImages/D21031984N01");
            }

            valFunc = 1;
        }
  
        if(valFunc !== 1) {
          $('#history').append('UNKNOWN COMMAND'+'<br/>');
        }
  
        $('#input').val(''); // clear the input
        
      }
    });
  });
  