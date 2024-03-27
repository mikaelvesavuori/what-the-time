FROM python:3.12-slim

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

ENV PORT=8080

CMD ["python", "app.py"]
