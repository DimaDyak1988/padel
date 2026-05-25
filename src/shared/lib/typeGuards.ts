export function isFile(value: unknown): value is File {
  return value instanceof File;
}

export function isPublicUrl(value: string, bucketName: 'avatars'): boolean {
  return value.includes(`/storage/v1/object/public/${bucketName}/`);
}


