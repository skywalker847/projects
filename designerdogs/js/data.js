// Object Contructor

function Dog(breed, combo) {
    this.breedName = breed;
    this.comboName = combo;
    this.clicks = 0;
    this.urlLink = function() {return "img/" + this.breedName + ".png"};  // returns for example "img/cockapoo.png"
}

// info for dog array
var dog1 = new Dog("Cockapoo", "Cocker Spaniel + Poodle");
var dog2 = new Dog("Goldendoodle", "Golden Retriever + Poodle",);
var dog3 = new Dog("Pomsky", "Pomeranian + Husky",);
var dog4 = new Dog("Pugle", "Pug + Beagle",);
var dog5 = new Dog("Schnoodle", "Schnauzer + Poodle",);
//dog array dogs[0-4]
var dogs = [dog1, dog2, dog3, dog4, dog5];