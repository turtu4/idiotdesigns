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
    name: "Common Grounds",
    url: "projects/common-grounds.html",
    description: "Siblings, Individuals, and Friends – Co-designing around sibling<br>relationships and creative collaboration.",
    thumbnail: "images/ground/g0.jpg"
  },
  {
    name: "Samhållighet",
    url: "projects/andrea.html",
    description: "Biodegradable Bandages – Material design exploring sustainable,<br>biodegradable alternatives for wound care.",
    thumbnail: "images/andrea/andrea1.jpg"
  },
  {
    name: "Recordings",
    url: "projects/axel.html",
    description: "Breaking Point – Messy self-portraits made without overthinking,<br>marking a return to free, unfiltered expression.",
    thumbnail: ""
  },
  {
    name: "Farväl",
    url: "projects/daniel.html",
    description: "A photographic reflection on losing a mother,<br>grief, and the words left unsaid.",
    thumbnail: "images/daniel/daniel1.jpg"
  },
  {
    name: "Journey",
    url: "projects/greta.html",
    description: "Mental Voyage, Leva & Under Stenen – Studio recordings blending live takes,<br>collaboration, and poem-to-song commissions.",
    thumbnail: "images/greta/greta1.jpg"
  },
];

const categories = [
  {
    title: "Turtu",
    slug: "turtu",
    items: ["Common Grounds"]
  },
  {
    title: "Andrea",
    slug: "andrea",
    items: ["Samhållighet"]
  },
  {
    title: "Axel",
    slug: "axel",
    items: ["Recordings"]
  },
  {
    title: "Daniel",
    slug: "daniel",
    items: ["Farväl"]
  },
  {
    title: "Greta",
    slug: "greta",
    items: ["Journey"]
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
    const image = project.thumbnail || "";
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
    const thumbHtml = image ? `<img class="work-index-thumb" src="${image}" alt="${project.name} thumbnail">` : '';
    li.innerHTML = `<a href="${project.url}" class="work-index-link" data-project-index="${renderedProjects.length - 1}" style="--project-color: ${projectColors[(projectNumber - 1) % projectColors.length]};"><span>${String(projectNumber).padStart(2, '0')}</span>${thumbHtml}${project.name}</a>`;
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
    stageImage.style.display = project.image ? '' : 'none';
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
