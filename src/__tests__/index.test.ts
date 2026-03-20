import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('next-layout-components', async () => {
  const mod = await import('../../dist/index.js');

  it('exports Page as a function', () => {
    assert.ok(typeof mod.Page === 'function');
  });

  it('exports Card as a function', () => {
    assert.ok(typeof mod.Card === 'function');
  });
});
