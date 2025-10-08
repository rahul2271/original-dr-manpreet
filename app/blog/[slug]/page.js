import { db } from "../../../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const snapshot = await getDocs(
    query(collection(db, "blogs"), where("slug", "==", params.slug))
  );

  if (snapshot.empty) return {};

  const blog = snapshot.docs[0].data();

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    keywords: blog.keywords?.join(","),
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: blog.featureImage ? [{ url: blog.featureImage }] : [],
    },
  };
}

export default async function BlogPage({ params }) {
  const snapshot = await getDocs(
    query(collection(db, "blogs"), where("slug", "==", params.slug))
  );

  if (snapshot.empty) return notFound();

  const blog = snapshot.docs[0].data();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.featureImage} alt={blog.title} className="w-full h-96 object-cover mb-6 rounded" />
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </main>
  );
}
