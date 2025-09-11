import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default async function Post({ params }) {
  const { slug } = params
  let post = null
  try {
    const ref = doc(db, 'blogs', slug)
    const snap = await getDoc(ref)
    if (snap.exists()) post = { id: snap.id, ...snap.data() }
  } catch (err) {
    console.error('Firestore error', err)
  }

  if (!post) {
    return <div className="container py-16">Post not found.</div>
  }

  return (
    <div className="container py-16">
      <article className="glass p-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-muted mt-2">By {post.author || 'Doctor'} • {new Date(post.date).toDateString()}</p>
        <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
