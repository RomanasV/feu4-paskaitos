const posts = [
  {
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  },
  {
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
  }
];


// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.
function task71(data) {
  console.log(data.slice(0, 1)[0]);
  // console.log(data[0]);
}

// task71(posts);

// 7.2. Gauti paskutinio masyvo nario reikšmę.
function task72(data) {
  // console.log(data[data.length - 1]);
  console.log(data.slice(-1)[0]);
}

// task72(posts);

// 7.3. Gauti 15 masyvo nario reikšmę.
function task73(data) {
  console.log(data.slice(14, 15)[0]);
}

// task73(posts);

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
function task74(data) {
  console.log(data.slice(-13, -12)[0]);
}

// task74(posts);

// 7.5. Gauti vidurinio masyvo nario reikšmę.
function task75(data) {
  let middleIndex = Math.floor(data.length / 2);
  console.log(data[middleIndex]);
}

// task75(posts);

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
function task76(data) {
  console.log(data.slice(0, 4));
}

// task76(posts);

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
// function task77(data) {
//   console.log(data.slice(-5));
// }

// task77(posts);

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
function task78(data) {
  console.log(data.slice(4, 15));
}

// task78(posts);

// 7.9. Gauti kas antro masyvo nario reikšmes.
function task79(data) {
  // forEach
  // data.forEach((item, index) => {
  //   if (index % 2 === 0) {
  //     console.log(item);
  //   }
  // })

  // for 1
  // for (let i = 0; i < data.length; i++) {
  //   if (i % 2 === 0) {
  //     console.log(data[i]);
  //   }
  // }

  // for 2
  // for (let i = 0; i < data.length; i+=2) {
  //   console.log(data[i]);
  // }

  // filter
  // let newArr = data.filter((item, index) => {
  //   if (index % 2 === 0) {
  //     return item;
  //   }
  // })

  // console.log(newArr);

  // Kuriant naują masyvą
  let newArr = [];
  
  // data.map((item, index) => {
  //   if (index % 2 === 0) {
  //     newArr.push(item);
  //   }
  // })

  // data.forEach((item, index) => {
  //   if (index % 2 === 0) {
  //     newArr.push(item);
  //   }
  // })

  for (let i = 0; i < data.length; i+=2) {
    newArr.push(data[i]);
  }

  console.log(newArr);
}

// task79(posts);

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function task710(data) {
  // let firstItem = data[0];
  let firstItem = data.slice(0, 1)[0];

  // let lastItem = data[data.length - 1];
  let lasttItem = data.slice(-1)[0];

  console.log(firstItem, lasttItem);
}

// task710(posts);

// 7.11. Gauti pirmo masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
function task711(data) {
  // let firstItem = data.slice(0, 1)[0];
  let firstItem = data[0];

  console.log(firstItem.title);
}

// task711(posts);

// 7.12. Gauti antro masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
function task712(data) {
  // let item = data.slice(1, 2)[0];
  let item = data[1];

  console.log(item.body);
}

// task712(posts);

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
function task713(data) {
  // let item = data.slice(2, 3)[0];
  let item = data[2];

  let output = `Post title is: '${item.title}' and the content is: '${item.body}'`;

  console.log(output);
}

// task713(posts);

// 7.14. Išvesti visus masyvo narius į konsolę.
function task714(data) {
  data.forEach(item => console.log(item));
}

// task714(posts);

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function task715(data) {
  data.forEach(item => console.log(item.title));
}

// task715(posts);

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function task716(data) {
  data.forEach(item => console.log(item.body));
}

// task716(posts);

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task717(data) {
  data.forEach(item => console.log(`Title: "${item.title}". Content: "${item.body}"`));
}

// task717(posts);

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task718(data) {
  let newData = data.slice(0, 4);
  // newData.forEach(item => console.log(`Title: "${item.title}". Content: "${item.body}"`));
  task717(newData);
}

// task718(posts);

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task719(data) {
  let newData = data.slice(-7);
  // newData.forEach(item => console.log(`Title: "${item.title}". Content: "${item.body}"`));
  task717(newData);
}

// task719(posts);

// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą. 
function task720(data) {
  let ulElement = document.querySelector('#task-720');
  
  data.forEach(item => {
    let liElement = `<li>${item.title}</li>`;
    ulElement.innerHTML += liElement;  
  });
}

task720(posts);