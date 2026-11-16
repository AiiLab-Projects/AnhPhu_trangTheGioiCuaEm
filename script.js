const SWIM_STYLES = {
  freestyle: {
    badge: "Tốc độ & Thể lực",
    title: "Bơi sải — Nhịp nhàng và bứt phá",
    desc: "Đây là kiểu bơi mình tập nhiều nhất để rèn sức bền tim mạch. Cảm giác rẽ nước tiến về phía trước với nhịp thở đều đặn 3 nhịp một lần thực sự rất cuốn hút.",
    highlights: [
      "Đốt cháy năng lượng hiệu quả, tăng dung tích phổi",
      "Giữ thân người thẳng, lướt nước mượt mà",
      "Phù hợp cho các bài tập cự ly 500m – 1.500m"
    ],
    intensity: "Cao",
    feeling: "Mạnh mẽ, dứt khoát",
    time: "Khởi động & tăng tốc"
  },
  breaststroke: {
    badge: "Thư giãn & Bền bỉ",
    title: "Bơi ếch — Nhẹ nhàng tận hưởng",
    desc: "Những hôm muốn bơi chậm để thư giãn đầu óc, bơi ếch là lựa chọn số một. Nhịp đạp chân và rướn người giúp thả lỏng vai gáy sau giờ làm việc.",
    highlights: [
      "Dễ kiểm soát nhịp thở và quan sát phía trước",
      "Tác động tốt lên cơ đùi, cơ ngực và vai",
      "Bơi được quãng đường dài mà không bị hụt hơi"
    ],
    intensity: "Trung bình",
    feeling: "Thư thái, nhịp nhàng",
    time: "Bơi phục hồi cuối buổi"
  },
  backstroke: {
    badge: "Cân bằng & Thoải mái",
    title: "Bơi ngửa — Ngắm trời xanh từ mặt nước",
    desc: "Bơi ngửa ở hồ ngoài trời mang lại cảm giác rất tự do. Cột sống được duỗi thẳng tự nhiên trên mặt nước, cực kỳ dễ chịu cho lưng.",
    highlights: [
      "Giảm áp lực lên vùng lưng và cổ",
      "Hít thở thoải mái vì mặt luôn ở trên mặt nước",
      "Giúp cân bằng nhóm cơ lưng và cơ vai"
    ],
    intensity: "Nhẹ – Trung bình",
    feeling: "Tự do, phóng khoáng",
    time: "Thả lỏng sau các vòng bơi nhanh"
  }
};

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Swimming style tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const styleBadge = document.getElementById("styleBadge");
const styleTitle = document.getElementById("styleTitle");
const styleDesc = document.getElementById("styleDesc");
const styleHighlights = document.getElementById("styleHighlights");
const styleIntensity = document.getElementById("styleIntensity");
const styleFeeling = document.getElementById("styleFeeling");
const styleTime = document.getElementById("styleTime");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.style;
    const data = SWIM_STYLES[key];
    if (!data) return;

    tabButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    styleBadge.textContent = data.badge;
    styleTitle.textContent = data.title;
    styleDesc.textContent = data.desc;
    styleHighlights.innerHTML = data.highlights.map((item) => `<li>${item}</li>`).join("");
    styleIntensity.textContent = data.intensity;
    styleFeeling.textContent = data.feeling;
    styleTime.textContent = data.time;
  });
});

