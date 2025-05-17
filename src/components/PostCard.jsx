import { HandThumbUpIcon, ChatBubbleLeftIcon, EyeIcon } from "@heroicons/react/24/solid"; 

export default function PostCard({ post }) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow hover:border-blue-300">
      <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">{post.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
      <div className="mt-3 text-sm text-gray-500">
        <span>{post.author}</span> • <span>{post.date}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer transition-all">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-start space-x-4 text-gray-600">
        <div className="flex items-center space-x-1">
          <HandThumbUpIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm">{post.votes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <ChatBubbleLeftIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm">{post.comments}</span>
        </div>
        <div className="flex items-center space-x-1">
          <EyeIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm">{post.views}</span>
        </div>
      </div>
    </div>
  );
}
