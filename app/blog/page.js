import Link from 'next/link'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default async function Blog() {
  // Fetch blogs from Firestore
  let blogs = []
  try {
    const q = query(collection(db, 'blogs'), orderBy('date', 'desc'))
    const snaps = await getDocs(q)
    blogs = snaps.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.error('Firestore error', err)
  }

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">Skin Insights</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.length === 0 ? (
          <div className="glass p-6">No blog posts yet. Add posts to the "blogs" collection in Firestore.</div>
        ) : blogs.map(p => (
          <article key={p.id} className="glass p-6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-muted mt-2">{p.excerpt}</p>
            <Link href={'/blog/' + p.id}><a className="text-primary mt-4 inline-block">Read more →</a></Link>
          </article>
        ))}
      </div>
    </div>
  )
}
