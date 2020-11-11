const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgContainer = document.querySelector('#gallery')
images.forEach(({url, alt}) => {
  const list = document.createElement('li');
  const imgLink = document.createElement('img')
  imgLink.setAttribute('src', url);
  imgLink.setAttribute('alt', alt)
  imgContainer.append(list);
  list.append(imgLink)
  imgLink.classList.add('list-image-element')
  list.classList.add('list-image')

})