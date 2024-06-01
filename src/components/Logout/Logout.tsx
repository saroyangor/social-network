export const Logout = () => {
  const onLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <button type="button" onClick={onLogout}>Logout</button>
  );
};
