import { getPortfolioData } from "@/lib/api/portfolio";
import { PortfolioProfileClient } from "@/app/(portfolio)/[username]/components/portfolio-profile-client";
import { notFound } from "next/navigation";

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  try {
    const portfolioData = await getPortfolioData(params.username);
    
    return <PortfolioProfileClient user={portfolioData.user} arts={portfolioData.arts} />;
  } catch (error) {
    console.error("Error loading profile:", error);
    notFound();
  }
} 
