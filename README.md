# CogQuiz Frontend

Next.js React frontend for the CogQuiz neuropsychological testing platform.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Docker

## Getting Started

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Docker

```bash
# Build image
docker build -t cogquiz-frontend .

# Run container
docker run -p 3000:3000 cogquiz-frontend
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| NEXT_PUBLIC_API_URL | API Gateway URL | Yes |

## License

MIT
