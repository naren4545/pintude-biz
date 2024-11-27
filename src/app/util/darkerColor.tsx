/**
 * Darkens a given hex color by a percentage.
 * @param {string} hexColor - The color in hex format (e.g., "#FF5E62").
 * @param {number} percent - Percentage to darken (e.g., 10 for 10% darker).
 * @returns {string} - The darkened color in hex format.
 */
 export default function darkenColor(hexColor: string, percent: number): string {
    // Ensure the hex color is valid
    const sanitizedHex = hexColor.replace("#", "");
  
    // Convert the hex color to RGB
    const num = parseInt(sanitizedHex, 16);
    let r = (num >> 16) - Math.round((percent / 100) * 255);
    let g = ((num >> 8) & 0x00ff) - Math.round((percent / 100) * 255);
    let b = (num & 0x0000ff) - Math.round((percent / 100) * 255);
  
    // Clamp values to ensure they stay within 0-255
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  
    // Convert back to hex and return
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
  }
  