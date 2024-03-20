import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
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
    </>
  );
}
