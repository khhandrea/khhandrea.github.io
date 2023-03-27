// data from ./'data.json'

// foreach -> create article in body.section.dl
data['projects'].forEach((project, index) => {
    const article = document.createElement('article');

    const br = document.createElement('br');
    const title = document.createElement('dt');
    const description = document.createElement('dd');
    const publishedDate = document.createElement('dd');
    const lastUpdatedDate = document.createElement('dd');
    const uris = [];
    const hr = document.createElement('hr');

    title.innerHTML = `<strong>${index + 1}. ${project.title}</strong>`;
    description.innerHTML = `<strong>description : </strong>${project.description}`;
    publishedDate.innerHTML = `<strong>published date : </strong>${project.publishedDate}`;
    lastUpdatedDate.innerHTML = `<strong>last updated date : </strong>${project.lastUpdatedDate}`;
    project.uris.forEach(item => {
        const link = document.createElement('dd');
        link.innerHTML = `<strong><a href=${item.uri}>${item.name}</a></strong>`;
        uris.push(link);
    });

    article.appendChild(br);
    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(publishedDate);
    article.appendChild(lastUpdatedDate);
    uris.forEach(uri => {
        article.appendChild(uri);
    });
    article.appendChild(br);
    article.appendChild(hr);

    document.getElementById('articles').appendChild(article);
});

// create how about
const article = document.createElement('article');
const br = document.createElement('br');
const dl = document.createElement('dl');
const dt = document.createElement('dt');
const hr = document.createElement('hr'); 

article.appendChild(br);
article.appendChild(dl);
dt.innerHTML = '<strong>How about</strong>'
dl.appendChild(dt);

data['howAbout'].forEach(item => {
    const dd = document.createElement('dd');
    dd.innerText = item;

    dl.appendChild(dd);
});

article.appendChild(br);
article.appendChild(hr);
document.getElementById('articles').appendChild(article)