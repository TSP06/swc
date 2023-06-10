const API_KEY = 'api_key=b70113244751c4363af849bb716f5a56';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = 
'https://api.themoviedb.org/3/search/movie?'+API_KEY+'&query="';


const form=document.getElementById('form');
const search=document.getElementById('search');
const main =document.getElementById('main');

getMovies(API_URL)
async function getMovies(url){
  const res = await fetch(url)
  const data= await res.json()
  displayMovies(data.results)
    
  console.log(data.results);
}


    function displayMovies(movies){
        main.innerHTML=''
        movies.forEach((movie)=>{
            const {title,poster_path,vote_average,overview}=movie;
            const moviesElement = document.createElement('div')
            moviesElement.classList.add('movie')
            moviesElement.innerHTML=`
          
          <div class="movie">
          <img class="image" src= "${IMG_URL+poster_path}" alt="${title}" />
            <h3 class="title">${title}</h3>
            
          <div class="overview">
          <p class="overtext"> 
          ${overview}
          </p>
          </div>`

          
          main.appendChild(moviesElement)
          
         
        })
    }
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let searchValue = search.value
    if(searchValue && searchValue !==''){
        getMovies(searchURL+searchValue)
        
 document.getElementById("side").innerHTML=
 `<p class="ts">

    ${searchValue}
 </p>`;

       
    }else{
       window.location.reload();
    }



  
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const main2= document.querySelector('main');
const header = document.querySelector('header')
const sidebar = document.getElementById('sidebar');
const button = document.getElementById('home')
const id = document.getElementById('mv')
const para = document.getElementById('para')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        
       
        body.style.transition = '1s';
        main.style.background = ' #FAFAFA';
        main.style.color = 'white';
        main.style.transition = '1s';
        header.style.background = 'white';
     
        header.style.transition = '1s';
        sidebar.style.background = ' #FAFAFA';
     
        sidebar.style.transition = '1s';
        button.style.background = 'black';
        button.style.color = 'white';
        button.style.transition = '1s';
        mv.style.color = 'black';
        para.style.color='';
        
    }else{
        body.style.background = 'grey';
        body.style.color = 'white';
        body.style.transition = '1s';
        main.style.background = 'grey';
        main.style.color = 'white';
        main.style.transition = '1s';
        header.style.background = 'black';
        header.style.color = 'white';
        header.style.transition = '1s';
        sidebar.style.background = 'black';
        sidebar.style.color = 'white';
        sidebar.style.transition = '1s';
        button.style.background = 'grey';
        button.style.color = 'black';
        button.style.transition = '1s';
        mv.style.color = 'white';
        para.style.color='#1F2A33;';
        
    }
});



