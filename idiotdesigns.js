const projects = [
  {
    name: "Dracu'",
    url: "projects/dracu.html",
    description: "Re-Reflective Journaling – An illustrative journal exploring character and self through sequential sketching."
  },
  {
    name: "Overthinker",
    url: "projects/overthinker.html",
    description: "Insecure Memes – A meme and comic project exploring insecurities and emotional struggles through digital doodles.",
  thumbnail: "images/pg/pg2.jpg"
  },
  {
    name: "Betongstommen",
    url: "projects/betongstommen.html",
    description: "The Concrete Frame – Playground design project integrating risk, autonomy, and creative play.",
    thumbnail: "images/bt/bt0.jpg"
  },
  {
    name: "Common Grounds",
    url: "projects/common-grounds.html",
    description: "Siblings, Individuals, and Friends – A co-design project exploring sibling relationships and creative collaboration.",
    thumbnail: "images/ground/g0.jpg"
  },
  {
    name: "Self-Exposures",
    url: "projects/self-exposures.html",
    description: "One More Time – Analogue photography project exploring transition and acceptance through paired exposures.",
    thumbnail: "images/self/self0.jpg"
  },
  {
    name: "Azur Foundation",
    url: "projects/azur.html",
    description: "Simulation Exposure Reports – A speculative design project exploring simulation over-exposure in a sci-fi medical context.",
    thumbnail: "images/azur/azur0.jpg"
  },
];

const list = document.getElementById('project-list');
projects.forEach((project, idx) => {
  const li = document.createElement('li');
  li.tabIndex = 0;
  let imgHtml = '';
  if (project.thumbnail) {
    imgHtml = `<img src="${project.thumbnail}" alt="${project.name} project thumbnail" style="max-width:60px;max-height:60px;float:left;margin-right:0.5rem;border:2px solid #111;box-shadow:2px 2px 8px #ccc;">`;
  } else if (idx === 0) {
    imgHtml = `<img src="images/dracu/dracu3.jpg" alt="Dracu' project thumbnail" style="max-width:60px;max-height:60px;float:left;margin-right:0.5rem;border:2px solid #111;box-shadow:2px 2px 8px #ccc;">`;
  }
  li.innerHTML = `${imgHtml}<a href="${project.url}" aria-label="${project.name}"><strong>${project.name}</strong></a><br><span>${project.description}</span>`;
  list.appendChild(li);
});
