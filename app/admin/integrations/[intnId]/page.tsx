import { AdminIndividualIntegrationComponent } from "@/Molecules/Admin/Individual-Integrations.Molecule";

export default function AdminIndiIntnHandlerPage({
  params,
}: {
  params: { intnId: string };
}) {
  return (
    <main className="flex max-w-screen overflow-x-hidden">
      <AdminIndividualIntegrationComponent integrationId={params.intnId} />
    </main>
  );
}
