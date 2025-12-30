// // YOUR CLOUDINARY VIDEO LINKS

const cloudVideos = [
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536043/WhatsApp_Video_2025-12-12_at_4.08.14_PM_aq9dyw.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536038/WhatsApp_Video_2025-12-12_at_4.08.18_PM_2_nhraj7.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536037/WhatsApp_Video_2025-12-12_at_4.08.19_PM_kvzxme.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536036/WhatsApp_Video_2025-12-12_at_4.08.17_PM_lusgt0.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536036/WhatsApp_Video_2025-12-12_at_4.08.19_PM_2_k8szit.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536033/WhatsApp_Video_2025-12-12_at_4.08.19_PM_1_xji6qt.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536033/WhatsApp_Video_2025-12-12_at_4.08.18_PM_vksvri.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536034/WhatsApp_Video_2025-12-12_at_4.08.15_PM_reiw7l.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536034/WhatsApp_Video_2025-12-12_at_4.08.16_PM_bljiiz.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536035/WhatsApp_Video_2025-12-12_at_4.08.17_PM_1_od0h9v.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536035/WhatsApp_Video_2025-12-12_at_4.08.18_PM_1_m6trbf.mp4",
    name: "",
  },
  {
    url: "https://res.cloudinary.com/dc3bldnrd/video/upload/v1765536035/WhatsApp_Video_2025-12-12_at_4.08.17_PM_2_igplf8.mp4",
    name: "",
  },
];

let isMuted = true; // default muted (autoplay safe)

const sliderWrapper = document.getElementById("videoSlider");

cloudVideos.forEach(({ url, name }) => {
  const slide = document.createElement("div");
  slide.className = "card swiper-slide";

  //   slide.innerHTML = `
  //   <div class="video-wrapper relative rounded-[2rem] overflow-hidden">

  //     <video
  //       class="video h-full w-full object-cover"
  //       src="${url}"
  //       preload="metadata"
  //       playsinline
  //       muted

  //     ></video>

  //     <!-- PLAY / PAUSE -->
  //     <button class="play-btn absolute inset-0 flex items-center justify-center text-white text-3xl opacity-80 hidden">
  //       ▶
  //     </button>

  //     <!-- MUTE -->
  //     <button class="mute-btn absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
  //       🔇
  //     </button>

  //   </div>
  // `;

  slide.innerHTML = `
<div class="testimonial-card relative overflow-hidden rounded-[28px]">

  <!-- Video -->
  <video 
    class="video absolute inset-0 h-full w-full object-cover"
    src="${url}"
    preload="metadata"
    playsinline
    muted
  ></video>

  <!-- Dark Gradient Overlay -->
  <div class="absolute inset-0"></div>

  <!-- Quote 
  <div class="absolute top-6 left-6 right-6 text-white text-sm leading-relaxed">
    Overall I loved the experience. I’ll definitely recommend NextDeal.
  </div> -->

  <!-- Bottom Content -->
  <div class="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
    <div>
      <p class="font-semibold text-base">${name}</p>
      <!-- <p class="text-xs text-white/80">Graphic Designer</p> -->
    </div>

    <button class="play-btn flex items-center justify-center h-10 w-10 rounded-full bg-white/20 backdrop-blur">
      ▶
    </button>
  </div>

  <!-- Mute -->
  <button class="mute-btn absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
    🔇
  </button>

</div>
`;

  sliderWrapper.appendChild(slide);
});

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   spaceBetween: 40,

//   loop: true,

//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 180,
//     modifier: 1,
//     slideShadows: false,
//   },

//   breakpoints: {
//     640: {
//       spaceBetween: 40,
//       coverflowEffect: {
//         depth: 220,
//       },
//     },
//     1024: {
//       spaceBetween: 50,
//       coverflowEffect: {
//         depth: 300,
//       },
//     },
//   },

//   // on: {
//   //   slideChange: function () {
//   //     pauseAllVideos();
//   //   },
//   // },

//   on: {
//     init: function () {
//       autoPlayActiveVideo(this); // 👈 page load pe
//     },
//     slideChangeTransitionEnd: function () {
//       autoPlayActiveVideo(this); // 👈 next/prev swipe pe
//     },
//   },
// });

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: -10,

  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 210,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      coverflowEffect: {
        depth: 0,
      },
    },
    640: {
      slidesPerView: "auto",
      spaceBetween: 0,
      coverflowEffect: {
        depth: 160,
      },
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: -10,
      coverflowEffect: {
        depth: 180,
      },
    },
  },

  on: {
    init(swiper) {
      autoPlayActiveVideo(swiper);
    },
    slideChangeTransitionEnd(swiper) {
      autoPlayActiveVideo(swiper);
    },
  },
});

function pauseAllVideos() {
  document.querySelectorAll(".video").forEach((v) => {
    v.pause();
    v.currentTime = 0;
  });

  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.innerHTML = "▶";
  });
}

document.addEventListener("click", (e) => {
  const playBtn = e.target.closest(".play-btn");
  const muteBtn = e.target.closest(".mute-btn");

  /* ======================
     🔇 MUTE / UNMUTE
  ====================== */
  if (muteBtn) {
    isMuted = !isMuted;

    document.querySelectorAll(".video").forEach((video) => {
      video.muted = isMuted;
    });

    document.querySelectorAll(".mute-btn").forEach((btn) => {
      btn.innerHTML = isMuted ? "🔇" : "🔊";
    });

    return;
  }

  /* ======================
     ▶ PLAY / PAUSE
  ====================== */
  if (!playBtn) return;

  const slide = playBtn.closest(".swiper-slide");
  if (!slide.classList.contains("swiper-slide-active")) return;

  const video = slide.querySelector("video");

  if (video.paused) {
    pauseAllVideos();
    video.play();
    swiper.autoplay.stop();
    playBtn.innerHTML = "⏸";
  } else {
    video.pause();
    swiper.autoplay.start(); // ▶ start slider
    playBtn.innerHTML = "▶";
  }
});

document.querySelectorAll(".video").forEach((video) => {
  video.addEventListener("ended", () => {
    swiper.autoplay.start();
  });
});

function handleVideoPlayback(swiper) {
  // pause all
  document.querySelectorAll("video").forEach((v) => {
    v.pause();
    v.currentTime = 0;
  });

  // REAL active slide (important for loop)
  const realSlide = swiper.slides.find(
    (slide) => slide.getAttribute("data-swiper-slide-index") == swiper.realIndex
  );

  const activeVideo = realSlide?.querySelector("video");

  if (activeVideo) {
    activeVideo.play().catch(() => {});
  }
}

function autoPlayActiveVideo(swiper) {
  // sab pause
  document.querySelectorAll(".video").forEach((v) => {
    v.pause();
    v.currentTime = 0;
    v.muted = isMuted;
  });

  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.innerHTML = "▶";
  });

  // active slide
  const activeSlide = swiper.slides[swiper.activeIndex];
  const video = activeSlide.querySelector("video");
  const playBtn = activeSlide.querySelector(".play-btn");

  if (video) {
    video.play().catch(() => {});
    swiper.autoplay.stop(); // ⛔ slider ruk jaaye jab video chale
    if (playBtn) playBtn.innerHTML = "⏸";
  }

  // video end → slider resume
  video?.addEventListener(
    "ended",
    () => {
      swiper.autoplay.start();
      swiper.slideNext();
    },
    { once: true }
  );
}
