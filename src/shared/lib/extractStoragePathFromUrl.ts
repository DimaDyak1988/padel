type BUCKET = 'avatars'

export function extractStoragePathFromUrl(bucket: BUCKET, url: string): string | null {
  const prefix = `/storage/v1/object/public/${bucket}/`;
  const idx = url.indexOf(prefix);
  return idx === -1 ? null : url.slice(idx + prefix.length);
}
