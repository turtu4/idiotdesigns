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
  {
    name: "Bore",
    url: "projects/bore.html",
    description: "Image Series – Gallery pulled from the Bore set.",
    thumbnail: "images/bore/bore0.png"
  },
  {
    name: "GUI",
    url: "projects/gui.html",
    description: "Image Series – Interface sketches collected into a slider.",
    thumbnail: "images/gui/gui0.png"
  },
  {
    name: "Hear",
    url: "projects/hear.html",
    description: "Image Series – Visuals from the Hear collection.",
    thumbnail: "images/hear/hear0.png"
  },
  {
    name: "Invisible",
    url: "projects/invisible.html",
    description: "Image Series – A one-frame glimpse into Invisible.",
    thumbnail: "images/invisible/invisible0.png"
  },
  {
    name: "Ping",
    url: "projects/ping.html",
    description: "Image Series – Posters and frames from the Ping folder.",
    thumbnail: "images/ping/ping0.png"
  },
  {
    name: "POM",
    url: "projects/pom.html",
    description: "Image Series – A concise run of POM visuals.",
    thumbnail: "images/pom/pom0.png"
  },
  {
    name: "Puzzle",
    url: "projects/puzzle.html",
    description: "Image Series – The full Puzzle set assembled into one view.",
    thumbnail: "images/puzzle/puzzle0.png"
  },
  {
    name: "Shine",
    url: "projects/shine.html",
    description: "Image Series – Highlights and domes from the Shine set.",
    thumbnail: "images/shine/shine0.png"
  },
  {
    name: "Tool",
    url: "projects/tool.html",
    description: "Image Series – Explorations captured in the Tool folder.",
    thumbnail: "images/tool/tool0.png"
  },
  {
    name: "Adictionary",
    url: "projects/addictionary.html",
    description: "Image Series – The Adictionary collection.",
    thumbnail: "images/addictionary/Adictionary.jpg"
  },
  {
    name: "Album Covers",
    url: "projects/album.html",
    description: "Image Series – Album cover designs.",
    thumbnail: "images/album/Album Covers.jpg"
  },
  {
    name: "Alienwave",
    url: "projects/alien.html",
    description: "Image Series – Alienwave visuals.",
    thumbnail: "images/alien/Alienwave.jpg"
  },
  {
    name: "Art in Drawers",
    url: "projects/drawers.html",
    description: "Image Series – Works collected from the drawers.",
    thumbnail: "images/drawers/Art in Drawers.jpg"
  },
  {
    name: "Fabric on Film",
    url: "projects/fabric.html",
    description: "Image Series – Fabric textures captured on film.",
    thumbnail: "images/fabric/Fabric on Film.jpg"
  },
  {
    name: "Foraging",
    url: "projects/forage.html",
    description: "Image Series – Foraging studies.",
    thumbnail: "images/forage/Foraging.jpg"
  },
  {
    name: "GeoTeratoma",
    url: "projects/geoteratoma.html",
    description: "Image Series – Geometric and organic form explorations.",
    thumbnail: "images/geoteratoma/GeoTeratoma.jpg"
  },
  {
    name: "H+FF",
    url: "projects/hff.html",
    description: "Image Series – H+FF visuals.",
    thumbnail: "images/hff/H+FF.jpg"
  },
  {
    name: "Hockey",
    url: "projects/hockey.html",
    description: "Image Series – Hockey photography.",
    thumbnail: "images/hockey/Hockey.jpg"
  },
  {
    name: "Homework Workshop",
    url: "projects/homework.html",
    description: "Image Series – Homework Workshop project.",
    thumbnail: "images/homework/Homework Workshop.jpg"
  },
  {
    name: "Koncepteriet",
    url: "projects/koncept.html",
    description: "Image Series – Internship at Koncepteriet architecture studio.",
    thumbnail: "images/koncept/Koncepteriet.jpg"
  },
  {
    name: "Prodigy",
    url: "projects/prodigy.html",
    description: "Image Series – The Prodigy set.",
    thumbnail: "images/prodigy/Prodigy.jpg"
  },
  {
    name: "Sticks",
    url: "projects/sticks.html",
    description: "Image Series – Sticks and Idiots documentation.",
    thumbnail: "images/sticks/Sticks.jpg"
  },
  {
    name: "Stone Edge",
    url: "projects/stnedge.html",
    description: "Image Series – Stone Edge visuals.",
    thumbnail: "images/stnedge/Stone Edge.jpg"
  },
  {
    name: "Music Studio",
    url: "projects/studio.html",
    description: "Image Series – Music studio photography.",
    thumbnail: "images/studio/Music Studio.jpg"
  },
  {
    name: "Tea Doodles",
    url: "projects/tea.html",
    description: "Image Series – Doodles over tea.",
    thumbnail: "images/tea/Tea Doodles.jpg"
  },
  {
    name: "Terrarium",
    url: "projects/terrarium.html",
    description: "Image Series – Terrarium constructions.",
    thumbnail: "images/terrarium/Terrarium.jpg"
  },
  {
    name: "Fat Frumos",
    url: "projects/th.html",
    description: "Image Series – Fat Frumos and Lovesick.",
    thumbnail: "images/th/Fat Frumos.jpg"
  },
  {
    name: "Concrete Tiles",
    url: "projects/tiles.html",
    description: "Image Series – Concrete tile designs.",
    thumbnail: "images/tiles/Concrete Tiles.jpg"
  },
  {
    name: "T-Shirts",
    url: "projects/tshirts.html",
    description: "Image Series – T-shirt designs.",
    thumbnail: "images/tshirts/T-Shirts.jpg"
  },
  {
    name: "Weddings",
    url: "projects/weddings.html",
    description: "Image Series – Wedding photography.",
    thumbnail: "images/weddings/Weddings.jpg"
  },
  {
    name: "Wrestling Tattoos",
    url: "projects/wrestling.html",
    description: "Image Series – Wrestling tattoo designs.",
    thumbnail: "images/wrestling/Wrestling Tattoos.jpg"
  },
  {
    name: "X Series",
    url: "projects/x.html",
    description: "Image Series – The X Series.",
    thumbnail: "images/x/X Series.jpg"
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
