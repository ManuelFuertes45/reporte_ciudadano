import ReportForm from "@/components/ReportForm";
import { useRouter } from "expo-router";

export default function ReportFormScreen() {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    // TODO: Send 'data' to the backend API endpoint for report submission.
    console.log("Report submitted:", data);
    router.back(); // or router.replace("/home") if needed
  };

  return <ReportForm onSubmit={handleSubmit} />;
}
