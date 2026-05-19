const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const siteHeader = document.querySelector('header');

const syncIntroHeader = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('intro-active', window.scrollY < 8);
};

syncIntroHeader();
window.addEventListener('scroll', syncIntroHeader, { passive: true });

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
    name: "Playgrounds",
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
    name: "Self Exposures",
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
    name: "Scenography",
    url: "projects/gui.html",
    description: "Conflicting Set Design – Set design for “The Guide,” charting a detective’s<br>split psyche with minimalist, shifting spaces.",
    thumbnail: "images/gui/gui0.png"
  },
  {
    name: "Hearing Aids",
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
    name: "Penhold Paddle",
    url: "projects/ping.html",
    description: "Custom Swedish oak penhold paddle shaped for grip,<br>speed, and control.",
    thumbnail: "images/ping/ping0.png"
  },
  {
    name: "Pomana",
    url: "projects/pom.html",
    description: "DIY Ceremony – Pomana de Viu ritual performed while alive,<br>blending self-purification and community support.",
    thumbnail: "images/pom/pom0.png"
  },
  {
    name: "Feeling Puzzled",
    url: "projects/puzzle.html",
    description: "Rice-and-egg-carton puzzle pieces as a tactile<br>metaphor for connection.",
    thumbnail: "images/puzzle/puzzle0.png"
  },
  {
    name: "Shine & Sparkle",
    url: "projects/shine.html",
    description: "Light Studies with Children – Co-designed light play under a bridge,<br>turning a dark spot into kid-led installations.",
    thumbnail: "images/shine/shine0.png"
  },
  {
    name: "Tools for Play",
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
    name: "Cover Art",
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
    title: "Graphic Design",
    slug: "graphic-design",
    items: ["Cover Art", "Hearing Aids"]
  },
  {
    title: "Art Direction",
    slug: "art-direction",
    items: ["Scenography"]
  },
  {
    title: "Exhibitions",
    slug: "exhibitions",
    items: ["Boredom", "Invisible Exhibitions"]
  },
  {
    title: "Workshops",
    slug: "workshops",
    items: ["Common Grounds", "Shine & Sparkle"]
  },
  {
    title: "Prototyping",
    slug: "prototyping",
    items: ["Feeling Puzzled", "Penhold Paddle", "PLAqua", "Playgrounds", "Tools for Play"]
  },
  {
    title: "Photography",
    slug: "photography",
    items: ["NUNU", "Self Exposures"]
  },
  {
    title: "Research",
    slug: "research",
    items: ["Pomana"]
  },
  {
    title: "Story Telling",
    slug: "story-telling",
    items: ["Azur Foundation", "Dracu'", "Overthinker"]
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
    li.innerHTML = `<a href="${project.url}" class="work-index-link" data-project-index="${renderedProjects.length - 1}" style="--project-color: ${projectColors[(projectNumber - 1) % projectColors.length]};"><span>${String(projectNumber).padStart(2, '0')}</span>${project.name}</a>`;
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
    projectsSection.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    groupsContainer.scrollTo({
      top: Math.max(target.offsetTop - 8, 0),
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    activateProjectByCategory(targetId);
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
