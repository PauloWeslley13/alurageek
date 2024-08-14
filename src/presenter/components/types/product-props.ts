import { z } from "zod";
import { schemaProduct } from "@/validation";

export type FormProductProps = z.infer<typeof schemaProduct>;
