document
    .querySelector(".request-complement")
    .addEventListener("click", function(){
        const opt = document.querySelector(".complement-type");

        if (opt.value === "") {
            document.querySelector(".complement-content").innerText = "Please select one item."
        } else {
            fetch("/" + opt.value)
                .then(function(res){
                    return res.json();
                })
                .then(function(data){
                    const content = document.querySelector(".complement-content");
                    console.log(content);
                    if (opt.value === "verseday") {
                        content.className = "complement-content content-verse"
                    } else {
                        content.className = "complement-content content-complement"
                    }
                    content.innerHTML = data.complement;
                })
                .catch(function(err){
                    console.log(err);
                });
        }
    });