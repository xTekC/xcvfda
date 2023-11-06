#!/bin/just

_default:
  clear && just --list --unsorted

# format, lint and serve
wfs:
  cargo watch -s "just fl && just s"

# Serve web app
s:
    @clear
    @printf "\nhttp://127.0.0.1:8080/#dev\n\n"
    @dx serve --hot-reload

# Watch web app
w:
    @clear
    @cargo watch -c -x "fmt --all && cargo clippy --locked --all-targets"

# Build .css file
bc:
    sass --no-source-map style.scss:public/style.css

# Build debug profile
b:
    @clear
    @cargo build

# Run debug profile
r:
    @clear
    @cargo run

# Format and Lint
fl:
    @clear
    @cargo fmt --all
    @cargo clippy --locked --all-targets

# Test all
t:
    @clear
    @cargo test

# Update locked Dependencies
u:
    @clear
    @cargo update

# Clean build artifacts, Cargo.lock and dist/
c:
    @clear
    @rm -rf target/
    @rm Cargo.lock
    @rm -rf dist/

# Create a new release
rel version:
    bash scripts/release.sh {{ version }}