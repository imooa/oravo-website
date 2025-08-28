import { Select, Form, FormField, FormSubmitButton, TextArea, TextField } from '@umami/react-zen';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const items = ['Less than 20', '20-49', '50-499', '500+'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = async (data: any) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setSent(true);
  };

  if (sent) {
    return (
      <div className={styles.successMessage}>
        <h2>Thank you! We will get in touch shortly.</h2>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <FormField label="Full name" name="name" rules={{ required: 'Required' }} className={styles.formField}>
        <TextField placeholder="John Smith" className={styles.input} />
      </FormField>
      <FormField label="Work email" name="email" rules={{ required: 'Required' }} className={styles.formField}>
        <TextField placeholder="john@company.com" className={styles.input} />
      </FormField>
      <FormField label="Title" name="title" className={styles.formField}>
        <TextField placeholder="Software Engineer" className={styles.input} />
      </FormField>
      <FormField label="Company" name="company" className={styles.formField}>
        <TextField placeholder="Company, Inc." className={styles.input} />
      </FormField>
      <FormField label="Company size" name="size" className={styles.formField}>
        <Select placeholder="Select a value" items={items} className={styles.input} />
      </FormField>
      <FormField
        label="Tell us about your use case"
        name="comment"
        rules={{ required: 'Required' }}
        className={styles.formField}
      >
        <TextArea className={styles.textarea} />
      </FormField>
      <FormSubmitButton variant="primary" className={styles.submitButton}>
        Submit
      </FormSubmitButton>
    </Form>
  );
}
