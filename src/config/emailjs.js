const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const isEmailjsConfigured = () => {
  const { serviceId, templateId, publicKey } = emailjsConfig;
  const placeholders = [
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    'YOUR_PUBLIC_KEY',
    'your_service_id',
    'your_template_id',
    'your_public_key',
    '',
    undefined
  ];
  return (
    Boolean(serviceId) &&
    Boolean(templateId) &&
    Boolean(publicKey) &&
    !placeholders.includes(serviceId) &&
    !placeholders.includes(templateId) &&
    !placeholders.includes(publicKey)
  );
};

export default emailjsConfig;
