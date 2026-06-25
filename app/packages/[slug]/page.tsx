import { notFound } from "next/navigation";
import { packages, getPackageBySlug, getSimilarPackages } from "@/data/packages";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PackageClientBody from "@/components/package/PackageClientBody";

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} — Rad Travels Nepal`,
    description: pkg.tagline,
  };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const similar = getSimilarPackages(pkg.similarPackages);

  return (
    <>
      <Nav variant="package" />
      <PackageClientBody pkg={pkg} similar={similar} />
      <Footer />
    </>
  );
}
