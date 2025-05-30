import { VAR, createCommand } from './Command';
import { GS } from './common';

/**
 * Turn white/black reverse print mode on/off
 * | Format   | Value    |
 * |---------|----------|
 * | ASCII   | GS b n   |
 * | Hex     | 1D 42 n  |
 * | Decimal | 29 66 n  |
 *
 * @see https://download4.epson.biz/sec_pubs/pos/reference_en/escpos/gs_cb.html
 */
export const invert = createCommand('invert', {
  format: [GS, 0x42, VAR],
  write(n: number) {
    return [GS, 0x42, n];
  },
});
