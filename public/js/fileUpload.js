let image = document.getElementById("upload");
let file = document.getElementById("uploadImage");

file.addEventListener('change', (event) => {
    
    let reader = new FileReader();

    reader.onload = () => {
        image.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});