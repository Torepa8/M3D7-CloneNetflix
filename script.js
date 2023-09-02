window.addEventListener('scroll', function () {
    if(this.window.scrollY>150){
        let movies=document.getElementById('movies')
        movies.classList.add('fade')
    }
    if(this.window.scrollY>300){
        let recently=document.getElementById('recently')
        recently.classList.add('fade')
    }
    if(this.window.scrollY>430){
        let mylist=document.getElementById('mylist')
        mylist.classList.add('fade')
    }
})