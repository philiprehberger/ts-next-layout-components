# @philiprehberger/next-layout-components

Layout primitives for Next.js and React apps.

## Installation

```bash
npm install @philiprehberger/next-layout-components clsx
```

## Components

### `Page`

Page wrapper with responsive padding and configurable max width.

```tsx
import { Page } from '@philiprehberger/next-layout-components';

<Page maxWidth="xl">
  <h1>My Page</h1>
  <p>Content goes here</p>
</Page>
```

Max widths: `sm`, `md`, `lg`, `xl`, `2xl`, `full`

### `Card`

Card container with optional title and hover effect.

```tsx
import { Card } from '@philiprehberger/next-layout-components';

<Card title="Section Title" padding="lg" hoverable>
  <p>Card content</p>
</Card>
```

## License

MIT
