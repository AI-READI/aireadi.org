interface HeroContent {
  title: string;
  image: string;
  goal?: string;
  imageAlt?: string;
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

interface ModuleMemberType {
  name: string;
  id: string;
  roles: string[];
  image: string;
  moduleImageParams: string;
  blurDataURL: string;
}

type ModuleMembersType = ModuleMemberType[];

type ModuleMembersPageProps = {
  TeamMembers: ModuleMembersType;
};
