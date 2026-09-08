export function isVersionNewer(latest: string, current: string): boolean {
  const l = latest.split('.').map(Number);
  const c = current.split('.').map(Number);
  for (let i=0;i<Math.max(l.length,c.length);i++) {
    if ((l[i]||0) > (c[i]||0)) return true;
    if ((l[i]||0) < (c[i]||0)) return false;
  }
  return false;
}