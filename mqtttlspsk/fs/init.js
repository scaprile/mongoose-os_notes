// Load Mongoose OS API
load('api_sys.js');
load('api_config.js');
load('api_mqtt.js');
load('api_log.js');

/*
 * get event values, lookup mongoose.h:
 *
 * #define MG_MQTT_CMD_CONNACK 2
 * #define MG_MQTT_EVENT_BASE 200
 *
 * #define MG_EV_CLOSE 5
 *
 * #define MG_EV_MQTT_CONNACK (MG_MQTT_EVENT_BASE + MG_MQTT_CMD_CONNACK)
 *
*/
let MG_EV_MQTT_CONNACK = 202;
let MG_EV_CLOSE = 5;

let device_id = Cfg.get('device.id');

// MQTT publish
let publish = function (topic, msg) {
    let ok = MQTT.pub(topic, msg, 1, false);	// QoS = 1, do not retain
    Log.print(Log.INFO, 'Published:' + (ok ? 'OK' : 'FAIL') + ' topic:' + topic + ' msg:' +  msg);
    return ok;
};


// MQTT startup
MQTT.setEventHandler(function(conn, ev, edata) {
    if (ev === MG_EV_MQTT_CONNACK) {
        Log.print(Log.INFO, 'MQTT connected');
	publish('/this/test/'+device_id,'CONNECTED!');
    }
    else if (ev === MG_EV_CLOSE) {
        Log.print(Log.ERROR, 'MQTT disconnected');
    }
}, null);

Log.print(Log.WARN, "### init script started ###");

