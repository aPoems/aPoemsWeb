$("#formSubmitLogin").on("submit", data => {
    let email = data.target[0].value

    if (email == "") {
        return false
    }
    let password = data.target[1].value
    if (password == "") {
        return false
    }

    let dataAlert = $("#alert");
    dataAlert[0].innerHTML = "";
    dataAlert.addClass("success");
    dataAlert.append("<p class='m-0'>Data process</p>");
    dataAlert.append("<div class='charger'></div>");

    if (true) {
        let dataUser = {
            Correo: email,
            Contraseña: password
        }
        console.log(dataUser)
        login(dataUser)
    }
})

function login(data) {
    let dataAlert = $("#alert");
    $.ajax({
        method: "POST",        
        url: "http://localhost:65004/api/IniciarSesion",
        data: data,
        success: function (response) {
            console.log(response)

            setTimeout(function () {
                dataAlert[0].innerHTML = "";
                dataAlert.removeClass("Error")
                dataAlert.addClass("Success")
                dataAlert.append("<p class='m-0>Data correct</p>")
                window.location.href = "post.html";
            }, 2000)


        },
    })
        .fail(function (response) {
            setTimeout(function () {
                dataAlert[0].innerHTML = "";
                dataAlert.removeClass("success")
                dataAlert.addClass("Error")
                dataAlert.append("<p class='m-0'>Data incorrect</p>")
            }, 2000)
        })

}