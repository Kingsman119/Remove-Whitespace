document.getElementById("btn").onclick = function() {
    const value = document.getElementById("value").value;
    const tri = value.split(" ").join('');

    document.getElementById('result').innerHTML = "Result : " + tri ;
}