var Pusher = Pusher || {};
Pusher.TYPE = {
    DEFAULT: 100
};

var PusherAPI = function(config) {
    this.config = {
        pusher_server_host: "localhost",
        pusher_server_port: 9000
    }

    $.extend(this.config, config);
};

PusherAPI.prototype = {
    getConf: function() {
        return this.config;
    },

    send: function(push_model) {
        $.ajax({
            url: this.pusher_server_host + "/api/push",
            dataType: "json",
            complete: push_model.success,
            fail: push_model.fail
        });
    }
};