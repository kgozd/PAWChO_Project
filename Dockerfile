FROM python@sha256:d1fd807555208707ec95b284afd10048d0737e84b5f2d6fdcbed2922b9284b56 AS builder

LABEL org.opencontainers.image.title="Flask Application" \
      org.opencontainers.image.description="Simple Flask web app" \
      org.opencontainers.image.authors="Krystian Góźdź" \
      org.opencontainers.image.source="https://github.com/kgozd/PAWChO_Project" 

RUN apt  update  &&    rm -rf /var/lib/apt/lists/*

RUN python -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY app/ /app/

RUN rm -rf /root/.cache

ENV FLASK_ENV=production

EXPOSE 5000


USER nobody


CMD ["python", "app.py"]
