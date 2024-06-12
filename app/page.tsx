import { Title, Text, Group, Button } from '@mantine/core';
import Link from 'next/link';
import classes from './style.module.css';

export default function HomePage() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Catalyst
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        A powerful project management tool designed to elevate your workflow. Organize tasks,
        streamline processes, and optimize collaboration for seamless project execution.
      </Text>
      <Group justify="center" mt="xl">
        <Link href="/auth/signin">
          <Button variant="outline" size="md" mt="xl">
            Sign In
          </Button>
        </Link>
        <Link href="/auth/signup">
          <Button size="md" mt="xl">
            Sign Up
          </Button>
        </Link>
      </Group>
    </>
  );
}
