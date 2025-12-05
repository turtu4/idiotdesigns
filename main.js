const projects = [
  {
    name: "Dracu'",
    url: "projects/dracu.html",
    description: "Re-Reflective Journaling – An illustrative journal exploring character<br>and self through sequential sketching."
  },
  {
    name: "Overthinker",
    url: "projects/overthinker.html",
    description: "Insecure Memes – Meme and comic doodles about insecurities<br>and emotional struggles.",
  thumbnail: "images/pg/pg2.jpg"
  },
  {
    name: "Betongstommen",
    url: "projects/betongstommen.html",
    description: "The Concrete Frame – Playground design weaving risk,<br>autonomy, and creative play.",
    thumbnail: "images/bt/bt0.jpg"
  },
  {
    name: "Common Grounds",
    url: "projects/common-grounds.html",
    description: "Siblings, Individuals, and Friends – Co-designing around sibling<br>relationships and creative collaboration.",
    thumbnail: "images/ground/g0.jpg"
  },
  {
    name: "Self-Exposures",
    url: "projects/self-exposures.html",
    description: "One More Time – Analogue paired exposures about transition<br>and acceptance.",
    thumbnail: "images/self/self0.jpg"
  },
  {
    name: "Azur Foundation",
    url: "projects/azur.html",
    description: "Simulation Exposure Reports – Speculative design on simulation<br>over-exposure in a sci-fi medical context.",
    thumbnail: "images/azur/azur0.jpg"
  },
  {
    name: "Boredom",
    url: "projects/bore.html",
    description: "A State of Mind – An anamorphic tape frame in a corridor<br>that snaps into view only from one spot.",
    thumbnail: "images/bore/bore0.png"
  },
  {
    name: "Handledaren",
    url: "projects/gui.html",
    description: "Conflicting Set Design – Set design for “The Guide,” charting a detective’s<br>split psyche with minimalist, shifting spaces.",
    thumbnail: "images/gui/gui0.png"
  },
  {
    name: "Hearing Aids Are Cool",
    url: "projects/hear.html",
    description: "Like for Real, Really Cool – Graphic research on stigma and identity.<br>Styling hearing aids as part of self.",
    thumbnail: "images/hear/hear0.png"
  },
  {
    name: "Invisible Exhibitions",
    url: "projects/invisible.html",
    description: "Inverted Curation – Rural Fröseke “shows” that appear only when perceived;<br>single frames stand in for the exhibition.",
    thumbnail: "images/invisible/invisible0.png"
  },
  {
    name: "Penhold Ping Pong Paddle",
    url: "projects/ping.html",
    description: "Yep, a Penhold Ping Pong Paddle, That's It – Custom Swedish oak<br>penhold paddle shaped for grip, speed, and control.",
    thumbnail: "images/ping/ping0.png"
  },
  {
    name: "Pomana",
    url: "projects/pom.html",
    description: "DIY Ceremony – Pomana de Viu ritual performed while alive,<br>blending self-purification and community support.",
    thumbnail: "images/pom/pom0.png"
  },
  {
    name: "Analogue Connections",
    url: "projects/puzzle.html",
    description: "Feeling Puzzled – Rice-and-egg-carton puzzle pieces as a tactile<br>metaphor for connection.",
    thumbnail: "images/puzzle/puzzle0.png"
  },
  {
    name: "Shine & Sparkle",
    url: "projects/shine.html",
    description: "Light Studies with Children – Co-designed light play under a bridge,<br>turning a dark spot into kid-led installations.",
    thumbnail: "images/shine/shine0.png"
  },
  {
    name: "Friends as Tools for Play",
    url: "projects/tool.html",
    description: "Music that Fell from the Tree – Tree-mounted shutters make notes;<br>kids collaborate through sound play.",
    thumbnail: "images/tool/tool0.png"
  },
  {
    name: "NUNU",
    url: "projects/nunu.html",
    description: "Silly Stuff, Nothing Serious – Dadaist reflections on immigration and fluid memory,<br>mixing film photos with AI distortions.",
    thumbnail: "images/nu/nu0.png"
  },
  {
    name: "Murderfolk",
    url: "projects/folk.html",
    description: "Hopeless Noise – Graphic album art for Veive’s metal noise:<br>decay, grime, baby pink/black tension, defiant gore.",
    thumbnail: "images/folk/folk0.png"
  },
  {
    name: "PLAqua",
    url: "projects/pla.html",
    description: "PLAqua – 3D-printed PLA forms that support and style aquarium plants<br>while keeping the habitat healthy.",
    thumbnail: "images/pla/pla0.png"
  },
];

const categories = [
  {
    title: "Illustration & Comics",
    items: ["Dracu'", "Overthinker"]
  },
  {
    title: "Playscapes & Co-design",
    items: ["Betongstommen", "Common Grounds", "Friends as Tools for Play", "Shine & Sparkle"]
  },
  {
    title: "Installations & Spatial",
    items: ["Boredom", "Handledaren", "Invisible Exhibitions"]
  },
  {
    title: "Photography & Visual Series",
    items: ["Self-Exposures", "NUNU"]
  },
  {
    title: "Objects & Craft",
    items: ["Penhold Ping Pong Paddle", "PLAqua", "Analogue Connections"]
  },
  {
    title: "Graphic & Album Art",
    items: ["Murderfolk", "Hearing Aids Are Cool"]
  },
  {
    title: "Speculative / Research",
    items: ["Azur Foundation", "Pomana"]
  }
];

const projectMap = projects.reduce((acc, proj) => {
  acc[proj.name] = proj;
  return acc;
}, {});

const groupsContainer = document.getElementById('project-groups');

categories.forEach((cat) => {
  const section = document.createElement('section');
  section.className = 'project-group';

  const heading = document.createElement('h3');
  heading.textContent = cat.title;
  section.appendChild(heading);

  const ul = document.createElement('ul');
  ul.className = 'project-list';

  cat.items.forEach((name) => {
    const project = projectMap[name];
    if (!project) return;
    const li = document.createElement('li');
    li.tabIndex = 0;
    let imgHtml = '';
    if (project.thumbnail) {
      imgHtml = `<img src="${project.thumbnail}" alt="${project.name} thumbnail" style="max-width:60px;max-height:60px;float:left;margin-right:0.5rem;border:2px solid #6F7D8C;box-shadow:2px 2px 8px rgba(0,0,0,0.2);border-radius:8px;">`;
    } else if (project.name === "Dracu'") {
      imgHtml = `<img src="images/dracu/dracu3.jpg" alt="Dracu' thumbnail" style="max-width:60px;max-height:60px;float:left;margin-right:0.5rem;border:2px solid #6F7D8C;box-shadow:2px 2px 8px rgba(0,0,0,0.2);border-radius:8px;">`;
    }
    const parts = project.description.split('–');
    const subtitle = parts[0]?.trim() || '';
    const rest = parts.slice(1).join('–').trim();
    const descHtml = subtitle
      ? `<span class="thumb-desc"><span class="thumb-sub">${subtitle}</span>${rest ? ' – ' + rest : ''}</span>`
      : `<span class="thumb-desc">${project.description}</span>`;

    li.innerHTML = `<a class="thumb-card" href="${project.url}" aria-label="${project.name}">${imgHtml}<strong>${project.name}</strong><br>${descHtml}</a>`;
    ul.appendChild(li);
  });

  section.appendChild(ul);
  groupsContainer.appendChild(section);
});
