# CogQuiz Frontend

Next.js React frontend for the CogQuiz neuropsychological testing platform.

## Architecture

This frontend is designed to work with the CogQuiz microservice architecture via an API Gateway:

```
Frontend (Browser)
    │
    ▼
API Gateway (Kong)
    │
    ├─► User Service ──────► Auth, Profiles
    ├─► N-Back Service ────► Working Memory Test
    ├─► Stroop Service ───► Cognitive Control Test
    ├─► Trails Service ───► Processing Speed Test
    ├─► Card Sort Service ► Executive Function Test
    ├─► Syllogisms Service ► Deductive Reasoning Test
    ├─► Hanoi Service ────► Planning Test
    ├─► London Service ───► Planning Test
    └─► Contact/Admin/etc.
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** REST via Gateway Client

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

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | API Gateway URL | `https://api.cogquiz.com` |
| `NEXT_PUBLIC_APP_URL` | App base URL | `http://localhost:3000` |

## Project Structure

```
src/
├── services/              # API services
│   ├── gateway/           # Gateway client & routes
│   │   ├── client.ts      # Fetch client with auth
│   │   ├── routes.ts      # API route definitions
│   │   └── types.ts        # Response types
│   └── tests/             # Test-specific services
│       ├── nback/
│       ├── stroop/
│       ├── trails/
│       └── ...
├── hooks/                 # React hooks
│   └── useApi.ts          # API call hook
├── components/            # React components
└── app/                   # Next.js App Router
    ├── layout.tsx
    ├── page.tsx
    ├── sitemap.ts
    └── robots.ts
```

## API Integration

All API calls go through the gateway client:

```typescript
import { gatewayClient, ROUTES } from '@/services/gateway';

// GET request
const response = await gatewayClient.get('/api/tests');

// POST request with auth
const response = await gatewayClient.post(ROUTES.NBACK.START, { nLevel: 2 });

// Response structure
if (response.success) {
  console.log(response.data);
  console.log(response.metadata.requestId);
} else {
  console.error(response.error.message);
}
```

## Test Services

Each test has a dedicated service:

```typescript
import { nbackTestService } from '@/services/tests/nback';

// Start test session
const { data } = await nbackTestService.start(2);

// Submit results
const result = await nbackTestService.submit({
  sessionId: '...',
  results: [...],
});

// Get historical results
const results = await nbackTestService.getResults();
```

## Docker

```bash
# Build image
docker build -t cogquiz-frontend .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://api.cogquiz.com \
  cogquiz-frontend
```

## Services Status

| Service | Routes | Status |
|---------|--------|--------|
| N-Back | `/api/nback/*` | Ready |
| Stroop | `/api/stroop/*` | Ready |
| Trails | `/api/trails/*` | Ready |
| Card Sort | `/api/card-sort/*` | Ready |
| Syllogisms | `/api/syllogisms/*` | Ready |
| Hanoi | `/api/hanoi/*` | Ready |
| London | `/api/london/*` | Ready |

## License

MIT
