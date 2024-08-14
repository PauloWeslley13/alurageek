import { z } from "zod";
import { schemaCategory } from "@/validation";

export type FormCategoryProps = z.infer<typeof schemaCategory>;
