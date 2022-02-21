FROM node:17 as uilayer

WORKDIR /app

COPY ./portal-ui/package.json ./
COPY ./portal-ui/yarn.lock ./
RUN yarn install

COPY ./portal-ui .

RUN make build-static

USER node

FROM golang:1.17 as golayer

RUN apt-get update -y && apt-get install -y ca-certificates

ADD go.mod /go/src/github.com/mikelhpdatke/console/go.mod
ADD go.sum /go/src/github.com/mikelhpdatke/console/go.sum
WORKDIR /go/src/github.com/mikelhpdatke/console/

# Get dependencies - will also be cached if we won't change mod/sum
RUN go mod download

ADD . /go/src/github.com/mikelhpdatke/console/
WORKDIR /go/src/github.com/mikelhpdatke/console/

ENV CGO_ENABLED=0

COPY --from=uilayer /app/build /go/src/github.com/mikelhpdatke/console/portal-ui/build
RUN go build -ldflags "-w -s" -a -o console ./cmd/console

FROM registry.access.redhat.com/ubi8/ubi-minimal:8.5
MAINTAINER MinIO Development "dev@min.io"
EXPOSE 9090


COPY --from=golayer /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=golayer /go/src/github.com/mikelhpdatke/console/console .

ENTRYPOINT ["/console", "server"]
