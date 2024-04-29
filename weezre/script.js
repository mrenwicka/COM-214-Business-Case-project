    // function submitComment() {
    //     var username = document.getElementById("username").value;
    //     var commentText = document.getElementById("comment-text").value;
        
    //     if (username.trim() === "") {
    //         alert("Please enter a username.");
    //         return;
    //     }
        
    //     if (commentText.trim() === "") {
    //         alert("Please enter a comment.");
    //         return;
    //     }

    //     var commentDiv = document.createElement("div");
    //     commentDiv.classList.add("comment");
    //     commentDiv.innerHTML = "<strong>" + username + ":</strong> " + commentText;
    //     document.getElementById("comment-section").appendChild(commentDiv);
        
    //     document.getElementById("username").value = ""; // Clear username field after submission
    //     document.getElementById("comment-text").value = ""; // Clear comment textarea after submission
    // }
    function submitComment() {
        var username = document.getElementById("username").value;
        var commentText = document.getElementById("comment-text").value;
        
        if (username.trim() === "") {
            alert("Please enter a username.");
            return;
        }
        
        if (commentText.trim() === "") {
            alert("Please enter a comment.");
            return;
        }
    
        var currentTime = new Date(); // Get the current time
        var timestamp = currentTime.toLocaleString(); // Convert the time to a readable format
    
        var commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = "<strong>" + username + ":</strong> " + commentText + "<span class='timestamp'>" + timestamp + "</span>";
        document.getElementById("comment-section").appendChild(commentDiv);
        
        document.getElementById("username").value = ""; // Clear username field after submission
        document.getElementById("comment-text").value = ""; // Clear comment textarea after submission
    }
    