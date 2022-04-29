# Connecting to a MQTT broker using TLS with mutual authentication

The connection is TLS in mutual authentication mode, both parties are authenticated by means of their certificates.

This demo uses a set of certificates for the server, available [here](https://github.com/scaprile/generic_notes/tree/main/tls_server-certs)

Device keys are included

See [my blog](http://www.scaprile.com/2022/04/29/mqtt-over-tls-with-the-esp32-and-mongoose-os/) for further info.

Más información en [mi blog](http://www.scaprile.com/2022/03/31/mqtt-sobre-tls-con-esp32-y-mongoose-os/).

PS: Yes, there are secret keys here, this is from a bogus device and the idea is to try the example without having to learn to admin a Certification Authority nor master openSSL's extensive command line options.
