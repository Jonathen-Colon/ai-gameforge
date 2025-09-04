import { api } from "@/convex/_generated/api";
import "@/global.css";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function App() {
  const tasks = useQuery(api.tasks.get);
  return (
    <View className="flex-1 items-center justify-center bg-black">
      {tasks?.map(({ _id, text }) => <Text className="text-xl font-bold text-white" key={_id}>{text}</Text>)}
    </View>
  );
}
