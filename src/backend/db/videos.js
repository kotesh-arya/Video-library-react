import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    id: 1,
    creator: "Marvel Studios",
    category: "Hollywood",
    title: "Marvel Studios Thor: Love and Thunder | Official Trailer",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/Go8nTmfrQd8/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=Go8nTmfrQd8",
    creatorLogo:
      "https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    _id: uuid(),
    id: 2,
    category: "Hollywood",
    title: "WB 12 STRONG - Official Trailer | Chris Hemsworth ",
    creator: "Warner Bros",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/-Denciie5oA/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=-Denciie5oA",
    creatorLogo:
      "https://yt3.ggpht.com/Dd84-7pxMM5DvXGwsEoLv5NMdyeEJnGxhe0rtDuJslFN3YUKCOhN5R7n8--B6g33kPNV2Pv8Q28=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    _id: uuid(),
    id: 3,
    creator: "Sony Pictures",
    category: "Hollywood",
    title: "The Invitation - Official Trailer | Johannes Beckman",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/5bL1ftuxgOE/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=5bL1ftuxgOE",
    creatorLogo:
      "https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 4,
    creator: "Universal Pictures",
    category: "Hollywood",
    title: "Jurassic World Dominion - Official Trailer",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/fb5ELWi-ekk/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=fb5ELWi-ekk",
    creatorLogo:
      "https://yt3.ggpht.com/_xmrueXlQyPmO379bSt2BjirLWXxNOUoQn1jV0DpOlxxeCGlx9Z2L9HxfoWMgdsdIyGFh17W1A=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    _id: uuid(),
    id: 5,
    creator: "Disney+ Hotstar",
    category: "Bollywood",
    title: "GoodLuck Jerry - Official Trailer",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/Pwe_va9hPH0/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=Pwe_va9hPH0",
    creatorLogo:
      "https://yt3.ggpht.com/62exfAwB1QawnKHy5cWqWlG8PM6ma8vFkX58Qz2sQU3T5ckA4TMwaYKy1RZGd2jgM27UyitJVw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 6,
    creator: "T-Series",
    category: "Bollywood",
    title: "HIT: The First Case - Official Trailer",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/JtdCIn47v5g/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=JtdCIn47v5g",
    creatorLogo:
      "https://yt3.ggpht.com/l8CPpluol0brprHG9dZMaD7AJ2XrngeNs_oy85XUqdkLi5E3PhCu7VmP_HsRM8yUk-suL-7ImQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 7,
    creator: "Z-Studios",
    category: "Bollywood",
    title: "OM | Trailer | Aditya Roy Kapur | Sanjana Sanghi ",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/fYRiuY5_KXQ/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=fYRiuY5_KXQ",
    creatorLogo:
      "https://yt3.ggpht.com/nOIelrYPKYybWsdVohjomeRCTI9dryPGd6FkRpBejAsTsG2p-eZYFrLmD3TlOvtpn5QJVmbo=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 8,
    creator: "Rotten Tomatoes",
    category: "Bollywood",
    title: "Brahmastra - Official Trailer | Ranbir kapoor | Alia Bhat",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/5HF_A3lmAyk/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=UHYUeZ8JszQ",
    creatorLogo:
      "https://yt3.ggpht.com/_XxIsLgks3G7PJ1Yhfq6GWBeDr2PfYIi9xrbz-7AnsaiutSh6pItq4odcQgXRAvCn1KuGqlj4g=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 9,
    creator: "Mythri Movie Makers",
    category: "Tollywood",
    title: "Pushpa: The Rise - Official Trailer | Allu Arjun",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/Q1NKMPhP8PY/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=Q1NKMPhP8PY",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AMLnZu8mXp4mZFnp282atstxS_XS0nPa3JGUoHMtExEsIQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 10,
    creator: "UV Creators",
    category: "Tollywood",
    title: "Radhe Shyam - Official Trailer | Prabhas | Pooja Hegde",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/4x9abUBcK1c/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=4x9abUBcK1c",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AMLnZu9R3YJZzwbSK_pfn8pncvGYnGnSzgVMHOY97BwWBQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 11,
    creator: "AK Entertainments",
    category: "Tollywood",
    title: "Agent - Teaser | No1 Akhil Akkineni",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/DsdT3D_zKF0/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=DsdT3D_zKF0",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQy8NhqfV2fRmTec1GRy-fIwY0FF2hmpMI70Ke41A=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 12,
    creator: "Konidela Entertainments",
    category: "Tollywood",
    title: "God Father - First Look | Megastar Chiranjeevi ",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/WuCjEeyQrq8/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=WuCjEeyQrq8",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLSK3NRU3UCQWU4i5FJOFY9kRKDfwJLRYAi64wio=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    _id: uuid(),
    id: 13,
    creator: "Sregamapa Tamil",
    category: "Kollywood",
    title: "Dejavu - Official Trailer | Arulnithi | Madhoo | Achyuth ",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/dRjt2XJIJPc/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=dRjt2XJIJPc",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRCjtYpPq0ugJUa-E9iowwRhaUdrFT6oPDpYv-X6g=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 14,
    creator: "Star Music India",
    category: "Kollywood",
    title: "MAHA - Official Trailer | Simbhu | Hansika",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/Fx_QpMZHUs0/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=Fx_QpMZHUs0",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRqwxl3yLr-8WydgMknIjafEHKp9vQTPfYYEF7vRQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 15,
    creator: "Sony Music South",
    category: "Kollywood",
    title: "GARGI - Official Trailer | Sai Pallavi",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/4_73N1iGkCU/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=4_73N1iGkCU",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRSu0SoelpGmqyAj7H-l9AvN_a4GiV145VwyF4yqA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    _id: uuid(),
    id: 16,
    creator: "Vyjayanthi Network",
    category: "Kollywood",
    title: "Sita Ramam - Official Teaser | Dulquer Salman",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    thumbNail: "https://img.youtube.com/vi/cuVMVBldMqs/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=6b0b-FcQ6ls",
    creatorLogo:
      "https://yt3.ggpht.com/ytc/AMLnZu97jbP5SbIudOemdkV_PcgGJ1WsACDtzOnMDZvnUQ=s176-c-k-c0x00ffffff-no-rj",
  },
];
