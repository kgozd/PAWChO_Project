FROM python:3.9-slim AS builder

LABEL maintainer="Krystian Góźdź"

RUN apt-get update && apt-get install -y --no-install-recommends build-essential gcc && rm -rf /var/lib/apt/lists/*

RUN python -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.9-slim AS final

COPY --from=builder /opt/venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY app /app

RUN rm -rf /root/.cache

ENV FLASK_ENV=production

EXPOSE 5000

HEALTHCHECK CMD curl --fail http://localhost:5000/ || exit 1

USER nobody


CMD ["python", "app.py"]
