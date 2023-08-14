import type { User } from "@clerk/nextjs/dist/types/server";
export const filteredUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.imageUrl,
  };
};
