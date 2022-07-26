const speakers = [
  {
    id: 'speaker1',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/45/23/180010_5e909ddd39d50a98c2216165a7ff4523.jpg&w=400&h=400',
    title: 'Aaron Albano',
    text: 'MINGs Music Enterprises LLC',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'speaker2',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/5d/71/179495_90565705f8014d566989bf0b05d95d71.jpg&w=400&h=400',
    title: 'Abel Czupor',
    text: 'RadioShzck',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'speaker3',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/6e/e1/179467_6a90eeb8035ffe76e468d859c8506ee1.jpg&w=400&h=400',
    title: 'Aaron Lane',
    text: 'MINGs Music Enterprises LLC',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'speaker4',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/52/e5/180296_7f553e459f800d4de35b1d841d8e52e5.jpg&w=400&h=400',
    title: 'Adam Amin',
    text: 'CEO & Founder, Affectiva',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'speaker5',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/16/09/179285_7d272ed485eb9f82b314eaf835201609.jpg&w=400&h=400',
    title: 'John Wolff',
    text: 'Run it Wild Founder Inc',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'speaker6',
    image: 'https://images.weserv.nl/?url=emamo.com/storage/avatars/aa/ba/179746_458d354d5149641fa54a0a3f0235aaba.jpg&w=400&h=400',
    title: 'Aaron Albano',
    text: 'President, Promzzy koncepts Inc',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

function Speaker() {
  const heading = document.createElement('h2');
  heading.innerText = 'Featured Speakers';
  heading.className = 'header-text2';

  const sectionTag = document.getElementById('speaker-section');
  sectionTag.appendChild(heading);
  const mainDiv = document.createElement('div');

  for (let i = 0; i < speakers.length; i += 1) {
    const cardDiv = document.createElement('div');
    const speakerImg = document.createElement('img');
    const textDiv = document.createElement('div');
    const speakerName = document.createElement('h3');
    const smallText = document.createElement('small');
    const mainText = document.createElement('p');

    if (window.innerWidth < 768) {
      if (i > 1) {
        cardDiv.classList.add('hide-show-more');
      }
    }

    mainDiv.className = 'speakers';
    cardDiv.classList.add('flex-item');

    speakerImg.src = `${speakers[i].image}`;
    speakerImg.className = 'img';

    speakerName.innerText = `${speakers[i].title}`;
    speakerName.className = 'name';

    smallText.innerText = `${speakers[i].text}`;
    smallText.className = 'small';

    mainText.innerText = `${speakers[i].description}`;
    speakerName.className = 'paragraph-text';

    textDiv.appendChild(speakerName);
    textDiv.appendChild(smallText);
    textDiv.appendChild(mainText);
    cardDiv.appendChild(speakerImg);
    cardDiv.appendChild(textDiv);
    mainDiv.appendChild(cardDiv);
    sectionTag.appendChild(mainDiv);
  }
  const showMoreBtn = document.createElement('button');
  showMoreBtn.className = 'show-more';
  showMoreBtn.innerText = 'See more';
  mainDiv.appendChild(showMoreBtn);
  showMoreBtn.addEventListener('click', () => {
    const cardDivs = document.querySelectorAll('.flex-item');
    Array.from(cardDivs).slice(2).forEach((cardDiv) => cardDiv.classList.toggle('hide-show-more'));
    showMoreBtn.innerText = showMoreBtn.innerText === 'See more' ? 'Show Less' : 'See more';
  });
}
Speaker();

// for hamburger-slide

const ham = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.nav-menu');
const x = document.querySelector('.slide-in');

x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  navbar.classList.remove('active');
}));

const reset = () => {
  if (window.innerWidth > 768) {
    navbar.style.display = 'none';
  }
};
window.addEventListener('resize', reset);