// užduotis:

// 1. perkurti 1 užduoties kodą šį kartą naudojant ES6 klases

class notebookTwo {
    constructor(totalPages, usedPages) {
        this.totalPages = totalPages;
        this.usedPages = usedPages;
    }

    use(pages) {
        this.usedPages += pages;
        console.log("Used pages: " + this.usedPages);
    }

    leftPages() {
        let leftPages = this.totalPages - this.usedPages;
        console.log("Total free pages left: " + leftPages);
    }

    getInfo() {
        console.log("This notebook has a total pages of" + this.totalPages + " Used pages: " + this.usedPages);
    }
    
    set add(newPages) {
        this.totalPages += newPages;
        console.log("Total pages: " + this.totalPages);
    }
}

// 2. pridėti getter metodą getInfo kuris konsolėje atspausdina tokį sakinį: this notebook has total pages of \totalPages\. Used pages: \usedPages\ (pasvirieji brūkšniai žymi kur rašomos kintamojo rekšmės)



// 3. pridėti setter metodą add kuris leidžia į notebook prie esamų pridėti naujus tuščius puslapius (puslapių skaičius perduodamas parametru), bei atspausdina totalPages;


// papildoma:
// jei pavyko greitai įgyvendinti pirmąją dalį, papildoma užduotis:
// perkurti 1 užduoties (konstruktoriaus funkcijos) kodą su create.object
