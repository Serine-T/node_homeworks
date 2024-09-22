## Download Nginx for windows

https://nginx.org/en/download.html

## Generate key
openssl genrsa -out localhost.key 2048

## Generate certificate signing request, not fogetting common name which should be localhost
openssl req -new -key localhost.key -out localhost.csr

## Generate certificate
openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt

## Nginx configuration and run
Change C:/Users/Serine/Desktop/node/node_homeworks/network in nginx.conf with your current working directory, you can use pwd command to find it.
Replace nginx.conf file from nginx to use our configuration.
Run nginx, in Windows you can use:
start nginx.exe
