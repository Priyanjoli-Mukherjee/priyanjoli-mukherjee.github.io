import { EmailJSResponseStatus, send } from "@emailjs/browser";
import { EmailTemplateParams } from "./email-template-params";
import { SERVICE_ID } from "./service-id";
import { TEMPLATE_ID } from "./template-id";

export function sendEmail(
  params: EmailTemplateParams,
): Promise<EmailJSResponseStatus> {
  return send(
    SERVICE_ID,
    TEMPLATE_ID,
    params as unknown as Record<string, unknown>,
  );
}
