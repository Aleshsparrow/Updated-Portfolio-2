console.log("loading")
var submitBtn = $("#submitBtn")
$(submitBtn).on("click", function(event){
    console.log("click");
    event.preventDefault();

    var sendMessage = {
        email: $("#email").val().trim(),
        name: $("#name").val().trim(),
        message: $("#message").val().trim()
    };
    // console.log(sendMessage)
    // $.ajax({
    //     url: "/submit",
    //     method: "POST",
    //     data: sendMessage
    // }).then(function (data) {
    //     console.log(data)
    // })

})