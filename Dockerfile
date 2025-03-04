FROM python:3.9-slim

WORKDIR /app

COPY app/app.py .

RUN pip install flask

EXPOSE 5000

ENV FLASK_ENV=production

CMD ["python", "app.py"]
