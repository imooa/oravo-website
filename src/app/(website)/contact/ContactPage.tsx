'use client';
import PageHeader from '@/components/PageHeader';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from './ContactForm';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="We would love to hear from you!" />
      <div className={styles.container}>
        <div className={styles.grid}>
          <ContactForm />
          <div className={styles.sidebar}>
            <div className={styles.socialSection}>
              <h3>Connect with us</h3>
              <SocialMedia size="lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
