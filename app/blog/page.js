import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export const revalidate = 60; // ISR every 60 seconds

export default async function HomePage() {
  const snapshot = await getDocs(collection(db, "blogs"));
  const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map(blog => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img src={blog.featureImage} alt={blog.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.metaDescription}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
