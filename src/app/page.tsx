import ImageUpload from "@/component/image-upload";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = createClient();

  const provinces = await supabase.from("provinces").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {provinces.data?.map((province) => {
        return <div key={province.code}>{province.name}</div>;
      })}

      <ImageUpload />
    </main>
  );
}
