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
        // let p = $("<p>");
        // p.append("Africa");
        // $("p").addClass("div");
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

// thumbs galleryのJS
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
        swiper: galleryThumbs,
    },
});