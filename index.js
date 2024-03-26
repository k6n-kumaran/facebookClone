//active nav bar
let listItem = document.querySelectorAll(".cnList");

listItem.forEach(list => {
   list.addEventListener("click", ()=> {
    listItem.forEach(list => {
        list.classList.remove('active');
      });
        list.classList.add("active") 
        
   })
});

//adding like toggle
let likeList = document.querySelectorAll(".like-list")
let likeIcon = document.querySelectorAll(".like-icon");
let likeText = document.querySelectorAll(".like-text")


/*likeList.addEventListener("click" , () => {
  likeIcon.style.color = "blue"
  likeText.style.color = "blue"
}) */

/*likeList.forEach((list) => {
    list.addEventListener("click" , () => {
      likeIcon.forEach(list => {
          list.setAttribute("name" , "thumbs-up-outline")
      });
      list.setAttribute("name", "thumbs-up")
    })
}) */

/*likeList.addEventListener("click" , () => {
  likeIcon.setAttribute("name" ,"thumbs-up")
})

/*likeList.forEach((list)=>{
    list.addEventListener("click" , () => {
      likeIcon.forEach((icon)=> {
       icon.style.color = "blue"
      })
      likeText.forEach((text)=> {
        text.style.color = "blue"
      })
      list.style.color = "red"
      list.style.color= "red"
    })
}) */
let userId = document.getElementById("user");
let menuBar = document.querySelector(".profile-menu");

userId.addEventListener("click", () => {
  menuBar.classList.toggle("toggleMenu");
})

