// užduotis:

// 1. sukurti konstruktoriaus funkciją 'notebook'. 'notebook' turi 2 parametrus: totalPages, usedPages

function notebook(totalPages, usedPages) {
    this.totalPages = totalPages;
    this.usedPages = usedPages;
}

// 2. sukurti metodą use kuris panaudotus puslapius padidina nurodytu kiekiu puslapių ir naują panaudotų puslapių puslapių skaičių atspausdina konsolėje

notebook.prototype.use = function(pages) {
    this.usedPages += pages;
    console.log("Used pages: " + this.usedPages);
}

// 3. sukurti metodą leftPages kuris paskaičiuoja kiek laisvų puslapių liko ir atsakymą atspausdina konsolėje

notebook.prototype.leftPages = function() {
    let leftPages = this.totalPages - this.usedPages;
    console.log("Total free pages left: " + leftPages);
}

// 4. sukurti du notebook objektus (instances): first ir second ir juos atspausdinti

let first = new notebook(60, 12);
let second = new notebook(50, 4);

console.log(first);
console.log(second);

// 5. su abiem objektais išbandyti use ir leftPages metodus su abiem objektais.

first.use(2);
first.leftPages();

second.use(9);
second.leftPages();