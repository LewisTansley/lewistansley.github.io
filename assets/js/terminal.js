
$(function() {

    // console.log(span_Text)
  
      $('.terminal').on('click', function(){
         $('#input').focus();
    });
  
    $('#input').on('keydown',function search(e) {
          if(e.keyCode == 13) {
  
        var span_Text = document.getElementById("path").innerText; // Get path
        valFunc = null;
  
          $('#history').append(span_Text+$(this).val()+'<br/>'); // append history
        
        if($(this).val().substring(0, 3) === 'cd '){
          $('#path').html('MAINFRAME:\\\\SUPERUSER\\'+$(this).val().substring(3)+'&nbsp;>&nbsp;'); // change path
          valFunc = 1;
        }
  
        if($(this).val().substring(0) === 'root'){ 
          $('#path').html('MAINFRAME:\\\\SUPERUSER'+'&nbsp;>&nbsp;'); // go to root
          valFunc = 1;
        }
        
        if($(this).val().substring(0) === 'clear'){
            document.getElementById("history").innerHTML = "";
            valFunc = 1;
        }
  
        if(valFunc !== 1) {
          $('#history').append('UNKNOWN COMMAND'+'<br/>');
        }
  
        $('#input').val(''); // clear the input
        
      }
    });
  });
  