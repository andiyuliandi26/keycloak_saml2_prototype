FROM python:3.10-slim-bullseye

RUN apt-get update
RUN apt-get install xmlsec1 -y

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt 

COPY . .
#–-no-cache-dir 

EXPOSE 8000

#CMD exec gunicorn tutorial.wsgi:application –bind 0.0.0.0:8000 –workers 3
#ENTRYPOINT [ "python" ]

#CMD ["manage.py", "runserver"]

CMD python manage.py runserver