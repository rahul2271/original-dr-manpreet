import { db } from "../../../lib/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc, query, where } from "firebase/firestore";

export async function GET(req) {
  // Fetch all blogs
  try {
    const snapshot = await getDocs(collection(db, "blogs"));
    const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  // Create new blog
  try {
    const data = await req.json();
    const docRef = await addDoc(collection(db, "blogs"), data);
    return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const data = await req.json();
    const { id, ...updateData } = data;
    const docRef = doc(db, "blogs", id);
    await updateDoc(docRef, updateData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
