# Connecting to HiveMQ Cloud Basic
HiveMQ Cloud Basic is free for developers up to 100 concurrent connections (at the time I wrote this...). Great for proof-of-concept stuff.
Read their [Get Started document](https://www.hivemq.com/docs/hivemq-cloud/introduction.html#get-started).

The CA certificate has been included, but it will surely expire really soon, so you better [get it from here](https://letsencrypt.org/certs/trustid-x3-root.pem) or check HiveMQ Cloud docs, you will need it.

The connection is TLS in server authentication mode, your devices need a valid user/password pair to be allowed access but nothing further.

See [my blog](http://www.scaprile.com/2021/05/23/connecting-to-hivemq-cloud-basic/) for further info.
Más información en [mi blog](http://www.scaprile.com/2022/02/14/conectandonos-a-hivemq-cloud-basic-con-mongoose-os/)
