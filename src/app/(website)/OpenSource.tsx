import { Column, Row } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import LinkButton from '@/components/LinkButton';
import { CLOUD_URL } from '@/lib/constants';

export default function OpenSource() {
  return (
    <Column gap="6">
      <TextBlock size="lg" align="center">
        <header>Get Started</header>
        <h2>Completely Free Analytics</h2>
        <p>
          Oravo is completely free forever. No hidden costs, no trial periods, no limitations. 
          Get powerful analytics insights without paying a dime.
        </p>
      </TextBlock>
      <Row alignItems="center" justifyContent="center" gap="3">
        <LinkButton href="/features" variant="outline">
          View features
        </LinkButton>
        <LinkButton href={`${CLOUD_URL}/signup`} variant="outline" target="_blank">
          Start for free
        </LinkButton>
      </Row>
    </Column>
  );
}
