function introduction(name){
    name;
    return `Hi, my name is ${name}.`
}

introduction("Aki");

function introductionWithLanguage(name,language){
    name;
    language;

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name,language ="JavaScript"){
    name;
    language;

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}