import Collection from "@/modules/public/collections/collection";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  return <Collection collection={collection} />;
}
