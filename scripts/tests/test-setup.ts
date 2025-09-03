/**
 * @license
 * Copyright 2025 Nightsky Labs
 * SPDX-License-Identifier: Apache-2.0
 */

import { vi } from 'vitest';

vi.mock('fs', () => ({
  ...vi.importActual('fs'),
  appendFileSync: vi.fn(),
}));
