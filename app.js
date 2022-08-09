// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.
    // when a div is clicked on, it should fetch all posts associated with the user id.

const container = document.querySelector('#container')


getUsers()

function getUsers() {
   let button = document.querySelector('#btn');

   button.addEventListener('click', getFunc)
}
    function getFunc(){
    $('#btn').hide()
    $.get("https://jsonplaceholder.typicode.com/users", getUserData)

   }
    function getUserData(data){
for (let i = 0; i < data.length; i++){
    let userData = data[i];
    makeDivs(userData);
    }
}
    function makeDivs(userData){
    var userName = userData.username;
    var city = userData.address.city;
    var name = userData.name;
    var id = userData.id;

    var mainContainer = document.createElement('div');
    mainContainer.className = 'user-container'
    mainContainer.id = id;

    mainContainer.append(`Name: ${name}`);

    container.append(mainContainer);

    mainContainer.addEventListener('click', getuserPosts)

   }



   function getuserPosts(e) {
 
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.id}`, accessPost)

   }


   function accessPost(posts){
        for(let j = 0; j < posts.length; j++){
            var titles = posts[j].title;
            userPosts(titles)

        }
        returnButton()
        $('.btn').hide();
   }



   function userPosts(titles){
    $('.user-container').hide();
    var postContainer = document.createElement('div');
    postContainer.className = 'post-container'
    $('.post-container').show();
    postContainer.append(titles);

    container.append(postContainer);
   }



   function returnButton() {
// .hide()

   var returnButton = document.createElement('button');
   returnButton.className = 'returnBtn';

   returnButton.textContent = "Return"

    returnButton.addEventListener('click', function(){

        $('.btn').show();
        $('.returnBtn').hide();
        $('.user-container').show();
        $('#container').show();
        $('.post-container').empty();

        })
    container.append(returnButton);
   }
