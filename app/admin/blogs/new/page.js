"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { storage } from "../../../../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ✅ Use react-quill-new instead of react-quill
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const router = useRouter();

  const handleImageUpload = async (file) => {
    const storageRef = ref(storage, `blogs/${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Auto-generate slug if blank
    let finalSlug =
      slug.trim() ||
      title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    let featureImageURL = "";
    if (featureImage) featureImageURL = await handleImageUpload(featureImage);

    await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug: finalSlug,
        content,
        featureImage: featureImageURL,
        metaTitle: metaTitle || title,
        metaDescription: metaDesc,
        keywords: keywords.split(",").map((k) => k.trim()),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    });

    router.push("/admin");
  };

  // Rich text editor toolbar
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Blog Title */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-3 rounded"
        />

        {/* Slug */}
        <input
          type="text"
          placeholder="Slug (auto-generated if left blank)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="border p-3 rounded"
        />

        {/* Meta Title */}
        <input
          type="text"
          placeholder="Meta Title (SEO)"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          className="border p-3 rounded"
        />

        {/* Meta Description */}
        <textarea
          placeholder="Meta Description (SEO)"
          value={metaDesc}
          onChange={(e) => setMetaDesc(e.target.value)}
          rows="3"
          className="border p-3 rounded"
        />

        {/* Keywords */}
        <input
          type="text"
          placeholder="Keywords (comma separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="border p-3 rounded"
        />

        {/* Feature Image */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFeatureImage(e.target.files[0])}
          className="border p-3 rounded bg-white"
        />

        {/* Blog Content */}
        <div className="border rounded bg-white">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={quillModules}
            className="min-h-[300px]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition font-medium"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
