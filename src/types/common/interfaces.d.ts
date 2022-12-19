interface HeroContent {
  title: string;
  image: string;
  tagline?: string;
  showButtons?: boolean;
  primaryButton?: string;
  secondaryButton?: string;
}

interface TextContent {
  title: string;
  text: string;
  showButtons?: boolean;
  primaryButton?: string;
}
interface TextWithImagesContent {
  title: string;
  text: string[];
  image1: string;
  image2: string;
}
