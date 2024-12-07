#!/bin/bash

echo "🚀 Starting development environment setup..."

# Function to handle SIGINT
cleanup() {
  echo "Caught SIGINT signal! Shutting down Docker containers..."
  docker-compose down -v
  exit 0
}

# Trap SIGINT signal
trap cleanup SIGINT

# Start Docker containers in detached mode
echo "📦 Starting Docker containers..."
docker-compose up --build -d

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
until docker exec acme-postgres pg_isready -U user -d main -q; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done
