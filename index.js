// index.js
$(function () {

    // 제이쿼리 버전

    //     $('.support_box .tab_box ul li').click(function (){
    //         var index   = $(this).index() + 1;
    //         $('.support_box .tab_box ul li').removeClass('open');
    //         $(this).addClass('open');
  
    //         $(".contents_box").addClass("hide");
    //         $(".contents_box.con" + index).removeClass('hide');
  
    // //     $('.support_box .tab_box ul li').click(function (){
    // //         $('.support_box .tab_box ul li').removeClass('open');
    // //         $(this).addClass('open');
    // //         // $('.contents_box').removeClass('on');
    // //         // $(this).parents().children('.contents_box').addClass('on');
    // // })
    // })
  });
  
   // 탭 오픈
  
  function tabOpen(conNum) {
    let box_length = document.querySelectorAll(".tab_box ul li").length;
    console.log(box_length);
  
    // 사진 변경
    let arr = ["pink", "blue", "purple", "skyblue"];
    
    let contents  =document.querySelector('.contents');
    console.log(contents)
    let img = document.querySelectorAll('.cont_img')
    console.log(img); // 4개 
  
    // 모두 삭제 => 반복문 사용
    for (i = 0; i < box_length; i++) {
      document.querySelectorAll(".support_box .tab_box ul .tab")[i].classList.remove("open");
      document.querySelectorAll(".contents_box")[i].classList.add("hide");
     // 사진 변경
      img[i].style.background = arr[i]
  }
  
    // 오픈
    document.querySelector('.support_box ul .tab'+conNum).classList.add('open')
    document.querySelector(".contents_box.con" + conNum).classList.remove("hide");
  
  }
  // querySelector(하나)과  querySelectorAll(모두 선택됨-배열확인하기)의 차이점 생각해서 코드짜기
    
  
