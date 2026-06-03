const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isStackedProjectsLayout = () => window.matchMedia('(max-width: 760px)').matches;
const siteHeader = document.querySelector('header');

const syncIntroHeader = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('intro-active', window.scrollY < 8);
};

syncIntroHeader();
window.addEventListener('scroll', syncIntroHeader, { passive: true });

const projects = [
  {
    name: “Dracu’”,
    url: “projects/dracu.html”,
    description: “Re-Reflective Journaling – An illustrative journal exploring character<br>and self through sequential sketching.”,
    thumbnail: “images/dracu/dracu3.jpg”
  },
  {
    name: “Overthinker”,
    url: “projects/overthinker.html”,
    description: “Insecure Memes – Meme and comic doodles about insecurities<br>and emotional struggles.”,
    thumbnail: “images/pg/Overthinker.jpg”
  },
  {
    name: “Playgrounds”,
    url: “projects/betongstommen.html”,
    description: “The Concrete Frame – Playground design weaving risk,<br>autonomy, and creative play.”,
    thumbnail: “images/bt/Bettongstomen.jpg”
  },
  {
    name: “Common Grounds”,
    url: “projects/common-grounds.html”,
    description: “Siblings, Individuals, and Friends – Co-designing around sibling<br>relationships and creative collaboration.”,
    thumbnail: “images/ground/g0.jpg”
  },
  {
    name: “Self Exposures”,
    url: “projects/self-exposures.html”,
    description: “One More Time – Analogue paired exposures about transition<br>and acceptance.”,
    thumbnail: “images/self/Self Exposure.jpg”
  },
  {
    name: “Azur Foundation”,
    url: “projects/azur.html”,
    description: “Simulation Exposure Reports – Speculative design on simulation<br>over-exposure in a sci-fi medical context.”,
    thumbnail: “images/azur/Azur Foundation.jpg”
  },
  {
    name: “Boredom”,
    url: “projects/bore.html”,
    description: “A State of Mind – An anamorphic tape frame in a corridor<br>that snaps into view only from one spot.”,
    thumbnail: “images/bore/Anamorphism.jpg”
  },
  {
    name: “Scenography”,
    url: “projects/gui.html”,
    description: “Conflicting Set Design – Set design for “The Guide,” charting a detective’s<br>split psyche with minimalist, shifting spaces.”,
    thumbnail: “images/gui/Guide.jpg”
  },
  {
    name: “Hearing Aids”,
    url: “projects/hear.html”,
    description: “Like for Real, Really Cool – Graphic research on stigma and identity.<br>Styling hearing aids as part of self.”,
    thumbnail: “images/hear/Hearing Aid.jpg”
  },
  {
    name: “Invisible Exhibitions”,
    url: “projects/invisible.html”,
    description: “Inverted Curation – Rural Fröseke “shows” that appear only when perceived;<br>single frames stand in for the exhibition.”,
    thumbnail: “images/invisible/Invincible.jpg”
  },
  {
    name: “Penhold Paddle”,
    url: “projects/ping.html”,
    description: “Custom Swedish oak penhold paddle shaped for grip,<br>speed, and control.”,
    thumbnail: “images/ping/PingPong.jpg”
  },
  {
    name: “Pomana”,
    url: “projects/pom.html”,
    description: “DIY Ceremony – Pomana de Viu ritual performed while alive,<br>blending self-purification and community support.”,
    thumbnail: “images/pom/Pomana.jpg”
  },
  {
    name: “Feeling Puzzled”,
    url: “projects/puzzle.html”,
    description: “Rice-and-egg-carton puzzle pieces as a tactile<br>metaphor for connection.”,
    thumbnail: “images/puzzle/Puzzle.jpg”
  },
  {
    name: “Shine & Sparkle”,
    url: “projects/shine.html”,
    description: “Light Studies with Children – Co-designed light play under a bridge,<br>turning a dark spot into kid-led installations.”,
    thumbnail: “images/shine/Shine’n’Sparkle.jpg”
  },
  {
    name: “Tools for Play”,
    url: “projects/tool.html”,
    description: “Music that Fell from the Tree – Tree-mounted shutters make notes;<br>kids collaborate through sound play.”,
    thumbnail: “images/tool/Tools for Play.jpg”
  },
  {
    name: “NUNU”,
    url: “projects/nunu.html”,
    description: “Silly Stuff, Nothing Serious – Dadaist reflections on immigration and fluid memory,<br>mixing film photos with AI distortions.”,
    thumbnail: “images/nu/NUNU.jpg”
  },
  {
    name: “Cover Art”,
    url: “projects/folk.html”,
    description: “Hopeless Noise – Graphic album art for Veive’s metal noise:<br>decay, grime, baby pink/black tension, defiant gore.”,
    thumbnail: “images/folk/folk0.png”
  },
  {
    name: “PLAqua”,
    url: “projects/pla.html”,
    description: “PLAqua – 3D-printed PLA forms that support and style aquarium plants<br>while keeping the habitat healthy.”,
    thumbnail: “images/pla/PLAqua.jpg”
  },
  {
    name: “Adictionary”,
    url: “projects/addictionary.html”,
    description: “Adictionary – A visual dictionary of forms and ideas.”,
    thumbnail: “images/addictionary/Adictionary.jpg”
  },
  {
    name: “Album Covers”,
    url: “projects/album.html”,
    description: “Album Covers – Cover artwork and visual identity for music releases.”,
    thumbnail: “images/album/Album Covers.jpg”
  },
  {
    name: “Alienwave”,
    url: “projects/alien.html”,
    description: “Alienwave – Graphic exploration of alien aesthetics and wave forms.”,
    thumbnail: “images/alien/Alienwave.jpg”
  },
  {
    name: “Art in Drawers”,
    url: “projects/drawers.html”,
    description: “Art in Drawers – Works pulled from the drawers and brought to light.”,
    thumbnail: “images/drawers/Art in Drawers.jpg”
  },
  {
    name: “Fabric on Film”,
    url: “projects/fabric.html”,
    description: “Fabric on Film – Textile textures and patterns captured on analogue film.”,
    thumbnail: “images/fabric/Fabric on Film.jpg”
  },
  {
    name: “Foraging”,
    url: “projects/forage.html”,
    description: “Foraging – A visual study of foraging and natural collection.”,
    thumbnail: “images/forage/Foraging.jpg”
  },
  {
    name: “GeoTeratoma”,
    url: “projects/geoteratoma.html”,
    description: “GeoTeratoma – Geometric sculptural forms exploring organic growth.”,
    thumbnail: “images/geoteratoma/GeoTeratoma.jpg”
  },
  {
    name: “H+FF”,
    url: “projects/hff.html”,
    description: “H+FF – Visual project exploring hybrid forms and found footage.”,
    thumbnail: “images/hff/H+FF.jpg”
  },
  {
    name: “Hockey”,
    url: “projects/hockey.html”,
    description: “Hockey – Sports photography on the ice.”,
    thumbnail: “images/hockey/Hockey.jpg”
  },
  {
    name: “Homework Workshop”,
    url: “projects/homework.html”,
    description: “Homework Workshop – A participatory workshop exploring learning and making.”,
    thumbnail: “images/homework/Homework Workshop.jpg”
  },
  {
    name: “Koncepteriet”,
    url: “projects/koncept.html”,
    description: “Koncepteriet – Internship at a sustainable architecture and interior design studio.”,
    thumbnail: “images/koncept/Koncepteriet.jpg”
  },
  {
    name: “Prodigy”,
    url: “projects/prodigy.html”,
    description: “Prodigy – A series of illustrations and graphic works.”,
    thumbnail: “images/prodigy/Prodigy.jpg”
  },
  {
    name: “Sticks”,
    url: “projects/sticks.html”,
    description: “Sticks – Documentation from the Sticks and Idiots project.”,
    thumbnail: “images/sticks/Sticks.jpg”
  },
  {
    name: “Stone Edge”,
    url: “projects/stnedge.html”,
    description: “Stone Edge – Material explorations with stone and edge forms.”,
    thumbnail: “images/stnedge/Stone Edge.jpg”
  },
  {
    name: “Music Studio”,
    url: “projects/studio.html”,
    description: “Music Studio – Photography inside a recording studio.”,
    thumbnail: “images/studio/Music Studio.jpg”
  },
  {
    name: “Tea Doodles”,
    url: “projects/tea.html”,
    description: “Tea Doodles – Spontaneous doodles made over tea.”,
    thumbnail: “images/tea/Tea Doodles.jpg”
  },
  {
    name: “Terrarium”,
    url: “projects/terrarium.html”,
    description: “Terrarium – Miniature ecosystems built by hand.”,
    thumbnail: “images/terrarium/Terrarium.jpg”
  },
  {
    name: “Fat Frumos”,
    url: “projects/th.html”,
    description: “Fat Frumos – A visual narrative on fairy tale archetypes and identity.”,
    thumbnail: “images/th/Fat Frumos.jpg”
  },
  {
    name: “Concrete Tiles”,
    url: “projects/tiles.html”,
    description: “Concrete Tiles – Hand-cast concrete tile designs.”,
    thumbnail: “images/tiles/Concrete Tiles.jpg”
  },
  {
    name: “T-Shirts”,
    url: “projects/tshirts.html”,
    description: “T-Shirts – Wearable graphic design.”,
    thumbnail: “images/tshirts/T-Shirts.jpg”
  },
  {
    name: “Weddings”,
    url: “projects/weddings.html”,
    description: “Weddings – Wedding photography.”,
    thumbnail: “images/weddings/Weddings.jpg”
  },
  {
    name: “Wrestling Tattoos”,
    url: “projects/wrestling.html”,
    description: “Wrestling Tattoos – Tattoo designs inspired by wrestling culture.”,
    thumbnail: “images/wrestling/Wrestling Tattoos.jpg”
  },
  {
    name: “X Series”,
    url: “projects/x.html”,
    description: “X Series – A series of experimental visual works.”,
    thumbnail: “images/x/X Series.jpg”
  },
];

const categories = [
  {
    title: "Graphic Design",
    slug: "graphic-design",
    items: ["Cover Art", "Hearing Aids", "Adictionary", "Album Covers", "Alienwave", "H+FF", "Tea Doodles", "T-Shirts", "Wrestling Tattoos", "Prodigy"]
  },
  {
    title: "Art Direction",
    slug: "art-direction",
    items: ["Scenography"]
  },
  {
    title: "Exhibitions",
    slug: "exhibitions",
    items: ["Boredom", "Invisible Exhibitions", "Art in Drawers", "Stone Edge", "Sticks"]
  },
  {
    title: "Workshops",
    slug: "workshops",
    items: ["Common Grounds", "Shine & Sparkle", "Homework Workshop"]
  },
  {
    title: "Prototyping",
    slug: "prototyping",
    items: ["Feeling Puzzled", "Penhold Paddle", "PLAqua", "Playgrounds", "Tools for Play", "Concrete Tiles", "GeoTeratoma", "Terrarium", "Koncepteriet"]
  },
  {
    title: "Photography",
    slug: "photography",
    items: ["NUNU", "Self Exposures", "Fabric on Film", "Hockey", "Music Studio", "Weddings", "X Series"]
  },
  {
    title: "Research",
    slug: "research",
    items: ["Pomana", "Foraging"]
  },
  {
    title: "Story Telling",
    slug: "story-telling",
    items: ["Azur Foundation", "Dracu'", "Overthinker", "Fat Frumos"]
  }
];

const projectMap = projects.reduce((acc, proj) => {
  acc[proj.name] = proj;
  return acc;
}, {});

const groupsContainer = document.getElementById('project-groups');
let projectNumber = 1;
const renderedProjects = [];
const categoryStartBySlug = {};
const projectColors = [
  '#FF4FC3',
  '#00AEEF',
  '#FF8A00',
  '#39FF14',
  '#A78BFA',
  '#FF4D4D',
  '#00FFD1',
  '#FFB000',
  '#6EA8FF',
  '#FF6FAE',
  '#B6FF00',
  '#FF7A59',
  '#C77DFF',
  '#00E5FF',
  '#FF3B30',
  '#7CFF6B',
  '#4D7CFF',
  '#F15BB5'
];

categories.forEach((cat) => {
  const section = document.createElement('section');
  section.className = 'project-group';
  section.id = cat.slug;
  categoryStartBySlug[cat.slug] = renderedProjects.length;

  const heading = document.createElement('h3');
  heading.textContent = cat.title;
  section.appendChild(heading);

  const ul = document.createElement('ul');
  ul.className = 'project-list';

  cat.items.forEach((name) => {
    const project = projectMap[name];
    if (!project) return;
    const image = project.thumbnail || (project.name === "Dracu'" ? "images/dracu/dracu3.jpg" : "");
    const parts = project.description.split('–');
    const subtitle = parts[0]?.trim() || '';
    const rest = parts.slice(1).join('–').trim();

    renderedProjects.push({
      ...project,
      category: cat.title,
      image,
      number: String(projectNumber).padStart(2, '0'),
      color: projectColors[(projectNumber - 1) % projectColors.length],
      subtitle,
      rest
    });

    const li = document.createElement('li');
    li.innerHTML = `<a href="${project.url}" class="work-index-link" data-project-index="${renderedProjects.length - 1}" style="--project-color: ${projectColors[(projectNumber - 1) % projectColors.length]};"><span>${String(projectNumber).padStart(2, '0')}</span><img class="work-index-thumb" src="${image}" alt="${project.name} thumbnail">${project.name}</a>`;
    ul.appendChild(li);
    projectNumber += 1;
  });

  section.appendChild(ul);
  groupsContainer.appendChild(section);
});

const projectsSection = document.querySelector('.projects');
let activateProjectByCategory = () => {};

if (projectsSection && renderedProjects.length) {
  const stage = document.createElement('div');
  stage.className = 'work-stage';
  stage.setAttribute('aria-live', 'polite');

  const stageImage = document.createElement('img');
  stageImage.className = 'work-stage-image';
  stageImage.alt = '';
  stageImage.tabIndex = 0;
  stageImage.setAttribute('role', 'link');

  const stageMeta = document.createElement('div');
  stageMeta.className = 'work-stage-meta';

  stage.append(stageImage, stageMeta);

  const scrollTrack = document.createElement('div');
  scrollTrack.className = 'work-scroll-track';

  const wheel = document.createElement('div');
  wheel.className = 'work-wheel';
  wheel.setAttribute('aria-hidden', 'true');

  renderedProjects.forEach((project, index) => {
    const panel = document.createElement('article');
    panel.className = 'work-panel';
    panel.id = `work-${index + 1}`;
    panel.dataset.projectIndex = index;
    panel.innerHTML = `
      <a href="${project.url}" aria-label="Open ${project.name}">
        <span>${project.number}</span>
        <strong>${project.name}</strong>
      </a>`;
    scrollTrack.appendChild(panel);

    const wheelItem = document.createElement('span');
    wheelItem.className = 'work-wheel-item';
    wheelItem.dataset.projectIndex = index;
    wheelItem.style.setProperty('--project-color', project.color);
    wheelItem.innerHTML = `<span>${project.number}</span> ${project.name}`;
    wheel.appendChild(wheelItem);
  });

  const rail = document.createElement('div');
  rail.className = 'work-rail';
  rail.append(wheel, scrollTrack);

  const browser = document.createElement('div');
  browser.className = 'work-browser';
  browser.append(groupsContainer, stage, rail);
  projectsSection.appendChild(browser);

  const indexLinks = Array.from(document.querySelectorAll('.work-index-link'));
  const panels = Array.from(document.querySelectorAll('.work-panel'));
  const wheelItems = Array.from(document.querySelectorAll('.work-wheel-item'));
  let activeIndex = -1;

  const setActiveProject = (index) => {
    const project = renderedProjects[index];
    if (!project || activeIndex === index) return;

    activeIndex = index;
    stage.dataset.activeIndex = index;
    stage.style.setProperty('--project-color', project.color);
    stageImage.src = project.image;
    stageImage.alt = `${project.name} thumbnail`;
    stageImage.setAttribute('aria-label', `Open ${project.name}`);
    stageMeta.innerHTML = `
      <span>${project.number}</span>
      <strong>${project.name}</strong>
      <em>${project.category}</em>
      <p>${project.subtitle}${project.rest ? ` - ${project.rest.replaceAll('<br>', ' ')}` : ''}</p>
      <a href="${project.url}">Open project</a>`;

    indexLinks.forEach((link, linkIndex) => {
      const isActive = linkIndex === index;
      link.classList.toggle('is-active', isActive);
      link.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    panels.forEach((panel, panelIndex) => {
      panel.classList.toggle('is-active', panelIndex === index);
    });

    wheelItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
      item.style.setProperty('--wheel-offset', itemIndex - index);
    });
  };

  activateProjectByCategory = (slug) => {
    const index = categoryStartBySlug[slug];
    if (typeof index === 'number') {
      setActiveProject(index);
    }
  };

  setActiveProject(0);

  const panelObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveProject(Number(visible.target.dataset.projectIndex));
    }
  }, {
    rootMargin: '-35% 0px -35% 0px',
    threshold: [0.2, 0.45, 0.7]
  });

  panels.forEach((panel) => panelObserver.observe(panel));

  indexLinks.forEach((link) => {
    link.addEventListener('focus', () => {
      setActiveProject(Number(link.dataset.projectIndex));
    });
    link.addEventListener('mouseenter', () => {
      setActiveProject(Number(link.dataset.projectIndex));
    });
    link.addEventListener('click', () => {
      setActiveProject(Number(link.dataset.projectIndex));
    });
  });

  stageImage.addEventListener('click', () => {
    const project = renderedProjects[activeIndex];
    if (project?.url) {
      window.location.href = project.url;
    }
  });

  stageImage.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    const project = renderedProjects[activeIndex];
    if (project?.url) {
      window.location.href = project.url;
    }
  });

  if (!reduceMotion) {
    stageImage.addEventListener('pointermove', (event) => {
      const rect = stageImage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      stageImage.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`);
      stageImage.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`);
      stageImage.style.setProperty('--hover-x', `${(x * 8).toFixed(2)}px`);
      stageImage.style.setProperty('--hover-y', `${(y * 8).toFixed(2)}px`);
    });

    stageImage.addEventListener('pointerleave', () => {
      stageImage.style.setProperty('--tilt-x', '0deg');
      stageImage.style.setProperty('--tilt-y', '0deg');
      stageImage.style.setProperty('--hover-x', '0px');
      stageImage.style.setProperty('--hover-y', '0px');
    });
  }
}

const serviceButtons = Array.from(document.querySelectorAll('.service-button'));

serviceButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = button.getAttribute('href')?.replace('#', '');
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target || !projectsSection || !groupsContainer || !targetId) return;

    event.preventDefault();
    activateProjectByCategory(targetId);

    if (isStackedProjectsLayout()) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', `#${targetId}`);
      return;
    }

    projectsSection.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    groupsContainer.scrollTo({
      top: Math.max(target.offsetTop - 8, 0),
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    history.pushState(null, '', `#${targetId}`);
  });
});

if (!reduceMotion) {
  const hero = document.querySelector('.hero');

  const updateScrollEffects = () => {
    if (hero) {
      hero.style.setProperty('--hero-shift', `${Math.min(window.scrollY * 0.08, 44)}px`);
    }
  };

  let ticking = false;
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateScrollEffects();
      ticking = false;
    });
  };

  updateScrollEffects();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}
