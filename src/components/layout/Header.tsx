import { RoleBasedHeader } from "./RoleBasedHeader";

export const Header = () => {
  // This should be replaced with actual auth state management
  const mockUser = {
    role: null as null, // Change this to test different roles
    name: "",
    avatar: "",
  };

  return <RoleBasedHeader userRole={mockUser.role} userName={mockUser.name} userAvatar={mockUser.avatar} />;
};