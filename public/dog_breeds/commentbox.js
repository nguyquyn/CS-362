// CS 361-400 Individual Project
// Quynh Nguyen
// Javascript for Comment Box Function

var post= document.getElementById("post");
// When users click 'Post', display comment
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    // Display all comments in a list
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
