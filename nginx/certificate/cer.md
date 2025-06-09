```bash
openssl req -x509 -nodes -days 180 -newkey rsa:2048 \
  -keyout tls.key -out tls.crt -config san.cnf
```

san.cnf
```
[ req ]
default_bits       = 2048
prompt             = no
default_md         = sha256
distinguished_name = dn
req_extensions     = req_ext
x509_extensions    = req_ext

[ dn ]
CN = localhost

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = localhost
# Optionally, add more DNS entries:
# DNS.2 = www.nextjs-web.example
```

```bash
kubectl create secret tls example-tls \
  --key tls.key --cert tls.crt \
  -n default
```