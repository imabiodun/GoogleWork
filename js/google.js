var google_icon=document.getElementById("search_googles")
var search_item=document.getElementById("search")
search_item_value=search_item.value
function disappear(){
    if (search_item.length>0){
        return google_icon.style.visibility="hidden"
    }
}