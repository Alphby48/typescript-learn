export var MathUtils;
(function (MathUtils) {
    MathUtils.saya = "Eko";
    function sayhello(nama) {
        console.log(`halo ${nama} saya ${MathUtils.saya}`);
    }
    MathUtils.sayhello = sayhello;
})(MathUtils || (MathUtils = {}));
