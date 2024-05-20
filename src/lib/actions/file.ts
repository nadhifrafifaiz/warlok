import { createClient } from "@/utils/supabase/client";

export async function uploadFile({ file }: { file: File }) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.storage
      .from("thumbnails")
      .upload(`${file.name}`, file);

    const { data: publicUrl } = supabase.storage
      .from("thumbnails")
      .getPublicUrl(data?.path!);

    console.log("publicUrl", publicUrl);
  } catch (error) {
    console.log(error);
  }
}
