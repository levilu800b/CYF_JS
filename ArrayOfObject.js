

const cat1 = {
    name: 'Jamie',
    age: 12,
}

const cat2 = {
    name: 'Brave',
    age: 8,
}

const cat3 = {
    name: 'Sylvester',
    age: 2,
}

const arrayOfCats = [cat1, cat2, cat3];

function underFourYearsOld(cat) {
    return cat.age < 4;
}

const catsUnderFourYearsOld = arrayOfCats.filter(underFourYearsOld);

console.log("Initial Cats: ", arrayOfCats);
console.log('Cats under four years old: ', catsUnderFourYearsOld);
