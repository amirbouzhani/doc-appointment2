const searchform= document. getElementById("search-form")
const searchinput= document. getElementById("doctor-search")
const searchResults= document. getElementById("search-results")

searchform.addEventListener("submit", function(event) {

event.preventDefault();

const searchTerm= searchinput.value.trim()

if (searchTerm==""){
    searchResults.textContent ="لطفا نام پزشک یا تخصص مورد نظر را وارد کنید"
    return;

}
searchResults.textContent="شما جست و جو کردید:"+searchTerm;
});