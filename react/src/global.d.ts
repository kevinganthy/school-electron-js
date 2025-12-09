declare global {
  interface Window {
    users: {
      getUsers: () => Promise<string[]>;
      isUserExist: (username: string) => Promise<boolean>;
      addUser: (username: string) => Promise<void>;
    };
  }
}

export {};
