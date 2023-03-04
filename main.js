let btn = document.querySelector(".b1");
let abc = document.querySelector(".t1");
let result = document.querySelector(".result");

function simpleEditorJunior() {
  result.srcdoc = abc.value;
}
btn.addEventListener("click", function () {
  abc.value = "";
});
abc.onkeyup = simpleEditorJunior;
// >>>>>>>>>>>>>>>>>>>>
let f1 = document.querySelector(".f1");
f1.onclick = function () {
  abc.value = `
    <body dir="rtl"> 
      <center> 
        <h2> فورم تسجيل بيانات طالب </h2><br>
        <form action="pro.php"> 
          الاســــــــــــــم : &nbsp&nbsp&nbsp&nbsp&nbsp<input type="text"><br><br><br> 
          كلمة المرور  : &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="password"><br><br><br> 
          تأكيد كلمة المرور  : <input type="password"><br><br><br> 
          السن بالأرقام : &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text"><br><br><br> 
          النوع<input type="radio" name="abc">ذكر<input type="radio" name="abc">انثى
          <br><br><br> 
          لغة الاجادة  
          <input type="checkbox">  انجليزى 
          <input type="checkbox">  فرنسى 
          <input type="checkbox">  المانى 
          <br><br><br> 
          <input type="reset"  value="جديد"> 
          &nbsp&nbsp&nbsp 
          <input type="submit" value="تسجيل"> 
        </form> 
      </center> 
    </body> 
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>
let btn1 = document.querySelector(".btn1");
btn1.onclick = function () {
  abc.value = 
    `
    <body> 
      <script> 
        alert("مرحبا بكم"); 
      </script> 
    </body>
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>>>
let btn2 = document.querySelector(".btn2");
btn2.onclick = function () {
  abc.value =
    `
    <body dir="rtl"> 
      <script>
        alert("مرحبا بكم"); 
        document.write("مادة الكمبيوتر وتكنولوجيا المعلومات"); 
      </script> 
    </body> 
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>>
let bt3 = document.querySelector(".btn3");
bt3.onclick = function () {
  abc.value = 
    `
    <body> 
      <input type="button" onclick = "country()" value="country">
      <script> 
        function country() 
        { 
          alert ("جمهورية مصر العربية"); 
        } 
      </script> 
    </body>
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>>>
let btn4 = document.querySelector(".btn4");
btn4.onclick = function () {
  abc.value =
    `
    <body dir="rtl"> 
      <form name="form1"> 
        <input type="text" name="t1"> 
        <input type="button" onclick="country()" value="اضغط هنا"> 
      </form> 
      <script> 
        function country() 
        { 
          alert (form1.t1.value); 
        } 
      </script> 
    </body>
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>
let btn5 = document.querySelector(".btn5");
btn5.onclick = function () {
  abc.value = 
    `
      <body dir="rtl"> 
        <form name="form1"> 
          <label>اكتب مجموعك : </label> 
          <input type="text" name="t1"> 
          <input type="button" onclick="country()" value="المجموع"> 
        </form> 
        <script> 
          function country() 
          { 
            if(form1.t1.value>=50)
            alert("نــــــــــــــــــاجح")
          else(
            alert("راســـــــــــــــــــب")
          );
          } 
        </script> 
      </body>
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>
let btn6 = document.querySelector(".btn6");
btn6.onclick = function () {
  abc.value = 
    `
      <body dir="rtl">
        <form name="form1" action="data.php"> 
          ادخل اسم الطالب 
          <input type="text" name="text1" > <br><br> 
          <input type="submit" value="إرسال" onclick="return f1();"/> 
        </form> 
      <script>
      function f1()
      { 
        if (form1.text1.value=="")
        { 
          alert("غير مسموح بترك حقل الاسم فارع "); 
          return false; 
        } 
      } 
      </script> 
      </body>
    `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>>>>>
let btn7 = document.querySelector(".btn7");
btn7.onclick = function () {
  abc.value = 
  `
  <body dir="rtl"> 
    <form name="form1" action="data.php"> 
      ادخل كلمة المرور <input type="password" name="text1"> 
      <input  type="submit"  value="ارسال" onclick="return f1();"/> 
    </form> 
    <script> 
      function f1(){ 
        if (form1.text1.value.length<8){ 
          alert("طول كلمة المرور لا يقل عن 8 أحرف"); 
          return false; 
        } 
      } 
    </script> 
  </body> 
  `;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>>
let btn8 = document.querySelector(".btn8");
btn8.onclick = function () {
  abc.value = 
  `
  <body dir="rtl"> 
    <form name="form1" action="data.php"> 
      ادخل كلمة المرور
      <input type="password" name="text1"> 
      <br> <br>
      اعد ادخال كلمة المرور
      <input type="password" name="text2"> 
      <br> 
      <input  type="submit"  value="إرسال" onclick="return f1();"/> 
    </form> 
    <script> 
      function f1(){ 
          if (form1.text1.value!==form1.text2.value){ 
            alert("الكلمتان غير متطابقتان"); 
            return false; 
          } 
      } 
    </script> 
  </body> 
`;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>
let btn9 = document.querySelector(".btn9");
btn9.onclick = function () {
  abc.value = 
  `
  <body dir="rtl"> 
    <form name="form1" action="data.php"> 
      <input type="text" name="text1"> 
      <input type="submit" value="ارسال" onclick="return f1();"/> 
    </form> 
    <script> 
      function f1(){ 
        if (isNaN(form1.text1.value)){ 
          alert("ادخل قيمة عددية"); 
          return false; 
        } 
      } 
    </script> 
  </body> 
`;
  simpleEditorJunior();
};
// >>>>>>>>>>>>>>>>>>>
let links = document.querySelector(".btnlink");
links.onclick = function () {
  abc.value =
    `
    <style>
      body{
        direction: rtl
      }
      a{
        display:block;
        background-Color: rgb(37, 43, 67);
        color: white;
        margin: 10px;
        padding: 10px;
        text-decoration:none;
        width: 70px;
        border-radius:5px;
        text-align:center;
        font-size:20px
      }
      a:hover {
        background-Color: rgb(255, 145, 0);
        color: rgb(37, 43, 67);
      }
    </style>
      <a href="https://www.linkedin.com/in/ramy-salama-3b2976213" target="_blank">لينكدان</a>
      <a href="https://youtube.com/@user-zl8dl8yg3t" target="_blank">يوتيوب</a>
    `;
  simpleEditorJunior();
};
