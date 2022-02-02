// const container = document.querySelector(".container");
// const wrapper = document.querySelectorAll(".card-wrapper");
// let containerWidth = container.offsetWidth;
// let containerHeight = container.offsetHeight;

// wrapper.forEach(el =>
//   el.addEventListener("mousemove", function(e) {
//     const card = el.querySelector(".card");
//     let mousePosition = { x: 0, y: 0 };

//     mousePosition.x = e.pageX;
//     mousePosition.y = e.pageY;
//     const angleX =
//         -1 * (mousePosition.y * 100 / containerHeight * 0.2 - 10) + "deg",
//       angleY = 1 * (mousePosition.x * 100 / containerWidth * 0.2 - 10) + "deg",
//       translateX = mousePosition.x * 80 / containerHeight * 0.3 + "px",
//       translateY = mousePosition.y * 80 / containerHeight * 0.3 + "px";

//     this.style.transform = `translate3d(${translateX}, ${translateY}, 0) rotatex(${angleX}) rotatey(${angleY})`;
//     card.style.backgroundPosition = `${mousePosition.x /
//       containerWidth *
//       50}% ${mousePosition.y / containerHeight * 50}%`;
//   })
// );
