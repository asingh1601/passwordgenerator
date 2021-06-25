 
    $(document).ready(function(){
        $("#copy").click(function(){
            alert("Copied to Clipboard");
            $("#geeks").select();
        document.execCommand('copy');
        });
        
    });
       
       function generatePDF(){
         var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var date_= date.getDate();
  var day=date.getDay();
  var month = date.getMonth();
  var year= date.getFullYear();

  year = updateTime(year);
  month = updateTime(month);
  date_ = updateTime(date_);
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  var dayList= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var monno=['1','2','3','4','5','6','7','8','9','10','11','12'];
  var str2= "Date : " + date_ + " / " + month +  " / " + year + "(" + dayList[day] +")\n";
  var str3= "Time : " + hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
var doc= new jsPDF();
var str=document.getElementById("geeks").value ;
//var str=document.getElementById("data").value ;
var str4="\nPassword generated at \n"+ str2+ str3+"\n->"+str ;
//doc.text(20,20,str2);
doc.text(20,20,str4);
var res;
var name=prompt("Enter name for the pdf Default name is Download",'Document');
doc.save(name);

}
           
        
        function currentTime() {
           

  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var date_= date.getDate();
  var day=date.getDay();
  var month = date.getMonth();
  var year= date.getFullYear();

  year = updateTime(year);
  month = updateTime(month);
  date_ = updateTime(date_);
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  var dayList= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monno=['1','2','3','4','5','6','7','8','9','10','11','12'];
  document.getElementById("clock2").innerText= "Date : " + date_ + " / " + (date.getMonth()+1) + " / " + year;// + "(" + dayList[day] +")";
  document.getElementById("clock").innerText = "Time : " + hour + " : " + min + " : " + sec; /* adding time to the div */
  document.getElementById("clock3").innerText="Day : " + dayList[day];
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}


currentTime(); /* calling currentTime() function to initiate the process */
        $("input[type='password']").on("click", function () {
   $(this).select();
});
           $("input[type='text']").on("click", function () {
   $(this).select();
});
        window.onbeforeunload = function() {
       var msg = "Are you sure u want to exit";
       return msg;
    };  
        function checkPasswordStrength() {
            var number = /([0-9])/;
            var alphabets = /([a-zA-Z])/;
            var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
            if($('#password').val().length==0)
            {
               alert("𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱 𝗳𝗶𝗲𝗹𝗱 𝗶𝘀 𝗲𝗺𝗽𝘁𝘆");
            }
            else{
            if ($('#password').val().length < 6) {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('weak-password');
                $('#password-strength-status').html("𝗪𝗲𝗮𝗸 (𝘀𝗵𝗼𝘂𝗹𝗱 𝗯𝗲 𝗮𝘁𝗹𝗲𝗮𝘀𝘁 𝟲 𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝘀.)");
            } else {
                if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
                    $('#password-strength-status').removeClass();
                    $('#password-strength-status').addClass('strong-password');
                    $('#password-strength-status').html("𝗦𝘁𝗿𝗼𝗻𝗴");
                } else {
                    $('#password-strength-status').removeClass();
                    $('#password-strength-status').addClass('medium-password');
                    $('#password-strength-status').html("𝗠𝗲𝗱𝗶𝘂𝗺 (𝘀𝗵𝗼𝘂𝗹𝗱 𝗶𝗻𝗰𝗹𝘂𝗱𝗲 𝗮𝗹𝗽𝗵𝗮𝗯𝗲𝘁𝘀, 𝗻𝘂𝗺𝗯𝗲𝗿𝘀 𝗮𝗻𝗱 𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝘀.)");
                }
            }}
        }
      //<button id="copy"><strong>Copy</strong></button>

      function show(a) {
  var x=document.getElementById(a);
  var c=x.nextElementSibling
  if (x.getAttribute('type') == "password") {
  c.removeAttribute("class");
  c.setAttribute("class","fas fa-eye");
  x.removeAttribute("type");
    x.setAttribute("type","text");
  } else {
  x.removeAttribute("type");
    x.setAttribute('type','password');
 c.removeAttribute("class");
  c.setAttribute("class","fas fa-eye-slash");
  }
}
       document.addEventListener('keyup', (e) => {
  if (e.code === "Enter")     {
    checkPasswordStrength();
  }
  });
       function reset()
       {
        document.getElementById('password').value='';
       }

        function reset2()
       {
        document.getElementById('geeks').value='';
        document.getElementById('repeat').innerHTML='';
       }
      
        var el_down = document.getElementById("geeks"); 
  
        /* Function to generate combination of password */ 
        function generateP() { 
          var upperc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var lowerc="abcdefghijklmnopqrstuvwxyz";
          var num="0123456789";
          var sym="!@#$%^&*()";
             var len=document.getElementById('length').value;
            var str=' ';
            if(uppercase.checked)
            {
              str+=upperc;
            }
            if(lowercase.checked)
            {
              str+=lowerc;
            }
            if(number.checked)
            {
              str+=num;
            }
            if(symbol.checked)
            {
              str+=sym;
            }
            


          document.getElementById('length').innerHTML=" ";
            var pass = ''; 
           // var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
             //       'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
              
            for (i = 1; i <= len; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1); 
                  
                pass += str.charAt(char) 
            } 
            document.getElementById('repeat').innerHTML=pass;  
            return pass;

             
        } 
      
  
        function gfg_Run() {
       el_down.value = generateP(); 
        } 
       function ap_check()
       {
        
        var number = /([0-9])/;
            var alphabets = /([a-zA-Z])/;
            var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
           
            if ($('geeks').val().length < 6) {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('weak-password');
                $('#password-strength-status').html("𝗪𝗲𝗮𝗸 (𝘀𝗵𝗼𝘂𝗹𝗱 𝗯𝗲 𝗮𝘁𝗹𝗲𝗮𝘀𝘁 𝟲 𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝘀.)");
            } else {
                if ($('geeks').val().match(number) && $('geeks').val().match(alphabets) && $('geeks').val().match(special_characters)) {
                    $('#password-strength-status').removeClass();
                    $('#password-strength-status').addClass('strong-password');
                    $('#password-strength-status').html("𝗦𝘁𝗿𝗼𝗻𝗴");
                } else {
                    $('#password-strength-status').removeClass();
                    $('#password-strength-status').addClass('medium-password');
                    $('#password-strength-status').html("𝗠𝗲𝗱𝗶𝘂𝗺 (𝘀𝗵𝗼𝘂𝗹𝗱 𝗶𝗻𝗰𝗹𝘂𝗱𝗲 𝗮𝗹𝗽𝗵𝗮𝗯𝗲𝘁𝘀, 𝗻𝘂𝗺𝗯𝗲𝗿𝘀 𝗮𝗻𝗱 𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝘀.)");
                }
            }


       }

    