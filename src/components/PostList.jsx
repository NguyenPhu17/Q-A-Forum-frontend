import PostCard from "./PostCard";

export default function PostList({ posts }) {
  if (posts.length === 0)
    return <p className="text-center text-gray-500">Không tìm thấy bài viết nào.</p>;

  return (
    <div className="space-y-6 mt-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
