FROM rust:1.77-slim as builder

WORKDIR /usr/src/what_the_time

COPY . .

RUN cargo install --path .

FROM debian:bookworm-slim

COPY --from=builder /usr/local/cargo/bin/what_the_time /usr/local/bin/what_the_time

EXPOSE 8080

CMD ["what_the_time"]
