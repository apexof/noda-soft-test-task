import React, { FC, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Button } from "./Button";
import { UserInfo } from "./UserInfo";
import { useThrottledFn } from "../hooks/useThrottle";
import { getRandomNumber } from "../utils";

const App: FC = () => {
  const [id, setId] = useState<number>();
  const { users, loading, error } = useUsers(id);
  const setRandomId = () => setId(getRandomNumber());
  const { isThrottled, throttledFn } = useThrottledFn(setRandomId, 2500);

  const renderUserInfo = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!id) return null;
    if (!users[id]) return <div>User not found</div>;

    const user = users[id];
    return <UserInfo name={user.name} phone={user.phone} />;
  };

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={throttledFn} />
      {isThrottled && <span>&nbsp;&nbsp;isThrottled</span>}
      {renderUserInfo()}
    </div>
  );
};

export default App;
