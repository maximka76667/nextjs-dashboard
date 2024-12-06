"use client";

import { CustomerField } from "@/app/lib/definitions";
import { createInvoice } from "@/app/lib/actions";
import Form from "./form";

export default function CreateForm({
  customers,
}: {
  customers: CustomerField[];
}) {
  return <Form customers={customers} invoiceAction={createInvoice} />;
}
