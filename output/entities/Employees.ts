import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departments } from "./Departments";

@Index("pk_employee_id", ["employeeId"], { unique: true })
@Entity("employees", { schema: "public" })
export class Employees {
  @PrimaryGeneratedColumn({ type: "integer", name: "employee_id" })
  employeeId: number;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 20,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 25,
  })
  lastName: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 25 })
  email: string | null;

  @Column("character varying", {
    name: "phone_number",
    nullable: true,
    length: 20,
  })
  phoneNumber: string | null;

  @Column("timestamp without time zone", { name: "hire_date", nullable: true })
  hireDate: Date | null;

  @Column("numeric", { name: "salary", nullable: true, precision: 8, scale: 2 })
  salary: string | null;

  @Column("numeric", {
    name: "commission_pct",
    nullable: true,
    precision: 2,
    scale: 2,
  })
  commissionPct: string | null;

  @Column("character varying", { name: "job_id", nullable: true, length: 10 })
  jobId: string | null;

  @Column("integer", { name: "manager_id", nullable: true })
  managerId: number | null;

  @OneToMany(() => Departments, (departments) => departments.employees)
  departments: Departments[];

  @ManyToOne(() => Departments, (departments) => departments.employees2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "department_id", referencedColumnName: "departmentId" },
    { name: "department_id", referencedColumnName: "departmentId" },
  ])
  departments2: Departments;
}
