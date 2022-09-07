export function byteSize(str: string) {
  return new Blob([str]).size;
}