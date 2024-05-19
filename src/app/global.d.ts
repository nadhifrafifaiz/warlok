import type { Database } from "@/interface/database.type";
type Province = Database["public"]["Tables"]["provinces"]["Row"];
type ProvinceUpdate = Database["public"]["Tables"]["provinces"]["Update"];
type ProvinceInsert = Database["public"]["Tables"]["provinces"]["Insert"];
