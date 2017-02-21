/**
 * Created by Administrator on 2017/2/15.
 */
var name="World!";

(function() {

    if(typeof name==="undefined") {

        var name="Jack";

        console.log("Goodbye"+name);

    } else {

        console.log("Hello"+name);

    }

    function a(a)
    {
        a^=(1<<4)-1;
        return a;
    }
    console.log(a(10));

})();

