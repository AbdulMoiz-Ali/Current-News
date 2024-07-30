fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c36c7e5c8bbd4218aa8ceec2580058b1")
    .then(function (res) {
        console.log(res);
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        appendToDOM(data.products);
    })
    .catch(function (err) {
        //   alert(err); // execute when API promise rejected
    });