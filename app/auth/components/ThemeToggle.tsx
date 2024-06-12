'use client';

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      variant="light"
      aria-label="Settings"
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    >
      <IconSun
        className={cx(classes.icon, classes.light)}
        style={{ width: '70%', height: '70%' }}
        stroke={1.5}
      />
      <IconMoon
        className={cx(classes.icon, classes.dark)}
        style={{ width: '70%', height: '70%' }}
        stroke={1.5}
      />
    </ActionIcon>
  );
}
