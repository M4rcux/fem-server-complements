document
    .querySelector(".request-complement")
    .addEventListener("click", function(){
        const opt = document.querySelector(".complement-type");
        
        if (opt.value === "") {
            document.querySelector(".complement").innerText = "Please select one item."
        } else {
            fetch("/" + opt.value)
                .then(function(res){
                    return res.json();
                })
                .then(function(data){
                    document.querySelector(".complement").innerText = data.complement;
                })
                .catch(function(err){
                    console.log(err);
                });
        }
    });