module("Pusher API");

test( "Object Test", function() {
    //given
    var Pusher = null;

    // when
    Pusher = new PusherAPI();

    // then
    ok(Pusher, "PASS - Pusher API OK");
});

test("initialize", function() {
    //given
    var pusher_server_host = "localhost";
    var pusher_server_port = 9090;
    var Pusher = null;

    // when
    Pusher = new PusherAPI({
        "pusher_server_host": pusher_server_host,
        "pusher_server_port": 9090
    });

    // then
    equal(Pusher.getConf().pusher_server_host, pusher_server_host, "PASS - init pusher_server_host");
    equal(Pusher.getConf().pusher_server_port, pusher_server_port, "PASS - init pusher_server_port");
});

test("Pusher TYPE", function() {
    ok(Pusher.TYPE.DEFAULT, "PASS - DEFAULT Type is OK");
});

test("send()", function() {
    //given
    var server = this.sandbox.useFakeServer();

    var pusher_server_host = "http://localhost";
    var PusherObject = new PusherAPI({
        "pusher_server_host": pusher_server_host
    });

    var successCallback = this.spy();

    // when
    PusherObject.send({
        type: Pusher.TYPE.DEFAULT,
        subject: "subject",
        description: "description",
        success: successCallback
    });

    server.respond();

    // then
    ok(successCallback.called, "PASS");
});
