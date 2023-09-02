const movies=document.getElementById('movies')
const recently=document.getElementById('recently')
const mylist=document.getElementById('mylist')
const treding=document.getElementById('treding-now')
const watch=document.getElementById('watch-again')
const newreleases=document.getElementById('new-releases')

window.addEventListener('scroll', function () {
    if(this.window.scrollY>130){        
        movies.classList.add('fade')
    }
    if(this.window.scrollY>270){
        recently.classList.add('fade')
    }
    if(this.window.scrollY>400){
        mylist.classList.add('fade')
    }
})

window.onload=function(){
    if(document.documentElement.clientHeight>630){
        treding.classList.add('fade')
        watch.classList.add('fade')
        newreleases.classList.add('fade')
        movies.classList.add('fade')
        recently.classList.add('fade')
        mylist.classList.add('fade')
    }
    else{
        treding.classList.add('fade')
        watch.classList.add('fade')
        newreleases.classList.add('fade')
        movies.style.setProperty("--index-delay", "0.5s");
        recently.style.setProperty("--index-delay", "0.5s");
        mylist.style.setProperty("--index-delay", "0.5s");
    }
}