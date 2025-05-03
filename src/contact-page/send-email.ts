import { send } from "@emailjs/browser";
import { EmailTemplateParams } from "./email-template-params";
import { SERVICE_ID } from "./service-id";
import { TEMPLATE_ID } from "./template-id";
import { USER_NAME } from "./user-name";
import { DOMAIN } from "./domain";

function sendFallbackEmail({ message, name, phone }: EmailTemplateParams) {
  const mailToLink = encodeURI(
    `mailto:${USER_NAME}@${DOMAIN}?subject=Message from ${name}&body=${message}\n---\n${name}\n${phone}`,
  );
  const link = document.createElement("a");
  link.href = mailToLink;
  link.click();
}

export async function sendEmail(params: EmailTemplateParams): Promise<void> {
  try {
    const result = await send(
      SERVICE_ID,
      TEMPLATE_ID,
      params as unknown as Record<string, unknown>,
    );
    if (result.status !== 200) {
      sendFallbackEmail(params);
    }
  } catch {
    sendFallbackEmail(params);
  }
}
