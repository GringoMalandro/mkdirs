import { redirect } from "next/navigation";

/** Entry point for authorized Chat Toolkit content managers. */
export default function WorkspaceGateway() {
  redirect("/studio");
}
