import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addPost, getStoredPosts, savePosts } from "../utils/storage";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");
  const navigate = useNavigate();

  useEffect(() => {
    if (!editId) {
      return;
    }

    const storedPosts = getStoredPosts();

    const postToEdit = storedPosts.find(
      (post) => String(post.id) === String(editId)
    );

    if (!postToEdit) {
      return;
    }

    setTitle(postToEdit.title || "");
    setDescription(postToEdit.description || "");
    setCategory(postToEdit.category || "");
    setTags(postToEdit.tags?.join(", ") || "");
    setImage(postToEdit.image || "");

    const plainContent =
      postToEdit.content?.map((block) => block.text || "").join("\n\n") || "";

    setContent(plainContent);
  }, [editId]);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (!category) {
      newErrors.category = "Please select a category.";
    }

    if (!tags.trim()) {
      newErrors.tags = "Add at least one tag.";
    }

    if (!content.trim()) {
      newErrors.content = "Content is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const createSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newPost = {
      id: Date.now(),
      slug: createSlug(title),
      title: title.trim(),
      description: description.trim(),
      category,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      image: image.trim(),
      author: "Merin John",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readingTime: "5 min read",
      content: [
        {
          type: "paragraph",
          text: content.trim(),
        },
      ],
      status: "published",
      featured: false,
    };

    addPost(newPost);

    setSuccessMessage("Post published successfully!");

    setTitle("");
    setDescription("");
    setCategory("");
    setTags("");
    setImage("");
    setContent("");
    setErrors({});
  };

  const handleSaveDraft = () => {
    if (!title.trim()) {
      setErrors({
        title: "Add a title before saving the draft.",
      });

      return;
    }

    const newDraft = {
      id: Date.now(),
      slug: createSlug(title),
      title: title.trim(),
      description: description.trim(),
      category,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      image: image.trim(),
      author: "Merin John",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readingTime: "5 min read",
      content: content.trim()
        ? [
            {
              type: "paragraph",
              text: content.trim(),
            },
          ]
        : [],
      status: "draft",
      featured: false,
    };

    addPost(newDraft);

    setSuccessMessage("Draft saved successfully!");

    setTitle("");
    setDescription("");
    setCategory("");
    setTags("");
    setImage("");
    setContent("");
    setErrors({});
  };

  const handleUpdate = () => {
    if (!validateForm()) {
      return;
    }

    const storedPosts = getStoredPosts();

    const updatedPosts = storedPosts.map((post) => {
      if (String(post.id) !== String(editId)) {
        return post;
      }

      return {
        ...post,
        title: title.trim(),
        description: description.trim(),
        category,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        image: image.trim(),
        content: [
          {
            type: "paragraph",
            text: content.trim(),
          },
        ],
      };
    });

    savePosts(updatedPosts);

    navigate("/my-posts");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
            {editId ? "Edit" : "Create"}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {editId ? "Edit your post" : "Write a new post"}
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Share your ideas, tutorials and experiences with the developer
            community.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          {successMessage && (
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-400">
              {successMessage}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter your post title"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-amber-400/50"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-400">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Write a short description..."
              rows="4"
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-amber-400/50"
            />
            {errors.description && (
              <p className="mt-2 text-sm text-red-400">{errors.description}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Category
            </label>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400/50"
            >
              <option value="">Select a category</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Frontend">Frontend</option>
              <option value="CSS">CSS</option>
              <option value="Career">Career</option>
              <option value="Web Development">Web Development</option>
            </select>
            {errors.category && (
              <p className="mt-2 text-sm text-red-400">{errors.category}</p>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Tags
            </label>

            <input
              type="text"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              placeholder="React, Hooks, JavaScript"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-amber-400/50"
            />
            {errors.tags && (
              <p className="mt-2 text-sm text-red-400">{errors.tags}</p>
            )}

            <p className="mt-2 text-xs text-slate-600">
              Separate multiple tags with commas.
            </p>
          </div>

          {/* Cover Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Cover Image URL
            </label>

            <input
              type="url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-amber-400/50"
            />
          </div>

          {/* Content */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Content
            </label>

            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your article content..."
              rows="14"
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-amber-400/50"
            />
            {errors.content && (
              <p className="mt-2 text-sm text-red-400">{errors.content}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
            {editId ? (
              <button
                type="button"
                onClick={handleUpdate}
                className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Update Post
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06]"
                >
                  Save Draft
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Publish Post
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default CreatePost;
