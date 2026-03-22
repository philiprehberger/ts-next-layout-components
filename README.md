# @philiprehberger/next-layout-components

[![CI](https://github.com/philiprehberger/ts-next-layout-components/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-next-layout-components/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/next-layout-components.svg)](https://www.npmjs.com/package/@philiprehberger/next-layout-components)
[![License](https://img.shields.io/github/license/philiprehberger/ts-next-layout-components)](LICENSE)

Layout primitives for Next.js and React apps

## Installation

```bash
npm install @philiprehberger/next-layout-components clsx
```

## Usage

```tsx
import { Page, Card } from '@philiprehberger/next-layout-components';

export default function HomePage() {
  return (
    <Page maxWidth="xl">
      <Card title="Welcome" padding="lg" hoverable>
        <p>Card content goes here</p>
      </Card>
    </Page>
  );
}
```

## API

### `Page`

Page wrapper with responsive padding and configurable max width.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | -- | Page content |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'xl'` | Max width constraint |
| `className` | `string` | -- | Additional CSS classes |

### `Card`

Card container with optional title, configurable padding, and hover effect.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | -- | Card content |
| `title` | `string` | -- | Optional card heading |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Padding size |
| `hoverable` | `boolean` | `false` | Enable hover effect |
| `className` | `string` | -- | Additional CSS classes |
| `contentWrapperClassName` | `string` | -- | CSS class for the content wrapper |

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
