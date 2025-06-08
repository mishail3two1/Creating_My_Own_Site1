const navLinks = [{
    name: 'Главная',
    link: './index.html'
},
{
    name: 'Интересные места',
    link: './interesting_places.html'
},
{
    name: 'Рецепт',
    link: './recipe.html'
},
{
    name: 'Резюме',
    link: './resume.html'
}];

const contactLinks = [{
    name: 'Telegram',
    link: 'https://t.me/Kniggochka'
},
{
    name: 'GitHub',
    link: 'https://github.com/mishail3two1'
},
{
    name: 'Vk',
    link: 'https://vk.com/mihalchevonesesh'
}];

function getLink(name, href) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = name;
    a.setAttribute('href', href);
    li.append(a);
    return li;
}

function renderLinks(links, selector) {
    let container = document.querySelector(selector);
    links.forEach(link => {
        const element = getLink(link.name, link.link);
        container.append(element);
    });
}

renderLinks(navLinks, 'ul.navigation');
renderLinks(contactLinks, 'ol.navigation');