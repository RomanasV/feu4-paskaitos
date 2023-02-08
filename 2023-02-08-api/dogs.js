function randomImageOnInit() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      const imageUrl = data.message;
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;

      document.body.append(imageElement);
    })
}

randomImageOnInit();