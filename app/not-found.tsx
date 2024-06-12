import { Image, Container, Title, Text, Button, SimpleGrid, Anchor } from '@mantine/core';
import image from '../public/images/not-found.svg';
import classes from './style.module.css';

export default function NotFound() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image.src} className={classes.mobileImage} />
        <div>
          <Title className={classes.nfTitle}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Anchor href="/">
            <Button variant="outline" size="md" mt="xl" className={classes.control}>
              Back to home page
            </Button>
          </Anchor>
        </div>
        <Image src={image.src} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}
