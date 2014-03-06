var assert = chai.assert;

suite('Pruebas de Tokens', function() {
    test('Comprobando comentarios', function() {
        $("#INPUT").val = "var a = 2;"
        main();
        assert.deepEqual($("#OUTPUT").html(),  )
    });
    
});