interface EmailTemplateProps {
  fullname: string;
  company: string;
  email: string;
  phone: string;
  ideaDescription: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  company,
  email,
  phone,
  ideaDescription,
}) => {
  const service = 'Marketing Digital'
  return (
    <div>
      <h1>Nuevo cliente de {service}!!</h1>
      <hr />
      <ul>
        <li>
          <strong>Cliente:</strong> {fullname}
        </li>
        <li>
          <strong>Empresa:</strong> {company}
        </li>
        <li>
          <strong>Correo:</strong> {email}
        </li>
        <li>
          <strong>Número celular:</strong> {phone}
        </li>
        <li>
          <strong>Idea de proyecto:</strong> {ideaDescription}
        </li>
      </ul>
    </div>
  );
};
