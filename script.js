const input= document.querySelector("textarea");
const wordCount=document.querySelector("[data-words-count]");
const charCount=document.querySelector("[data-characters-count]");
const sentenceCount=document.querySelector("[data-sentences-count]");
const paraCount=document.querySelector("[data-paragraphs-count]");

input.addEventListener("input",function() {
    if(input.value){
        const wordsArr=input.value.split(" ").filter((word)=>word !== "");
        wordCount.textContent=wordsArr.length;
        charCount.innerText=input.value.length;
        const sentenceArr=input.value.split(/[.!]/);
        sentenceCount.innerText=sentenceArr.length-1;
        const paraArr = input.value.split("\n").filter((p)=>p.trim()!=="");
        paraCount.innerText=paraArr.length;
    }
    else{
        wordCount.innerText=charCount.innerText=sentenceCount.innerText=paraCount.innerText=0;
    }
})