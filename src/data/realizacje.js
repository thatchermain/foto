import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Blog4 from "../assets/images/blog4.png";
import Blog5 from "../assets/images/blog5.png";
import Blog6 from "../assets/images/blog6.png";

const data = [
  {
    id: 1,
    place: "Warszawa",
    cover: Blog1,
    photos: [{ original: Blog1 }, { original: Blog2 }],
  },
  {
    id: 2,
    place: "Katowice",
    cover: Blog3,
    photos: [{ original: Blog3 }, { original: Blog4 }],
  },
  {
    id: 3,
    place: "Kraków",
    cover: Blog5,
    photos: [{ original: Blog5 }, { original: Blog6 }],
  },
];

export default data;
