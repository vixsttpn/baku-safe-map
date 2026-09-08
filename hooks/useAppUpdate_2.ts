import { useEffect, useState } from 'react';
import { AppConfig } from '../constants/AppConfig';

export function useAppUpdate() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [apkUrl, setApkUrl] = useState<string | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch(AppConfig.updateCheckUrl);
        if (!res.ok) return;
        const data = await res.json();
        const tag = data.tag_name?.replace('v','') || '';
        if (tag && tag !== AppConfig.version) {
          const isNewer = tag.localeCompare(AppConfig.version) > 0;
          if (isNewer) {
            setUpdateAvailable(true);
            setLatestVersion(tag);
            const asset = data.assets?.find((a:any) => a.name.endsWith('.apk'));
            if (asset) setApkUrl(asset.browser_download_url);
            else setApkUrl(data.html_url);
          }
        }
      } catch {}
    }
    check();
  }, []);

  return { updateAvailable, latestVersion, apkUrl };
}