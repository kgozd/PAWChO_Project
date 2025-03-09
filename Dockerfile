FROM python@sha256:f3614d98f38b0525d670f287b0474385952e28eb43016655dd003d0e28cf8652 


LABEL org.opencontainers.image.title="Flask Application" \
    org.opencontainers.image.description="Simple Flask web app" \
    org.opencontainers.image.authors="Krystian Góźdź" \
    org.opencontainers.image.source="https://github.com/kgozd/PAWChO_Project" 

RUN apt  update  && rm -rf /var/lib/apt/lists/*


COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt



WORKDIR /app

COPY app/ /app/

RUN rm -rf /root/.cache

ENV FLASK_ENV=production

EXPOSE 5000


USER nobody


CMD ["python", "app.py"]
