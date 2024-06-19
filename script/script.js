$(function () {
        // 스크롤 이동시 메뉴와 라인 색변경
        $(window).scroll(() => {
          const height = $(document).scrollTop();
          $(".header_main>nav>ul>li").removeClass("active");
          if (height <= 1700) { 
              $(".header_main>nav>ul>li:nth-child(1)").addClass("active");
          } else if (height <= 2600) { 
              $(".header_main>nav>ul>li:nth-child(2)").addClass("active");
          } else {
              $(".header_main>nav>ul>li:nth-child(3)").addClass("active");
          }
          // 최상단 왔을때 메뉴색 해제 
          if (height === 0) {
              $(".header_main>nav>ul>li").removeClass("active");
          }
      });

    // 각 메뉴 클릭시 해당 위치로 이동
    $(".header_main>nav>ul>li").slice(0, 3).on("click", function () {
        let targetPosition;
        if ($(this).index() === 0) {
            targetPosition = $("#about").position().top - 5;
        } else if ($(this).index() === 1) {
            targetPosition = $("#portfolio").offset().top - 100;
        } else if ($(this).index() === 2) {
            targetPosition = $("#contact").position().top - 40;
        }
        $("html,body").animate({
            scrollTop: targetPosition
        }, 600);
        $(".header_main>nav>ul>li").removeClass("active");
        $(this).addClass("active");
    });



    // 타이틀 타이핑 효과
    $(document).ready(function () {
        var typingBool = false;
        var typingIdx = 0;
        var liIndex = 0;
        var liLength = $(".typing-txt>ul>li").length;
      
        // 타이핑될 텍스트를 가져온다
        var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
        typingTxt = typingTxt.split(""); // 한글자씩 자른다.
        if (typingBool == false) {
          // 타이핑이 진행되지 않았다면
          typingBool = true;
          var tyInt = setInterval(typing, 100); // 반복동작
        }
      
        function typing() {
          $(".typing ul li").removeClass("on");
          $(".typing ul li").eq(liIndex).addClass("on");
          if (typingIdx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
            typingIdx++;
          } else {
            if (liIndex < liLength - 1) {
              //다음문장으로  가기위해 인덱스를 1증가
              liIndex++;
              //다음문장을 타이핑하기위한 셋팅
              typingIdx = 0;
              typingBool = false;
              typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
      
              //다음문장 타이핑전 1초 쉰다
              clearInterval(tyInt);
              //타이핑종료
      
              setTimeout(function () {
                //1초후에 다시 타이핑 반복 시작
                tyInt = setInterval(typing, 100);
              }, 500);
            } else if (liIndex == liLength - 1) {
              //마지막 문장까지 써지면 반복종료
              clearInterval(tyInt);
            }
          }
        }
      });


      // 포트폴리오 탭
      $(".inner_bbs li").click(function () {
        let $this = $(this);
        let index = $this.index();
        $this.addClass("active");
        $this.siblings(".inner_bbs li.active").removeClass("active");

        let $wrap = $this.closest(".inner_bbs");
        let $current = $wrap.find("> .tabs > .tab.active");
        let $post = $wrap.find("> .tabs > .tab").eq(index);

        $current.removeClass("active");
        $post.addClass("active");

        $(".slider").slick("setPosition");
    });

    $(".slider").slick({
        dots: true, // 페이지 번호 표시 (true 또는 false)
        arrows: true, // 화살표 표시 (true 또는 false)
        slidesToShow: 1, // 보여질 슬라이드 개수

    });

    // 화살표 -스크롤이 500px 도달시 나타남
    $(window).scroll(function(){
      if($(this).scrollTop() > 500) {
        $(".btn_top").fadeIn();
      } else {
        $(".btn_top").fadeOut();
      }
    });



    // 화살표 버튼 클릭시 최상단 이동
    $(".btn_top").on("click",function(){
      $("html,body").animate({
        scrollTop:0
      },400);
    });

});

