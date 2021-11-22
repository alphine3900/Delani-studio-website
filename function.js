$(document).ready(function() {

    $("#designImage").click(function() {
        $("#design").show(2000)
        $("#designImage").hide(2000)
        $("#design").addClass("alignDesign")
        $("span").addClass("boldDesign")
    })
     $("#developmentImage").click(function() {
        $("#development").show(2000)
        $("#developmentImage").hide(2000)
        $("#development").addClass("alignDesign")
        $("span").addClass("boldDesign")
    }) 
    $("#productImage").click(function() {
        $("#product").show(2000)
        $("#productImage").hide(2000)
        $("#product").addClass("alignDesign")
        $("span").addClass("boldDesign")
    })






    $("#send").on("keypress", function(e) {
        if (e.which == 13) {

            e.preventDefault()
            var name = $("#fname").val();
            var email = $("#mail").val();
            var message = $("#txt").val();
            if (!name || !email || !message) {

                alert("Fill in all the values")

            } else {
                alert(`${name} we have received your message. Thank you fro reaching out to us.`)

                $("#send").submit();
                name = $("#fname").val("");
                email = $("#mail").val("");
                message = $("#txt").val("");


            }

        }



    })
})