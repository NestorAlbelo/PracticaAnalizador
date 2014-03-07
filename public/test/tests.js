var assert = chai.assert;

suite('Pruebas de Tokens', function() {
    test('Var a = 2;', function() {
        document.getElementById('INPUT').innerHTML = "var a = 2;";
        main();
        assert.deepEqual($("#OUTPUT").html(), "{\n    \"value\": \"=\",\n    \"arity\": \"binary\",\n    \"first\": {\n        \"value\": \"a\",\n        \"arity\": \"name\"\n    },\n    \"second\": {\n        \"value\": 2,\n        \"arity\": \"literal\"\n    }\n}" )
    });
    test('Var a = 2+3*5;', function() {
        document.getElementById('INPUT').innerHTML = "var a = 2+3*5;";
        main();
        assert.deepEqual($("#OUTPUT").html(), "{\n    \"value\": \"=\",\n    \"arity\": \"binary\",\n    \"first\": {\n        \"value\": \"a\",\n        \"arity\": \"name\"\n    },\n    \"second\": {\n        \"value\": \"+\",\n        \"arity\": \"binary\",\n        \"first\": {\n            \"value\": 2,\n            \"arity\": \"literal\"\n        },\n        \"second\": {\n            \"value\": \"*\",\n            \"arity\": \"binary\",\n            \"first\": {\n                \"value\": 3,\n                \"arity\": \"literal\"\n            },\n            \"second\": {\n                \"value\": 5,\n                \"arity\": \"literal\"\n            }\n        }\n    }\n}" )
    });
    test('Error. Texto no escrito en JS', function() {
        document.getElementById('INPUT').innerHTML = "prueba de error";
		main();
        assert.deepEqual($("#OUTPUT").html(), "{\n    \"name\": \"TypeError\",\n    \"message\": \"Object #&lt;Object&gt; has no method \'error\'\"\n}");
    });
});