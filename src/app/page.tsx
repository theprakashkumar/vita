import PostList from "@/components/posts/PostList";
import CreateTopic from "@/components/topics/CreateTopic";
import TopicList from "@/components/topics/TopicList";
import { fetchTopPost } from "@/db/queries/post";
import { Divider } from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={() => fetchTopPost()} />
      </div>
      <div className="border shadow py-3 px-2">
        <CreateTopic />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
