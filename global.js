let myFunction = (name,occupation) => `My name is <span class='name'>${name}</span> and I am a <span class='age'>${occupation}</span>`


document.getElementById("test").innerHTML = myFunction("Bruce", "web developer")