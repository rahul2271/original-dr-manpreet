"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" });
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog");
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <Link
        href="/admin/blogs/new"
        className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
      >
        Add New Blog
      </Link>

      {loading ? (
        <p className="mt-6">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="mt-6">No blogs found.</p>
      ) : (
        <table className="w-full mt-6 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Title</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="border p-2">{blog.title}</td>
                <td className="border p-2 flex gap-2">
                  <Link
                    href={`/admin/blogs/${blog.id}/edit`}
                    className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
