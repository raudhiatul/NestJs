import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";

@Index("product_category_pkey", ["id"], { unique: true })
@Entity("product_category", { schema: "public" })
export class ProductCategory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("character varying", {
    name: "decsription",
    nullable: true,
    length: 200,
  })
  decsription: string | null;

  @Column("timestamp with time zone", { name: "createdat", nullable: true })
  createdat: Date | null;

  @Column("timestamp with time zone", { name: "updatedat", nullable: true })
  updatedat: Date | null;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
