var c=20;
function outer(){
    var a=5;
    function inner(){
        var b=10;
        console.log(b)
    }
    inner()
    console.log(a)
}
outer();
// o/p-10
// 5