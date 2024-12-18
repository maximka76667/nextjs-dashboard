"use client";

import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import { editInvoice } from "@/app/lib/actions";
import Form from "./form";

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  return (
    <Form customers={customers} invoiceAction={editInvoice} invoice={invoice} />
  );
}
