$(function () {
    // navタグの各要素をmouseoverした際、背景色とボックスサイズを変更
    $(".inner-nav").on("mouseover", function () {
        $(this).css("background-color", "gold");
        $(this).css("padding", "5px");
    });

    // 上の処理をmouseleaveした際に、元に戻す
    $(".inner-nav").on("mouseleave", function () {
        $(this).css("background-color", "black");
        $(this).css("padding", "0px");
    });

    // メイン画像を回転させる
    $("#main-img").on(function () {
        $(this).animate({ transform: rotate("45deg") });
    });

    // destinationsの国をmouseoverしたらグレーアウトする
    $(".grey-out").on("mouseover", function () {
        $(this).css("opacity", "0.3");
        let p = $("<p>");
        p.append("Africa");
        $("p").addClass("div");
    });

    // mouseleaveしたら、グレーアウトを元に戻す
    $(".grey-out").on("mouseleave", function () {
        $(this).css("opacity", "1.0");
    });

    // clickしたらモーダルで内容を表示する
    $(".africa").on("click", function () {
        $("body").addClass("modal-open");
        $(".modal-bg").fadeIn("slow");
        $(".modal-content").fadeIn("slow");
    });

    // mouseover時スタイル変更
    $(".input input").on("mouseover", function(){
        $(this).css("background-color", "gold");
    });

    // mouseleave時元に戻す
    $(".input input").on("mouseleave", function(){
        $(this).css("background-color", "blue");
    });
    

    // 画像blurのアニメーションをつける
    $(window).scroll(function () {
        let windowh = $(window).height(),
            scrollY = $(window).scrollTop();

        $(".swiper-wrapper > swiper-slide").each(function () {
            let imgPosition = $(this).offset().top;
            if (scrollY > imgPosition - windowh) {
                $(this).addClass("img-blur");
            }
        });

        $(".js-toggle").on("mouseover", function () {
            $(this).siblings("dd").slideToggle();
        });

        // scrollTopを追加する
        $(".scroll").on("click", function () {
            $("html, body").stop().animate({ scrollTop: 0 }, 1000);
        });

        // ページ内のY座標を取得
        let destinations = $("#destinations").offset().top;
        $(".scroll1").on("click", function () {
            $("html, body").stop().animate({ scrollTop: destinations }, 500);
        });

        let countries = $("#countries").offset().top;
        $(".scroll2").on("click", function(){
            $("html, body").stop().animate({scrollTop: countries}, 500);
        });

        let news = $("#news").offset().top;
        $(".scroll3").on("click", function(){
            $("html, body").stop().animate({scrollTop: news}, 1000);
        });

        let comment = $("#comment").offset().top;
        $(".scroll4").on("click", function(){
            $("html, body").stop().animate({scrollTop: comment}, 1000);
        });
    });

    // 地球儀を追加して回転させる
    let camera, scene, renderer;
    let mesh;

    init();
    animate();

    function init() {

        renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });

        camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
        camera.position.z = 25;

        scene = new THREE.Scene();

        let geometry = new THREE.SphereGeometry(10, 100, 100);
        let material = new THREE.MeshPhongMaterial();

        THREE.ImageUtils.crossOrigin = '';
        material.map = THREE.ImageUtils.loadTexture('../img/globe/earth.jpg')

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x += 0.5;
        scene.add(mesh);

        var light1 = new THREE.AmbientLight(0xffffff);
        light1.position.set(100, 50, 100);
        scene.add(light1);
    }

    function resize() {
        var width = renderer.domElement.clientWidth;
        var height = renderer.domElement.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    function animate() {
        resize();
        mesh.rotation.y += 0.005;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
});

// thumbs galleryのJS(Africa)
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

// thumbs galleryのJS(Asia)
var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop1 = new Swiper('.gallery-top1', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs1,
    },
});

// thumbs galleryのJS(Europe)
var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop2 = new Swiper('.gallery-top2', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs2,
    },
});

// thumbs galleryのJS(Oceania)
var galleryThumbs3 = new Swiper('.gallery-thumbs3', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop3 = new Swiper('.gallery-top3', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs3,
    },
});

// thumbs galleryのJS(South America)
var galleryThumbs4 = new Swiper('.gallery-thumbs4', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop4 = new Swiper('.gallery-top4', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs4,
    },
});

// thumbs galleryのJS(USA)
var galleryThumbs5 = new Swiper('.gallery-thumbs5', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop5 = new Swiper('.gallery-top5', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs5,
    },
});

$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
  });
  $('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('nav').removeClass('open');      
    }
  });







