import { Container, Group, Anchor, Button } from '@mantine/core';
import Link from 'next/link';
import classes from './styles.module.css';
import ThemeToggle from './components/ThemeToggle';

export default function AuthLayout({ children }: { children: any }) {
  return (
    <div>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          <Anchor href="/">Catalyst</Anchor>
          <Group gap={5} visibleFrom="xs">
            <Link href="/auth/signin">
              <Button variant="outline" size="xs">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="xs">Sign Up</Button>
            </Link>
            <ThemeToggle />
          </Group>
        </Container>
      </header>
      <Container size="xl">{children}</Container>
    </div>
  );
}
