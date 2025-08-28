'use client';
import { Button } from '@umami/react-zen';
import styles from './GetStartedBanner.module.css';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function GetStartedBanner() {
  const query = useQueryString({ ref: 'oravo-get-started-banner' });

  return (
    <div className={styles.banner}>
      <div className={styles.text}>Are you ready for better analytics?</div>
      <div className={styles.buttons}>
        <Button variant="primary" size="lg" className={styles.blackButton} asChild>
          <a href={`${CLOUD_URL}/signup${query}`} data-umami-event="get-started-banner-button">
            Get started - Completely free
          </a>
        </Button>
      </div>
    </div>
  );
}
