# cs226-big-data-management-project

install docker from [here](https://www.docker.com/get-started/)
Add data into spark/src or modify file paths 

build: cd into `spark` directory and run `docker compose build`
create and start container: run `docker compose up`
stop session: ctrl + c; `docker compose down`

can open jupyter labs using link along lines of `http://127.0.0.1:8888/lab?token=`

if using visual studio code for jupyter notebooks, can specify token by going into spark/docker-compose.yml and under pyspark_project add in the lines

```
environment:
    - JUPYTER_TOKEN=token
```

When adding jupyter server, type in the token value as the password 


