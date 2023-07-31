import { memo } from "react";

interface IUserInfoProps {
  name: string;
  phone: string;
}

export const UserInfo = memo(function (props: IUserInfoProps) {
  const { name, phone } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{phone}</td>
        </tr>
      </tbody>
    </table>
  );
});
