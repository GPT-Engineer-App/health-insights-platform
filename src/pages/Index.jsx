import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaUserCircle, FaHeart, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialCarousel />
      <Footer />
    </Container>
  );
};

const Navbar = () => {
  return (
    <Flex as="nav" w="full" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center" position="fixed" top={0} left={0} right={0} zIndex={1}>
      <IconButton icon={<FaBars />} variant="outline" aria-label="Menu" />
      <Flex gap={4}>
        <Link href="#" p={2}>
          Services
        </Link>
        <Link href="#" p={2}>
          Insights
        </Link>
        <Link href="#" p={2}>
          Company Blog
        </Link>
        <Link href="#" p={2}>
          User Account
        </Link>
      </Flex>
      <IconButton icon={<FaUserCircle />} variant="outline" aria-label="User Account" />
    </Flex>
  );
};

const HeroSection = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh" bgImage="url('https://images.unsplash.com/photo-1610478865542-7d239b415687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGgtZm9jdXNlZCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzE1Mjg1NzAwfDA&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPos="center" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Empowering Your Health Journey
        </Heading>
        <Text fontSize="xl" maxW="lg" textAlign="center">
          Join us to unlock personalized health insights and proactive wellness plans tailored just for you.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Flex>
  );
};

const FeatureSection = () => {
  return (
    <Box py={10}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Our Features
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <FeatureCard title="Predictive Health Analytics" description="Leverage advanced algorithms to forecast health trends and receive personalized advice." />
        <FeatureCard title="Real-Time Health Monitoring" description="Monitor your health metrics in real time with our integrated smart devices." />
        <FeatureCard title="Bespoke Wellness Plans" description="Receive customized wellness plans that adapt to your changing health needs." />
      </SimpleGrid>
    </Box>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <VStack bg="gray.100" p={5} borderRadius="md" boxShadow="md">
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

const TestimonialCarousel = () => {
  return (
    <Box bg="gray.200" p={10}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        What Our Users Say
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Testimonial text="Since joining, I've seen a significant improvement in my overall health and well-being." author="Jane Doe" avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTUyODU3MDF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <Testimonial text="The real-time monitoring and personalized insights have been game-changers for my fitness routine." author="John Smith" avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1Mjg1NzAyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
      </SimpleGrid>
    </Box>
  );
};

const Testimonial = ({ text, author, avatar }) => {
  return (
    <VStack bg="white" p={5} borderRadius="md" boxShadow="md" align="start">
      <Image borderRadius="full" boxSize="50px" src={avatar} alt={author} />
      <Text fontStyle="italic">"{text}"</Text>
      <Text fontWeight="bold">{author}</Text>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Flex as="footer" py={5} bg="gray.700" color="white" mt={10} justifyContent="center">
      <VStack>
        <Text>© 2023 Health SaaS Platform</Text>
        <Flex gap={2}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
