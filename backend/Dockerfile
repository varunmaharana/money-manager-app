
FROM node:lts-bullseye-slim

WORKDIR /money-manager-app

# Enable pnpm
RUN corepack enable

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install

# Copy source
COPY . .

# Build
RUN pnpm build

EXPOSE 8000

CMD ["pnpm", "start"]